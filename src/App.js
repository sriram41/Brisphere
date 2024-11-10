// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/footer';
import { Provider } from 'react-redux';
import store from './redux/store';
import Discover from './components/Discover';
import ServicesCard from './components/ServiceCard';
import AboutPage from './pages/AboutPage';
import BookingForm from './components/BookingForm';
import OrderComplete from './components/OrderComplete';

function App() {
  return (
    // <Provider store={store}>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        
<Route path="/discover" element={<Discover />} />
<Route path="/services" element={<ServicesCard />} />
<Route path="/about" element={<AboutPage />} />
<Route path="/book" element={<BookingForm />} />

<Route path="/order-complete" element={<OrderComplete />} />
      </Routes>
      <Footer />
    </Router>
    // </Provider>
  );
}

export default App;

