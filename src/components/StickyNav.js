import React, { useEffect, useState } from 'react';
import './StickyNav.css';
import star from '../assets/stars.svg'; // Usamos la misma imagen de las estrellas

const StickyNav = ({ isNavOpen, toggleNav }) => {
  const [isStickyVisible, setStickyVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 125 && !isNavOpen) {
        setStickyVisible(true);
      } else {
        setStickyVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isNavOpen]); // Actualiza si se abre/cierra el Nav

  if (isNavOpen) return null; // Si el Nav está abierto, ocultamos el StickyNav

  return (
    <div className={`sticky-nav ${isStickyVisible ? 'show' : ''}`}>
      <div className="sticky-menu-container" onClick={toggleNav}>
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="60" viewBox="0 0 200 100">
          <ellipse cx="100" cy="50" rx="90" ry="40" stroke="white" fill="none" strokeWidth="3" />
        </svg>
        <div className="sticky-menu-text">
          <p>Menu</p>
        </div>
        <div className="sticky-menu-stars">
          <img src={star} alt="star" className="sticky-star-small" />
          <img src={star} alt="star" className="sticky-star-small" />
        </div>
      </div>
      <div className="sticky-title">Alexys</div>
    </div>
  );
};

export default StickyNav;
