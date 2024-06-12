import React from 'react';
import '../css/RecentArticles.css';
import undocumented from '../images/Link.png';
import moneyTransfer from '../images/2.png';
import drivers from '../images/3.png';
import international from '../images/4.png';
import refund from '../images/5.png';

const MobileRecentArticles: React.FC = () => {
  return (
    <section className="recent-articles mobile">
      <h2>Recent Articles</h2>
      <div className="article-grid-mobile">
        <div className="article-card">
          <img src={undocumented} alt="How do undocumented immigrants pay taxes?" />
          <div className="article-content">
            <h3>How do undocumented immigrants pay taxes?<br /><br /></h3>
            <a href="/" className="read-article">Read Article &gt;</a>
          </div>
        </div>
        <div className="article-card">
          <img src={moneyTransfer} alt="Best money transfer apps 2023: sending funds made easy" />
          <div className="article-content">
            <h3>Best money transfer apps 2023: sending funds made easy<br /><br /></h3>
            <a href="/" className="read-article">Read Article &gt;</a>
          </div>
        </div>
        <div className="article-card">
          <img src={drivers} alt="Can a foreigner get a US driver's license: rules for non-citizens" />
          <div className="article-content">
            <h3>Can a foreigner get a US driver's license: rules for non-citizens<br /><br /></h3>
            <a href="/" className="read-article">Read Article &gt;</a>
          </div>
        </div>
        <div className="article-card">
          <img src={international} alt="How to make international money transfers with PayPal" />
          <div className="article-content">
            <h3>How to make international money transfers with PayPal<br /><br /></h3>
            <a href="/" className="read-article">Read Article &gt;</a>
          </div>
        </div>
        <div className="article-card">
          <img src={refund} alt="How do I get a refund on PayPal?" />
          <div className="article-content">
            <h3>How do I get a refund on PayPal?<br /><br /></h3>
            <a href="/" className="read-article">Read Article &gt;</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileRecentArticles;
