import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-wrapper">
        
        {/* Column 1: Brand & Mini Navigation */}
        <div className="footer-col brand-col">
          <div className="footer-logo">
            {/* Embedded Logo Icon */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#007AFF" strokeWidth="2.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <span className="footer-logo-text">Complete Dental Care</span>
          </div>
          <p className="footer-tagline">Clinical perfection built on institutional trust and patient-first innovation.</p>
          
          {/* Small Footer Navbar */}
          <nav className="footer-nav">
            <a href="#home">Home</a>
            <a href="#services">Treatments</a>
            <a href="#specialists">Specialists</a>
            <a href="#faq">FAQs</a>
          </nav>
        </div>

        {/* Column 2: Quick Operations info */}
        <div className="footer-col hours-col">
          <h3>Clinic Hours</h3>
          <ul className="hours-list">
            <li><span>Monday - Saturday:</span> 9:00 AM - 8:30 PM</li>
            <li><span>Sunday:</span> 10:00 AM - 2:00 PM</li>
          </ul>
          <a href="#consultation" className="footer-cta-btn">Book Appointment</a>
        </div>

        {/* Column 3: Contact details with blue SVG vectors */}
        <div className="footer-col contact-col">
          <h3>Get In Touch</h3>
          <div className="footer-contact-list">
            
            <div className="footer-contact-row">
              <div className="footer-blue-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <p>108 H-1, Kidwai Nagar, Kanpur</p>
            </div>

            <div className="footer-contact-row">
              <div className="footer-blue-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <p>+91 9838993346, 9305254083</p>
            </div>

            <div className="footer-contact-row">
              <div className="footer-blue-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <p>info@completedentalcare.com</p>
            </div>

            <div className="footer-contact-row">
              <div className="footer-blue-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <p>www.completedentalcare.com</p>
            </div>

          </div>
        </div>

      </div>

      {/* Grounding Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p>© {new Date().getFullYear()} Complete Dental Care. All Rights Reserved.</p>
          <p>Medical Registration Facility Code: IN-KAN-208011</p>
        </div>
      </div>
    </footer>
  );
}