import React from 'react';
import '../css/InternationalCalling.css';
import indiaCall from '../images/12.png'; // Update with the correct image path
import callingCards from '../images/aboutus-satisfied.png'; // Update with the correct image path
import internationalNumbers from '../images/15.png'; // Update with the correct image path
import cheapCalls from '../images/Background1.png'; // Update with the correct image path
import ukCall from '../images/Background.png'; // Update with the correct image path

const RecentArticles: React.FC = () => {
  return (
    <section className="recent-articles">
      <h2>International Calling</h2>
      <div className="article-grid">
        <div className="article-card wide">
          <div className="image-container half-overlay">
            <img src={indiaCall} alt="How to call India from the US" />
            <div className="overlay1">
              <div className="overlay-content">
                <h3>How to call India from the US</h3>
                <p>Discover how to make affordable international calls from the US to India with BOSS Revolution. Our high-quality connections and competitive rates make it easy to stay in touch with loved ones abroad.<br /><br /><br /><br /><br /><br /><br /><br /></p>
                <a href="/" className="read-article">Read Article &gt;</a>
              </div>
            </div>
          </div>
        </div>
        <div className="article-card tall">
          <div className="image-container full-overlay">
            <img src={callingCards} alt="International calling cards for cell phones & landlines" />
            <div className="overlay1">
              <div className="overlay-content">
                <h3>International calling cards for cell phones<br /> & landlines</h3>
                <p>Save money on long distance calls with our guide to<br /> international calling cards. Learn about different types <br />and how to use them to stay connected with loved ones<br /> overseas.<br /><br /><br /><br /><br /><br /><br /><br /></p>
                <a href="/" className="read-article">Read Article &gt;</a>
              </div>
            </div>
          </div>
        </div>
        <div className="second-row">
          <div className="article-card">
            <img src={internationalNumbers} alt="Calling international numbers from the U.S." />
            <div className="article-content">
              <h3>Calling international numbers from the U.S.</h3>
              <p>Learn how to call international numbers from the US without any hassle. Our guide provides a step-by-step process, so you can stay connected with friends and family abroad with ease.</p>
              <a href="/" className="read-article second-row-button">Read Article &gt;</a>
            </div>
          </div>
          <div className="article-card">
            <img src={cheapCalls} alt="How to make cheap & free international calls to landlines" />
            <div className="article-content">
              <h3>How to make cheap & free international calls to landlines</h3>
              <p>Stay connected with family and friends abroad through affordable and reliable calling to landlines services. Our guide explores the best options for your needs.</p>
              <a href="/" className="read-article second-row-button">Read Article &gt;</a>
            </div>
          </div>
          <div className="article-card">
            <img src={ukCall} alt="How to call the UK from the US" />
            <div className="article-content">
              <h3>How to call the UK from the US</h3>
              <p>Stay connected with loved ones in the UK without the hassle of confusing dialing codes and rates. Learn how to make affordable international calls to the UK from the US in this guide.</p>
              <a href="/" className="read-article second-row-button">Read Article &gt;</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentArticles;
