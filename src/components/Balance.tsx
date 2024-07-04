import React, { useEffect, useState } from "react";
import "../css/Balance.css";
import { useNavigate } from "react-router-dom";

// const rechargeAmounts = [5, 10, 15, 20, 25, 30, 35, 40, 45];

const Balance: React.FC = () => {
  // const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  // // const [autoRecharge, setAutoRecharge] = useState<boolean>(false);
  // const [promoCode, setPromoCode] = useState<string>("");
  // const [cardNumber, setCardNumber] = useState<string>("");
  const [balance, setBalance] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Balance component mounted');

    const fetchBalance = async () => {
      const password = sessionStorage.getItem('authToken');
      const phoneNumber = sessionStorage.getItem('phoneNumber');

      console.log('Fetching balance...');
      console.log('Phone number from session:', phoneNumber);
      console.log('Password from session:', password ? '******' : 'Not found');

      if (!password || !phoneNumber) {
        console.error('Authentication token or phone number not found');
        navigate('/login');
        return;
      }

      try {
        // Ensure the phone number starts with '+' and encode it properly
        const encodedPhoneNumber = phoneNumber.startsWith('+') 
          ? '%2B' + encodeURIComponent(phoneNumber.slice(1))
          : encodeURIComponent(phoneNumber);

        const url = `https://dehaymobile.app:4443/api/getavailablebalance/${encodedPhoneNumber}?password=${password}&offset=0&size=50`;
        console.log('Fetching from URL:', url.replace(password, '******'));

        const response = await fetch(url);
        console.log('API Response status:', response.status);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('API Response data:', JSON.stringify(data, null, 2));

        if (data.data && data.data.message && data.data.message.length > 0) {
          const balanceValue = data.data.message[0].balance;
          console.log('Fetched balance:', balanceValue);
          setBalance(balanceValue);
        } else {
          console.error('Unexpected data structure:', data);
          throw new Error('Unexpected data structure');
        }
      } catch (error) {
        console.error('Error fetching balance:', error);
        if (error instanceof Error) {
          console.error('Error message:', error.message);
          console.error('Error stack:', error.stack);
        }
      }
    };

    fetchBalance();

    return () => {
      console.log('Balance component will unmount');
    };
  }, [navigate]);
  // const handleAmountClick = (amount: number) => {
  //   setSelectedAmount(amount);
  // };


  return (
    <div className="balance-container">
      <div className="balance-info">
        <p>Your current balance is</p>
        <h1>
          ${balance.toFixed(2)}<sup>USD</sup>
        </h1>
      </div>
      {/* <p>Select a recharge amount</p>
      <div className="recharge-options">
        {rechargeAmounts.map((amount) => (
          <button
            key={amount}
            className={selectedAmount === amount ? "selected" : ""}
            onClick={() => handleAmountClick(amount)}
          >
            ${amount} CAD
          </button>
        ))} 
      </div>*/}
      {/* <div className="auto-recharge">
        <p>
          Auto recharge is <span className="status">{autoRecharge ? 'on' : 'off'}</span>
        </p>
        <button className="auto-recharge-toggle" onClick={() => setAutoRecharge(!autoRecharge)}>
          <span className={`toggle-icon ${autoRecharge ? 'on' : 'off'}`}></span>
        </button>
        <p>What is auto recharge?</p>
      </div> */}
      {/* <div className="promo-code">
        <input
          type="text"
          placeholder="Enter Promo code"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
        />
        <button onClick={handleApplyPromo}>Apply</button>
      </div> */}
      {/* <div className="payment-details">
        <p>Payment Details</p>
        <p>What is auto recharge?</p>
        <div className="card-info">
          <span>💳</span>
          <input
            type="text"
            placeholder="Enter card number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
          <select>
            <option value="debit">Debit</option>
            <option value="credit">Credit</option>
          </select>
        </div>
      </div>
      <button className="add-balance-button">
        Add ${selectedAmount ?? "..."} CAD to balance
      </button> */}
    </div>
  );
};

export default Balance;
