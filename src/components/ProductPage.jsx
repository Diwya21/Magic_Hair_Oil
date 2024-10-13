import React, { useState } from "react"; 
import "./ProductPage.css";
import Productmain from '../assets/Productmain.jpg';
import Product1 from '../assets/Product1.jpg';
import Product2 from '../assets/Product2.jpg';
import Product3 from '../assets/Product3.jpg';
import Header from "../components/Header";
import Footer from "./Footer";

const ProductPage = () => {
  const basePrice = 800; // Base price for 100ML in LKR

  const addToCart = () => {
    alert(`Added 100ML Ayurvedic Hair Oil to cart`);
  };

  return (
    <>
      <Header />
      <div className="product-page">
        <div className="product-image-gallery">
          <img src={Productmain} alt="Productmain" className="main-image" />
          <div className="thumbnail-images">
            <img src={Product1} alt="Product1" />
            <img src={Product2} alt="Product2" />
            <img src={Product3} alt="Product3" />
          </div>
        </div>
        
        <div className="product-details">
          <h1>Magic Hair Oil</h1>
          <p className="description">
            Magic Hair Oil is a premium, 100% natural hair care solution crafted to nourish, protect, and revitalize your hair from root to tip. Our unique blend is made using nature’s finest ingredients, including pure essential oils and carefully selected herbal extracts, renowned for their deep conditioning and restorative properties.
          </p>

          <div className="pack-sizes">
            <h2>Package Size</h2>
            <p><b>100ML - LKR {basePrice}.00</b></p>
          </div>

          <button className="add-to-cart" onClick={addToCart}>
            Add To Cart
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
