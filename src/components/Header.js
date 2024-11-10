// src/components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="header">
    <h1 className="logo"><NavLink to="/" ClassName="total-list">Brisphere</NavLink></h1>
    <nav className="navigation">
      <NavLink to="/discover" activeClassName="active-link">Discover</NavLink>
      <NavLink to="/services" activeClassName="active-link">Services</NavLink>
      <NavLink to="/about" activeClassName="active-link">About Us</NavLink>
    </nav>
  </header>
);

export default Header;
