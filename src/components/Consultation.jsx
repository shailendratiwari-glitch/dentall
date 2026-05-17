import React from 'react';
import './Consultation.css';

export default function Consultation({ onOpenModal }) {
  return (
    <section className="consultation-section">
      <div className="consultation-wrapper">
        <div className="consultation-content">
          <span className="tiny-center-tag-dark">EASY APPOINTMENT BOOKING</span>
          <h2>Schedule Your Consultation Today</h2>
          <p>Connect directly with our clinical experts to discuss your dental health goals and treatment options.</p>
          
          <div className="consultation-features">
            <div className="feature-item">
              <span className="feature-icon">📞</span>
              <h4>Direct Access</h4>
              <p>Speak with lead specialists</p>
            </div>
            <div className="feature-item">
              <span className="feature-icon">⏱️</span>
              <h4>Quick Response</h4>
              <p>Same-day consultation available</p>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <h4>Confidential</h4>
              <p>Secure patient information</p>
            </div>
          </div>

          <button className="consultation-btn" onClick={onOpenModal}>
            Request Your Consultation
          </button>
        </div>

        <div className="consultation-image">
          <img src="https://images.unsplash.com/photo-1551958219-acbc608c6c4d?q=80&w=2070" alt="Consultation" />
        </div>
      </div>
    </section>
  );
}
