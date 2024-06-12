// src/components/Footer.tsx
import React from 'react';
import '../css/Footer.css';
import facebook from '../images/fac.png'
import twitter from '../images/tw.png'
import youtube from '../images/yo.png'
import insta from '../images/in.png'
import logo from '../images/logio.png'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <a href="/"><img src={logo} alt="Dehay Mobile Logo" /></a>
          <p>Stay connected to friends, family,<br /> and colleagues from anywhere in the world.</p>
          <div className="footer-social">
            <a href="https://facebook.com"><img src={facebook} alt="Facebook" /></a>
            <a href="https://instagram.com"><img src={insta} alt="Instagram" /></a>
            <a href="https://twitter.com"><img src={twitter} alt="Twitter" /></a>
            <a href="https://youtube.com"><img src={youtube} alt="YouTube" /></a>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h3>Services</h3>
            <ul>
              <li><a href="/">International Calling</a></li>
              <li><a href="/">Mobile Top-Up</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Community</h3>
            <ul>
              <li><a href="/refer-a-friend">Refer a Friend - Get Bonus</a></li>
              <li><a href="/">Blog</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li><a href="/about-us">About us</a></li>
              <li><a href="/support">FAQ</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Dehay Mobile Ltd. All Rights Reserved. <a href="/terms-and-conditions">Terms of Use</a> | <a href="/privacy-policy">Privacy Policy</a></p>
      </div>
    </footer>
  );
};

export default Footer;
