import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './header.css';
function whichmenu(){
    
}

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
                {isMenuOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg> // Close (X) icon
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#e8eaed">
                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                </svg>// Hamburger menu icon
                )}
            </div>

            {/* Navigation Links */}
            <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
                <ul>
                    <li onClick={() =>{ navigate("/Floodmap"); setIsMenuOpen(!isMenuOpen);}}>Live Flood Map</li>
                    <li onClick={() => {navigate("/MissingPerson"); setIsMenuOpen(!isMenuOpen);}}>Missing Person</li>
                    <li onClick={() => {navigate("/Volunteer"); setIsMenuOpen(!isMenuOpen);}}>Volunteer</li>
                    <li>Donate</li>
                    <li onClick={() => {navigate("/About"); setIsMenuOpen(!isMenuOpen);}}>About</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
