import React, { useState } from "react";
import "../css/MobileTopUpService.css";
import connect from "../images/Stay connected.png";
import security from "../images/Simplicity and Security.png";
import network from "../images/Other Services.png";
import balance from "../images/sd.png";
import google from "../images/goo.png";
import apple from "../images/ios.png";
import qr from "../images/qr.png";
import phone1 from "../images/Topup.png";
import logo from "../images/logio.png"

const countries = [
  { name: "Nigeria", flag: "🇳🇬" },
  { name: "Ethiopia", flag: "🇪🇹" },
  { name: "Uganda", flag: "🇺🇬" },
  { name: "Haiti", flag: "🇭🇹" },
  { name: "Mexico", flag: "🇲🇽" },
  { name: "Guatemala", flag: "🇬🇹" },
];

const MobileTopUpService: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleCountryClick = (country: string) => {
    setSelectedCountry(country);
    setIsExpanded(false);
  };

  return (
    <div className="mobile-topup-container">
      <h2>Mobile top-up</h2>
      <p>
        Easy and safe way to recharge a mobile phone overseas and stay connected
        to your loved ones.
      </p>
      <div className="expandable">
        <button
          className="expandable-btn"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {selectedCountry ? selectedCountry : "Select a Country ?"}
        </button>
        {isExpanded && (
          <div className="expandable-content">
            {countries.map((country) => (
              <div
                key={country.name}
                className="expandable-item"
                onClick={() =>
                  handleCountryClick(`${country.flag} ${country.name}`)
                }
              >
                <span className="flag">{country.flag}</span>
                <span className="name">{country.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="selected-countries">
        {countries.map((country) => (
          <div key={country.name} className="selected-country">
            <span className="flag">{country.flag}</span>
            <span className="name">{country.name}</span>
          </div>
        ))}
      </div>

      {/* New Section */}
      <div className="stay-connected-section">
        <div className="image-container1">
          <img
            src={connect}
            alt="Mobile App Screens"
            className="mobile-screens"
          />
        </div>
        <div className="text-container">
          <h2>Stay connected with your loved ones</h2>
          <p>
            Dehay Mobile offers mobile top-up services as an easy way to stay
            connected with your loved ones back home. Recharge mobile phones
            from more than 270+ carriers across 100+ countries.
          </p>
          <p>
            Give your loved ones the joy of unlimited calling, surfing the web,
            sending messages and all of the options provided by their local
            carriers!
          </p>
        </div>
      </div>
      {/* How to top up section */}
      <div className="how-to-topup-section">
        <h2>How to top up a mobile phone with Dehay Mobile?</h2>
        <div className="topup-steps">
          <div className="step">
            <h4>Create your account</h4>
            <p>
              You can create your account on the website or download our app to
              get started. Personal account will help you get the best deals, be
              aware of special proposals and keep your data safe.
            </p>
          </div>
          <div className="step">
            <h4>Add recipient’s data</h4>
            <p>
              You will be able to add, edit and confirm your recipient’s data
              before sending top-up as well as the preferable billing method -
              debit or credit card. We will automatically identify the country
              and carrier among 270+ carriers across 100+ countries.
            </p>
          </div>
          <div className="step">
            <h4>Select top-up amount</h4>
            <p>
              Choose the top up amount or bundle/plan that best fits the needs
              of your beneficiary or simply repeat a previous transaction and
              press “send”. It is that simple!
            </p>
          </div>
        </div>
        <div className="why-send-recharges-section">
          <h2>Why send mobile recharges with Dehay Mobile?</h2>
          <div className="recharge-steps">
            <div className="step">
              <div className="icon">
                <img src={balance} alt="Balance promotions" />
              </div>
              <h4>Balance promotions</h4>
              <div className="underline"></div>
              <p>
                Enjoy double, triple and even quintuple balance when you send
                mobile top-up to your loved ones overseas. Sign up to receive
                the balance promotions of mobile carriers.
              </p>
            </div>
            <div className="step">
              <div className="icon">
                <img src={network} alt="Extensive carrier network" />
              </div>
              <h4>Extensive carrier network</h4>
              <div className="underline"></div>
              <p>
                We partner with mobile carriers across the world to ensure the
                best service and flexibility for our customers. The BOSS
                Revolution Mobile Top Up service offers you a variety of
                denominations to send mobile top up.
              </p>
            </div>
            <div className="step">
              <div className="icon">
                <img src={security} alt="Security and transparency" />
              </div>
              <h4>Security and transparency</h4>
              <div className="underline"></div>
              <p>
                At BOSS Revolution we care about your personal data and use the
                highest level of security to protect it. We work directly with
                the mobile carriers to ensure transparency of our order process.
              </p>
            </div>
          </div>
        </div>
        <div className="section send-topup">
          <div className="image">
            <img src={phone1} alt="Phone" />
          </div>
          <div className="text">
          <img src={logo} alt="Dehay Mobile Logo" className="logo" />
            <h2>
              Send Topup from the <br />
              Dehay Mobile App
            </h2>
            <p>
              Download our free app and enjoy an even faster and more
              personalized experience.
            </p>
            <div className="downloads">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={apple} alt="Download on the App Store" />
              </a>
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={google} alt="Get it on Google Play" />
              </a>
              <img src={qr} alt="QR Code" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileTopUpService;
