import React from 'react';
import './Header.css';
import logo from '../assets/logo.png'; // Adjust the path based on where you place the logo

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Magic Hair Oil Logo" className="logo" />
        <h2>Magic Hair Oil</h2>
      </div>
      <nav>
        <a href="#about">About</a>
        <a href="#benefits">Benefits</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;

