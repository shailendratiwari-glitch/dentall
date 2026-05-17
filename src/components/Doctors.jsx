import React from 'react';
import './Doctors.css';

export default function Doctors() {
  return (
    <div className="doctors-wrapper">
      <div className="section-header">
        <span className="tiny-center-tag-dark">OUR MEDICAL LEADERSHIP</span>
        <h2>World-Class Clinical Experts</h2>
      </div>
      
      <div className="doctors-grid">
        <div className="doctor-card">
          <div className="doctor-image-wrapper">
            <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070" alt="Doctor One" />
          </div>
          <h3>Dr. Elena Rostova, DDS</h3>
          <span className="doctor-specialty">Chief of Oral & Maxillofacial Surgery</span>
          <p>Over 14 years of rigorous clinical expertise specializing in advanced structural implants and reconstructive operations.</p>
        </div>

        <div className="doctor-card">
          <div className="doctor-image-wrapper">
            <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2070" alt="Doctor Two" />
          </div>
          <h3>Dr. Marcus Vance, Prosthodontist</h3>
          <span className="doctor-specialty">Director of Aesthetic & Digital Restorations</span>
          <p>Alumni of elite dental research networks, leading the clinic's digital smile mapping and complex micro-prosthetics.</p>
        </div>
      </div>
    </div>
  );
}