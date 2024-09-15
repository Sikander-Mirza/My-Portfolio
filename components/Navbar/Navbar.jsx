import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <header className="container">
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#000" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#home" style={{ color: "#fff" }}>
            Amelia<span style={{ color: "#f0ad4e" }}>Morgan</span>
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item me-4">
                <a className="nav-link" href="#home" style={{ color: "#fff" }}>Home</a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link" href="#services" style={{ color: "#fff" }}>Services</a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link" href="#testimonials" style={{ color: "#fff" }}>Testimonials</a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link" href="#education" style={{ color: "#fff" }}>Education</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact" style={{ color: "#fff" }}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
