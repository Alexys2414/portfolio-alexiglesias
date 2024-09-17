import React from 'react';
import { Link } from 'react-router-dom'; // Para redirigir al inicio
import './NotFound.css'; // Usamos los estilos adaptados

const NotFound = () => {
  return (
    <div className="error404-body">
      {/* Link para volver al home */}
      <div className="back-link">
        <Link to="/" className="back-link-content">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M10 19l-7-7 7-7v14zM14 5v14h-2V5h2z" />
          </svg>
          <span>Volver</span>
        </Link>
      </div>

      {/* Texto 404 */}
      <h1 className="error404-title">
        404
        <br />
        Not
        <br />
        Found
      </h1>
    </div>
  );
};

export default NotFound;
