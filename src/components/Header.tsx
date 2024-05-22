import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import logo from '../images/logio.png';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="Dehay Mobile Logo" />
          </a>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <nav>
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/support" onClick={toggleMenu}>Support</Link></li>
            <li><Link to="/about-us" onClick={toggleMenu}>About Us</Link></li>
            <li><Link to="/contact-us" onClick={toggleMenu}>Contact Us</Link></li>
          </ul>
        </nav>
        <div className="language">
          <select>
            <option value="en">EN</option>
            {/* Add more language options */}
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
