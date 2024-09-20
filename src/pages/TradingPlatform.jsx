import React, { useState } from 'react';
import './TradingPlatform.css';

const items = [
  {
    id: 1,
    name: "Organic Tomatoes",
    description: "Fresh organic tomatoes sourced from local farms.",
    price: "$3.00",
  },
  {
    id: 2,
    name: "Farm Fresh Eggs",
    description: "Free-range eggs with rich yolks and great taste.",
    price: "$2.50",
  },
  {
    id: 3,
    name: "Honey",
    description: "Pure, raw honey collected from wildflowers.",
    price: "$5.00",
  },
  {
    id: 4,
    name: "Herbs Bundle",
    description: "A bundle of fresh herbs including basil, parsley, and cilantro.",
    price: "$4.00",
  },
];

const TradingPlatform = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for joining our marketplace, ${name}!`);
    setName('');
    setEmail('');
  };

  return (
    <div className="trading-platform">
      <header className="header">
        <h1>Farmers Market</h1>
        <p>Your one-stop destination for fresh produce!</p>
      </header>

      <main className="item-list">
        {items.map(item => (
          <div className="item-card" key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <span className="price">{item.price}</span>
            <button className="buy-button">Buy Now</button>
          </div>
        ))}
      </main>

      <section className="join-marketplace">
        <h2>Join Our Marketplace</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default TradingPlatform;
