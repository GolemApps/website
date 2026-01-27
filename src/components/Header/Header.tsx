import React, { useEffect, useState } from "react";
import {
	AppBar,
	Box,
	Toolbar,
	Typography,
	Button,
	IconButton,
	Menu,
	MenuItem,
	useMediaQuery,
	Drawer,
	List,
	ListItemButton,
	ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

// ✅ Импортируем логотипы (тёмный и светлый вариант)
import logoLight from "../../assets/utilitysoft_labs_icon.png";
import logoDark from "../../assets/utilitysoft_labs_icon.png";

const apps = [
	{ name: "Battery Life Monitor", path: "/battery-health-and-alarm" },
	{ name: "Cards – Mobile Wallet", path: "/cards-wallet" },
	{ name: "QR Scanner & Barcode Reader", path: "/qr-scanner" },
	{ name: "Screenshot & Image Editor", path: "/screenshot-pro-capture-edit" },
	{ name: "WAMR: Recover Deleted Messages", path: "/recover-deleted-messages" },
];

export default function Header() {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));
	const location = useLocation();
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [scrollY, setScrollY] = useState(0);

	const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) =>
		setAnchorEl(event.currentTarget);
	const handleMenuClose = () => setAnchorEl(null);

	useEffect(() => {
		const handleScroll = () => setScrollY(window.scrollY);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const isHome = location.pathname === "/";
	const scrolled = scrollY > 40;

	// фон и цвета
	const bgColor = isHome && !scrolled ? "transparent" : "#fff";
	const textColor = isHome && !scrolled ? "#ffffff" : "#000000";
	const logoColor = isHome && !scrolled ? "#ffffff" : "#1976d2";
	const logoSrc = isHome && !scrolled ? logoLight : logoDark; // ✅ переключаем версию логотипа

	return (
		<motion.div
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			style={{ position: "relative", zIndex: 1100 }}
		>
			<AppBar
				position="fixed"
				elevation={scrolled ? 1 : 0}
				sx={{
					backgroundColor: bgColor,
					transition:
						"background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease",
					boxShadow: scrolled ? "0 2px 10px rgba(0,0,0,0.08)" : "none",
					backdropFilter: isHome && !scrolled ? "none" : "blur(10px)",
				}}
			>
				<Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
					{/* ЛОГОТИП */}
					<Box
						component={Link}
						to="/"
						sx={{
							display: "flex",
							alignItems: "center",
							gap: 1,
							textDecoration: "none",
						}}
					>
						<Box
							component="img"
							src={logoSrc}
							alt="UtilitySoft Labs"
							sx={{
								width: 32,
								height: 32,
								transition: "opacity 0.3s ease",
							}}
						/>
						<Typography
							sx={{
								color: logoColor,
								fontWeight: 500,
								fontSize: "1.15rem",
								fontFamily: "Poppins, sans-serif",
								letterSpacing: 0.3,
								transition: "color 0.3s ease",
							}}
						>
							UtilitySoft Labs
						</Typography>
					</Box>

					{/* Desktop Navigation */}
					{!isMobile ? (
						<Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
							<Button
								component={Link}
								to="/"
								sx={{
									textTransform: "none",
									color: textColor,
									fontWeight: 500,
									transition: "color 0.3s ease",
								}}
							>
								Home
							</Button>

							<Button
								onClick={handleMenuOpen}
								endIcon={<ArrowDropDownIcon sx={{ color: textColor }} />}
								sx={{
									textTransform: "none",
									color: textColor,
									fontWeight: 500,
									transition: "color 0.3s ease",
								}}
							>
								Apps
							</Button>

							<Menu
								anchorEl={anchorEl}
								open={Boolean(anchorEl)}
								onClose={handleMenuClose}
								PaperProps={{
									sx: {
										mt: 1.5,
										minWidth: 240,
										borderRadius: 2,
										boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
									},
								}}
							>
								{apps.map((app) => (
									<MenuItem
										key={app.path}
										component={Link}
										to={app.path}
										onClick={handleMenuClose}
										sx={{
											fontFamily: "Poppins, sans-serif",
											fontSize: "0.95rem",
										}}
									>
										{app.name}
									</MenuItem>
								))}
							</Menu>

							<Button
								variant="outlined"
								href="https://play.google.com/store/apps/dev?id=8818860993188601793"
								target="_blank"
								sx={{
									borderRadius: 3,
									textTransform: "none",
									fontWeight: 600,
									fontSize: "0.9rem",
									color: logoColor,
									borderColor: logoColor,
									"&:hover": {
										borderColor: logoColor,
										backgroundColor: `${logoColor}10`,
									},
								}}
							>
								Google Play
							</Button>
						</Box>
					) : (
						<IconButton onClick={() => setDrawerOpen(true)}>
							<MenuIcon sx={{ color: textColor }} />
						</IconButton>
					)}
				</Toolbar>

				{/* Mobile Drawer */}
				<Drawer
					anchor="right"
					open={drawerOpen}
					onClose={() => setDrawerOpen(false)}
					PaperProps={{
						sx: { width: 260, backgroundColor: "#fff" },
					}}
				>
					<List>
						<ListItemButton
							component={Link}
							to="/"
							onClick={() => setDrawerOpen(false)}
						>
							<ListItemText primary="Home" />
						</ListItemButton>
						{apps.map((app) => (
							<ListItemButton
								key={app.path}
								component={Link}
								to={app.path}
								onClick={() => setDrawerOpen(false)}
							>
								<ListItemText primary={app.name} />
							</ListItemButton>
						))}
						<ListItemButton
							href="https://play.google.com/store/apps/dev?id=8818860993188601793"
							target="_blank"
						>
							<ListItemText primary="Google Play" />
						</ListItemButton>
					</List>
				</Drawer>
			</AppBar>
		</motion.div>
	);
}
