import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="nav-bar">
      <div className="nav-logo">
        VERTEX<span>DENTAL</span>
      </div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#doctors">Doctors</a>
      </div>
    </nav>
  );
}
