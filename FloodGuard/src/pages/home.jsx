import React, { useState, useEffect } from "react";
import './home.css';
import Notification from '../components/Notification.jsx';

function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id="home">
      {isSmallScreen ? (
        <div className="detailhome">FloodGuard is an advanced flood monitoring and alert system designed to provide real-time updates and warnings about potential flooding. It helps communities stay informed and prepared by using cutting-edge sensor technology and predictive analytics.</div>
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default Home;
