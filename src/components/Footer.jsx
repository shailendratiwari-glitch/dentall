import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-branding">
            <h3>VERTEX<span>DENTAL</span></h3>
            <p>Clinical governance and elite patient restorative medicine.</p>
          </div>
          
          <div className="footer-links-group">
            <h4>Medical Board Links</h4>
            <a href="#home">Physician Access</a>
            <a href="#services">Clinical Standards</a>
            <a href="#about">Research Guidelines</a>
          </div>

          <div className="footer-links-group">
            <h4>Contact Operations</h4>
            <p>Direct line: (800) 555-0199</p>
            <p>Inquiries: clinical@vertexdental.org</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Vertex Dental Collective. Managed strictly under medical administrative framework protocols.</p>
        </div>
      </div>
    </footer>
  );
}