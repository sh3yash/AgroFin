import React, { useState } from 'react';
import './HomePage.css';
import { FaQuoteLeft } from 'react-icons/fa';
import carousel1 from '../assets/images/carousel1.jpg';
import carousel2 from '../assets/images/carousel2.jpg';
import carousel3 from '../assets/images/carousel3.jpg';

const carouselItems = [
  {
    title: "Empowering Farmers",
    content: "We provide financial solutions tailored for your agricultural needs.",
    buttonText: "Learn More",
    backgroundImage: {carousel1} // Add image URLs here
  },
  {
    title: "Secure Your Future",
    content: "Manage your finances effectively with our expert guidance.",
    buttonText: "Learn More",
    backgroundImage: {carousel2}
  },
  {
    title: "Join Our Community",
    content: "Connect with other farmers and financial institutions.",
    buttonText: "Learn More",
    backgroundImage: {carousel3}
  }
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
  };

  return (
    <div className="homepage">
      {/* Main Background Section */}
      <div className="hero-section">
        <h1>Welcome to Agri-Finance Platform</h1>
        <p>Your partner in financial growth and support.</p>
        <div className="buttons">
          <button className="btn-appointment">Book an Appointment for Consultation</button>
          <button className="btn-chat">Chat with AI</button>
        </div>
      </div>

      {/* Custom Carousel Section */}
      <div className="carousel-section" style={{ backgroundImage: carouselItems[currentIndex].backgroundImage }}>
        <div className="carousel-container">
          <div className="carousel-content">
            <h2>{carouselItems[currentIndex].title}</h2>
            <p>{carouselItems[currentIndex].content}</p>
            <button className="btn-learn-more">{carouselItems[currentIndex].buttonText}</button>
          </div>
          <button className="carousel-control prev" onClick={prevSlide}>
            &#10094;
          </button>
          <button className="carousel-control next" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      </div>

      {/* Client Testimonials Section */}
      <div className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <FaQuoteLeft className="quote-icon" />
            <p>"This platform has transformed my farming business!"</p>
            <p>- Farmer John</p>
          </div>
          <div className="testimonial-card">
            <FaQuoteLeft className="quote-icon" />
            <p>"The financial advice I received was invaluable."</p>
            <p>- Farmer Sarah</p>
          </div>
          <div className="testimonial-card">
            <FaQuoteLeft className="quote-icon" />
            <p>"A fantastic service for all agricultural needs!"</p>
            <p>- Farmer Mike</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
