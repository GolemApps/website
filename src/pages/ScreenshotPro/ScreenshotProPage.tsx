import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Button, Container, Grid, Typography, Box } from "@mui/material";
import ScreenshotMonitorIcon from "@mui/icons-material/ScreenshotMonitor";
import styles from "./ScreenshotProPage.module.css";

export default function ScreenshotProPage() {
	return (
		<>
			<Helmet>
				<title>Screenshot & Scrolling Capture — UtilitySoft Labs</title>
				<meta
					name="description"
					content="Powerful screenshot and scrolling capture tool for Android. Capture, edit, and share with ease using Screenshot & Scrolling Capture by UtilitySoft Labs."
				/>
			</Helmet>

			{/* HERO SECTION */}
			<Box
				sx={{
					background: "linear-gradient(120deg, #ffd69a 0%, #f1b966 100%)",
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
						<ScreenshotMonitorIcon
							sx={{
								fontSize: 80,
								color: "#f57c00",
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
							Screenshot & Scrolling Capture
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
							Capture anything on your screen — full page, app view, or
							scrolling content. Instantly edit, crop, and share screenshots
							with Screenshot & Scrolling Capture by UtilitySoft Labs.
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
								color="warning"
								href="https://play.google.com/store/apps/details?id=com.golemapps.screenshotLite"
								target="_blank"
							>
								Download on Google Play
							</Button>
							<Button
								variant="outlined"
								color="warning"
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
									color: "#f57c00",
									textDecoration: "none",
									transition: "color 0.2s ease",
								},
								"& a:hover": {
									textDecoration: "underline",
									color: "#e65100",
								},
							}}
						>
							<a
								href="/screenshot-pro-capture-edit/terms"
								target="_blank"
								rel="noopener noreferrer"
							>
								Terms
							</a>{" "}
							&nbsp;|&nbsp;{" "}
							<a
								href="/screenshot-pro-capture-edit/privacy-policy"
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
					Screenshot & Scrolling Capture is your all-in-one tool for capturing,
					editing, and sharing screenshots. Easily take scrolling captures of
					web pages, chats, or documents — no stitching required.
					<br />
					<br />
					With built-in editing, annotation, and crop tools, you can refine your
					screenshots before saving or sharing. Perfect for work, study, or
					everyday use.
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
							title: "Scrolling Capture",
							desc: "Capture entire pages and chats automatically — no manual stitching.",
						},
						{
							title: "Instant Editing",
							desc: "Crop, draw, blur, and annotate directly after taking a screenshot.",
						},
						{
							title: "Floating Capture Button",
							desc: "One-tap capture from any screen or app.",
						},
						{
							title: "Auto-Save & History",
							desc: "Keep your captures organized with quick access to recent screenshots.",
						},
						{
							title: "Lightweight & Fast",
							desc: "Optimized for smooth performance and minimal battery use.",
						},
						{
							title: "Share Instantly",
							desc: "Send your screenshots via any app or cloud service in one tap.",
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
					Taking and editing screenshots should be effortless. Screenshot &
					Scrolling Capture simplifies your workflow — from capturing to
					sharing, all in seconds.
					<br />
					<br />
					Designed with usability and speed in mind, it helps you stay focused
					on what matters — whether you're documenting, teaching, or
					collaborating.
				</Typography>
			</Container>

			{/* FAQ */}
			<Container maxWidth="md" className={styles.section}>
				<Typography variant="h4" className={styles.sectionTitle}>
					FAQ
				</Typography>
				<ul className={styles.faqList}>
					<li>
						<strong>Can it capture long screenshots?</strong>
						<p>
							Yes, you can capture full-page or chat-length content using the
							scrolling capture mode.
						</p>
					</li>
					<li>
						<strong>Does it work offline?</strong>
						<p>
							Absolutely — no internet connection is needed for capturing or
							editing.
						</p>
					</li>
					<li>
						<strong>Can I edit screenshots right away?</strong>
						<p>
							Yes, the editor opens automatically after capture for instant
							annotations or cropping.
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
					color="warning"
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
						href="/screenshot-pro-capture-edit/terms"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.legalLink}
					>
						Terms of Use
					</a>
					{" • "}
					<a
						href="/screenshot-pro-capture-edit/privacy-policy"
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
