import React from "react";
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
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import logo from "../../assets/utilitysoft_labs_icon.png";

const apps = [
	{
		name: "Battery Life Monitor",
		path: "/battery-health-and-alarm",
	},
	{
		name: "Cards – Mobile Wallet",
		path: "/cards-wallet",
	},
	{
		name: "QR Scanner from Image",
		path: "/qr-scanner",
	},
	{
		name: "Screenshot & Image Editor",
		path: "/screenshot-pro-capture-edit",
	},
	{
		name: "WAMR: Recover Deleted Messages",
		path: "/recover-deleted-messages",
	},
	{
		name: "QR & Barcode Scanner",
		path: "/barcode",
	},
];

export default function Header() {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const [drawerOpen, setDrawerOpen] = React.useState(false);

	const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	return (
		<AppBar
			position="sticky"
			elevation={0}
			sx={{
				backgroundColor: "#ffffffcc",
				backdropFilter: "blur(10px)",
				color: "#000",
				boxShadow: "0 1px 6px rgba(0,0,0,0.08)",
			}}
		>
			<Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
				{/* Logo */}
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
						src={logo}
						alt="UtilitySoft Labs"
						sx={{
							width: 30,
							height: 30,
							opacity: 0.95,
							transition: "opacity 0.3s ease",
							"&:hover": { opacity: 1 },
						}}
					/>
					<Typography
						sx={{
							fontWeight: 500, // было 500 → делаем тоньше
							fontSize: "1.1rem",
							fontFamily: "'Poppins', sans-serif",
							letterSpacing: 0.4, // чуть больше расстояние
							color: "text.primary",
							userSelect: "none",
							transition: "color 0.3s ease",
							"&:hover": { color: "primary.main" },
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
							color="inherit"
							sx={{ textTransform: "none" }}
						>
							Home
						</Button>

						{/* Dropdown Menu */}
						<Button
							color="inherit"
							onClick={handleMenuOpen}
							endIcon={<ArrowDropDownIcon />}
							sx={{ textTransform: "none" }}
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
									minWidth: 220,
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
							color="primary"
							href="https://play.google.com/store/apps/dev?id=8818860993188601793"
							target="_blank"
							sx={{ borderRadius: 3, textTransform: "none", fontWeight: 600 }}
						>
							Google Play
						</Button>
					</Box>
				) : (
					// Mobile menu button
					<IconButton onClick={() => setDrawerOpen(true)}>
						<MenuIcon />
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
	);
}
