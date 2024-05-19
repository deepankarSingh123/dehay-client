import React from "react";
import "../css/RecentArticles.css";

const MoneyTransfer: React.FC = () => {
  return (
    <section className="recent-articles">
      <h2>Mobile Top-Up</h2>
      <div className="article-grid">
        <div className="article-card wide">
          <h3>How to transfer airtime on Airtel</h3>
          <p>
            How can you share your Airtel credit with family and friends? Follow
            these quick and easy steps to transfer airtime on Airtel and stay
            connected with your loved ones.
          </p>
          <a href="/" className="read-article">
            Read Article &gt;
          </a>
        </div>
        <div className="article-card tall">
          <h3>How to transfer & share data on MTN</h3>
          <p>
            Sharing data on the MTN network has never been easier! Our simple
            step-by-step guide shows you how to transfer data to family and
            friends effortlessly.
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
            <h3>
              Calling international numbers from the U.S.Cubacel promotions:
              recharge promo offers for Cuba
            </h3>
            <p>
              Get the latest Cubacel promotions and deals to send mobile top-up
              to Cuba with BOSS Revolution. Save money and stay connected with
              your loved ones in Cuba!
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
            <h3>How do I add minutes to my phone</h3>
            <p>
              Keep your phone topped up with ease. Our guide walks you through
              the process of adding minutes to your phone, so you can stay
              connected without the hassle.
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
            <h3>8 Best international texting options</h3>
            <p>
              Explore the benefits of international texting and how it can help
              you stay connected. Discover the best options for reliable
              international texting and start chatting with your family and
              friends today.
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
