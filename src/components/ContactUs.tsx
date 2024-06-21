import React, { useState } from "react";
import "../css/ContactUs.css";
import callIcon from "../images/Call.png";
import chatIcon from "../images/Chat Now.png";
import faqIcon from "../images/faq.png";
import locationIcon from "../images/Calling plans.png";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    interest: "",
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Dummy POST API call
      const response = await fetch("https://api.example.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit the form. Please try again.");
    }
  };

  return (
    <section className="contact-us-page">
      <div className="contact-header">
        <h2>Contact us</h2>
        <h1>
          Got questions?
          <br />
          We're here to help
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
          {isSubmitted ? (
            <div className="thank-you-message">
              <h2>Thank you for submitting!</h2>
              <p>We'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="interest">Issue Type</label>
                  <select
                    id="interest"
                    name="interest"
                    className="form-control"
                    value={formData.interest}
                    onChange={handleInputChange}
                  >
                    <option value="">Select issue type</option>
                    <option value="International Calling">
                      International Calling
                    </option>
                    <option value="Mobile Top-up">Mobile Top-up</option>
                    <option value="E-Gift">E-Gift</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <div className="input-icon-wrapper">
                    <span className="input-icon">👤</span>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control with-icon"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <div className="input-icon-wrapper">
                    <span className="input-icon">✉️</span>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control with-icon"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>{" "}
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
