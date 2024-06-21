import React, { useState } from "react";
import "../css/Services.css";
import nigeriaFlag from "../images/nigeria.png";
import ghanaFlag from "../images/ghana.png";
import indiaFlag from "../images/india.png";
import jamaicaFlag from "../images/jamaica.png";
import eritreaFlag from "../images/eritrea.png";
import ethiopiaFlag from "../images/ethiopia.png";
import service1 from "../images/aboutus-internat.png"; // Example service image
import service2 from "../images/aboutus-mobile.png"; // Example service image
import appScreen from "../images/about-us-img2.png";
import google from "../images/goo.png";
import apple from "../images/ios.png";
import appLogo from "../images/logio.png";
import faqIcon from "../images/faq.png";
import callIcon from "../images/Call.png";
import chatIcon from "../images/Chat Now.png";


const countries = [
  { name: "Nigeria", code: "+234", flag: "🇳🇬" },
  { name: "Ghana", code: "+233", flag: "🇬🇭" },
  { name: "India", code: "+91", flag: "🇮🇳" },
  { name: "Jamaica", code: "+1", flag: "🇯🇲" },
  { name: "Eritrea", code: "+291", flag: "🇪🇷" },
  { name: "Ethiopia", code: "+251", flag: "🇪🇹" },
];



const Services: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleCountryClick = (country: string) => {
    setSelectedCountry(country);
    setIsExpanded(false);
  };

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);

  }
  return (
    <div className="services-page">
      <header className="hero">
        <h1>Stay Connected Anywhere, Anytime</h1>
        <h2>International Calling Made Easy</h2>
        <p>Choose your destinations to see what we can offer</p>
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
                key={country.code}
                className="expandable-item"
                onClick={() =>
                  handleCountryClick(`${country.flag} ${country.name}`)
                }
              >
                <span className="flag">{country.flag}</span>
                <span className="name">{country.name}</span>
                <span className="code">{country.code}</span>
              </div>
            ))}
          </div>
        )}
      </div>
        <div className="country-flags">
          <img src="nigeriaFlag" alt="Nigeria" />
          <img src="ghanaFlag" alt="Ghana" />
          <img src="indiaFlag" alt="India" />
          <img src="jamaicaFlag" alt="Jamaica" />
          <img src="eritreaFlag" alt="Eritrea" />
          <img src="ethiopiaFlag" alt="Ethiopia" />
        </div>
      </header>
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <div className="image-container">
              <img src={service1} alt="International Calling" />
            </div>
            <div className="service-content">
              <h3>International Calling</h3>
              <p>
                Forget about disconnection. Now staying in touch is only one app
                away. Talk and text with a reliable, low-cost service that
                delivers on its promise to help you keep in touch across the
                miles. Create a new account now and get $2 to start calling.
              </p>
              <a href="/" className="learn-more">
                Learn more &rarr;
              </a>
            </div>
          </div>
          <div className="service-card1">
            <div className="image-container">
              <img src={service2} alt="Mobile Topup" />
            </div>
            <div className="service-content">
              <h3>Mobile Topup</h3>
              <p>
                An easier way to stay connected with loved ones and ensure their
                mobile never runs out of balance. With Dehay Mobile you can send
                mobile airtime to over 270 carriers across 102 countries with
                just a few clicks.
              </p>
              <a href="/mobile-topup" className="learn-more">
                Learn more &rarr;
              </a>
            </div>
          </div>
          <div className="app-promo-section">
            <div className="app-image">
              <img src={appScreen} alt="App Screen" />
            </div>
            <div className="app-details">
              <img src={appLogo} alt="App Logo" className="app-logo" />
              <h2>
                Call the World with <br />{" "}
                <span className="purple">Dehay Mobile App</span>
              </h2>{" "}
              <p>
                Great rates, free calls, and crystal-clear connection. Stay in
                touch wherever you are with our mobile app.
              </p>
              <div className="app-stores">
                <a href="/" className="app-store">
                  <img src={apple} alt="Download on the App Store" />
                </a>
                <a href="/" className="play-store">
                  <img src={google} alt="Get it on Google Play" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="still-have-questions">
          <h2>Still have questions?</h2>
          <div className="questions-cards">
            <div className="question-card">
              <img src={faqIcon} alt="FAQs" className="question-icon" />
              <p>See FAQs</p>
            </div>
            <div className="question-card">
              <img src={callIcon} alt="Call" className="question-icon" />
              <p>Call +1-780-938-3515</p>
            </div>
            <div className="question-card">
              <img src={chatIcon} alt="Chat" className="question-icon" />
              <p>Chat Now</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
