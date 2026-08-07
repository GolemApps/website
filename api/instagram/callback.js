const INSTAGRAM_TOKEN_URL = "https://api.instagram.com/oauth/access_token";
const INSTAGRAM_LONG_LIVED_TOKEN_URL = "https://graph.instagram.com/access_token";
const APP_REDIRECT_URL = "https://utilitysoftlabs.com/gridline/instagram-auth";
const WEB_REDIRECT_URL = "https://utilitysoftlabs.com/instagram/callback";

export default async function handler(request, response) {
	const { code, error, error_description, state } = request.query;

	if (error) {
		redirectToApp(response, {
			error,
			error_description: error_description || "Instagram authorization failed",
		}, state);
		return;
	}

	if (!code) {
		redirectToApp(response, {
			error: "missing_code",
			error_description: "Instagram did not return an authorization code",
		}, state);
		return;
	}

	const clientId = process.env.INSTAGRAM_CLIENT_ID;
	const clientSecret = process.env.INSTAGRAM_CLIENT_SECRET;

	if (!clientId || !clientSecret) {
		redirectToApp(response, {
			error: "missing_server_config",
			error_description: "Instagram server credentials are not configured",
		}, state);
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
				error_description: getInstagramErrorMessage(
					body,
					"Unable to exchange Instagram code",
				),
			}, state);
			return;
		}

		const longLivedTokenUrl = new URL(INSTAGRAM_LONG_LIVED_TOKEN_URL);
		longLivedTokenUrl.searchParams.set("grant_type", "ig_exchange_token");
		longLivedTokenUrl.searchParams.set("client_secret", clientSecret);
		longLivedTokenUrl.searchParams.set("access_token", body.access_token);
		const longLivedTokenResponse = await fetch(longLivedTokenUrl);
		const longLivedTokenBody = await longLivedTokenResponse.json();
		const expiresIn = Number(longLivedTokenBody.expires_in);

		if (
			!longLivedTokenResponse.ok ||
			!longLivedTokenBody.access_token ||
			!Number.isFinite(expiresIn) ||
			expiresIn <= 0
		) {
			redirectToApp(response, {
				error: "long_lived_token_exchange_failed",
				error_description: getInstagramErrorMessage(
					longLivedTokenBody,
					"Unable to exchange Instagram access token",
				),
			}, state);
			return;
		}

		redirectToApp(response, {
			access_token: longLivedTokenBody.access_token,
			expires_in: expiresIn,
			user_id: body.user_id,
		}, state);
	} catch (exchangeError) {
		redirectToApp(response, {
			error: "token_exchange_exception",
			error_description:
				exchangeError instanceof Error
					? exchangeError.message
					: "Unable to exchange Instagram code",
		}, state);
	}
}

function redirectToApp(response, params, state) {
	const redirectParams = {
		...params,
	};
	if (state) {
		redirectParams.state = state;
	}
	const fragment = new URLSearchParams(redirectParams).toString();
	response.writeHead(302, {
		Location: `${APP_REDIRECT_URL}#${fragment}`,
		"Cache-Control": "no-store",
		Pragma: "no-cache",
		"Referrer-Policy": "no-referrer",
	});
	response.end();
}

function getInstagramErrorMessage(body, fallbackMessage) {
	if (typeof body?.error_message === "string") {
		return body.error_message;
	}
	if (typeof body?.error?.message === "string") {
		return body.error.message;
	}
	if (typeof body?.error === "string") {
		return body.error;
	}
	return fallbackMessage;
}
