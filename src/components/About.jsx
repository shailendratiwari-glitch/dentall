import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about-wrapper">
      <div className="about-grid">
        <div className="about-image-side">
          <img src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2070" alt="Clinic Research Laboratory" />
        </div>
        
        <div className="about-text-side">
          <span className="tiny-center-tag-left">INSTITUTIONAL FOUNDATION</span>
          <h2>Our Clinical Ethos and Patient Standard</h2>
          <p>
            Founded on the baseline principle of complete diagnostic integrity, our clinic functions less like a retail business and more like a focused clinical ecosystem. We emphasize peer-reviewed procedures and clear treatment plans.
          </p>
          <p>
            By restricting our workflow to evidence-based metrics and high-grade dental technology, we ensure that both of our lead specialists review complicated files together, delivering completely balanced, cross-disciplinary answers.
          </p>
          <div className="about-stat-line">
            <div>
              <span className="stat-num">25+</span>
              <span className="stat-label">Years Combined Experience</span>
            </div>
            <div>
              <span className="stat-num">0%</span>
              <span className="stat-label">Retail Upcharging Models</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}