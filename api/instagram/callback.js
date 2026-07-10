const INSTAGRAM_TOKEN_URL = "https://api.instagram.com/oauth/access_token";
const APP_REDIRECT_URL = "gridline://instagram-auth";
const WEB_REDIRECT_URL = "https://utilitysoftlabs.com/instagram/callback";

export default async function handler(request, response) {
	const { code, error, error_description } = request.query;

	if (error) {
		redirectToApp(response, {
			error,
			error_description: error_description || "Instagram authorization failed",
		});
		return;
	}

	if (!code) {
		redirectToApp(response, {
			error: "missing_code",
			error_description: "Instagram did not return an authorization code",
		});
		return;
	}

	const clientId = process.env.INSTAGRAM_CLIENT_ID;
	const clientSecret = process.env.INSTAGRAM_CLIENT_SECRET;

	if (!clientId || !clientSecret) {
		redirectToApp(response, {
			error: "missing_server_config",
			error_description: "Instagram server credentials are not configured",
		});
		return;
	}

	try {
		const form = new URLSearchParams({
			client_id: clientId,
			client_secret: clientSecret,
			grant_type: "authorization_code",
			redirect_uri: WEB_REDIRECT_URL,
			code,
		});

		const tokenResponse = await fetch(INSTAGRAM_TOKEN_URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			body: form.toString(),
		});

		const body = await tokenResponse.json();

		if (!tokenResponse.ok || !body.access_token) {
			redirectToApp(response, {
				error: "token_exchange_failed",
				error_description: body.error_message || body.error || "Unable to exchange Instagram code",
			});
			return;
		}

		redirectToApp(response, {
			access_token: body.access_token,
			user_id: body.user_id,
		});
	} catch (exchangeError) {
		redirectToApp(response, {
			error: "token_exchange_exception",
			error_description:
				exchangeError instanceof Error
					? exchangeError.message
					: "Unable to exchange Instagram code",
		});
	}
}

function redirectToApp(response, params) {
	const fragment = new URLSearchParams(params).toString();
	response.writeHead(302, {
		Location: `${APP_REDIRECT_URL}#${fragment}`,
	});
	response.end();
}
