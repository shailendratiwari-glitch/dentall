import React from 'react';
import './Testimonial.css';

export default function Testimonials() {
  const reviews = [
    {
      name: "Rajesh Malhotra",
      treatment: "Maxillofacial Implants",
      quote: "The structural precision and care during my implant planning was extraordinary. The entire bio-compatible mapping process gave me complete confidence, and the physical results match natural mechanics perfectly.",
      rating: 5
    },
    {
      name: "Dr. Ananya Verma",
      treatment: "Clear Aligner Treatment",
      quote: "As a medical professional myself, I am highly critical of clinical environments. The diagnostic tracking and clarity of my alignment pathway were impeccable. Measurable results showed up within weeks.",
      rating: 5
    },
    {
      name: "Vikram Kanpuria",
      treatment: "Advanced Restorative Care",
      quote: "They handled my acute structural dental trauma with immediate surgical priority. The pain management protocol was non-invasive, and the restorative aesthetics look seamless. Absolute elite facility.",
      rating: 5
    }
  ];

  return (
    <section className="testimonials-section snap-section">
      <div className="testimonials-container">
        
        {/* Section Header */}
        <div className="testimonials-header">
          <span className="testimonials-pill-tag">Patient Registry</span>
          <h2>Clinical Success Stories</h2>
          <p>Read authentic case overviews and diagnostic feedback from our long-term restorative and preventive care paths.</p>
        </div>

        {/* Balanced Grid Wrapper */}
        <div className="testimonials-grid">
          {reviews.map((review, index) => (
            <div key={index} className="testimonial-card">
              
              {/* Top Row: Ratings & Graphic Accent */}
              <div className="card-top-row">
                <div className="star-rating">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#007AFF" stroke="#007AFF" strokeWidth="1">
                      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                    </svg>
                  ))}
                </div>
                {/* Decorative clean quotes vector */}
                <span className="quote-mark">“</span>
              </div>

              {/* Patient Core Copy */}
              <p className="testimonial-quote">"{review.quote}"</p>
              
              <div className="testimonial-divider"></div>

              {/* Patient Identification Block */}
              <div className="patient-meta">
                <h3 className="patient-name">{review.name}</h3>
                <span className="patient-treatment-tag">{review.treatment}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}