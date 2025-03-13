import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './header.css';

function Header() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="home_header">
            {/* Logo */}
            <div className="logo" onClick={() => navigate("/")}>
                <h3>FloodGuard</h3>
            </div>

            {/* Menu Button (SVG Icon) - Only for Small Screens */}
            <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="white">
                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                </svg>
            </div>

            {/* Navigation Links */}
            <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
                <ul>
                    <li onClick={() => navigate("/Floodmap")}>Live Flood Map</li>
                    <li onClick={() => navigate("/MissingPerson")}>Missing Person</li>
                    <li onClick={() => navigate("/Volunteer")}>Volunteer</li>
                    <li>Donate</li>
                    <li onClick={() => navigate("/About")}>About</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
