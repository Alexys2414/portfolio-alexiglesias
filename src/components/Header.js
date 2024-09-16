import React, { useState } from 'react';
import './Header.css';
import star from '../assets/stars.svg'; 
import background from '../assets/background-happy-transformed.jpeg'; 
import Nav from './Nav'; // Importa el componente de navegación

const Header = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <div className="menu-container" onClick={toggleNav}>
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="60" viewBox="0 0 200 100">
          <ellipse cx="100" cy="50" rx="90" ry="40" stroke="white" fill="none" stroke-width="3" />
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

      {/* Componente Nav que se despliega */}
      <Nav isOpen={isNavOpen} toggleNav={toggleNav} />
    </header>
  );
};

export default Header;
  