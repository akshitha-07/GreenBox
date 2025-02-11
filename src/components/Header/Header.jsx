import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'
const Header = () => {
  return (
    <div className="header">
      <img src={assets.header_img} alt="Fresh Produce" className="header-bg" />
      <div className="header-content">
        <h1>Fresh Produce, Tailored to Your Needs</h1>
        <p>We deliver farm-fresh produce directly to your doorstep.</p>
        <button className="header-button">Get Started</button>
      </div>
    </div>
  );
};

export default Header;
