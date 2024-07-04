import React from 'react';
import '../css/AboutUs.css';
import aboutusimg1 from '../images/about-us-img1.png';
import aboutusimg2 from '../images/about-us-img2.png';
import aboutussatisfied from '../images/aboutus-satisfied.png';
import aboutus90 from '../images/aboutus-90.png';
import aboutus200 from '../images/aboutus-200.png';
import aboutussupport from '../images/aboutus-support.png';
import faqIcon from '../images/faq.png';
import callIcon from '../images/Call.png';
import chatIcon from '../images/Chat Now.png';
import service1 from "../images/aboutus-internat.png"; // Example service image
import service2 from "../images/aboutus-mobile.png"; // Example service image


const AboutUs: React.FC = () => {
  return (
    <div className="about-us-page">
      <section className="about-hero">
        <h1>About DEHAY MOBILE</h1>
        <p>
          DEHAY Mobile is more than an app. It's about connecting people.
          <br />
          We provide cheap international calls to mobiles and landlines, from anywhere in the world.
        </p>
        {/* <button className="about-signup-button">Signup</button> */}
      </section>

      <section className="about-who-we-are">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            Dehay Mobile is a team of dedicated professionals who care about keeping people
            connected. Quality is at the heart of what we do. The desire to help people connect
            with friends and loved ones around the world is what drives us every day.
          </p>
          <p>
            We founded our calling service in Canada back in 2017 to allow people to stay connected
            with each other from anywhere in the world. Since then, we have expanded enormously,
            attracting hundreds of thousands of new users and adding new features to our app that
            they love.
          </p>
          <p>
            Thanks to our extensive connections to carriers around the world and our constant
            search for better quality VoIP routes, our international calling app offers the lowest
            possible rates with no compromise on quality.
          </p>
          <p>
            High international calling rates are now a thing of the past.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutusimg1} alt="About us" />
        </div>
      </section>

      <section className="about-removing-borders">
        <div className="about-app-image">
          <img src={aboutusimg2} alt="Removing Borders" />
        </div>
        <div className="about-borders-content">
          <h2>Removing Borders</h2>
          <p>
            International migration is a modern reality. People are crossing borders either running from something
            or in search of better opportunities. They conduct business overseas and travel the world for personal
            enrichment. It’s more important than ever for people to stay connected to friends and loved ones
            around the globe.
          </p>
          <p>
            Dehay Mobile helps bridge the distance.
          </p>
          <p>
            Today, not everyone has access to WhatsApp, Viber or Telegram to make free international calls over
            WiFi. Many people need to reach family and friends who only have a standard calling plan on a mobile
            phone or landline.
          </p>
          <p>
            Dehay mobile makes international calling cheap and accessible to everyone. It doesn’t matter if the person
            you’re calling has access to the internet – you can make calls to any mobile or landline anywhere in
            the world at the lowest rates available.
          </p>
          <p>
            Our everyday mission at Dehay mobile is to tear down the borders that divide us. The first step is to make
            international calling available to everyone, regardless of their social or economic background.
          </p>
          <p>
            That’s why Dehay mobile is available on all platforms (Google Play, App Store, Huawei App Gallery), with easy
            sign-up, no contracts or commitments and cheap affordable rates.
          </p>
        </div>
      </section>

      <section className="about-features">
        <div className="about-feature-card">
          <img src={aboutus200} alt="Countries" />
          <p>200+<br />Countries you can call via Dehay</p>
        </div>
        <div className="about-feature-card">
          <img src={aboutussatisfied} alt="Users" />
          <p>9.5/10<br />Satisfied users</p>
        </div>
        <div className="about-feature-card">
          <img src={aboutus90} alt="Savings" />
          <p>Up to 90%<br />Savings on international calls</p>
        </div>
        <div className="about-feature-card">
          <img src={aboutussupport} alt="Support" />
          <p>24/7 support<br />Answers within 2 minutes</p>
        </div>
      </section>

      <section className="about-services">
        <h2>Our Services</h2>
        <div className="about-service-cards">
          <div className="about-service-card">
            <div className="about-image-container">
              <img src={service1} alt="International Calling" />
            </div>
            <div className="about-service-content">
              <h3>International Calling</h3>
              <p>
                Forget about disconnection. Now staying in touch is only one app
                away. Talk and text with a reliable, low-cost service that
                delivers on its promise to help you keep in touch across the
                miles. Create a new account now and get $2 to start calling.
              </p>
              <a href="/" className="about-learn-more">
                Learn more &rarr;
              </a>
            </div>
          </div>
          <div className="about-service-card">
            <div className="about-image-container">
              <img src={service2} alt="Mobile Topup" />
            </div>
            <div className="about-service-content">
              <h3>Mobile Topup</h3>
              <p>
                An easier way to stay connected with loved ones and ensure their
                mobile never runs out of balance. With Dehay Mobile you can send
                mobile airtime to over 270 carriers across 102 countries with
                just a few clicks.
              </p>
              <a href="/mobile-topup" className="about-learn-more">
                Learn more &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="about-still-have-questions">
        <h2>Still have questions?</h2>
        <div className="about-questions-cards">
          <div className="about-question-card">
            <img src={faqIcon} alt="FAQs" className="about-question-icon" />
            <p>See FAQs</p>
          </div>
          <div className="about-question-card">
            <img src={callIcon} alt="Call" className="about-question-icon" />
            <p>Call +1-780-938-3515</p>
          </div>
          <div className="about-question-card">
            <img src={chatIcon} alt="Chat" className="about-question-icon" />
            <p>Chat Now</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
