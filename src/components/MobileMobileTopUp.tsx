import React from "react";
import "../css/RecentArticles.css";
import airtel from "../images/61.png";
import mtn from "../images/17.png";
import cubacel from "../images/6.png";
import addMinutes from "../images/19.png";
import textingOptions from "../images/18.png";

const MobileMobileTopUp: React.FC = () => {
  return (
    <section className="recent-articles mobile">
      <h2>Mobile Top-Up</h2>
      <div className="article-grid-mobile">
        <div className="article-card">
          <img src={airtel} alt="How to transfer airtime on Airtel" />
          <div className="article-content">
            <h3>How to transfer airtime on Airtel</h3>
            <a href="/" className="read-article">Read Article &gt;</a>
          </div>
        </div>
        <div className="article-card">
          <img src={mtn} alt="How to transfer & share data on MTN" />
          <div className="article-content">
            <h3>How to transfer & share data on MTN</h3>
            <a href="/" className="read-article">Read Article &gt;</a>
          </div>
        </div>
        <div className="article-card">
          <img src={cubacel} alt="Cubacel promotions: recharge promo offers for Cuba" />
          <div className="article-content">
            <h3>Cubacel promotions: recharge promo offers for Cuba</h3>
            <a href="/" className="read-article">Read Article &gt;</a>
          </div>
        </div>
        <div className="article-card">
          <img src={addMinutes} alt="How do I add minutes to my phone" />
          <div className="article-content">
            <h3>How do I add minutes to my phone</h3>
            <a href="/" className="read-article">Read Article &gt;</a>
          </div>
        </div>
        <div className="article-card">
          <img src={textingOptions} alt="8 Best international texting options" />
          <div className="article-content">
            <h3>8 Best international texting options</h3>
            <a href="/" className="read-article">Read Article &gt;</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileMobileTopUp;
