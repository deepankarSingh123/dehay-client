import React, { useState } from "react";
import "../css/CountryInternationalCalling.css";
import phone1 from "../images/Group 1686556119.png";
import phone2 from "../images/Mask group.png";
import google from "../images/goo.png";
import apple from "../images/ios.png";
import qr from "../images/qr.png";
import rates from "../images/Great Rates.png";
import security from "../images/Simplicity and Security.png";
import quality from "../images/Excellent quality.png";
import { Link } from "react-router-dom";

const countries = [
  { name: "Nigeria", code: "+234", flag: "🇳🇬" },
  { name: "Ghana", code: "+233", flag: "🇬🇭" },
  { name: "India", code: "+91", flag: "🇮🇳" },
  { name: "Jamaica", code: "+1", flag: "🇯🇲" },
  { name: "Eritrea", code: "+291", flag: "🇪🇷" },
  { name: "Ethiopia", code: "+251", flag: "🇪🇹" },
];

const faqData = [
  {
    question: "How to top up a mobile phone with Dehay Revolution?",
    answer: "Lorem Ipsum Text...",
  },
  {
    question: "How to top up a mobile phone online?",
    answer: "Lorem Ipsum Text...",
  },
  {
    question: "How to top up someone else's phone?",
    answer: "Lorem Ipsum Text...",
  },
  {
    question: "Why is Dehay Revolution the best site for mobile recharge?",
    answer: "Lorem Ipsum Text...",
  },
];

const CountryInternationalCalling: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleCountryClick = (country: string) => {
    setSelectedCountry(country);
    setIsExpanded(false);
  };

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container">
      <h1>Save on international calling</h1>
      <p>
        Stay connected with your loved ones and get a $2 bonus when you create a
        new account with Dehay mobile.
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
      <div className="app-section">
        <div className="app-info">
          <div className="app-header">
            <img src={phone1} alt="App on Phone" className="app-image" />
            <div className="app-text">
              <h2>
                The Best International
                <br /> Calling App
              </h2>
              <p>
                Our unique app is ready to deliver on its promise of
                reliability, low cost, and a high quality connection. You can
                also call and send messages app to app for free over Wi-Fi. So,
                whether you’re trying to call a family member, set up a business
                meeting, or reconnect with a long-lost friend, we’re here to
                help.
              </p>
              <p>
                Distance shouldn’t mean disconnected. At DEHAY Mobile, it’s our
                mission to help you stay in touch despite the miles. Make
                international calls, send messages, and stay connected with some
                of the best rates for calling overseas.
              </p>
            </div>
          </div>
        </div>
        <div className="app-features">
          <h3>
            Dehay Mobile Calling
            <br /> App Features
          </h3>
          <div className="features">
            <div className="feature">
              <h4>Call</h4>
              <p>Any country with great rates and crystal clear connection</p>
            </div>
            <div className="feature">
              <h4>Enjoy</h4>
              <p>Promotion from your favorite and crystal clear connection</p>
            </div>
            <div className="feature">
              <h4>Send</h4>
              <p>Mobile top-ups to your friends and family in a few clicks</p>
            </div>
            <div className="feature">
              <h4>Message</h4>
              <p>And share your photos and videos for free</p>
            </div>
          </div>
          <div className="app-download">
            <img src={apple} alt="Download on the App Store" />
            <img src={google} alt="Get it on Google Play" />
            <img src={qr} alt="Scan QR to download app" />
          </div>
        </div>
        <div className="phone-image-section">
          <img src={phone2} alt="Phone" className="phone-image-right" />
        </div>
      </div>
      <div className="benefits-section">
        <h2>Why make international calls with Dehay Mobile?</h2>
        <div className="benefits-cards">
          <div className="benefit-card">
            <div className="benefit-icon">
              <img src={rates} alt="Great Rates" />
            </div>
            <h3>Great Rates</h3>
            <p>
              Who said staying connected had to cost a fortune? Whether you’re
              calling internationally to Haiti, Kenya, Nigeria, Ghana or
              Guatemala with DEHAY Mobile, you can rest assured that you are
              getting the best calling rates around. This is a better way to
              make cheap international calls, no matter your location. Save up
              to 90% compared to a standard mobile carrier.
            </p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">
              <img src={quality} alt="Excellent Quality" />
            </div>
            <h3>Excellent Quality</h3>
            <p>
              Experience the best call quality with DEHAY Mobile. Whether you’re
              calling over Wi-Fi or using mobile data, our app ensures that you
              get the best possible connection, with crystal clear audio and
              minimal interruptions.
            </p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">
              <img src={security} alt="Simplicity and Security" />
            </div>
            <h3>Simplicity and Security</h3>
            <p>
              Our app is easy to use, with a simple interface that makes it easy
              to make calls, send messages, and top-up mobile accounts. Plus,
              with our strong security measures, you can be sure that your calls
              and data are safe.
            </p>
          </div>
        </div>
      </div>
      <div className="testimonials-section">
        <h2>What Our Customers Say About Dehay Mobile App</h2>
        <div className="testimonials-cards">
          <div className="testimonial-card">
            <img
              src="customer1.png"
              alt="Customer 1"
              className="testimonial-img"
            />
            <h3>John Jamees</h3>
            <div className="stars">★★★★★</div>
            <p>
              The best app to call international. Thank you for your service.
              Wonderful app to call Honduras, easy, clear.
            </p>
          </div>
          <div className="testimonial-card">
            <img
              src="customer2.png"
              alt="Customer 2"
              className="testimonial-img"
            />
            <h3>Theresa Webb</h3>
            <div className="stars">★★★★★</div>
            <p>
              The best app to call international. Thank you for your service.
              Wonderful app to call Honduras, easy, clear.
            </p>
          </div>
          <div className="testimonial-card">
            <img
              src="customer3.png"
              alt="Customer 3"
              className="testimonial-img"
            />
            <h3>Eleanor Pena</h3>
            <div className="stars">★★★★★</div>
            <p>
              The best app to call international. Thank you for your service.
              Wonderful app to call Honduras, easy, clear.
            </p>
          </div>
          <div className="testimonial-card">
            <img
              src="customer4.png"
              alt="Customer 4"
              className="testimonial-img"
            />
            <h3>Brooklyn Simmons</h3>
            <div className="stars">★★★★★</div>
            <p>
              The best app to call international. Thank you for your service.
              Wonderful app to call Honduras, easy, clear.
            </p>
          </div>
          <div className="testimonial-card">
            <img
              src="customer5.png"
              alt="Customer 5"
              className="testimonial-img"
            />
            <h3>Leslie Alexander</h3>
            <div className="stars">★★★★★</div>
            <p>
              The best app to call international. Thank you for your service.
              Wonderful app to call Honduras, easy, clear.
            </p>
          </div>
          <div className="testimonial-card">
            <img
              src="customer6.png"
              alt="Customer 6"
              className="testimonial-img"
            />
            <h3>Robert Fox</h3>
            <div className="stars">★★★★★</div>
            <p>
              The best app to call international. Thank you for your service.
              Wonderful app to call Honduras, easy, clear.
            </p>
          </div>
        </div>
      </div>
      <div className="faq-section">
        <h2>Got questions?</h2>
        <p>
          At Dehay Revolution we do our best to help you solve all the possible
          issues. Please check out our FAQ page or contact our customer service
          team if you have any questions.
        </p>
        <div className="faq-buttons">
          <Link to="/contact-us" className="contact-us-btn">
            Contact us
          </Link>
          <Link to="/support" className="faq-btn">
            Faq
          </Link>
        </div>
        <div className="faq-accordion">
          {faqData.map((item, index) => (
            <div className="faq-item" key={index}>
              <div
                className={`faq-question ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => handleToggle(index)}
              >
                {item.question}
                <span className="faq-icon">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryInternationalCalling;
