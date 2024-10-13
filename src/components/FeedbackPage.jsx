import React from 'react';
import './FeedbackPage.css';
import Header from './Header';
import customer1 from '../assets/Feedback1.jpg';
import customer2 from '../assets/Feedback2.jpg';
import customer3 from '../assets/Feedback3.jpg';

function FeedbackPage() {
  return (
    <main className="feedback-page">
      <Header></Header>
      <h2>What Our Customers Say ?</h2>

      <div className="feedback-container">
        {/* Customer 1 */}
        <div className="feedback-card">
          <img src={customer1} alt="Customer 1" className="customer-img" />
          <h3>Sanduni Dissanayaka</h3>
          <p>
            "Magic Hair Oil has been a game-changer for my hair. After using it for a few weeks, my hair feels softer, looks shinier, and I’ve noticed less hair fall!"
          </p>
        </div>

        {/* Customer 2 */}
        <div className="feedback-card">
          <img src={customer2} alt="Customer 2" className="customer-img" />
          <h3>Diwya Wijerathna</h3>
          <p>
            "I love the natural ingredients in Magic Hair Oil. It’s the best product I’ve used, and I’ll definitely be recommending it to my friends."
          </p>
        </div>

        {/* Customer 3 */}
        <div className="feedback-card">
          <img src={customer3} alt="Customer 3" className="customer-img" />
          <h3>Janani Nimanthi</h3>
          <p>
            "The results speak for themselves. My hair feels healthier, and the oil doesn’t leave it greasy. I’m really impressed with this product!"
          </p>
        </div>
      </div>
      <section className="cta-section3">
        <h2>Order now and get the magic hair oil delivered to your doorstep!</h2>
        <button className="cta-button">Buy Now</button>
      </section>
    </main>
  );
}

export default FeedbackPage;
