import React from 'react';
import '../css/InternationalCalling.css';
import indiaCall from '../images/12.png';
import callingCards from '../images/aboutus-satisfied.png';
import internationalNumbers from '../images/15.png';
import cheapCalls from '../images/Background1.png';
import ukCall from '../images/Background.png';

const MobileInternationalCalling: React.FC = () => {
  return (
    <section className="recent-articles mobile">
      <h2>International Calling</h2>
      <div className="article-grid-mobile">
        <div className="article-card">
          <img src={indiaCall} alt="How to call India from the US" />
          <div className="article-content">
            <h3>How to call India from the US</h3>
            <a href="/" className="read-article">Read Article &gt;</a>
          </div>
        </div>
        <div className="article-card">
          <img src={callingCards} alt="International calling cards for cell phones & landlines" />
          <div className="article-content">
            <h3>International calling cards for cell phones & landlines</h3>
            <a href="/" className="read-article">Read Article &gt;</a>
          </div>
        </div>
        <div className="article-card">
          <img src={internationalNumbers} alt="Calling international numbers from the U.S." />
          <div className="article-content">
            <h3>Calling international numbers from the U.S.</h3>
            <a href="/" className="read-article">Read Article &gt;</a>
          </div>
        </div>
        <div className="article-card">
          <img src={cheapCalls} alt="How to make cheap & free international calls to landlines" />
          <div className="article-content">
            <h3>How to make cheap & free international calls to landlines</h3>
            <a href="/" className="read-article">Read Article &gt;</a>
          </div>
        </div>
        <div className="article-card">
          <img src={ukCall} alt="How to call the UK from the US" />
          <div className="article-content">
            <h3>How to call the UK from the US</h3>
            <a href="/" className="read-article">Read Article &gt;</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileInternationalCalling;
