import React from "react";
import "./about.css";

function About() {
    return (
        <div className="about-container">
            <h1>About Us</h1>
            <p>
                Welcome to our platform! We aim to connect people, provide essential services, and 
                support communities through seamless digital interactions.
            </p>

            <h2>Our Mission</h2>
            <p>
                Our mission is to create an accessible, user-friendly environment that empowers individuals 
                to contribute, volunteer, and stay informed. Whether it's helping others, tracking events, 
                or engaging with the community, we provide the tools to make a difference.
            </p>

            <h2>What We Offer</h2>
            <ul>
                <li>📍 Location-based services to find nearby resources</li>
                <li>🤝 Volunteer and community support integration</li>
                <li>📢 Real-time communication for instant updates</li>
                <li>💰 Donation and assistance management</li>
            </ul>

            <h2>Join Us</h2>
            <p>
                Be a part of our initiative! Whether you’re here to help, seek assistance, or explore opportunities, 
                we welcome you to contribute to our growing community.
            </p>
        </div>
    );
}

export default About;
