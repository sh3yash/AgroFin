import React, { useState } from 'react';
import './LoanApplicationPage.css';

const LoanApplicationPage = () => {
  const [formData, setFormData] = useState({
    amount: '',
    purpose: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add loan application logic here
  };

  return (
    <div className="loan-application-page">
      <h2>Apply for a Loan</h2>
      <form onSubmit={handleSubmit}>
        <label>Loan Amount</label>
        <input type="number" name="amount" value={formData.amount} onChange={handleChange} required />

        <label>Purpose</label>
        <input type="text" name="purpose" value={formData.purpose} onChange={handleChange} required />

        <button type="submit" className="btn">Submit Application</button>
      </form>
    </div>
  );
};

export default LoanApplicationPage;
