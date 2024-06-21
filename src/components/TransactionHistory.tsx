import React, { useState, useEffect } from 'react';
import '../css/TransactionHistory.css';

const TransactionHistory: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Transaction history');
  const [filter, setFilter] = useState<string>('All');
  const [transactions, setTransactions] = useState<any[]>([]);

  useEffect(() => {
    // Function to fetch transactions from the API
    const fetchTransactions = async () => {
      try {
        const response = await fetch('https://dehaymobile.app:4443/api/paymenthistory/%2B919182570463?password=F9272985-131B-45A7-A8F6-54CF1F80964C&offset=0&size=50');
        const data = await response.json();
        // Transform the API data to match the required format
        const transformedTransactions = data.data.message.map((transaction: any) => ({
          id: transaction.id,
          description: transaction.type,
          date: new Date(transaction.creationdate).toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' }),
          amount: `${transaction.cost} CAD`,
          status: transaction.type.includes('Success') ? 'Completed' : 'Declined',
        }));
        setTransactions(transformedTransactions);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  const filteredTransactions = filter === 'All'
    ? transactions
    : transactions.filter(transaction => parseFloat(transaction.amount) < 0);

  return (
    <div className="transaction-history-container">
      <div className="sidebar">
        <div className={`sidebar-item ${activeTab === 'Transaction history' ? 'active' : ''}`} onClick={() => setActiveTab('Transaction history')}>
          <span>Transaction history</span>
        </div>
        <div className={`sidebar-item ${activeTab === 'Logout' ? 'active' : ''}`} onClick={() => setActiveTab('Logout')}>
          <span>Logout</span>
        </div>
      </div>
      <div className="transaction-history-content">
        <div className="transaction-filters">
          <button
            className={`filter-button ${filter === 'All' ? 'active' : ''}`}
            onClick={() => setFilter('All')}
          >
            All
          </button>
          <button
            className={`filter-button ${filter === 'Cancelling Balance' ? 'active' : ''}`}
            onClick={() => setFilter('Cancelling Balance')}
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
