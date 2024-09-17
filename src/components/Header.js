import React from 'react';
import './Header.css';
import star from '../assets/stars.svg';
import Nav from './Nav'; 

const Header = ({ isNavOpen, toggleNav }) => {
  return (
    <header className="header">
      <div className="menu-container" onClick={toggleNav}>
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="60" viewBox="0 0 200 100">
          <ellipse cx="100" cy="50" rx="90" ry="40" stroke="white" fill="none" strokeWidth="3" />
        </svg>
        <div className="menu-text">
          <p>Menu</p>
        </div>
        <div className="menu-stars">
          <img src={star} alt="star" className="star-small" />
          <img src={star} alt="star" className="star-small" />
        </div>
      </div>

      <div className="header-content">
        <h1 className="main-title">Alexys</h1>
        <div className="stars">
          <img src={star} alt="star" className="star" />
          <img src={star} alt="star" className="star" />
        </div>
      </div>

      <Nav isOpen={isNavOpen} toggleNav={toggleNav} />
    </header>
  );
};

export default Header;
