import React from "react";
import "../css/RecentArticles.css";

const MoneyTransfer: React.FC = () => {
  return (
    <section className="recent-articles">
      <h2>Money Transfer</h2>
      <div className="article-grid">
        <div className="article-card wide">
          <h3>Best money transfer apps 2023: sending funds made easy</h3>
          <p>
            Millions of migrant workers, families, and businesses send money
            back home every month. In 2022 alone, $800 billion flowed through
            the global network of workers to support their loved ones.
          </p>
          <a href="/" className="read-article">
            Read Article &gt;
          </a>
        </div>
        <div className="article-card tall">
          <h3>How to make international money transfers with PayPal</h3>
          <p>
            Sending money across international borders has become a routine
            necessity for many, and technology continues to simplify the
            process. Today, you can send money internationally through various
            platforms, and PayPal is one of the easiest. How do the options
            about PayPal international fees stack up?
          </p>
          <a href="/" className="read-article">
            Read Article &gt;
          </a>
        </div>
        <div className="second-row">
          <div className="article-card">
            <img
              src="driver-license-rules-non-citizens.jpg"
              alt="Can a foreigner get a US driver's license: rules for non-citizens"
            />
            <h3>Western Union vs. MoneyGram: which is the best?</h3>
            <p>
              Trying to decide between Western Union and MoneyGram for your
              money transfer needs? Our guide compares the pros and cons of each
              to help you choose the right option for you.
            </p>
            <a href="/" className="read-article">
              Read Article &gt;
            </a>
          </div>
          <div className="article-card">
            <img
              src="international-money-transfers-paypal.jpg"
              alt="How to make international money transfers with PayPal"
            />
            <h3>Western Union vs. Xoom: money transfers</h3>
            <p>
              Sending money domestically and overseas doesn't have to be
              difficult. Compare money transfer services like Western Union and
              Xoom to find the best option for your needs.
            </p>
            <a href="/" className="read-article">
              Read Article &gt;
            </a>
          </div>
          <div className="article-card">
            <img
              src="paypal-refund.jpg"
              alt="How do I get a refund on PayPal?"
            />
            <h3>Best international banks in the US</h3>
            <p>
              How to choose the best international bank in the US? Discover the
              differences between domestic and international banking and make an
              informed decision on the right option for your needs.
            </p>
            <a href="/" className="read-article">
              Read Article &gt;
            </a>
          </div>
        </div>
      </div>
      <a href="/" className="see-all">
        See All &gt;
      </a>
    </section>
  );
};

export default MoneyTransfer;
