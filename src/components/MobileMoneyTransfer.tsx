import React from 'react';
import '../css/RecentArticles.css';
import moneyTransfer from '../images/6.png';
import international from '../images/7.png';
import westernUnion from '../images/10.png';
import xoom from '../images/9.png';
import banks from '../images/8.png';

const MobileMoneyTransfer: React.FC = () => {
  return (
    <section className="recent-articles mobile">
      <h2>Money Transfer</h2>
      <div className="article-grid-mobile">
        <div className="article-card">
          <img src={moneyTransfer} alt="Best money transfer apps 2023: sending funds made easy" />
          <div className="article-content">
            <h3>Best money transfer apps 2023: sending funds made easy</h3>
            <a href="/" className="read-article">Read Article &gt;</a>
          </div>
        </div>
        <div className="article-card">
          <img src={international} alt="How to make international money transfers with PayPal" />
          <div className="article-content">
            <h3>How to make international money transfers with PayPal</h3>
            <a href="/" className="read-article">Read Article &gt;</a>
          </div>
        </div>
        <div className="article-card">
          <img src={westernUnion} alt="Western Union vs. MoneyGram: which is the best?" />
          <div className="article-content">
            <h3>Western Union vs. MoneyGram: which is the best?</h3>
            <a href="/" className="read-article">Read Article &gt;</a>
          </div>
        </div>
        <div className="article-card">
          <img src={xoom} alt="Western Union vs. Xoom: money transfers" />
          <div className="article-content">
            <h3>Western Union vs. Xoom: money transfers</h3>
            <a href="/" className="read-article">Read Article &gt;</a>
          </div>
        </div>
        <div className="article-card">
          <img src={banks} alt="Best international banks in the US" />
          <div className="article-content">
            <h3>Best international banks in the US</h3>
            <a href="/" className="read-article">Read Article &gt;</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileMoneyTransfer;
