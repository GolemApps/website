import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Button, Container, Grid, Typography, Box } from "@mui/material";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import styles from "./QrScannerPage.module.css";

export default function QrScannerPage() {
	return (
		<>
			<Helmet>
				<title>QR Scanner from Image — UtilitySoft Labs</title>
				<meta
					name="description"
					content="Scan, decode, and generate QR codes or barcodes instantly — fast, secure, and reliable QR Scanner from Image by UtilitySoft Labs."
				/>
			</Helmet>

			{/* HERO SECTION */}
			<Box
				sx={{
					background: "linear-gradient(120deg, #b7e6fc 0%, #82c6ff 100%)",
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
						<QrCodeScannerIcon
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
							QR Scanner from Image
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
							Fast, reliable, and privacy-focused QR & barcode scanner for your
							Android device. Scan codes instantly from camera or images — no
							internet, no tracking, no ads.
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
								href="https://play.google.com/store/apps/details?id=com.golemapps.sample"
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
								href="/qr-scanner/terms"
								target="_blank"
								rel="noopener noreferrer"
							>
								Terms
							</a>{" "}
							&nbsp;|&nbsp;{" "}
							<a
								href="/qr-scanner/privacy-policy"
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
					QR Scanner from Image instantly scans all major barcode formats — QR,
					EAN, UPC, Code 39, Data Matrix, and more. Whether you need to read
					product info, Wi-Fi codes, inventory tags, or coupons, this app does
					it all — quickly and securely.
					<br />
					<br />
					You can also scan from images in your gallery or generate your own QR
					codes with one tap. All operations happen locally on your device,
					ensuring your privacy.
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
							title: "Instant Scanning",
							desc: "Auto-detects and decodes QR & barcodes instantly — no tap required.",
						},
						{
							title: "Scan from Images",
							desc: "Import and scan QR codes directly from gallery or screenshots.",
						},
						{
							title: "Create QR Codes",
							desc: "Generate your own QR codes for text, URLs, Wi-Fi, or contacts.",
						},
						{
							title: "Works Offline",
							desc: "No internet required. Your scans stay private on your device.",
						},
						{
							title: "History & Sharing",
							desc: "View, copy, and share your scan history anytime.",
						},
						{
							title: "Lightweight & Ad-Free",
							desc: "No ads, no tracking — just pure utility and performance.",
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
					Everyday scanning should be simple, fast, and private. QR Scanner &
					Barcode Reader gives you a clean, ad-free experience focused purely on
					performance and reliability.
					<br />
					<br />
					No unnecessary permissions, no background tracking — just a modern
					tool built for accuracy, speed, and privacy.
				</Typography>
			</Container>

			{/* FAQ */}
			<Container maxWidth="md" className={styles.section}>
				<Typography variant="h4" className={styles.sectionTitle}>
					FAQ
				</Typography>
				<ul className={styles.faqList}>
					<li>
						<strong>Can I scan codes without internet?</strong>
						<p>
							Yes, the app works 100% offline — no data is uploaded anywhere.
						</p>
					</li>
					<li>
						<strong>Does it support all barcode formats?</strong>
						<p>
							Yes, including QR, UPC, EAN, Code 39, Data Matrix, and many
							others.
						</p>
					</li>
					<li>
						<strong>Can I scan from photos?</strong>
						<p>
							Absolutely — just select any image from your gallery to decode.
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
						href="/qr-scanner/terms"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.legalLink}
					>
						Terms of Use
					</a>
					{" • "}
					<a
						href="/qr-scanner/privacy-policy"
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
