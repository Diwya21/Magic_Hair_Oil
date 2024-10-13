import React, { useState } from 'react';
import './Payment.css';
import cards from '../assets/cards.png';
import './Header.jsx';

const Payment = () => {
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    nameOnCard: '',
    expirationMonth: '',
    expirationYear: '',
    cvv: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({
      ...cardDetails,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment submission here
    console.log(cardDetails);
  };

  return (
    <main>
        
    <div className="payment-container">
      <div className="payment-box">
        <h2>Payment Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Card Number</label>
            <input
              type="text"
              name="cardNumber"
              placeholder="Enter the Card Number"
              value={cardDetails.cardNumber}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Name on Card</label>
            <input
              type="text"
              name="nameOnCard"
              placeholder="Enter the name"
              value={cardDetails.nameOnCard}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-group expiration-group">
            <label>Expiration</label>
            <input
              type="text"
              name="expirationMonth"
              placeholder="MM"
              value={cardDetails.expirationMonth}
              onChange={handleInputChange}
              className="expiration-input"
              required
            />
            <span>/</span>
            <input
              type="text"
              name="expirationYear"
              placeholder="YYYY"
              value={cardDetails.expirationYear}
              onChange={handleInputChange}
              className="expiration-input"
              required
            />
          </div>

          <div className="input-group">
            <label>CVV</label>
            <input
              type="text"
              name="cvv"
              placeholder="Enter CVV"
              value={cardDetails.cvv}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="payment-icons">
          <img src={cards} alt="cards"  />
            
          </div>

          <button type="submit" className="pay-now-btn">Pay Now</button>
        </form>
      </div>
    </div>
    </main>
  );
};

export default Payment;
