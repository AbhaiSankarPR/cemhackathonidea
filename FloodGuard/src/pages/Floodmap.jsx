import React from "react";
import "./Floodmap.css";

function Floodmap() {
    return (
        <div className="Floodmap">
            <div className="options">
                <nav>
                    <ul>
                        <li>Navigation</li>
                        <li>Shelters</li>
                        <li>Closed Roads</li>
                    </ul>
                </nav>
            </div>
            <div className="map">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15785.943643253573!2d76.99886635!3d8.452036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1741508651082!5m2!1sen!2sin"
                    allowFullScreen 
                    loading="eager" 
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
}

export default Floodmap;
