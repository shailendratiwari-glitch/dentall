import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <span className="tiny-center-tag">EXCELLENCE IN DENTAL CARE</span>
        <h1>Precision Dentistry, <br /><span className="text-highlight">Tailored For You.</span></h1>
        <p>Experiencing clinical perfection built on a legacy of institutional medical trust and patient-first innovation.</p>
        <a href="#services" className="hero-btn">Explore Our Services</a>
      </div>
    </div>
  );
  
}