import React from 'react';
import '../css/RecentArticles.css';
import moneyTransfer from '../images/6.png';
import international from '../images/7.png';
import westernUnion from '../images/10.png';
import xoom from '../images/9.png';
import banks from '../images/8.png';
import MobileMoneyTransfer from './MobileMoneyTransfer';

const MoneyTransfer: React.FC = () => {
  return (
    <>
      <section className="recent-articles desktop">
        <h2>Money Transfer</h2>
        <div className="article-grid">
          <div className="article-card wide">
            <div className="image-container half-overlay">
              <img src={moneyTransfer} alt="Best money transfer apps 2023: sending funds made easy" />
              <div className="overlay">
                <div className="overlay-content">
                  <h3>Best money transfer apps 2023: sending funds made easy</h3>
                  <p>Millions of migrant workers, families, and businesses send money back home every month.<br /> In 2022 alone, $800 billion flowed through the accounts of migrant workers to support<br /> their loved ones.<br /><br /></p>
                  <a href="/" className="read-article">Read Article &gt;</a>
                </div>
              </div>
            </div>
          </div>
          <div className="article-card tall">
            <div className="image-container full-overlay">
              <img src={international} alt="How to make international money transfers with PayPal" />
              <div className="overlay">
                <div className="overlay-content">
                  <h3>How to make international money transfers<br /> with PayPal</h3>
                  <p>Sending money across international borders has <br />become a routine necessity for many, and technology<br /> continues to simplify the process. Today, you can send<br /> money internationally through various platforms, and <br />PayPal is one of those options. However, questions<br /> about PayPal international fees often arise.</p>
                  <a href="/" className="read-article">Read Article &gt;</a>
                </div>
              </div>
            </div>
          </div>
          <div className="second-row">
            <div className="article-card">
              <img src={westernUnion} alt="Western Union vs. MoneyGram: which is the best?" />
              <div className="article-content">
                <h3>Western Union vs. MoneyGram: which is the best?</h3>
                <p>Trying to decide between Western Union and MoneyGram for your money transfer needs? Our guide compares the pros and cons of each to help you choose the right service for you.</p>
                <a href="/" className="read-article second-row-button">Read Article &gt;</a>
              </div>
            </div>
            <div className="article-card">
              <img src={xoom} alt="Western Union vs. Xoom: money transfers" />
              <div className="article-content">
                <h3>Western Union vs. Xoom: money transfers</h3>
                <p>Sending money domestically and overseas doesn’t have to be difficult. Compare money transfer services like Western Union and Xoom to find the best option for your needs.</p>
                <a href="/" className="read-article second-row-button">Read Article &gt;</a>
              </div>
            </div>
            <div className="article-card">
              <img src={banks} alt="Best international banks in the US" />
              <div className="article-content">
                <h3>Best international banks in the US</h3>
                <p>How to choose the best international bank in the US? Discover the differences between domestic and international banking and make an informed decision on the right option for your needs.</p>
                <a href="/" className="read-article second-row-button">Read Article &gt;</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MobileMoneyTransfer />
    </>
  );
};

export default MoneyTransfer;
