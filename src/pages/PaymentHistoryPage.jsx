import React from 'react';
import './PaymentHistoryPage.css';

const PaymentHistoryPage = () => {
  const paymentHistory = [
    { date: '2024-01-01', amount: 5000, status: 'Completed' },
    { date: '2024-02-01', amount: 4000, status: 'Completed' }
  ];

  return (
    <div className="payment-history-page">
      <h2>Your Payment History</h2>
      <ul>
        {paymentHistory.map((payment, index) => (
          <li key={index}>
            Date: {payment.date}, Amount: {payment.amount}, Status: {payment.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentHistoryPage;
