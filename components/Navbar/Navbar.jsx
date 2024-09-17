import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; // Custom styles

const Navbar = () => {
  return (
    <header className="container">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#home" style={{ color: "#fff", fontSize: "1.5rem" }}>
            Amelia<span style={{ color: "#00d9d9" }}>Morgan</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" style={{ color: "#00d9d9" }}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item me-4">
                <a className="nav-link neon-hover" href="#home">Home</a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link neon-hover" href="#services">Services</a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link neon-hover" href="#testimonials">Testimonials</a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link neon-hover" href="#education">Education</a>
              </li>
              <li className="nav-item">
                <a className="nav-link neon-hover" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
