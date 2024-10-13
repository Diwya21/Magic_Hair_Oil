import React, { useState, useEffect } from 'react';
import './ShoppingCart.css'; // Optional CSS for the ShoppingCart component
import Productmain from '../assets/Productmain.jpg';
import Header from './Header';
import Footer from "./Footer";

const ShoppingCart = () => {
  const [quantity, setQuantity] = useState(1);
  const pricePerItem = 800.00; 
  const [autoDiscount, setAutoDiscount] = useState(0); // State for automatic discount
  
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const subtotal = pricePerItem * quantity;
  
  // Automatically calculate 10% discount if subtotal exceeds 8000
  useEffect(() => {
    if (subtotal > 8000) {
      setAutoDiscount(subtotal * 0.10); // 10% of subtotal
    } else {
      setAutoDiscount(0); // Reset auto discount if condition is not met
    }
  }, [subtotal]);

  const totalAmount = subtotal - autoDiscount;

  return (
    <div>
    <Header/>
    <div className="ShoppingCart">
     
      <h1>Your Cart</h1>
      
      <div className="cart-item">
        <img src={Productmain} alt="Productmain" className="main-image" />
        <div className="item-details">
          <h2>Magic Hair Oil (100ml)</h2>
          <p>Price: LKR {pricePerItem.toFixed(2)}</p>
          <label>
            Quantity:
            <input 
              type="number" 
              value={quantity} 
              onChange={handleQuantityChange} 
              min="1" 
            />
          </label>
          <p>Subtotal: LKR {subtotal.toFixed(2)}</p>
        </div>
      </div>

      <div className="cart-summary">
        <p>Sub Total: LKR {subtotal.toFixed(2)}</p>
        <p>Automatic 10% Discount: LKR {autoDiscount.toFixed(2)}</p> {/* Display auto discount */}
        <h3>Total Amount: LKR {totalAmount.toFixed(2)}</h3>
      </div>

      <p style={{ color: 'green' }}>You Have 10% Discount for over 8,000 LKR orders.</p>
      <button className="shopcart">Checkout Now</button>
      
    </div>
    <Footer></Footer>
    </div>
  );
};

export default ShoppingCart;
