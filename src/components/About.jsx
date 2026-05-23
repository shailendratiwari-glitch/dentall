import React from 'react';
import './About.css';
import clinicImage from '../assets/CLINIC.svg'; 

export default function About() {
  // Keeping data separate makes the code cleaner and easier to maintain or update later
  const clinicStats = [
    {
      number: "15+",
      label: "Years of Excellence"
    },
    {
      number: "10k+",
      label: "Happy Smiles Delivered"
    },
    {
      number: "100%",
      label: "Patient Satisfaction"
    }
  ];

  return (
    <section className="about-wrapper" aria-labelledby="about-heading">
                <h1 className="tiny-center-tag-left">ABOUT OUR CLINIC</h1>

      <div className="about-grid">

        
        {/* Visual Content Column */}
        <div className="about-image-side">
          <div className="image-overlay-card">
            <p className="overlay-text">State-of-the-Art Dental Care</p>
          </div>
          <img 
            src={clinicImage} 
            alt="Modern dental operatory with advanced equipment" 
            loading="lazy"
          />
        </div>
        
        {/* Text Content Column */}
        <div className="about-text-side">
          <h2 id="about-heading">Refining Oral Healthcare with Precision and Empathy</h2>
          
          <div className="about-description">
            <p>
              Built on a foundation of trust and advanced clinical expertise, our clinic provides a comprehensive, patient-first approach to modern dentistry. We believe that exceptional oral health care relies on precise diagnostics, personalized treatment pathways, and a deeply compassionate environment.
            </p>
            <p>
              By combining state-of-the-art dental technology with evidence-based practices, our team of dedicated specialists ensures every procedure is seamless, transparent, and tailored to your unique needs. From routine wellness to complex restorative care, we are committed to elevating your dental experience.
            </p>
          </div>

          {/* Dynamic Stats Row */}
          <div className="about-stat-line">
            {clinicStats.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-num">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}