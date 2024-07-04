import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/LoginPage.css';
import logo from '../images/logio.png';

interface Country {
  code: string;
  flag: string;
  name: string;
}

const LoginPage: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country>({
    code: '+1',
    flag: 'https://flagcdn.com/w20/us.png',
    name: 'US'
  });
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const countries: Country[] = [
    { code: '+1', flag: 'https://flagcdn.com/w20/us.png', name: 'US' },
    { code: '+44', flag: 'https://flagcdn.com/w20/gb.png', name: 'GB' },
    { code: '+91', flag: 'https://flagcdn.com/w20/in.png', name: 'IN' }
  ];

  useEffect(() => {
    const authToken = sessionStorage.getItem('authToken');
    if (authToken) {
      navigate('/');
    }
  }, [navigate]);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const country = countries.find(c => c.code === e.target.value);
    if (country) {
      setSelectedCountry(country);
    }
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (/^\d*$/.test(value)) {
      setPhoneNumber(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const fullPhoneNumber = `${selectedCountry.code}${phoneNumber}`;
      const response = await axios.post(
        'https://dehaymobile.app:4443/api/sendloginotp',
        new URLSearchParams({
          username: fullPhoneNumber,
          sms_service_provider: 'fanytel'
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      );


      if (response.data.status === 'OK' && response.data.code === 200) {
        console.log('OTP sent successfully');
        sessionStorage.setItem('phoneNumber', fullPhoneNumber);
        navigate('/otp');
      } else {
        setError('Failed to send OTP. Please try again.');
        console.error('Unexpected response status:', response.data.status);
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
      console.error('Error sending OTP:', err);
      
      if (axios.isAxiosError(err)) {
        console.error('Axios error details:', {
          message: err.message,
          response: err.response?.data,
          status: err.response?.status,
          headers: err.response?.headers,
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
    <div className="login-container">
      <img src={logo} alt="Dehay Mobile Logo" className="login-logo" />
      <h1 className="login-title">Sign up or log in with your mobile phone number</h1>
      <form onSubmit={handleSubmit}>
        <div className="login-input-group">
          <div className="login-country-code-selector">
            <img src={selectedCountry.flag} alt={`${selectedCountry.name} Flag`} className="login-flag-icon" />
            <select 
              className="login-country-select"
              value={selectedCountry.code}
              onChange={handleCountryChange}
            >
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.code}
                </option>
              ))}
            </select>
          </div>
          <input
            type="tel"
            className="login-phone-input"
            placeholder="Enter your number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            required
          />
        </div>
        <button 
          type="submit" 
          className="login-submit-button"
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : 'Get a code by SMS'}
        </button>
      </form>
      {error && <p className="login-error-message">{error}</p>}
    </div>
  </div>
  );
};

export default LoginPage;