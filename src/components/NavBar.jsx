import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img 
            src="https://img.icons8.com/fluency/48/archeology.png" 
            alt="Kaseki Logo" 
            height="40" 
            className="me-2"
            onError={(e) => {e.target.style.display='none'}}
          />
          <h1 className="navbar-title">
              Kaseki <span className="navbar-subtitle">| Análisis Arqueologico</span>
          </h1>
        </Link>
        <div className="ai-badge">
          <i className="fa-solid fa-robot me-1"></i> AI Gemini Vision
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">Acerca de Nosotros</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/analyze">Análisis Arqueológico</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}