import React from 'react'
import { Link, NavLink } from 'react-router-dom'

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
          <span>Kaseki</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/identify">Material</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/identify-civilization">Civilization</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
