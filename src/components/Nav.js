import React, { useEffect } from 'react';
import './Nav.css';
import anime from 'animejs'; // Necesitas anime.js instalado: npm install animejs

const Nav = ({ isOpen, toggleNav }) => {

  useEffect(() => {
    const nav = document.querySelector('.nav-menu'); // El nav svg que contiene los enlaces

    // Antes de comenzar una nueva animación, eliminamos cualquier animación previa para evitar conflictos.
    anime.remove('textPath');

    // Animación del texto con anime.js
    anime({
      targets: 'textPath',
      startOffset: (d, i) => {
        if (isOpen) {
          return i % 2 === 0 ? '60%' : '40%'; // Movimiento de entrada
        }
        return i % 2 === 0 ? '0%' : '100%'; // Movimiento de salida
      },
      duration: 2500,
      delay: isOpen ? 200 + anime.stagger(50) : anime.stagger(50),
      easing: 'easeInOutQuad',
      begin: () => {
        if (isOpen) {
          nav.style.visibility = 'visible'; // Hacer visible al abrir
        }
      },
      complete: () => {
        if (!isOpen) {
          nav.style.visibility = 'hidden'; // Ocultar al cerrar
        }
      },
    });
  }, [isOpen]);

  // Función para manejar el clic en los enlaces y hacer el smooth scroll
  const handleLinkClick = (e, targetId) => {
    e.preventDefault(); // Evitar comportamiento predeterminado del enlace
    const targetSection = document.querySelector(targetId); // Buscar la sección objetivo
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' }); // Hacer scroll hacia la sección objetivo
    }
    toggleNav(); // Cerrar el nav después de hacer clic
  };

  return (
    <div className={`nav-container ${isOpen ? 'open' : ''}`}>
      <nav className="nav-menu">
        <svg viewBox="0 0 500 400" width="500" height="400">
          <defs>
            <path id="path" d="M -150 60 q 50 -20 100 0 t 100 0 100 0 100 0 100 0 100 0 100 0 100 0 100 0" fill="none" />
          </defs>
          <g transform="translate(0 0)">
            <a href="#home" onClick={(e) => handleLinkClick(e, '#home')}>
              <text>
                <textPath textAnchor="middle" href="#path" startOffset="0%">Home</textPath>
              </text>
            </a>
          </g>
          <g transform="translate(0 100)">
            <a href="#about" onClick={(e) => handleLinkClick(e, '#about')}>
              <text>
                <textPath textAnchor="middle" href="#path" startOffset="100%">About</textPath>
              </text>
            </a>
          </g>
          <g transform="translate(0 200)">
            <a href="#projects" onClick={(e) => handleLinkClick(e, '#projects')}>
              <text>
                <textPath textAnchor="middle" href="#path" startOffset="0%">Projects</textPath>
              </text>
            </a>
          </g>
          <g transform="translate(0 300)">
            <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>
              <text>
                <textPath textAnchor="middle" href="#path" startOffset="100%">Contact</textPath>
              </text>
            </a>
          </g>
        </svg>
      </nav>

      {/* Botón de cerrar (X) que dispara toggleNav */}
      <button className="close-button open" onClick={toggleNav} aria-label="Cerrar navegación">
        <svg viewBox="-50 -40 100 80" width="50" height="40">
          <defs>
            <path id="line" fill="none" stroke="currentColor" strokeWidth="15" strokeLinecap="round" d="M -40 0 h 80" />
          </defs>
          <g>
            <g className="translate" transform="translate(0 -30)">
              <g className="rotate" transform="rotate(-45)">
                <use transform="rotate(45)" href="#line" />
              </g>
            </g>
            <g className="rotate" transform="rotate(45)">
              <use transform="rotate(-45)" href="#line" />
            </g>
            <g className="translate" transform="translate(0 30)">
              <g className="rotate" transform="rotate(-45)">
                <use transform="rotate(45)" href="#line" />
              </g>
            </g>
          </g>
        </svg>
      </button>
    </div>
  );
};

export default Nav;
