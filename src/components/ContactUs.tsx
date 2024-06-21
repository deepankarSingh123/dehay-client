import React from "react";
import "../css/ContactUs.css";
import callIcon from "../images/Call.png";
import chatIcon from "../images/Chat Now.png";
import faqIcon from "../images/faq.png";
import locationIcon from "../images/Calling plans.png";
import userIcon from "../images/user.png";
import emailIcon from "../images/email.png";

const ContactUs: React.FC = () => {
  return (
    <section className="contact-us-page">
      <div className="contact-header">
        <h2>Contact us</h2>
        <h1>
          Got questions?
          <br />
          We’re here to help
        </h1>
      </div>
      <div className="contact-content">
        <div className="contact-info">
          <div className="important">
            <h3>Important</h3>
            <p>
              For your security, do not include any login, credit card or bank
              information in a chat or message.
            </p>
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
              <img src={locationIcon} alt="Location" className="contact-icon" />
              <p>10107 Jasper Avenue, Edmonton, Alberta T5J 1W8</p>
            </div>
          </div>
        </div>
        <div className="contact-form-wrapper">
          <div className="contact-form">
            <form>
              <div className="form-group">
                <label htmlFor="interest">Issue Type</label>
                <select id="interest" className="form-control">
                  <option value="">Select issue type</option>
                  <option value="International Calling">International Calling</option>
                  <option value="Mobile Top-up">Mobile Top-up</option>
                  <option value="E-Gift">E-Gift</option>
                  <option value="Others">Others</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div className="form-group with-icon">
                <label htmlFor="name">Name</label>
                <div className="input-icon-wrapper">
                  <img src="userIcon" alt="User Icon" className="input-icon" />
                  <input
                    type="text"
                    id="name"
                    className="form-control with-icon"
                    placeholder="Enter your name"
                  />
                </div>
              </div>
              <div className="form-group with-icon">
                <label htmlFor="email">Email</label>
                <div className="input-icon-wrapper">
                  <img src="emailIcon" alt="Email Icon" className="input-icon" />
                  <input
                    type="email"
                    id="email"
                    className="form-control with-icon"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className="form-control"
                  placeholder="Enter your message"
                ></textarea>
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
