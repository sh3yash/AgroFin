import React from 'react';
import LoanCard from '../components/LoanCard';
import FinancialHealthCard from '../components/FinancialHealthCard';
import './DashboardPage.css';

const DashboardPage = () => {
  const loans = [
    { title: 'Loan A', amount: '50000', status: 'Approved' },
    { title: 'Loan B', amount: '20000', status: 'Pending' }
  ];

  const healthData = { score: 750, advice: 'Maintain your good score!' };

  return (
    <div className="dashboard-page">
      <h2>Your Dashboard</h2>
      <div className="loans-section">
        <h3>Your Loans</h3>
        {loans.map((loan, index) => <LoanCard key={index} loan={loan} />)}
      </div>
      <div className="financial-health-section">
        <FinancialHealthCard healthData={healthData} />
      </div>
    </div>
  );
};

export default DashboardPage;
