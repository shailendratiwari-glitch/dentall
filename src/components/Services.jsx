import React from 'react';
import './Services.css';

// TODO: Replace these placeholder paths with your actual extracted asset image paths
import generalDentistryIcon from '../assets/icons/Union 1.svg';
import cosmeticDentistryIcon from '../assets/icons/Union 2.svg';
import rootCanalIcon from '../assets/icons/Union 3.svg';
import dentalImplantsIcon from '../assets/icons/Union 4.svg';
import orthodonticsIcon from '../assets/icons/Union 5.svg';
import teethWhiningIcon from '../assets/icons/Union 6.svg';
import pediatricDentistryIcon from '../assets/icons/Union 7.svg';
import gumCareIcon from '../assets/icons/Union 8.svg';

export default function Services() {
  const treatmentsData = [
    { id: 1, title: 'General Dentistry', icon: generalDentistryIcon },
    { id: 2, title: 'Cosmetic Dentistry', icon: cosmeticDentistryIcon },
    { id: 3, title: 'Root Canal Treatment', icon: rootCanalIcon },
    { id: 4, title: 'Dental Implants', icon: dentalImplantsIcon },
    { id: 5, title: 'Orthodontics', subtitle: '(Braces & Aligners)', icon: orthodonticsIcon },
    { id: 6, title: 'Teeth Whitening', icon: teethWhiningIcon },
    { id: 7, title: 'Pediatric Dentistry', icon: pediatricDentistryIcon },
    { id: 8, title: 'Gum Care Treatment', icon: gumCareIcon },
  ];

  return (
    <div className="services-wrapper snap-section">
      <div className="section-header">
        {/* Rounded Pill Header Badge with connecting underline line */}
        <span className="treatments-pill-tag">Treatments</span>
        <span className="section-line"></span>
      </div>

      <div className="services-grid">
        {treatmentsData.map((item) => (
          <div key={item.id} className="service-card">
            <div className="service-icon-container">
              <img 
                src={item.icon} 
                alt={item.title} 
                className="service-img-asset" 
              />
            </div>
            <h3 className="service-card-title">
              {item.title}
              {item.subtitle && <span className="service-card-subtitle">{item.subtitle}</span>}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}