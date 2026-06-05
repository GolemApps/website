import React from "react";
import "./HeroSection.css";

const HERO_PHONE_IMAGE = "/images/home/hero-phone.png";

const HeroSection: React.FC = () => {
	const scrollToSection = (sectionId: string) => {
		document.querySelector(sectionId)?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<section className="hero">
			<div className="hero-overlay" />

			<div className="hero-container">
				<div className="hero-text">
					<h1>
						Smart Android
						<br />
						tools for
						<br />
						<span>everyday tasks</span>
					</h1>

					<p>
						Lightweight, powerful, and privacy-focused apps that simplify your
						digital life.
					</p>

					<div className="hero-buttons">
						<button
							type="button"
							className="btn primary"
							onClick={() => scrollToSection("#apps")}
						>
							<span className="btn-icon">↗</span>
							View Apps
						</button>

						<button
							type="button"
							className="btn secondary"
							onClick={() => scrollToSection("#contact")}
						>
							<span className="btn-icon">☏</span>
							Contact / Support
						</button>
					</div>

					<div className="hero-trust-row">
						<div className="trust-card">
							<span className="trust-icon green">盾</span>
							<div>
								<strong>Privacy Focused</strong>
								<small>Your data stays with you</small>
							</div>
						</div>

						<div className="trust-card">
							<span className="trust-icon yellow">⚡</span>
							<div>
								<strong>Fast Performance</strong>
								<small>Optimized for speed</small>
							</div>
						</div>

						<div className="trust-card">
							<span className="trust-icon purple">✦</span>
							<div>
								<strong>Simple Design</strong>
								<small>Clean. Intuitive. Easy.</small>
							</div>
						</div>
					</div>
				</div>

				<div className="hero-visual">
					<div className="hero-orbits">
						<span />
						<span />
						<span />
					</div>

					<img
						className="hero-phone-image"
						src={HERO_PHONE_IMAGE}
						alt="UtilitySoft Labs app dashboard"
						draggable={false}
					/>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
