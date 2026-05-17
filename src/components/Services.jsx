import React from 'react';
import './Services.css';

export default function Services() {
  return (
    <div className="services-wrapper">
      <div className="section-header">
        <h1 className="tiny-center-tag-dark">CLINICAL CAPABILITIES</h1>
        <h2>Comprehensive Dental Disciplines</h2>
      </div>

      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon-frame">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <h3>Preventive Pathology</h3>
          <p>Advanced microbial screenings, precise structural imaging, and deep diagnostic hygiene protocols engineered to stop decay early.</p>
        </div>

        <div className="service-card">
          <div className="service-icon-frame">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
          <h3>Maxillofacial Prosthetics</h3>
          <p>Surgical-grade reconstruction, bio-compatible implant planning, and full-arch restorative options customized to bone structural density.</p>
        </div>

        <div className="service-card">
          <div className="service-icon-frame">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/></svg>
          </div>
          <h3>Digital Orthodontics</h3>
          <p>Computer-mapped bite alignment configurations utilizing medical grade invisible physical aligners for predictable corrections.</p>
        </div>
      </div>
    </div>
  );
}