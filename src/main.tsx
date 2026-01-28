import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home/Home";
import { theme } from "./theme";
import { ThemeProvider, CssBaseline } from "@mui/material";

// Battery Health And Alarm
import BatteryPrivacyPolicy from "./pages/BatteryHealthAndAlarm/PrivacyPolicy";
import BatteryTerms from "./pages/BatteryHealthAndAlarm/Terms";
import BatteryHealthPage from "./pages/BatteryHealthAndAlarm/BatteryHealthPage";

// Recover Deleted Messages
import RecoverPrivacyPolicy from "./pages/RecoverDeletedMessages/PrivacyPolicy";
import RecoverTerms from "./pages/RecoverDeletedMessages/Terms";

// Screenshot Pro
import ScreenshotPrivacyPolicy from "./pages/ScreenshotPro/PrivacyPolicy";
import ScreenshotTerms from "./pages/ScreenshotPro/Terms";

// Cards Wallet
import CardWalletPrivacyPolicy from "./pages/CardWallet/PrivacyPolicy";
import CardWalletTerms from "./pages/CardWallet/Terms";

// QR code
import QrScannerPrivacyPolicy from "./pages/QrScanner/PrivacyPolicy";
import QrScannerTerms from "./pages/QrScanner/Terms";

// Barcode
import BarcodePrivacyPolicy from "./pages/Barcode/PrivacyPolicy";
import BarcodeTerms from "./pages/Barcode/Terms";
import CardsWalletPage from "./pages/CardWallet/CardsWalletPage";
import Header from "./components/Header/Header";
import QrScannerPage from "./pages/QrScanner/QrScannerPage";
import ScreenshotProPage from "./pages/ScreenshotPro/ScreenshotProPage";
import QrBarcodeScannerPage from "./pages/Barcode/QrBarcodeScannerPage";
import WamrPage from "./pages/RecoverDeletedMessages/WamrPage";
import ScrollToTop from "./utils/ScrollToTop";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<HelmetProvider>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<BrowserRouter>
					<ScrollToTop />
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />

						{/* Battery Health & Alarm */}
						<Route
							path="/battery-health-and-alarm"
							element={<BatteryHealthPage />}
						/>
						<Route
							path="/battery-health-and-alarm/privacy-policy"
							element={<BatteryPrivacyPolicy />}
						/>
						<Route
							path="/battery-health-and-alarm/terms"
							element={<BatteryTerms />}
						/>

						{/* Recover Deleted Messages */}
						<Route path="/recover-deleted-messages" element={<WamrPage />} />
						<Route
							path="/recover-deleted-messages/privacy-policy"
							element={<RecoverPrivacyPolicy />}
						/>
						<Route
							path="/recover-deleted-messages/terms"
							element={<RecoverTerms />}
						/>

						{/* Screenshot Pro */}

						<Route
							path="/screenshot-pro-capture-edit"
							element={<ScreenshotProPage />}
						/>

						<Route
							path="/screenshot-pro-capture-edit/privacy-policy"
							element={<ScreenshotPrivacyPolicy />}
						/>
						<Route
							path="/screenshot-pro-capture-edit/terms"
							element={<ScreenshotTerms />}
						/>

						{/* Cards Wallet */}
						<Route path="/cards-wallet" element={<CardsWalletPage />} />
						<Route
							path="/cards-wallet/privacy-policy"
							element={<CardWalletPrivacyPolicy />}
						/>
						<Route path="/cards-wallet/terms" element={<CardWalletTerms />} />

						{/* QR Scanner from Image */}
						<Route path="/qr-scanner" element={<QrScannerPage />} />
						<Route
							path="/qr-scanner/privacy-policy"
							element={<QrScannerPrivacyPolicy />}
						/>
						<Route path="/qr-scanner/terms" element={<QrScannerTerms />} />

						{/* Barcode */}
						<Route path="/barcode" element={<QrBarcodeScannerPage />} />
						<Route
							path="/barcode/privacy-policy"
							element={<BarcodePrivacyPolicy />}
						/>
						<Route path="/barcode/terms" element={<BarcodeTerms />} />
					</Routes>
				</BrowserRouter>
			</ThemeProvider>
		</HelmetProvider>
	</React.StrictMode>,
);
