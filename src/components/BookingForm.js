import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { submitOrder, submitOrderAsync, calculateTotal } from '../redux/orderSlice';
import './BookingForm.css';

const BookingForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { total } = useSelector((state) => state.order);
  const [localFormData, setLocalFormData] = useState({
    name: '',
    email: '',
    phone: '',
    adults: "",
    children: "",
    checkIn: '',
    checkOut: '',
    rooms: 1,
  });

  const handleChange = (e) => {
    setLocalFormData({
      ...localFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(submitOrder(localFormData));
    dispatch(calculateTotal());

    try {
      await dispatch(submitOrderAsync(localFormData));
      navigate('/order-complete', { state: { total } });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="booking-form-container">
      <form onSubmit={handleSubmit} className="booking-form1">
        <div className="form-group">
          <input type="text" name="name" placeholder="Name" value={localFormData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={localFormData.email} onChange={handleChange} required />
        </div>
        <div className="form-group total-block-bookform-994">
          <input type="tel" name="phone" placeholder="Phone" value={localFormData.phone} onChange={handleChange} required />
          <input type="text" name="adults" placeholder="Adults" min="1" value={localFormData.adults} onChange={handleChange} required />
          <input type="text" name="children" placeholder="Children" min="0" value={localFormData.children} onChange={handleChange} />
        </div>
        <div className="form-group">
        <div className="form-section">
        <label>CHECK-IN</label>
          <input type="date" name="checkIn" value={localFormData.checkIn} onChange={handleChange} required /></div>
          <div className="form-section">
          <label>CHECK-OUT</label> 
          <input type="date"  name="checkOut" value={localFormData.checkOut} onChange={handleChange} required /></div>
          <div className='bookform-room-latest-button-01-30'><label>ROOMS</label>
          <input type="number" className='room-width-count' name="rooms" placeholder="Rooms" min="1" value={localFormData.rooms} onChange={handleChange} required />
          </div>
          <div className='total-submit-bookform-0019432'>
          <button type="submit" className='submit-width-count-02-4'>₹ {total || 12430} <span className='arrow-icon-094'>→</span></button>
         <p>Click to pay token amount</p></div>
        </div>
        {/* <div className="form-group">
          <input type="number" name="rooms" placeholder="Rooms" min="1" value={localFormData.rooms} onChange={handleChange} required />
          <button type="submit">₹ {total || 12430}</button>
        </div> */}
      </form>
    </div>
  );
};

export default BookingForm;


