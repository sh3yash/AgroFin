import React from 'react';
import FinancialHealthCard from '../components/FinancialHealthCard';
import './FinancialHealthPage.css';

const FinancialHealthPage = () => {
  const healthData = { score: 750, advice: 'Keep maintaining your financial health.' };

  return (
    <div className="financial-health-page">
      <h2>Check Your Financial Health</h2>
      <FinancialHealthCard healthData={healthData} />
    </div>
  );
};

export default FinancialHealthPage;
