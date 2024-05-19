import React from 'react';
import '../css/AppPromo.css';

const AppPromo: React.FC = () => {
  return (
    <div className="app-promo">
      <h2>Start using the <br />Dehay Mobile app today!</h2>
      <div className="app-buttons">
        <img src="apple" alt="Download on the App Store" className="app-store" />
        <img src="google" alt="Get it on Google Play" className="google-play" />
      </div>
    </div>
  );
};

export default AppPromo;
