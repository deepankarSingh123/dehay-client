import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import logo from '../images/logio.png';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      setServicesDropdownOpen(false); // Close the services dropdown when opening the menu
    }
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="Dehay Mobile Logo" />
          </a>
        </div>
        <nav>
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li 
              className={`dropdown ${servicesDropdownOpen ? 'open' : ''}`} 
              onMouseEnter={toggleServicesDropdown} 
              onMouseLeave={toggleServicesDropdown}
              onClick={toggleServicesDropdown} // Add click handler for mobile
            >
              <span className="nav-link">Services</span>
              {servicesDropdownOpen && (
                <ul className="dropdown-menu">
                  <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
                  <li><Link to="/country-international-calling" onClick={toggleMenu}>International Calling</Link></li>
                  <li><Link to="/service3" onClick={toggleMenu}>Service 3</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="/support" onClick={toggleMenu}>Support</Link></li>
            <li><Link to="/contact-us" onClick={toggleMenu}>Contact Us</Link></li>
          </ul>
        </nav>
        <div className="auth-language-container">
          <div className="language">
            <select>
              <option value="en">EN</option>
              {/* Add more language options */}
            </select>
          </div>
          <div className="auth-buttons">
            <Link to="/login" className="login-button">Login</Link>
            <Link to="/join-us" className="join-button">Join Us</Link>
          </div>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
