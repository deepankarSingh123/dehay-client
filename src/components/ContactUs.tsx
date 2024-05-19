import React from 'react';
import '../css/ContactUs.css';
import callIcon from '../images/Call.png';
import chatIcon from '../images/Chat Now.png';
import faqIcon from '../images/faq.png';
import locationIcon from '../images/location-icon.png';

const ContactUs: React.FC = () => {
  return (
    <section className="contact-us">
      <div className="contact-header">
        <h2>Contact us</h2>
        <h1>Got questions?<br />We’re here to help</h1>
      </div>
      <div className="contact-content">
        <div className="contact-info">
          <div className="important">
            <h3>Important</h3>
            <p>For your security, do not include any login, credit card or bank information in a chat or message.</p>
          </div>
          <div className="contact-methods">
            <div className="method">
              <img src={callIcon} alt="Call" className="contact-icon" />
              <p>Call 1-716-215-BOSS (2677)</p>
            </div>
            <div className="method">
              <img src={chatIcon} alt="Chat" className="contact-icon" />
              <p>Start Live Chat</p>
            </div>
            <div className="method">
              <img src={faqIcon} alt="FAQ" className="contact-icon" />
              <p>Visit FAQ Page</p>
            </div>
            <div className="method">
              <img src="locationIcon" alt="Location" className="contact-icon" />
              <p>10107 Jasper Avenue, Edmonton, Alberta T5J 1W8</p>
            </div>
          </div>
        </div>
        <div className="contact-form-wrapper">
          <div className="contact-form">
            <form>
              <div className="form-group">
                <label htmlFor="interest">I'm interested in</label>
                <select id="interest" className="form-control">
                  <option value="">Select product</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" className="form-control" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className="form-control" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" className="form-control" placeholder="Enter your message"></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
