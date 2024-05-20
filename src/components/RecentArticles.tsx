import React from 'react';
import '../css/RecentArticles.css';
import undocumented from '../images/Link.png';
import moneyTransfer from '../images/2.png';
import drivers from '../images/3.png';
import international from '../images/4.png';
import refund from '../images/5.png';

const RecentArticles: React.FC = () => {
  return (
    <section className="recent-articles">
      <h2>Recent articles</h2>
      <div className="article-grid">
        <div className="article-card wide">
          <div className="image-container half-overlay">
            <img src={undocumented} alt="How do undocumented immigrants pay taxes?" />
            <div className="overlay">
              <div className="overlay-content">
                <h3>How do undocumented immigrants pay taxes?</h3>
                <p>Employers and people in general often underestimate the contributions of undocumented workers. A report by the Institute on Taxation and Economic Policy (ITEP) revealed that undocumented immigrants contribute approximately $11.6 billion annually in US state and local taxes.</p>
                <a href="/" className="read-article">Read Article &gt;</a>
              </div>
            </div>
          </div>
        </div>
        <div className="article-card tall">
          <div className="image-container full-overlay">
            <img src={moneyTransfer} alt="Best money transfer apps 2023: sending funds made easy" />
            <div className="overlay">
              <div className="overlay-content">
                <h3>Best money transfer apps 2023: sending funds made easy</h3>
                <p>Millions of migrant workers, families, and businesses send money back home every month. In 2022 alone, $800 billion flowed through the accounts of migrant workers to support their loved ones.</p>
                <a href="/" className="read-article">Read Article &gt;</a>
              </div>
            </div>
          </div>
        </div>
        <div className="second-row">
          <div className="article-card">
            <img src={drivers} alt="Can a foreigner get a US driver's license: rules for non-citizens" />
            <div className="article-content">
              <h3>Can a foreigner get a US driver's license: rules for non-citizens</h3>
              <p>The United States is undeniably a car-centric nation. Even though many major cities have subways, buses, and trams, Americans still rely primarily on cars to travel. Everyone can apply for a driver's license when they reach the age of 16.</p>
              <a href="/" className="read-article">Read Article &gt;</a>
            </div>
          </div>
          <div className="article-card">
            <img src={international} alt="How to make international money transfers with PayPal" />
            <div className="article-content">
              <h3>How to make international money transfers with PayPal</h3>
              <p>Sending money across international borders has become a routine necessity for many, and technology continues to simplify the process. Today, you can send money internationally through various platforms, and PayPal is one of those options. However, questions about PayPal international fees often arise.</p>
              <a href="/" className="read-article">Read Article &gt;</a>
            </div>
          </div>
          <div className="article-card">
            <img src={refund} alt="How do I get a refund on PayPal?" />
            <div className="article-content">
              <h3>How do I get a refund on PayPal?</h3>
              <p>Did you receive a faulty, mismatched, or non-existent product after an online purchase? Most would rather not deal with such issues, but they can happen.</p>
              <a href="/" className="read-article">Read Article &gt;</a>
            </div>
          </div>
        </div>
      </div>
      <a href="/" className="see-all">See All &gt;</a>
    </section>
  );
};

export default RecentArticles;