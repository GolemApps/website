import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Button, Container, Grid, Typography, Box } from "@mui/material";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import styles from "./DocumentSignaturePage.module.css";

export default function DocumentSignaturePage() {
	return (
		<>
			<Helmet>
				<title>Sign Documents: PDF & Image — UtilitySoft Labs</title>
				<meta
					name="description"
					content="Sign PDF files and images on Android. Add saved signatures, initials, checkmarks, text, dates, and other document marks with Sign Documents: PDF & Image by UtilitySoft Labs."
				/>
			</Helmet>

			{/* HERO SECTION */}
			<Box
				sx={{
					background:
						"linear-gradient(120deg, #dbeafe 0%, #bfdbfe 45%, #93c5fd 100%)",
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
						<DriveFileRenameOutlineIcon
							sx={{
								fontSize: 84,
								color: "#2563eb",
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
							Sign Documents: PDF & Image
						</Typography>

						<Typography
							variant="h6"
							sx={{
								color: "#1f2937",
								maxWidth: 650,
								mx: "auto",
								mb: 4,
								fontFamily: "Poppins, sans-serif",
								lineHeight: 1.6,
								fontWeight: 500,
								fontSize: "1.25rem",
							}}
						>
							Sign PDF files and images directly on your Android device. Add
							signatures, initials, text, dates, checkmarks, and other document
							marks in a simple and fast editor.
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
									backgroundColor: "#2563eb",
									"&:hover": {
										backgroundColor: "#1d4ed8",
									},
								}}
								href="https://play.google.com/store/apps/details?id=com.golemapps.documentsignature"
								target="_blank"
							>
								Download on Google Play
							</Button>

							<Button
								variant="outlined"
								sx={{
									color: "#2563eb",
									borderColor: "#2563eb",
									"&:hover": {
										borderColor: "#1d4ed8",
										backgroundColor: "rgba(37, 99, 235, 0.08)",
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
									color: "#2563eb",
									textDecoration: "none",
									transition: "color 0.2s ease",
								},
								"& a:hover": {
									textDecoration: "underline",
									color: "#1d4ed8",
								},
							}}
						>
							<a
								href="/document-signature/terms"
								target="_blank"
								rel="noopener noreferrer"
							>
								Terms
							</a>{" "}
							&nbsp;|&nbsp;{" "}
							<a
								href="/document-signature/privacy-policy"
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
					Sign Documents: PDF & Image helps you quickly prepare documents for
					signing, approval, review, or sharing. Open a PDF or image, place your
					signature exactly where needed, and save the final document on your
					device.
					<br />
					<br />
					The app is designed for everyday paperwork: agreements, forms,
					receipts, statements, scanned pages, screenshots, and other documents
					that require a signature or simple visual marks.
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
							title: "Sign PDF Files",
							desc: "Open PDF documents and place your signature directly on the page.",
						},
						{
							title: "Sign Images",
							desc: "Add signatures and marks to scanned documents, photos, and screenshots.",
						},
						{
							title: "Saved Signatures",
							desc: "Create and reuse saved signatures for faster document signing.",
						},
						{
							title: "Text & Date Fields",
							desc: "Add names, notes, dates, and other text where the document requires it.",
						},
						{
							title: "Document Marks",
							desc: "Use checkmarks, crosses, initials, and other common marks for forms.",
						},
						{
							title: "Save & Share",
							desc: "Export the signed document and share it through email, messengers, or cloud apps.",
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

			{/* WHY IT MATTERS */}
			<Container maxWidth="md" className={styles.section}>
				<Typography variant="h4" className={styles.sectionTitle}>
					Why It Matters
				</Typography>

				<Typography className={styles.sectionText}>
					Signing documents should not require printing, scanning, or switching
					between complicated tools. Sign Documents: PDF & Image keeps the
					process simple: open, sign, save, and share.
					<br />
					<br />
					Whether you need to sign a form, approve a document, mark a scanned
					page, or prepare paperwork on the go, the app helps you finish the
					task directly from your phone.
				</Typography>
			</Container>

			{/* FAQ */}
			<Container maxWidth="md" className={styles.section}>
				<Typography variant="h4" className={styles.sectionTitle}>
					FAQ
				</Typography>

				<ul className={styles.faqList}>
					<li>
						<strong>Can I sign PDF documents?</strong>
						<p>
							Yes, the app lets you open PDF files and place your signature on
							the required page.
						</p>
					</li>

					<li>
						<strong>Can I sign images or scanned documents?</strong>
						<p>
							Yes, you can add signatures and marks to images, scans, photos,
							and screenshots.
						</p>
					</li>

					<li>
						<strong>Can I reuse my saved signature?</strong>
						<p>
							Yes, you can save signatures and use them again when signing new
							documents.
						</p>
					</li>

					<li>
						<strong>Does the app work offline?</strong>
						<p>
							Yes, core signing and editing features work directly on your
							device.
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
					sx={{
						color: "#2563eb",
						borderColor: "#2563eb",
						"&:hover": {
							borderColor: "#1d4ed8",
							backgroundColor: "rgba(37, 99, 235, 0.08)",
						},
					}}
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
						href="/document-signature/terms"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.legalLink}
					>
						Terms of Use
					</a>
					{" • "}
					<a
						href="/document-signature/privacy-policy"
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
