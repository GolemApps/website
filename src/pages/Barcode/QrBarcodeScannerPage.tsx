import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Button, Container, Grid, Typography, Box } from "@mui/material";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import styles from "./QrBarcodeScannerPage.module.css";

export default function QrBarcodeScannerPage() {
	return (
		<>
			<Helmet>
				<title>QR & Barcode Scanner — UtilitySoft Labs</title>
				<meta
					name="description"
					content="Fast and secure QR & barcode scanner for Android. Scan product codes, Wi-Fi, or links instantly — private, ad-free, and reliable."
				/>
			</Helmet>

			{/* HERO SECTION */}
			<Box
				sx={{
					background: "linear-gradient(120deg, #d1b3fc 0%, #81d4fa 100%)",
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
						<QrCode2Icon
							sx={{
								fontSize: 80,
								color: "#0288d1",
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
							QR & Barcode Scanner
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
							Scan any QR or barcode instantly — fast, private, and ad-free.
							Read product codes, Wi-Fi, or links with one tap — no permissions,
							no tracking.
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
								color="primary"
								href="https://play.google.com/store/apps/details?id=com.golemapps.qrscanner"
								target="_blank"
							>
								Download on Google Play
							</Button>
							<Button
								variant="outlined"
								color="primary"
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
									color: "#1976d2",
									textDecoration: "none",
									transition: "color 0.2s ease",
								},
								"& a:hover": {
									textDecoration: "underline",
									color: "#0d47a1",
								},
							}}
						>
							<a
								href="/barcode/terms"
								target="_blank"
								rel="noopener noreferrer"
							>
								Terms
							</a>{" "}
							&nbsp;|&nbsp;{" "}
							<a
								href="/barcode/privacy-policy"
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
					QR & Barcode Scanner is the fastest, most lightweight code reader for
					Android. It supports all major barcode types — QR, EAN, UPC, Code 39,
					Data Matrix, and more. Scan product details, website links, Wi-Fi
					codes, and more instantly.
					<br />
					<br />
					Designed for privacy — no internet required, no ads, and no tracking.
					Your scans stay 100% on your device.
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
							title: "Ultra-Fast Scanning",
							desc: "Instantly detects and decodes any QR or barcode — no waiting.",
						},
						{
							title: "All Formats Supported",
							desc: "Works with QR, EAN, UPC, Code 39, Data Matrix, and more.",
						},
						{
							title: "Offline Mode",
							desc: "No internet or permissions required — works anywhere, anytime.",
						},
						{
							title: "History & Sharing",
							desc: "Keep a log of your scans or share results with one tap.",
						},
						{
							title: "Privacy First",
							desc: "No tracking, no background data collection — your scans stay local.",
						},
						{
							title: "Lightweight & Ad-Free",
							desc: "Minimal design and performance-optimized for everyday use.",
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
					QR & Barcode Scanner gives you the essential functionality — speed,
					accuracy, and reliability — without ads or tracking. Whether scanning
					product info, coupons, or links, it ensures a clean, fast, and private
					experience every time.
				</Typography>
			</Container>

			{/* FAQ */}
			<Container maxWidth="md" className={styles.section}>
				<Typography variant="h4" className={styles.sectionTitle}>
					FAQ
				</Typography>
				<ul className={styles.faqList}>
					<li>
						<strong>Can I use it offline?</strong>
						<p>Yes, all scans work offline without any internet connection.</p>
					</li>
					<li>
						<strong>Does it collect personal data?</strong>
						<p>No, the app doesn’t collect or share any user data.</p>
					</li>
					<li>
						<strong>Is it really ad-free?</strong>
						<p>
							Yes — there are absolutely no ads or pop-ups. Clean and focused
							experience only.
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
					color="primary"
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
						href="/barcode/terms"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.legalLink}
					>
						Terms of Use
					</a>
					{" • "}
					<a
						href="/barcode/privacy-policy"
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
