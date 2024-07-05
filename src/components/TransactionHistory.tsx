import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/TransactionHistory.css';

const TransactionHistory: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Transaction history');
  const [filter, setFilter] = useState<string>('All');
  const [transactions, setTransactions] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('TransactionHistory component mounted');

    const fetchTransactions = async () => {
      const password = sessionStorage.getItem('authToken');
      const phoneNumber = sessionStorage.getItem('phoneNumber');

      console.log('Fetching transactions...');
      console.log('Phone number from session:', phoneNumber);
      console.log('Password from session:', password ? '******' : 'Not found');

      if (!password || !phoneNumber) {
        console.error('Authentication token or phone number not found');
        navigate('/login');
        return;
      }

      try {
        const encodedPhoneNumber = phoneNumber.startsWith('+') 
          ? '%2B' + encodeURIComponent(phoneNumber.slice(1))
          : encodeURIComponent(phoneNumber);

        const url = `https://dehaymobile.app:4443/api/paymenthistory/${encodedPhoneNumber}?password=${password}&offset=0&size=50`;
        console.log('Fetching from URL:', url.replace(password, '******'));

        const response = await fetch(url);
        console.log('API Response status:', response.status);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('API Response data:', JSON.stringify(data, null, 2));

        if (!data.data || !data.data.message || !Array.isArray(data.data.message)) {
          console.error('Unexpected API response structure:', data);
          return;
        }

        const transformedTransactions = data.data.message.map((transaction: any) => {
          console.log('Processing transaction:', JSON.stringify(transaction, null, 2));
          return {
            id: transaction.id,
            description: transaction.type,
            date: new Date(transaction.creationdate).toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' }),
            amount: `${transaction.cost} USD`,
            status: transaction.type.includes('Success') ? 'Completed' : 'Declined',
          };
        });

        console.log('Transformed transactions:', JSON.stringify(transformedTransactions, null, 2));
        setTransactions(transformedTransactions);
      } catch (error) {
        console.error('Error fetching transactions:', error);
        if (error instanceof Error) {
          console.error('Error message:', error.message);
          console.error('Error stack:', error.stack);
        }
      }
    };

    fetchTransactions();

    return () => {
      console.log('TransactionHistory component will unmount');
    };
  }, [navigate]);

  const handleLogout = () => {
    console.log('Logging out...');
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('phoneNumber');
    navigate('/login');
  };

  const filteredTransactions = filter === 'All'
    ? transactions
    : transactions.filter(transaction => {
        const amount = parseFloat(transaction.amount);
        console.log(`Filtering transaction: ${transaction.id}, Amount: ${amount}`);
        return amount < 0;
      });

  console.log('Rendered transactions count:', filteredTransactions.length);
  console.log('Filtered transactions:', JSON.stringify(filteredTransactions, null, 2));
  
  return (
    <div className="transaction-history-container">
      <div className="sidebar">
        <div 
          className={`sidebar-item ${activeTab === 'Transaction history' ? 'active' : ''}`} 
          onClick={() => {
            console.log('Switching to Transaction history tab');
            setActiveTab('Transaction history');
          }}
        >
          <span>Transaction history</span>
        </div>
        <div 
          className={`sidebar-item ${activeTab === 'Logout' ? 'active' : ''}`} 
          onClick={handleLogout}
        >
          <span>Logout</span>
        </div>
      </div>
      <div className="transaction-history-content">
        <div className="transaction-filters">
          <button
            className={`filter-button ${filter === 'All' ? 'active' : ''}`}
            onClick={() => {
              console.log('Switching to All filter');
              setFilter('All');
            }}
          >
            All
          </button>
          <button
            className={`filter-button ${filter === 'Cancelling Balance' ? 'active' : ''}`}
            onClick={() => {
              console.log('Switching to Cancelling Balance filter');
              setFilter('Cancelling Balance');
            }}
          >
            Cancelling Balance
          </button>
        </div>
        <h2>Complete Transaction</h2>
        <div className="transaction-list">
          {filteredTransactions.map(transaction => (
            <div key={transaction.id} className="transaction-item">
              <div className="transaction-description">
                <p>{transaction.description}</p>
                <p className="transaction-date">{transaction.date}</p>
                <p className="transaction-status">{transaction.status}</p>
              </div>
              <div className="transaction-amount">
                <p>{transaction.amount}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;