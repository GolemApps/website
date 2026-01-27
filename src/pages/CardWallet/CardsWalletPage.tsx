import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Button, Container, Grid, Typography, Box } from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import styles from "./CardsWalletPage.module.css";

export default function CardsWalletPage() {
	return (
		<>
			<Helmet>
				<title>Cards – Mobile Wallet — UtilitySoft Labs</title>
				<meta
					name="description"
					content="Digital wallet app to store and organize your loyalty, club, and membership cards securely. Replace plastic with Cards – Mobile Wallet by UtilitySoft Labs."
				/>
			</Helmet>

			{/* HERO SECTION */}
			<Box
				sx={{
					background: "linear-gradient(120deg, #b2d9ff 0%, #c2e9fb 100%)",
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
						<CreditCardIcon
							sx={{
								fontSize: 80,
								color: "#1976d2",
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
							Cards – Mobile Wallet
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
							Your secure digital wallet for loyalty, club, and membership
							cards. Replace plastic with convenience — scan, store, and access
							all your cards anytime on your Android device.
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
								href="https://play.google.com/store/apps/details?id=com.golemapps.cardwallet"
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
								href="/cards-wallet/terms"
								target="_blank"
								rel="noopener noreferrer"
							>
								Terms
							</a>{" "}
							&nbsp;|&nbsp;{" "}
							<a
								href="/cards-wallet/privacy-policy"
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
					Cards – Mobile Wallet lets you store, organize, and access all your
					loyalty, club, and membership cards in one clean, lightweight app.
					Simply scan the barcode or enter card details — your wallet is now
					digital.<br></br>
					<br></br>
					Built with privacy and simplicity in mind, it works fully offline, so
					your data never leaves your device. The perfect solution for people
					who value minimalism, security, and everyday convenience.
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
							title: "Store All Your Cards",
							desc: "Add loyalty, membership, or gift cards in seconds with barcode or manual entry.",
						},
						{
							title: "Barcode & QR Display",
							desc: "Show any barcode directly from your screen for easy scanning in stores.",
						},
						{
							title: "Offline Access",
							desc: "Access all cards anytime — even without internet connection.",
						},
						{
							title: "Secure Local Storage",
							desc: "All data stays encrypted and private on your device — not in the cloud.",
						},
						{
							title: "Customizable Look",
							desc: "Personalize card colors, icons, and backgrounds to match your style.",
						},
						{
							title: "Backup & Restore",
							desc: "Easily export or restore your cards when switching devices.",
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
					Carrying dozens of plastic cards is outdated. Cards – Mobile Wallet
					simplifies your life by putting everything in one secure, digital
					place.<br></br>
					<br></br>
					Enjoy a clutter-free experience at checkout, faster access to your
					memberships, and peace of mind knowing your information is stored
					locally — safe, simple, and always with you.
				</Typography>
			</Container>

			{/* FAQ */}
			<Container maxWidth="md" className={styles.section}>
				<Typography variant="h4" className={styles.sectionTitle}>
					FAQ
				</Typography>
				<ul className={styles.faqList}>
					<li>
						<strong>Can I use it without internet?</strong>
						<p>Yes, all cards are accessible offline at any time.</p>
					</li>
					<li>
						<strong>Is my data safe?</strong>
						<p>
							Absolutely — your cards never leave your device, and no accounts
							are required.
						</p>
					</li>
					<li>
						<strong>Can I show barcodes from my phone?</strong>
						<p>Yes, just open a card and let the store scan your screen.</p>
					</li>
				</ul>
			</Container>

			{/* See all apps button — перед футером */}
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
						href="/cards-wallet/terms"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.legalLink}
					>
						Terms of Use
					</a>
					{" • "}
					<a
						href="/cards-wallet/privacy-policy"
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
