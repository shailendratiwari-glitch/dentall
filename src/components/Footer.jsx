import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-top">
          
          {/* 1. Branding Column */}
          <div className="footer-branding">
            <h3>VERTEX<span>DENTAL</span></h3>
            <p>Providing exceptional dental care with cutting-edge technology and a patient-first approach.</p>
          </div>
          
          {/* 2. Navigation Column */}
          <div className="footer-links-group">
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#about">About Our Clinic</a>
            <a href="#services">Our Services</a>
            <a href="#doctors">Our Doctors</a>
          </div>

          {/* 3. Contact Details Column */}
          <div className="footer-links-group">
            <h4>Contact Us</h4>
            <p className="contact-info"><strong>Phone:</strong> (800) 555-0199</p>
            <p className="contact-info"><strong>Email:</strong> care@vertexdental.com</p>
            <p className="contact-info"><strong>Address:</strong> City Dental Clinic, Naubasta, Kanpur</p>
          </div>

          {/* 4. Map Column (Moved to the right side to balance layout) */}
          <div className="footer-map-column">
            <h4>Our Location</h4>
            <div className="footer-map-wrapper">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.193448254458!2d80.31322599678955!3d26.41723320000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c47d5bc8f0b47%3A0x878f0b1f96ff0129!2scity%20dental%20clinic!5e0!3m2!1sen!2sin!4v1779024375810!5m2!1sen!2sin" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Vertex Dental Clinic Location"
              ></iframe>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Vertex Dental Clinic. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}