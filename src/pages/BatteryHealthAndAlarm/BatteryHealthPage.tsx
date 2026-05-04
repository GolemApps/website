import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Button, Container, Grid, Typography, Box } from "@mui/material";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";
import styles from "./BatteryHealthPage.module.css";

export default function BatteryHealthPage() {
	return (
		<>
			<Helmet>
				<title>Battery Life Monitor and Alarm — UtilitySoft Labs</title>
				<meta
					name="description"
					content="Monitor charging speed, temperature, and battery health with smart alerts. Extend your phone’s battery life with Battery Life Monitor and Alarm — by UtilitySoft Labs"
				/>
			</Helmet>
			<Box
				sx={{
					background: "linear-gradient(120deg, #c8f8c0 0%, #b2f2d0 100%)",
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
						<BatteryFullIcon
							sx={{
								fontSize: 80,
								color: "#2e7d32",
								mb: 2,
							}}
						/>
						<Typography
							variant="h3"
							component="h1" // ✅ SEO-корректный тег
							sx={{
								fontWeight: 700,
								mb: 1,
								fontFamily: "Poppins, sans-serif",
							}}
						>
							Battery Life Monitor and Alarm
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
							Keep your phone battery healthy and protected. Monitor charging,
							temperature, and battery life in real time — with instant smart
							alerts. Maximum battery protection.
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
								href="https://play.google.com/store/apps/details?id=com.golemapps.batteryHealth"
								target="_blank"
							>
								Download on Google Play
							</Button>
							<Button
								variant="contained"
								color="success"
								href="https://play.google.com/store/apps/dev?id=8818860993188601793"
								target="_blank"
							>
								See all apps from UtilitySoft Labs
							</Button>
						</Box>

						{/* мелкий текст под кнопками */}
						<Typography
							variant="body2"
							sx={{
								mt: 2,
								color: "#555",
								fontSize: 13,
							}}
						>
							<a
								href="/battery-health-and-alarm/terms"
								target="_blank"
								rel="noopener noreferrer"
							>
								Terms
							</a>{" "}
							&nbsp;|&nbsp;{" "}
							<a
								href="/battery-health-and-alarm/privacy-policy"
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
					Battery Life Monitor and Alarm is a powerful Android app designed to
					help you extend your phone’s battery life and avoid overheating or
					overcharging. It monitors real-time battery health, charging speed,
					and temperature — and notifies you before any damage can occur.
					Perfect for everyday users who want longer battery lifespan and safe
					charging.<br></br>
					<br></br>
					Get alerts before your battery overheats or gets damaged — and keep
					your device running efficiently for longer.
				</Typography>
			</Container>

			<Container maxWidth="lg" className={styles.section}>
				<Typography variant="h4" className={styles.sectionTitle}>
					Key Features
				</Typography>

				<Grid container spacing={3} className={styles.featuresGrid}>
					{[
						{
							title: "Battery Health Tracking",
							desc: "Monitor voltage, charge cycles, and overall battery condition.",
						},
						{
							title: "Smart Alerts",
							desc: "Get notified when charging is complete or temperature rises.",
						},
						{
							title: "Temperature Control",
							desc: "Stay protected from overheating during fast charging.",
						},
						{
							title: "Custom Alarm Thresholds",
							desc: "Set personalized charge or temperature limits.",
						},
						{
							title: "Detailed Statistics",
							desc: "View usage graphs and historical performance data.",
						},
						{
							title: "Lightweight Design",
							desc: "Minimal battery impact, optimized for background performance.",
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
					Your battery health directly affects how long your phone lasts.
					Leaving your phone plugged in overnight or charging under heat can
					shorten its life dramatically. <br></br>
					<br></br>
					Battery Life Monitor and Alarm helps you stay aware and take control —
					with real-time data, smart warnings, and precise insights designed for
					long-term protection.
				</Typography>
			</Container>

			<Container maxWidth="md" className={styles.section}>
				<Typography variant="h4" className={styles.sectionTitle}>
					FAQ
				</Typography>
				<ul className={styles.faqList}>
					<li>
						<strong>Does it work while charging overnight?</strong>
						<p>Yes, it runs quietly and alerts you automatically.</p>
					</li>
					<li>
						<strong>Does it consume battery?</strong>
						<p>No, it’s optimized to use less than 1% per day.</p>
					</li>
					<li>
						<strong>Can I customize alerts?</strong>
						<p>Yes, set your own thresholds for temperature or charge.</p>
					</li>
				</ul>
			</Container>

			<Container maxWidth="md" className={styles.footerLinks}>
				<Typography variant="body2" align="center">
					<a
						href="/battery-health-and-alarm/terms"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.legalLink}
					>
						Terms of Use
					</a>
					{" • "}
					<a
						href="/battery-health-and-alarm/privacy-policy"
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
