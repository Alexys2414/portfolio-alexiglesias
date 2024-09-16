import React from "react";
import "./Footer.css"; // Estilos externos para mantener el código limpio

const Footer = () => {
  return (
    <footer className="groovy-footer">
      <div className="footer-pattern">
        {/* Fondo de patrones */}
      </div>
      <div className="footer-content">
        <h2 className="footer-title">¡Vamos a Conectar!</h2>
        <div className="social-media">
          <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" className="retro-button">
            GitHub
          </a>
          <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer" className="retro-button">
            LinkedIn
          </a>
        </div>
        <div className="footer-info">
          <p>© 2024 Alex Iglesias - Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
