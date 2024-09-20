import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import LoanApplicationPage from './pages/LoanApplicationPage';
import LoanManagementPage from './pages/LoanManagementPage';
import FinancialHealthPage from './pages/FinancialHealthPage';
import PaymentHistoryPage from './pages/PaymentHistoryPage';
import FinancialAdvicePage from './pages/FinancialAdvicePage';
import ProfilePage from './pages/ProfilePage';
import ContactUsPage from './pages/ContactUsPage';
import HomePage from './pages/HomePage';
import TradingPlatform from './pages/TradingPlatform';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/apply-loan" element={<LoanApplicationPage />} />
          <Route path="/manage-loan" element={<LoanManagementPage />} />
          <Route path="/financial-health" element={<FinancialHealthPage />} />
          <Route path="/payment-history" element={<PaymentHistoryPage />} />
          <Route path="/financial-advice" element={<FinancialAdvicePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/tradingplatform" element={<TradingPlatform />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
