import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Button, Container, Grid, Typography, Box } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import styles from "./NotificationHistoryPage.module.css";

export default function NotificationHistoryPage() {
	return (
		<>
			<Helmet>
				<title>Notification History — UtilitySoft Labs</title>
				<meta
					name="description"
					content="Track notification activity, keep a private timeline of incoming alerts, and review message history on your device with Notification History by UtilitySoft Labs."
				/>
			</Helmet>

			<Box
				sx={{
					background: "linear-gradient(120deg, #c8e6c9 0%, #67bc6b 100%)",
					py: { xs: 8, md: 10 },
					textAlign: "center",
				}}
			>
				<Container
					maxWidth="md"
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<RestoreIcon
							sx={{
								fontSize: 80,
								color: "#2e7d32",
								mb: 2,
							}}
						/>
						<Typography
							variant="h3"
							component="h1"
							sx={{
								fontWeight: 700,
								mb: 1,
								fontFamily: "Poppins, sans-serif",
							}}
						>
							Notification History
						</Typography>

						<Typography
							variant="h6"
							sx={{
								color: "#2e2e2e",
								maxWidth: 600,
								mx: "auto",
								mb: 4,
								fontFamily: "Poppins, sans-serif",
								lineHeight: 1.6,
								fontWeight: 500,
								fontSize: "1.25rem",
							}}
						>
							Notification History helps you keep an organized timeline of
							notifications, message previews, and media alerts so you can review
							recent activity any time - all locally and securely.
						</Typography>

						<Box
							sx={{
								display: "flex",
								gap: 2,
								justifyContent: "center",
								flexWrap: "wrap",
							}}
						>
							<Button
								variant="contained"
								color="success"
								href="https://play.google.com/store/apps/details?id=com.golemapps.messagerecovery"
								target="_blank"
							>
								Download on Google Play
							</Button>
							<Button
								variant="outlined"
								color="success"
								href="https://play.google.com/store/apps/dev?id=8818860993188601793"
								target="_blank"
							>
								See all apps from UtilitySoft Labs
							</Button>
						</Box>

						<Typography
							variant="body2"
							sx={{
								mt: 2,
								color: "#555",
								fontSize: 13,
								"& a": {
									color: "#2e7d32",
									textDecoration: "none",
									transition: "color 0.2s ease",
								},
								"& a:hover": {
									textDecoration: "underline",
									color: "#1b5e20",
								},
							}}
						>
							<a
								href="/notification-history/terms"
								target="_blank"
								rel="noopener noreferrer"
							>
								Terms
							</a>{" "}
							&nbsp;|&nbsp;{" "}
							<a
								href="/notification-history/privacy-policy"
								target="_blank"
								rel="noopener noreferrer"
							>
								Privacy
							</a>
						</Typography>
					</motion.div>
				</Container>
			</Box>

			<Container maxWidth="md" className={styles.section}>
				<Typography variant="h4" className={styles.sectionTitle}>
					Overview
				</Typography>
				<Typography className={styles.sectionText}>
					Notification History gives you a clear timeline of incoming
					notifications and message previews by monitoring your device notification
					history in real time.
					<br />
					<br />
					Your history stays private - saved only on your device. No cloud upload,
					no external servers, just complete control over your data.
				</Typography>
			</Container>

			<Container maxWidth="lg" className={styles.section}>
				<Typography variant="h4" className={styles.sectionTitle}>
					Key Features
				</Typography>

				<Grid container spacing={3} className={styles.featuresGrid}>
					{[
						{
							title: "Notification Timeline",
							desc: "View incoming notifications in a structured, easy-to-scan timeline.",
						},
						{
							title: "Message Preview History",
							desc: "Keep recent notification text and preview content available for quick review.",
						},
						{
							title: "Smart Notifications",
							desc: "Track new notification events in real time through your local history.",
						},
						{
							title: "Full Privacy Control",
							desc: "No internet required - your recovered data stays on your device only.",
						},
						{
							title: "Clean, Intuitive Design",
							desc: "Simple interface with organized notification history and quick navigation.",
						},
						{
							title: "Lightweight & Secure",
							desc: "Optimized for smooth performance and minimal battery use.",
						},
					].map((f, i) => (
						<Grid item xs={12} sm={6} md={4} key={i}>
							<motion.div
								className={styles.featureCard}
								whileHover={{ scale: 1.03 }}
								transition={{ type: "spring", stiffness: 300 }}
							>
								<Typography variant="h6" className={styles.featureTitle}>
									{f.title}
								</Typography>
								<Typography className={styles.featureDesc}>{f.desc}</Typography>
							</motion.div>
						</Grid>
					))}
				</Grid>
			</Container>

			<Container maxWidth="md" className={styles.section}>
				<Typography variant="h4" className={styles.sectionTitle}>
					Why It Matters
				</Typography>
				<Typography className={styles.sectionText}>
					Important alerts can be missed when you are busy. Notification History
					makes it easy to check what came in, in one place, without scrolling
					through multiple apps.
					<br />
					<br />
					With its privacy-first approach and local storage, you stay in control
					of your data at all times.
				</Typography>
			</Container>

			<Container maxWidth="md" className={styles.section}>
				<Typography variant="h4" className={styles.sectionTitle}>
					FAQ
				</Typography>
				<ul className={styles.faqList}>
					<li>
						<strong>
							What does Notification History save?
						</strong>
						<p>
							It stores your incoming notification timeline and preview content on
							your device so you can review recent activity later.
						</p>
					</li>
					<li>
						<strong>Does Notification History access chats directly?</strong>
						<p>
							No. It works with notification history and does not access private
							chats directly.
						</p>
					</li>
					<li>
						<strong>Is my data stored online?</strong>
						<p>
							No - everything is saved locally on your device. Nothing is uploaded
							to the cloud.
						</p>
					</li>
				</ul>
			</Container>

			<Container
				maxWidth="sm"
				sx={{
					textAlign: "center",
					mt: 6,
					mb: 4,
				}}
			>
				<Button
					variant="outlined"
					color="success"
					href="https://play.google.com/store/apps/dev?id=8818860993188601793"
					target="_blank"
				>
					See all apps from UtilitySoft Labs
				</Button>
			</Container>

			<Container maxWidth="md" className={styles.footerLinks}>
				<Typography variant="body2" align="center">
					<a
						href="/notification-history/terms"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.legalLink}
					>
						Terms of Use
					</a>
					{" • "}
					<a
						href="/notification-history/privacy-policy"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.legalLink}
					>
						Privacy Policy
					</a>
				</Typography>
				<Typography variant="body2" align="center">
					© {new Date().getFullYear()} UtilitySoft Labs - All rights reserved.
				</Typography>
			</Container>
		</>
	);
}
