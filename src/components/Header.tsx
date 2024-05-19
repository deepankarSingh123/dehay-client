// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

const Header: React.FC = () => {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <img src="logo.png" alt="Dehay Mobile Logo" />
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/support">Support</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
          </ul>
        </nav>
        <div className="language">
          <select>
            <option value="en">EN</option>
            {/* Add more language options */}
          </select>
        </div>
        <div className="auth-buttons">
          <button className="login-button">Login</button>
          <button className="signup-button">Join Us</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
