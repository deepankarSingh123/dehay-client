import React from "react";
import "../css/RecentArticles.css";

const MoneyTransfer: React.FC = () => {
  return (
    <section className="recent-articles">
      <h2>International Calling</h2>
      <div className="article-grid">
        <div className="article-card wide">
          <h3>How to call India from the US</h3>
          <p>
            Discover how to make affordable international calls from the US to
            India with BOSS Revolution. Our high- quality connections and
            competitive rates make it easy to stay in touch with loved ones
            abroad.
          </p>
          <a href="/" className="read-article">
            Read Article &gt;
          </a>
        </div>
        <div className="article-card tall">
          <h3>International calling cards for cell phones & landlines</h3>
          <p>
            Save money on long distance calls with our guide to international
            calling cards. Learn about different types and how to use them to
            stay connected with loved ones overseas.
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
            <h3>Calling international numbers from the U.S.</h3>
            <p>
              Learn how to call international numbers from the US without any
              hassle. Our guide provides a step-by-step process, so you can stay
              connected with friends and family abroad with ease.
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
            <h3>How to make cheap & free international calls to landlines</h3>
            <p>
              Stay connected with family and friends abroad through affordable
              and reliable calling to landlines services. Our guide explores the
              best options for your needs.
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
            <h3>How to call the UK from the US</h3>
            <p>
              Stay connected with loved ones in the UK without the hassle of
              confusing dialing codes and rates. Learn how to make affordable
              international calls to the UK from the US in this guide.
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
