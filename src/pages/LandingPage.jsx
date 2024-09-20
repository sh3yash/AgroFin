import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to the Agri-Finance Platform</h1>
      <p>Empowering farmers with easy access to financial services and loan management.</p>
      <div className="cta-buttons">
        <Link to="/register" className="btn">Sign Up</Link>
        <Link to="/login" className="btn">Login</Link>
      </div>
    </div>
  );
};

export default LandingPage;
