import React from 'react';
import './HomePage.css';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import hairCareVideo from '../assets/HAIR_CARE.mp4';

function HomePage() {
  return (
    <main>
      <Header></Header>
      <section className="hero">
        <div className="hero-content">
          <h2>Experience the Magic of Nature</h2>
          <p>Revitalize your hair with Magic Hair Oil - made from 100% natural ingredients.</p>
          <button className="cta-button" >View Customer Feedbacks</button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
  <h2>About Magic Hair Oil</h2>
  <div className="about-content">
    <div className="about-video">
    <video controls>
  <source src={hairCareVideo} type="video/mp4" />
    </video>
    </div>
    <div className="about-text">
      <p>
      Magic Hair Oil is meticulously formulated to provide complete nourishment and protection for your hair. Our unique blend of premium, all-natural oils works synergistically to promote healthy hair growth from the roots to the tips. Infused with potent ingredients like coconut oil, argan oil, and rosemary extract, it strengthens hair follicles, reducing breakage and split ends.

<p>Magic Hair Oil also combats common hair concerns, such as dryness and frizz, ensuring your hair remains soft, smooth, and manageable. It not only prevents excessive hair fall but also helps to restore hair thickness by improving scalp health and circulation. With regular use, your hair will develop a lustrous, natural shine that reflects vitality.</p>
      </p>
    </div>
  </div>
</section>


      {/* Benefits Section */}
      <section id="benefits" className="benefits">
        <h2>Why Choose Magic Hair Oil?</h2>
        <div className="benefit-cards">
          <div className="card">
            <h3>Natural Ingredients</h3>
            <p>Our oil is made with 100% natural, chemical-free ingredients.</p>
          </div>
          <div className="card">
            <h3>Healthy Hair Growth</h3>
            <p>Promotes healthy hair growth and strengthens roots.</p>
          </div>
          <div className="card">
            <h3>Reduces Hair Fall</h3>
            <p>Prevents hair fall and helps keep your scalp moisturized.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="cta-section">
        <h2>Ready to Transform Your Hair?</h2>
        <p>Order now and get the magic delivered to your doorstep!</p>
        <button className="cta-button">Buy Now</button>
      </section>
      <Footer></Footer>
    </main>
  );
}

export default HomePage;
