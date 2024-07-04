import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/OTPPage.css';
import logo from '../images/logio.png';

const OTPPage: React.FC = () => {
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [timer, setTimer] = useState(120); // 2 minutes in seconds
  const [canResend, setCanResend] = useState(false);
  const navigate = useNavigate();
  const phoneNumber = sessionStorage.getItem('phoneNumber') || '';

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      setCanResend(true);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (/^\d*$/.test(value) && value.length <= 4) {
      setOtp(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    console.log('Sending OTP verification request with data:', {
      username: phoneNumber,
      otp: otp
    });

    try {
      const response = await axios.post(
        'https://dehaymobile.app:4443/api/verifyotp',
        new URLSearchParams({
          username: phoneNumber,
          otp: otp
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          withCredentials: true // This ensures cookies are sent with the request
        }
      );


      if (response.data.code === 200) {
        console.log('OTP verified successfully');
        const password = response.data.message.password;
        sessionStorage.setItem('authToken', password);
        sessionStorage.setItem('phoneNumber', phoneNumber);
        navigate('/');
      } else {
        setError('Unexpected response. Please try again.');
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error('Error verifying OTP:', err);
        console.error('Axios error details:', {
          message: err.message,
          response: err.response?.data,
          status: err.response?.status,
          headers: err.response?.headers,
        });

        if (err.response?.status === 401) {
          setError('Invalid OTP. Please check and try again.');
        } else {
          setError(`An error occurred (${err.response?.status || 'unknown'}). Please try again later.`);
        }
      } else {
        console.error('Unexpected error:', err);
        setError('An unexpected error occurred. Please try again later.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOTP = async () => {
    if (!canResend) return;
    
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        'https://dehaymobile.app:4443/api/sendloginotp',
        new URLSearchParams({
          username: phoneNumber,
          sms_service_provider: 'fanytel'
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          withCredentials: true // This ensures cookies are sent with the request
        }
      );

      console.log('Resend OTP Response:', response);

      if (response.data.status === 'OK' && response.data.code === 200) {
        console.log('OTP resent successfully');
        setTimer(120);
        setCanResend(false);
      } else {
        setError('Failed to resend OTP. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
      console.error('Error resending OTP:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="otp-page">
      <div className="otp-container">
        <img src={logo} alt="Logo" className="logo" />
        <h2>We sent a verification code to your mobile device</h2>
        <p>Please enter the SMS code we sent to {phoneNumber}</p>
        <form className="otp-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="otp-input"
              placeholder="Enter verification code"
              value={otp}
              onChange={handleOtpChange}
              required
              maxLength={4}
            />
          </div>
          <button 
            type="submit" 
            className="submit-button"
            disabled={isLoading}
          >
            {isLoading ? 'Verifying...' : 'Submit'}
          </button>
        </form>
        {error && <p className="error-message">{error}</p>}
        <div className="resend-section">
          <span 
            className={`resend ${!canResend ? 'disabled' : ''}`}
            onClick={handleResendOTP}
          >
            Resend SMS
          </span>
          <span className="timer">{formatTime(timer)}</span>
        </div>
      </div>
    </div>
  );
};

export default OTPPage;