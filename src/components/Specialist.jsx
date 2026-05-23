import React from 'react';
import './Specialist.css';

const Specialists = () => {
  const specialties = [
    {
      title: "Cosmetic Dentistry",
      tagline: "Aesthetic Restoration",
      description: "Enhance your smile's natural brilliance with high-fidelity porcelain veneers, non-invasive composite bonding, and specialized clinical whitening pathways.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z"></path>
        </svg>
      )
    },
    {
      title: "Root Canal Treatment",
      tagline: "Endodontic Therapy",
      description: "Save damaged or infected teeth through advanced microscopic root canals, completely neutralizing odontogenic pain while preserving structural jaw mechanics.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.5-2.5 3.5-2.5 5.5h20c0-2-1-4-2.5-5.5"></path>
          <path d="M12 2v14"></path>
          <path d="M8 6l4-4 4 4"></path>
          <circle cx="12" cy="16" r="2"></circle>
        </svg>
      )
    },
    {
      title: "Orthodontics",
      tagline: "Structural Alignment",
      description: "Achieve ideal structural bone remodeling and bite harmony using our custom, low-visibility clear aligner roadmaps or traditional corrective frameworks.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      )
    },
    {

      title: "Pediatric Dentistry",
      tagline: "Early Preventive Care",
      description: "Nurture developing smiles with tailored, anxiety-free pediatric diagnostic paths, interceptive sealants, and supportive oral hygiene training cycles.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    }
  ];

  return (
    <section className="specialists-section snap-section" id="services">
      <div className="specialists-container">
        
        {/* Section Header Blocks */}
        <div className="specialists-header">
          <span className="spec-pill-tag">Core Disciplines</span>
          <h2>Specialized Dental Programs</h2>
          <p>Deploying elite diagnostic technologies and tailored clinical protocols across all core avenues of modern dental medicine.</p>
        </div>

        {/* 4-Column Balanced Grid */}
        <div className="specialists-grid">
          {specialties.map((spec, index) => (
            <div key={index} className="specialist-card">
              
              {/* Branded Blue Icon Badge Wrapper */}
              <div className="spec-icon-box">
                {spec.icon}
              </div>

              {/* Specialty Text Details */}
              <div className="spec-info">
                <span className="spec-sub-tag">{spec.tagline}</span>
                <h3>{spec.title}</h3>
                <p>{spec.description}</p>
              </div>

              {/* Subtle Elegant Action Indicator Link */}
              <div className="spec-action-link">
                
                
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Specialists;