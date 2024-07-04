import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import logo from '../images/logio.png';
import { logout } from './LogOut';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = () => {
      const authToken = sessionStorage.getItem('authToken');
      setIsLoggedIn(!!authToken);
    };

    checkLoginStatus();
    window.addEventListener('storage', checkLoginStatus);

    return () => {
      window.removeEventListener('storage', checkLoginStatus);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      setServicesDropdownOpen(false);
      setUserDropdownOpen(false);
    }
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  const toggleUserDropdown = () => {
    setUserDropdownOpen(!userDropdownOpen);
  };

  const handleLogout = async () => {
    await logout();
    setIsLoggedIn(false);
    setUserDropdownOpen(false);
  };

  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Dehay Mobile Logo" />
          </Link>
        </div>
        <nav>
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li 
              className={`dropdown ${servicesDropdownOpen ? 'open' : ''}`} 
              onMouseEnter={toggleServicesDropdown} 
              onMouseLeave={toggleServicesDropdown}
              onClick={toggleServicesDropdown} 
            >
              <span className="nav-link">Services</span>
              {servicesDropdownOpen && (
                <ul className="dropdown-menu">
                  <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
                  <li><Link to="/" onClick={toggleMenu}>International Calling</Link></li>
                  <li><Link to="/mobile-topup" onClick={toggleMenu}>Mobile Top-up</Link></li>
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
          {isLoggedIn ? (
            <div className="user-dropdown-container">
              <div 
                className="user-icon-wrapper"
                onClick={toggleUserDropdown}
              >
                <div className="header-user-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                  </svg>
                </div>
              </div>
              {userDropdownOpen && (
                <ul className="header-user-dropdown-menu">
                  <li><Link to="/balance">Balance</Link></li>
                  <li><Link to="/transaction-history">Transaction History</Link></li>
                  <li><button onClick={handleLogout}>Logout</button></li>
                </ul>
              )}
            </div>
          ) : (
            <div className="header-auth-buttons">
              <Link to="/login" className="header-login-button">Login</Link>
              <Link to="/login" className="header-join-button">Join Us</Link>
            </div>
          )}
        </div>
        <div className="header-menu-toggle" onClick={toggleMenu}>
          <div className="header-bar"></div>
          <div className="header-bar"></div>
          <div className="header-bar"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;