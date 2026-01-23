import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container d-flex flex-column flex-lg-row align-items-center">
        {/* Top row: brand centered on small, left on large */}
        <div className="d-flex align-items-center w-100 justify-content-center justify-content-lg-start">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img 
              src="https://img.icons8.com/fluency/48/archeology.png" 
              alt="Kaseki Logo" 
              height="40" 
              className="me-2"
              onError={(e) => {e.target.style.display='none'}}
            />
            <h1 className="navbar-title text-center text-lg-start mb-0">
                Kaseki <span className="navbar-subtitle">| Análisis Arqueologico</span>
            </h1>
          </Link>
        </div>

        {/* Top-right AI badge on large screens */}
        <div className="d-none d-lg-block ms-lg-auto">
          <div className="ai-badge text-nowrap d-flex align-items-center" style={{whiteSpace: 'nowrap'}}>
            <i className="fa-solid fa-robot me-1"></i> AI Gemini Vision
          </div>
        </div>

        {/* Second row for small screens: toggler left, AI badge right */}
        <div className="d-flex w-100 justify-content-between mt-2 d-lg-none">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="ai-badge text-nowrap d-flex align-items-center" style={{whiteSpace: 'nowrap'}}>
            <i className="fa-solid fa-robot me-1"></i> AI Gemini Vision
          </div>
        </div>

        {/* Collapsed menu */}
        <div className="collapse navbar-collapse w-100" id="navMenu">
          <ul className="navbar-nav ms-lg-auto mx-auto text-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/analyze">Análisis Arqueológico</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/galeria">Galería</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">Acerca de Nosotros</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}