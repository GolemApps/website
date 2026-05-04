import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Button, Container, Grid, Typography, Box } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import styles from "./WamrPage.module.css";

export default function WamrPage() {
	return (
		<>
			<Helmet>
				<title>WAMR: Recover Deleted Messages — UtilitySoft Labs</title>
				<meta
					name="description"
					content="Recover deleted messages, photos, and videos from WhatsApp and other chat apps. Stay in control of what others delete with WAMR by UtilitySoft Labs."
				/>
			</Helmet>

			{/* HERO SECTION */}
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
							WAMR: Recover Deleted Messages
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
							Ever wondered what someone deleted before you could read it? WAMR
							lets you recover deleted text messages, photos, videos, and voice
							notes from WhatsApp and other chat apps — all locally and
							securely.
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
								href="/recover-deleted-messages/terms"
								target="_blank"
								rel="noopener noreferrer"
							>
								Terms
							</a>{" "}
							&nbsp;|&nbsp;{" "}
							<a
								href="/recover-deleted-messages/privacy-policy"
								target="_blank"
								rel="noopener noreferrer"
							>
								Privacy
							</a>
						</Typography>
					</motion.div>
				</Container>
			</Box>

			{/* OVERVIEW */}
			<Container maxWidth="md" className={styles.section}>
				<Typography variant="h4" className={styles.sectionTitle}>
					Overview
				</Typography>
				<Typography className={styles.sectionText}>
					WAMR helps you recover deleted messages and media by monitoring your
					notification history. When someone deletes a message, photo, video, or
					audio, WAMR automatically saves it for you.
					<br />
					<br />
					All recovered messages stay private — saved only on your device. No
					cloud upload, no external servers, just complete control over your
					data.
				</Typography>
			</Container>

			{/* FEATURES */}
			<Container maxWidth="lg" className={styles.section}>
				<Typography variant="h4" className={styles.sectionTitle}>
					Key Features
				</Typography>

				<Grid container spacing={3} className={styles.featuresGrid}>
					{[
						{
							title: "Recover Deleted Messages",
							desc: "Retrieve messages deleted from WhatsApp or other supported apps instantly.",
						},
						{
							title: "Media Recovery",
							desc: "Save deleted photos, videos, GIFs, and voice notes automatically.",
						},
						{
							title: "Smart Notifications",
							desc: "Detect deletions in real time through your notification history.",
						},
						{
							title: "Full Privacy Control",
							desc: "No internet required — your recovered data stays on your device only.",
						},
						{
							title: "Clean, Intuitive Design",
							desc: "Simple interface with organized message history and media viewer.",
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

			{/* WHY IT MATTERS */}
			<Container maxWidth="md" className={styles.section}>
				<Typography variant="h4" className={styles.sectionTitle}>
					Why It Matters
				</Typography>
				<Typography className={styles.sectionText}>
					People delete messages — but you still deserve to know what was said.
					WAMR protects you from losing important conversations, photos, or
					files.
					<br />
					<br />
					With its privacy-first approach and local storage, you stay in control
					of your data at all times.
				</Typography>
			</Container>

			{/* FAQ */}
			<Container maxWidth="md" className={styles.section}>
				<Typography variant="h4" className={styles.sectionTitle}>
					FAQ
				</Typography>
				<ul className={styles.faqList}>
					<li>
						<strong>Can WAMR recover deleted messages from WhatsApp?</strong>
						<p>
							Yes — as long as notifications were received before deletion, the
							app can restore them.
						</p>
					</li>
					<li>
						<strong>Does WAMR read my messages directly?</strong>
						<p>
							No. It works by monitoring notification history and never accesses
							private chats directly.
						</p>
					</li>
					<li>
						<strong>Are my recovered messages stored online?</strong>
						<p>
							No — everything is saved locally on your device. Nothing is sent
							to the cloud.
						</p>
					</li>
				</ul>
			</Container>

			{/* SEE ALL APPS */}
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

			{/* FOOTER */}
			<Container maxWidth="md" className={styles.footerLinks}>
				<Typography variant="body2" align="center">
					<a
						href="/recover-deleted-messages/terms"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.legalLink}
					>
						Terms of Use
					</a>
					{" • "}
					<a
						href="/recover-deleted-messages/privacy-policy"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.legalLink}
					>
						Privacy Policy
					</a>
				</Typography>
				<Typography variant="body2" align="center">
					© {new Date().getFullYear()} UtilitySoft Labs — All rights reserved.
				</Typography>
			</Container>
		</>
	);
}
