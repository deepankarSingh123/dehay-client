import React from 'react';
import '../css/ReferAFriend.css';
import step2 from '../images/friend-pays.svg fill.png'
import step3 from '../images/just-sell.svg fill.png'
import step1 from '../images/you-share.svg.png'

const ReferAFriend: React.FC = () => {
  return (
    <div className="refer-a-friend">
      <h1>Get Free International Calls with Your Friends</h1>
      <p>
        With Yolla, it pays to have a bunch of friends! Invite them all to the app and get a $3 gift for each one who makes a payment. 
        The more people start using Yolla thanks to your invites, the more $3 credits will be added to your balance.
      </p>
      <p>
        It’s a win-win: each of your friends also gets a $3 gift after making their first Yolla payment. You earn, they earn, and everyone is happy! 
        To start getting free calls for yourself and others:
      </p>
      
      <div className="step">
        <div className="step-icon">
          <img src={step1} alt="Step 1" />
        </div>
        <div className="step-content">
          <h2>Step 1. You Share</h2>
          <p>
            Find your personal Yolla link on the Get Free Credits screen and share it through free SMS or any other convenient way.
          </p>
        </div>
      </div>
      
      <div className="step">
        <div className="step-icon">
          <img src={step2} alt="Step 2" />
        </div>
        <div className="step-content">
          <h2>Step 2. Friend Pays</h2>
          <p>
            Make sure your friend installed Yolla following your link and purchased credits in the app or here on the Yolla official website.
          </p>
        </div>
      </div>
      
      <div className="step">
        <div className="step-icon">
          <img src={step3} alt="Step 3" />
        </div>
        <div className="step-content">
          <h2>Step 3. You Both Earn</h2>
          <p>
            The moment payment is made you both get a $3 gift added to your Yolla balance. Your friends save on calls, you earn to call – great, isn’t it?
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReferAFriend;
