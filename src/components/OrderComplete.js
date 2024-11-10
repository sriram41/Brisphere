import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './OrderComplete.css';

const OrderComplete = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { total } = useSelector((state) => state.order); // Fallback to Redux if state is null

  // If location.state is null, show total from Redux
  const passedTotal = location.state?.total || total || 0;

  // Redirect if there's no valid total (for example, page refreshes)
  if (!passedTotal) {
    navigate('/');
  }

  
  
    
    
  


  return (
  

      <div className="order-complete-container">
      <div className="order-details">
        <div className="user-info">
          <h2>Amit Jha</h2>
          <p>+91 - 7764997022</p>
          <p>amit.jha6700@gmail.com</p>
          <p>1 Adult and 2 Children</p>
        </div>
        <div className="order-status">
          <div className="status-icon">
            <img src="/assets/tick.png" alt="Order Complete" />
          </div>
          <div className="status-text">
            <h3>Order Complete</h3>
            <p>Have questions? <a href="/contact">Contact us</a></p>
          </div>
        </div>
      </div>

      <div className="form-group">
        <div className="form-section">
        <label>CHECK-IN</label>
          <input type="date" name="checkIn"  required /></div>
          <div className="form-section">
          <label>CHECK-OUT</label> 
          <input type="date"  name="checkOut"  /></div>
          <div className='bookform-room-latest-button-01-30'><label>ROOMS</label>
          <input type="number" className='room-width-count' name="rooms" placeholder="Rooms" min="1"  required />
          </div>
          
          <button type="submit" className='submit-width-count-9947'>₹ {passedTotal}</button>
        
     
     
    </div>
    </div>
  );
};

export default OrderComplete;



