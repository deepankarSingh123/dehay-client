import React, { useState } from 'react';
import '../css/OTPPage.css';
import logo from '../images/logio.png'; // Update with the correct path to your logo image

const OTPPage: React.FC = () => {
  const [otp, setOtp] = useState('');

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (/^\d*$/.test(value)) {
      setOtp(value);
    }
  };

  return (
    <div className="otp-page">
      <div className="otp-container">
        <img src={logo} alt="Logo" className="logo" />
        <h2>We sent a verification code to your mobile device</h2>
        <p>Please enter the SMS code we sent to +1 587 568 7162</p>
        <form className="otp-form">
          <div className="form-group">
            <input
              type="text"
              className="otp-input"
              placeholder="Enter verification code"
              value={otp}
              onChange={handleOtpChange}
            />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
        <div className="resend-section">
          <span className="resend">Resend SMS</span>
          <span className="timer">01:42</span>
        </div>
      </div>
    </div>
  );
};

export default OTPPage;
