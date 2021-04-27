import React, { useState, useEffect } from "react";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import "../../../style/css/navbar.css";

const Navbar = (props) => {
	const [sidebar, setSidebar] = useState(false);
	const [navbarBgColor, setNavbarBgColor] = useState(false);
	const handleSidebar = () => setSidebar(!sidebar);
	const changeNavbarBgColor = () => {
		if (window.scrollY >= 150) return setNavbarBgColor(true);
		return setNavbarBgColor(false);
	};

	useEffect(() => {
		const navbarBgColorListener = window.addEventListener("scroll", changeNavbarBgColor);
		return () => document.removeEventListener("scroll", navbarBgColorListener);
	}, [navbarBgColor]);

	return (
		<header className={`position-sticky header ${navbarBgColor ? "header--dark" : ""}`}>
			<div className="container">
				<nav className="row justify-content-between align-items-center header__nav">
					<div className="col-lg-7 col-md-5 col-sm-4 col-8 m-0">
						<h3 className="m-0 header__nav__logo">
							<LinkR to="/" className="text-white">
								Mount.go
							</LinkR>
						</h3>
					</div>
					<ul className={`col-lg-4 col-md-6 col-sm-7 my-0 header__nav__navigations ${sidebar ? "active" : ""}`}>
						<li className="position-relative header__nav__navigations__navigation header__nav__navigations__navigation--first">
							<LinkS to="navbar" className="text-white">
								Home
							</LinkS>
						</li>
						<li className="position-relative header__nav__navigations__navigation">
							<LinkS to="introducting" className="text-white">
								Info
							</LinkS>
						</li>
						<li className="position-relative header__nav__navigations__navigation">
							<LinkS to="pricing" className="text-white">
								Price
							</LinkS>
						</li>
						<li className="position-relative header__nav__navigations__navigation">
							<LinkS to="contact" className="text-white">
								Contact
							</LinkS>
						</li>
					</ul>
					<div className="col-4 d-flex justify-content-end">
						<div className="header__nav__hamburger" onClick={handleSidebar}>
							<span className={`header__nav__hamburger__line nav__hamburger__line--rotate-first ${sidebar ? "active" : ""}`}></span>
							<span className={`header__nav__hamburger__line nav__hamburger__line--dissapear ${sidebar ? "active" : ""}`}></span>
							<span className={`header__nav__hamburger__line nav__hamburger__line--rotate-end ${sidebar ? "active" : ""}`}></span>
						</div>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
