import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import "./AppLayout.css";

export default function AppLayout() {
	const location = useLocation();
	const isHomePage = location.pathname === "/";

	return (
		<div
			className={
				isHomePage ? "app-layout home-layout" : "app-layout default-layout"
			}
		>
			{isHomePage ? (
				<Outlet />
			) : (
				<>
					<Header />
					<main className="page-content">
						<Outlet />
					</main>
				</>
			)}
		</div>
	);
}
