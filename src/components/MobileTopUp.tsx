import React from "react";
import "../css/RecentArticles.css";
import airtel from "../images/61.png";
import mtn from "../images/17.png";
import cubacel from "../images/6.png";
import addMinutes from "../images/19.png";
import textingOptions from "../images/18.png";
import MobileMobileTopUp from './MobileMobileTopUp';

const MobileTopUp: React.FC = () => {
  return (
    <>
      <section className="recent-articles desktop">
        <h2>Mobile Top-Up</h2>
        <div className="article-grid">
          <div className="article-card wide">
            <div className="image-container half-overlay">
              <img src={airtel} alt="How to transfer airtime on Airtel" />
              <div className="overlay">
                <div className="overlay-content">
                  <h3>How to transfer airtime on Airtel</h3>
                  <p>
                    How can you share your Airtel credit with family and friends?
                    Follow these quick and easy steps to transfer airtime on
                    Airtel and stay connected with your loved ones.<br /><br /><br /><br />
                  </p>
                  <a href="/" className="read-article">
                    Read Article &gt;
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="article-card tall">
            <div className="image-container full-overlay">
              <img src={mtn} alt="How to transfer & share data on MTN" />
              <div className="overlay">
                <div className="overlay-content">
                  <h3>How to transfer & share data on MTN</h3>
                  <p>
                    Sharing data on the MTN network has never been<br /> easier! Our
                    simple step-by-step guide shows you <br />how to transfer data to
                    family and friends effortlessly.<br /><br /><br /><br /><br /><br />
                  </p>
                  <a href="/" className="read-article">
                    Read Article &gt;
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="second-row">
            <div className="article-card">
              <img src={cubacel} alt="Cubacel promotions: recharge promo offers for Cuba" />
              <div className="article-content">
                <h3>Cubacel promotions: recharge promo offers for Cuba</h3>
                <p>
                  Get the latest Cubacel promotions and deals to send mobile
                  top-up to Cuba with BOSS Revolution. Save money and stay
                  connected with your loved ones in Cuba!
                </p>
                <a href="/" className="read-article second-row-button">
                  Read Article &gt;
                </a>
              </div>
            </div>
            <div className="article-card">
              <img src={addMinutes} alt="How do I add minutes to my phone" />
              <div className="article-content">
                <h3>How do I add minutes to my phone</h3>
                <p>
                  Keep your phone topped up with ease. Our guide walks you through
                  the process of adding minutes to your phone, so you can stay
                  connected without the hassle.
                </p>
                <a href="/" className="read-article second-row-button">
                  Read Article &gt;
                </a>
              </div>
            </div>
            <div className="article-card">
              <img src={textingOptions} alt="8 Best international texting options" />
              <div className="article-content">
                <h3>8 Best international texting options</h3>
                <p>
                  Explore the benefits of international texting and how it can
                  help you stay connected. Discover the best options for reliable
                  international texting and start chatting with your family and
                  friends today.
                </p>
                <a href="/" className="read-article second-row-button">
                  Read Article &gt;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MobileMobileTopUp />
    </>
  );
};

export default MobileTopUp;
