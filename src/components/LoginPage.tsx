import React, { useState } from 'react';
import '../css/LoginPage.css';
import logo from '../images/logio.png'; // Update with the correct path to your logo image

const LoginPage: React.FC = () => {
  const [countryCode, setCountryCode] = useState('+1');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (/^\d*$/.test(value)) {
      setPhoneNumber(value);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <img src={logo} alt="Logo" className="logo" />
        <h2>Sign up or log in with your mobile phone number</h2>
        <form className="login-form">
          <div className="form-group">
            <select 
              className="country-code" 
              value={countryCode} 
              onChange={(e) => setCountryCode(e.target.value)}
            >
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
              <option value="+91">🇮🇳 +91</option>
              {/* Add more country codes as needed */}
            </select>
            <input 
              type="tel" 
              className="phone-input" 
              placeholder="Enter your number" 
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </div>
          <button type="submit" className="submit-button">Get a code by SMS</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
