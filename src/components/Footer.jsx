import React from 'react';
import './Footer.css';
import facebookIcon from "../assets/computer-icons-social-media-youtube-facebook-messenger-social-media-40769811ee1c159535e4d4e4fdb768e6.png";
import instagramIcon from "../assets/computer-icons-logo-clip-art-instagram-8b82bdef3e00ee4af2b8b268fdc93ed0.png";
import emailIcon from "../assets/email-logo-icon-email-png-dd3fc13c3c3d6e6d110176ae0d6aa42a.png";
import phoneIcon from "../assets/telephone-call-computer-icons-iphone-symbol-telefono-656b7d40e24d72890e33727daf924305.png";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div>
          <img src={facebookIcon} alt="Facebook" />
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
        <div>
          <img src={instagramIcon} alt="Instagram" />
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:magichairoil@info.com">magichairoil@info.com</a>
        </div>
        <div>
          <img src={phoneIcon} alt="Phone" />
          <a href="tel:+94771234567">+94771234567</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
