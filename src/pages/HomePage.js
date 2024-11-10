// src/pages/HomePage.js
import React, { useState } from 'react';

import Discover from '../components/Discover';
import ProfileReview from '../components/ProfileReview';
import './HomePage.css';
import Services from '../components/ServiceCard';
import BookingForm from '../components/BookingForm';
import { Link } from 'react-router-dom';
// import OrderForm from '../components/OrderForm';

const HomePage = () => {


const [increase, SetIncrease] = useState(1)


const decreaseCount = () => {
  SetIncrease((prevCount) => prevCount - 1);
  
};

const increaseCount = () => {
  SetIncrease((prevCount) => prevCount + 1);
  
};

  return (
    <div className="homepage">
     

      <main className="main-content">
        <div className='total-container'>
        <div className="text-content">
          <h2>Work from ladakh</h2>
          <p>India’s first true digital tourism ecosystem</p>
          <div className="social-icons">
            <a href="#"><img src="/assets/facebook.png" alt="Facebook" /></a>
            <a href="#"><img src="/assets/instagram.png" alt="Instagram" /></a>
          </div>
        </div>
        
        <div className="image-content">
          <img src="/assets/lk.jpg" alt="Ladakh Scenery" />
        </div>
        </div>
      </main>

      <div className="booking-form">
        <div className="form-section">
          <label>CHECK-IN</label>
          <input type="date" />
        </div>
        <div className="form-section">
          <label>CHECK-OUT</label>
          <input type="date" />
        </div>
        <div className="form-section">
          <label>ROOMS</label>
          <div className="room-selector">
            <button onClick={decreaseCount}>-</button>
            <span>{increase}</span>
            <button onClick={increaseCount}>+</button>
          </div>
        </div>
        <button className="book-button"><Link to="/book">
        <button className='total-book-btn-001-485'>BOOK</button>
      </Link></button>
      </div>

      <div className='discovers-1'>
        <Discover />
      </div>
      <div className='Services-total-1'>
        <Services />
      </div>

      <div className='booking-45-0'>
     
      </div>
    </div>
  );
};

export default HomePage;
