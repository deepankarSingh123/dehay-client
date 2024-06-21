import React, { useState, useEffect } from "react";
import "../css/Balance.css";

const rechargeAmounts = [5, 10, 15, 20, 25, 30, 35, 40, 45];

const Balance: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  // const [autoRecharge, setAutoRecharge] = useState<boolean>(false);
  const [promoCode, setPromoCode] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [balance, setBalance] = useState<number>(0);

  useEffect(() => {
    // Function to fetch balance from the API
    const fetchBalance = async () => {
      try {
        const response = await fetch('https://dehaymobile.app:4443/api/getavailablebalance/%2B919182570463?password=F9272985-131B-45A7-A8F6-54CF1F80964C&offset=0&size=50');
        const data = await response.json();
        setBalance(data.data.message[0].balance);
      } catch (error) {
        console.error('Error fetching balance:', error);
      }
    };

    fetchBalance();
  }, []);

  const handleAmountClick = (amount: number) => {
    setSelectedAmount(amount);
  };

  const handleApplyPromo = () => {
    // Apply promo code logic here
  };

  return (
    <div className="balance-container">
      <div className="balance-info">
        <p>Your current balance is</p>
        <h1>
          ${balance.toFixed(2)}<sup>CAD</sup>
        </h1>
      </div>
      <p>Select a recharge amount</p>
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
      </div>
      {/* <div className="auto-recharge">
        <p>
          Auto recharge is <span className="status">{autoRecharge ? 'on' : 'off'}</span>
        </p>
        <button className="auto-recharge-toggle" onClick={() => setAutoRecharge(!autoRecharge)}>
          <span className={`toggle-icon ${autoRecharge ? 'on' : 'off'}`}></span>
        </button>
        <p>What is auto recharge?</p>
      </div> */}
      <div className="promo-code">
        <input
          type="text"
          placeholder="Enter Promo code"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
        />
        <button onClick={handleApplyPromo}>Apply</button>
      </div>
      <div className="payment-details">
        {/* <p>Payment Details</p>
        <p>What is auto recharge?</p> */}
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
      </button>
    </div>
  );
};

export default Balance;
