// src/components/Support.tsx
import React from 'react';
import '../css/Support.css';
import internationalCallingIcon from '../images/International Calling.png'
import mobileTopUpIcon from '../images/Mobile Top-Up.png'
// import myAccountIcon from '../images/International Calling.png'
import otherServicesIcon from '../images/Other Services.png'
import contactUsIcon from '../images/fgd.png'

const Support: React.FC = () => {
  return (
    <section className="support">
      <div className="support-header">
        <h2>Dehay Mobile Customer Support</h2>
        <h1>How can we help?</h1>
      </div>
      <div className="support-content">
        <div className="support-methods">
          <div className="method">
            <img src={internationalCallingIcon} alt="International Calling" />
            <p>International Calling</p>
          </div>
          <div className="method">
            <img src={mobileTopUpIcon} alt="Mobile Top-Up" />
            <p>Mobile Top-Up</p>
          </div>
          <div className="method">
            <img src="myAccountIcon" alt="My Account" />
            <p>My Account</p>
          </div>
          <div className="method">
            <img src={otherServicesIcon} alt="Other Services" />
            <p>Other Services</p>
          </div>
        </div>
        <div className="contact-us-section">
          <img src={contactUsIcon} alt="Contact us" className="contact-us-icon" />
          <div>
            <h3>Contact us</h3>
            <p>
              Can't find your answer? If you need help, don't sweat it. <a href="/contact-us">Contact us</a> and we'll get back to you as soon as we can.
            </p>
          </div>
        </div>
      </div>
      <div className="support-details">
        <div className="support-article">
          <h2 id="international-calling">International calling</h2>
          <h3 id="calling-app">Calling app</h3>
          <h4>What services are available through the Dehay Mobile Calling App?</h4>
          <p>
            The app can be used for <a href="/international-calling">international calling</a>, including unlimited plans, <a href="/mobile-topup">international and domestic mobile top-up</a>, and money transfer.
          </p>
          <p>
            We frequently update the app with performance improvements and new features, so be sure to <a href="/download">download</a> the app and get the most out of your BOSS Revolution account. You'll save even more with lower international rates and special offers just for app users!
          </p>
          <h4>Will the Calling App connect to my existing Dehay Mobile account?</h4>
          <p>
            Yes, the app is an extension of your existing International Calling account. Once you <a href="/download">download</a> and activate the app you can start making calls immediately, using your existing BOSS Revolution calling balance.
          </p>
          <h4>Does the Dehay Mobile Calling App replace my current mobile service provider or mobile calling plan?</h4>
          <p>
            The BOSS Revolution Calling App does <strong>not</strong> replace your current mobile service provider or plan. The app requires that you have a mobile data or Wi-Fi connection.
          </p>
          <h4>How do I install the Dehay Mobile Calling App on my Android phone?</h4>
          <p>
            Use this link to download the app from Google Play:
            <a href="/download">Dehay Mobile Calling App for Android</a>
          </p>
          <h4>How do I install the Dehay Mobile Calling App on my iPhone?</h4>
          <p>
            Use this link to download the app from the App Store:
            <a href="/download">Dehay Mobile Calling App for iOS</a>
          </p>
          <h4>Can I use the Dehay Mobile Calling App when I am not in Canada?</h4>
          <p>
            Yes, you can use the Dehay Mobile Calling App when you travel internationally. All you need is Wi-Fi access with a strong internet connection. Unless international roaming is included in your domestic mobile plan, please make sure you turn off your cellular data to avoid roaming charges.
          </p>
          <h4>Can I access my contacts from the Dehay Mobile Calling App?</h4>
          <p>
            Yes, you can access all of the contacts stored in your phone's address book simply by tapping the Contacts button. You'll have one-tap calling to the people you call most.
          </p>
          <h4>Can I add funds directly in the Dehay Mobile Calling App?</h4>
          <p>
            Yes. Simply tap your balance on the Dehay Mobile Calling App menu and then choose the amount you want to fund.
          </p>
          <p>
            You can also redeem a Dehay Mobile phone card in the app.
          </p>
          <h4>How do you protect my credit card information?</h4>
          <p>
            We take security and the confidentiality of our customers' personal information very seriously. All transactions in the Dehay Mobile Calling App are conducted according to the highest level of security standards and SSL encryption to prevent customer information from being intercepted. All card information is then encrypted a second time before being stored on our secure billing servers.
          </p>
          <p>
            We recommend always using the most recent version of your Internet browser, so you can benefit from its latest security features and protect your online transactions.
          </p>
          <h3 id="making-calls">Making Calls</h3>
          <h4>How much does it cost to call with Dehay Mobile?</h4>
          <p>
            You can view Dehay Mobile calling rates in the app or on the website. In the app, just select a contact or dial a number and the per minute rate will be displayed. On the website, go to the home page, and choose a country to view <a href="/rates">the rates</a>.
          </p>
          <h4>How do I sign up for Dehay Mobile International Calling?</h4>
          <p>
            You can sign up directly on <a href="https://www.dehaymobile.com">www.dehaymobile.com</a> or in our award-winning <a href="/app">Dehay Mobile</a>. It's free to download and features low international calling rates and special offers.
          </p>
          <h4>Which Dehay Mobile access number should I use?</h4>
          <p>
            Select the access number for the language you prefer:
          </p>
          <ul>
            <li>📞 English: 4757545587</li>
            <li>📞 French: 4757545587</li>
            <li>📞 Spanish: 4757545587</li>
          </ul>
          <p>
            Alternatively, you can use Dehay Mobile toll-free access numbers: 888-656-4748 (English), 888-656-4753 (Spanish), and 888-656-4752 (French). Please note that a 1.5¢ per minute surcharge applies when using these toll-free access numbers.
          </p>
          <h3 id="calling-plans">Calling plans</h3>
          <h4>Do you offer unlimited plans?</h4>
          <p>
            Yes, <a href="/download">download</a> the Dehay Mobile Calling App to see a full list of unlimited plans or go to the home page on the website, choose a country and view the plans available.
          </p>
          <h4>Where can I purchase unlimited plans?</h4>
          <p>
            You can purchase unlimited plans directly in the Dehay Mobile <a href="/calling-app">Calling App</a>.
          </p>
          <h4>Can I subscribe to an unlimited plan?</h4>
          <p>
            Yes, you can purchase a plan on a one-time basis or subscribe to be re-enrolled at the end of the plan term.
          </p>
          <h3 id="adding-funds">Adding funds</h3>
          <h4>How do I add funds for International Calling?</h4>
          <p>
            Use this link to login and add funds to your Dehay Mobile account:
            <a href="/add-funds">Add Funds</a>
          </p>
          <p>
            You can also add funds directly from the Dehay Mobile Calling App.
          </p>
          <h3 id="mobile-topup">Mobile top-up</h3>
          <h4 id="international-topup">International mobile top-up</h4>
          <h5>What is International Mobile Top Up?</h5>
          <p>
            Dehay Mobile <a href="/international-topup">International Mobile Top Up</a> is a service that allows you to recharge the mobile phones of your loved ones abroad. Topping up a mobile phone is easy — all you need to know is your recipient's mobile service provider ("carrier") and mobile phone number.
          </p>
          <h4 id="domestic-topup">Domestic Mobile top up</h4>
          <h5>What is Domestic Mobile Top Up?</h5>
          <p>
            Dehay Mobile Domestic Mobile Top Up is a service that allows you to recharge U.S. prepaid mobile phones. Topping up a mobile phone is easy — all you need to know is your recipient's mobile service provider ("carrier") and mobile phone number.
          </p>
          <h4 id="sending-topup">Sending a mobile top up</h4>
          <h5>How do I send an International Mobile Top Up?</h5>
          <p>
            The fastest, most convenient way to send international mobile top ups is with the Dehay Mobile Calling App. All it takes is a few taps — no need to enter your recipient's phone number. <a href="/download">Download the app now</a>
          </p>
          <p>
            You can also <a href="/register">register</a> and send an international mobile top up <a href="/online">online</a>:
          </p>
          <ul>
            <li>Enter the international mobile phone number you'd like to top up</li>
            <li>Select a mobile service provider ("carrier")</li>
            <li>Select a top up amount</li>
            <li>Select a payment method</li>
          </ul>
          <h4>How do I send a Domestic Mobile Top Up?</h4>
          <p>
            <a href="/download">Download</a> the Dehay Mobile Calling App and send domestic mobile top ups with just a few taps or <a href="/create">create</a> your Dehay Mobile web account and do it right on the website.
          </p>
          <h4>How much can I top up at one time?</h4>
          <p>
            The amount of top up you can send will depend on your recipient's country and mobile service provider. When you order, you will be able to choose from a list of top up amounts.
          </p>
          <h4>How soon is a mobile top up sent?</h4>
          <p>
            We send your order immediately to the mobile phone service provider, who is responsible for processing the top up. Most top ups are delivered to the recipient instantly.
          </p>
          <p>
            Occasionally a mobile service provider may experience a system delay that prevents a top up from being processed immediately. You and your recipient will both receive an SMS confirmation message when the top up has been completed successfully.
          </p>
          <h4>Why is my mobile top up order not being accepted?</h4>
          <p>
            When placing your order, be sure to select the correct mobile service provider ("carrier") for the mobile phone number you wish to top up. If you select the wrong carrier, the top up will not be processed.
          </p>
          <p>
            Also, be sure you are topping up a prepaid mobile phone. Mobile top up cannot be done for phones that are on postpaid service plans.
          </p>
          <h4>What should I do if my recipient did not receive a mobile top up that I sent?</h4>
          <p>
            Please contact <a href="/support">customer support</a> and provide the details of your order: the transaction ID number and the recipient's mobile phone number, mobile service provider and country. Our support team will contact the mobile service provider about your top up.
          </p>
          <p>
            Occasionally a mobile service provider may experience a system delay that prevents a top up from being processed immediately. If you have received a "Pending" notification in your <a href="/transaction-history">transaction history</a>, please wait until you receive final confirmation of your top up order status before contacting us.
          </p>
          <h3 id="other-services">Other services</h3>
          <h4 id="dehay-club">Dehay Mobile Club</h4>
          <h5>What is the Dehay Mobile Club?</h5>
          <p>
            The BOSS Club is the official Dehay Mobile loyalty program that rewards customers with exclusive promotions, discounts and special offers. Members get early notifications of upcoming deals via SMS.
          </p>
          <h5>How do I join the Dehay Mobile Club?</h5>
          <p>
            It is simple - just text “JOIN” to 26771.
          </p>
          <h5>Anything else I need to know?</h5>
          <p>
            Standard message and data rates may apply and you may opt-out any time by replying “STOP” to 26771. For additional questions or contact information, text “HELP” to 26771.
          </p>

          <h3 id="my-account">My Account</h3>
          <h4 id="logging-in">Logging In</h4>
          <h5>How do I login to my Dehay Mobile account?</h5>
          <p>
            Go to the <a href="/login">Login</a> page.
          </p>
          <p>
            Enter your mobile phone number and press the "Get a code by SMS" button.
          </p>
          <p>
            On the next page, submit the 6-digit verification code sent in the SMS message.
          </p>
          <p>
            Check your email inbox. You should receive an email that contains a login link. Click on the link to access your account.
          </p>
          <h4 id="managing-account">Managing My Account</h4>
          <h5>How do I update information in my account?</h5>
          <p>Use these links to login and access specific account information:</p>
          <ul>
            <li><a href="/card-information">Credit or Debit Card Information</a></li>
            <li><a href="/personal-profile">Personal Profile</a></li>
            <li><a href="/auto-recharge">Auto Recharge</a></li>
          </ul>

          <h5>How do I view my transaction history?</h5>
          <p>Use this link to login and view your transaction history:</p>
          <ul>
            <li><a href="/transaction-history">Transaction History</a></li>
          </ul>

          <h4 id="payment-options">Managing My Payment Options</h4>
          <h5>What credit and debit cards do you accept?</h5>
          <ul>
            <li>Visa (credit, debit and prepaid cards)</li>
            <li>Mastercard (credit, debit and prepaid cards)</li>
            <li>American Express</li>
            <li>Discover</li>
          </ul>

          <h5>How do I update my card information?</h5>
          <p>Use this link to login and update your card information:</p>
          <ul>
            <li><a href="/card-information">Credit or Debit Card Information</a></li>
          </ul>

          <h5>What is Auto Recharge?</h5>
          <p>
            Auto Recharge is a convenient feature that ensures you always have funds for your International Calling service. It will automatically recharge your International Calling account when your balance falls below $3.
          </p>
          <p>Use this link to login and manage your Auto Recharge settings:</p>
          <ul>
            <li><a href="/auto-recharge">Auto Recharge</a></li>
          </ul>
        </div>
        <div className="support-toc">
          <h3>Table of Contents</h3>
          <ul>
            <li><a href="#international-calling">International calling</a></li>
            <ul>
              <li><a href="#calling-app">Calling app</a></li>
              <li><a href="#making-calls">Making Calls</a></li>
              <li><a href="#calling-plans">Calling plans</a></li>
              <li><a href="#adding-funds">Adding funds</a></li>
            </ul>
            <li><a href="#mobile-topup">Mobile top-up</a></li>
            <ul>
              <li><a href="#international-topup">International mobile top-up</a></li>
              <li><a href="#domestic-topup">Domestic Mobile top-up</a></li>
              <li><a href="#sending-topup">Sending a mobile top-up</a></li>
            </ul>
            <li><a href="#other-services">Other services</a></li>
            <ul>
              <li><a href="#dehay-club">Dehay Mobile Club</a></li>
            </ul>
            <li><a href="#my-account">My Account</a></li>
            <ul>
              <li><a href="#logging-in">Logging In</a></li>
              <li><a href="#managing-account">Managing My Account</a></li>
              <li><a href="#payment-options">Managing My Payment Options</a></li>
            </ul>
          </ul>
          <div className="toc-help">
            <h4><a href="#card-information">How does Dehay Mobile protect my card information?</a></h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
