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
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import logo from "../../assets/utilitysoft_labs_icon.png";
import "./Header.css";

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
		name: "Notification History",
		path: "/notification-history",
	},
	{
		name: "QR & Barcode Scanner",
		path: "/barcode",
	},
	{
		name: "Sign Documents: PDF & Image",
		path: "/document-signature",
	},
];

export default function Header() {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));
	const location = useLocation();

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const [drawerOpen, setDrawerOpen] = React.useState(false);

	const isHomeActive = location.pathname === "/";
	const isAppsActive = apps.some((app) => location.pathname === app.path);

	const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	return (
		<AppBar position="relative" elevation={0} className="site-header">
			<Toolbar className="site-header-toolbar">
				<Box component={Link} to="/" className="site-header-logo">
					<Box
						component="img"
						src={logo}
						alt="UtilitySoft Labs"
						className="site-header-logo-image"
					/>

					<Typography component="span" className="site-header-logo-text">
						UtilitySoft Labs
					</Typography>
				</Box>

				{!isMobile ? (
					<Box className="site-header-nav">
						<Button
							component={Link}
							to="/"
							className={`site-header-nav-button ${
								isHomeActive ? "active" : ""
							}`}
							disableRipple
						>
							Home
						</Button>

						<Button
							className={`site-header-nav-button ${isAppsActive ? "active" : ""}`}
							onClick={handleMenuOpen}
							endIcon={<ArrowDropDownIcon />}
							disableRipple
						>
							Apps
						</Button>

						<Menu
							anchorEl={anchorEl}
							open={Boolean(anchorEl)}
							onClose={handleMenuClose}
							PaperProps={{
								className: "site-header-menu-paper",
							}}
						>
							{apps.map((app) => (
								<MenuItem
									key={app.path}
									component={Link}
									to={app.path}
									onClick={handleMenuClose}
									className="site-header-menu-item"
								>
									{app.name}
								</MenuItem>
							))}
						</Menu>

						<Button
							href="https://play.google.com/store/apps/dev?id=8818860993188601793"
							target="_blank"
							className="site-header-google-button"
							disableRipple
						>
							<img
								src="/icon-google-play.png"
								alt=""
								className="site-header-google-icon"
							/>
							Google Play
						</Button>
					</Box>
				) : (
					<IconButton
						onClick={() => setDrawerOpen(true)}
						className="site-header-mobile-button"
					>
						<MenuIcon />
					</IconButton>
				)}
			</Toolbar>

			<Drawer
				anchor="right"
				open={drawerOpen}
				onClose={() => setDrawerOpen(false)}
				PaperProps={{
					className: "site-header-drawer-paper",
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
