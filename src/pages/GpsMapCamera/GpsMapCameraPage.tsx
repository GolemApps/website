import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Button, Container, Grid, Typography, Box } from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import styles from "./GpsMapCameraPage.module.css";

export default function GpsMapCameraPage() {
	return (
		<>
			<Helmet>
				<title>GPS Map Camera — UtilitySoft Labs</title>
				<meta
					name="description"
					content="Stamp photos with GPS coordinates, address, date, and map location. Capture geotagged images with GPS Map Camera by UtilitySoft Labs."
				/>
			</Helmet>

			<Box
				sx={{
					background:
						"linear-gradient(120deg, #ccfbf1 0%, #99f6e4 45%, #5eead4 100%)",
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
						<PhotoCameraIcon
							sx={{
								fontSize: 84,
								color: "#0f766e",
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
							GPS Map Camera
						</Typography>

						<Typography
							variant="h6"
							sx={{
								color: "#134e4a",
								maxWidth: 650,
								mx: "auto",
								mb: 4,
								fontFamily: "Poppins, sans-serif",
								lineHeight: 1.6,
								fontWeight: 500,
								fontSize: "1.25rem",
							}}
						>
							Capture photos with GPS coordinates, address, date, time, and map
							details stamped on the image. Perfect for travel, fieldwork,
							inspections, and location records.
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
								sx={{
									backgroundColor: "#0f766e",
									"&:hover": {
										backgroundColor: "#115e59",
									},
								}}
								href="https://play.google.com/store/apps/details?id=com.utilitysoftlabs.photoGps"
								target="_blank"
							>
								Download on Google Play
							</Button>

							<Button
								variant="outlined"
								sx={{
									color: "#0f766e",
									borderColor: "#0f766e",
									"&:hover": {
										borderColor: "#115e59",
										backgroundColor: "rgba(15, 118, 110, 0.08)",
									},
								}}
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
								color: "#4b5563",
								fontSize: 13,
								"& a": {
									color: "#0f766e",
									textDecoration: "none",
									transition: "color 0.2s ease",
								},
								"& a:hover": {
									textDecoration: "underline",
									color: "#115e59",
								},
							}}
						>
							<a
								href="/gps-map-camera/terms"
								target="_blank"
								rel="noopener noreferrer"
							>
								Terms
							</a>{" "}
							&nbsp;|&nbsp;{" "}
							<a
								href="/gps-map-camera/privacy-policy"
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
					GPS Map Camera helps you take photos with location context already
					included. Coordinates, address, date, time, and map information can be
					added to each image so you always know where and when a photo was
					taken.
					<br />
					<br />
					Use it for travel diaries, construction and inspection reports,
					property visits, outdoor work, and any situation where geotagged
					photos make your records clearer.
				</Typography>
			</Container>

			<Container maxWidth="lg" className={styles.section}>
				<Typography variant="h4" className={styles.sectionTitle}>
					Key Features
				</Typography>

				<Grid container spacing={3} className={styles.featuresGrid}>
					{[
						{
							title: "GPS Photo Stamp",
							desc: "Add latitude, longitude, and location details directly onto your photos.",
						},
						{
							title: "Address & Map Overlay",
							desc: "Show readable address and map context on the captured image.",
						},
						{
							title: "Date & Time Stamp",
							desc: "Include date and time so every photo has a clear timestamp.",
						},
						{
							title: "Custom Stamp Layout",
							desc: "Choose which location details appear and how they are presented.",
						},
						{
							title: "Fieldwork Ready",
							desc: "Built for inspections, site visits, travel logs, and outdoor documentation.",
						},
						{
							title: "Save Locally",
							desc: "Keep stamped photos on your device and share them when you need to.",
						},
					].map((feature, index) => (
						<Grid item xs={12} sm={6} md={4} key={index}>
							<motion.div
								className={styles.featureCard}
								whileHover={{ scale: 1.03 }}
								transition={{ type: "spring", stiffness: 300 }}
							>
								<Typography variant="h6" className={styles.featureTitle}>
									{feature.title}
								</Typography>
								<Typography className={styles.featureDesc}>
									{feature.desc}
								</Typography>
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
					Photos without location context often lose their meaning later. GPS
					Map Camera keeps the place and time attached to the image, so your
					visual records stay useful for reporting, sharing, and reference.
					<br />
					<br />
					Whether you document a worksite, save travel moments, or need proof of
					where a photo was taken, stamped location details make every capture
					more reliable.
				</Typography>
			</Container>

			<Container maxWidth="md" className={styles.section}>
				<Typography variant="h4" className={styles.sectionTitle}>
					FAQ
				</Typography>

				<ul className={styles.faqList}>
					<li>
						<strong>What information can be stamped on photos?</strong>
						<p>
							GPS coordinates, address, date, time, and map-related location
							details can be added to your photos.
						</p>
					</li>

					<li>
						<strong>Does the app need location permission?</strong>
						<p>
							Yes. Location access is required to stamp accurate GPS and
							address information onto photos.
						</p>
					</li>

					<li>
						<strong>Can I use GPS Map Camera for work reports?</strong>
						<p>
							Yes. It is useful for inspections, fieldwork, site visits, and
							any documentation that needs geotagged photos.
						</p>
					</li>

					<li>
						<strong>Are my photos stored online?</strong>
						<p>
							Photos are saved on your device. You can share them yourself when
							needed.
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
					sx={{
						color: "#0f766e",
						borderColor: "#0f766e",
						"&:hover": {
							borderColor: "#115e59",
							backgroundColor: "rgba(15, 118, 110, 0.08)",
						},
					}}
					href="https://play.google.com/store/apps/dev?id=8818860993188601793"
					target="_blank"
				>
					See all apps from UtilitySoft Labs
				</Button>
			</Container>

			<Container maxWidth="md" className={styles.footerLinks}>
				<Typography variant="body2" align="center">
					<a
						href="/gps-map-camera/terms"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.legalLink}
					>
						Terms of Use
					</a>
					{" • "}
					<a
						href="/gps-map-camera/privacy-policy"
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
