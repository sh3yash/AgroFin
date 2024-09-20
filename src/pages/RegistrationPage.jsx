import React, { useState } from 'react';
import './RegistrationPage.css';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    type: 'Farmer'
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
    // Add registration logic here
  };

  return (
    <div className="registration-page">
      <h2>Register for an Account</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />

        <label>Account Type</label>
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="Farmer">Farmer</option>
          <option value="Advisor">Advisor</option>
          <option value="Bank">Bank</option>
        </select>

        <button type="submit" className="btn">Register</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
