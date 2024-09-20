import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">Agri-Finance Platform</Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/consultpage">Consultation</Link>
        <Link to="/tradingplatform">Trading Platform</Link>
        <Link to="/consultation">Apply Loans</Link>
        <Link to="/contact-us">Contact Us</Link>
        <Link to="/login" className="login-btn">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
