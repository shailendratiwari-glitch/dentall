import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(v => !v);
  const closeSidebar = () => setIsOpen(false);

  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        
        {/* Logo Section */}
        <div className="navbar-logo">
          <img src={logo} alt="Complete Dental Care Logo" />
        </div>

        {/* Center Pill Wrapper (Hidden on mobile/tablet) */}
        <div className="navbar-spacer">
          <ul className="navbar-links">
            <li><a href="#home" className="active">Home</a></li>
            <li><a href="#services">Treatments</a></li>
            <li><a href="#treatments">Specialists</a></li>
            <li><a href="#smile-gallery">Smile Gallery</a></li>
            <li><a href="#technology">Technology</a></li>
            <li><a href="#about">Our Hospital</a></li>
          </ul>
        </div>

        {/* Action Call Button (Hidden on mobile/tablet) */}
        <div className="navbar-cta">
          <button className="cta-btn">Book Appointment</button>
        </div>

        {/* Mobile Sidebar Hamburger Trigger */}
        <button
          className={`hamburger ${isOpen ? 'is-active' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={toggleSidebar}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        {/* Modern Sliding Sidebar Draw Menu */}
        <div className={`mobile-sidebar ${isOpen ? 'open' : ''}`}>
          <div className="sidebar-header">
            <div className="sidebar-logo">
              <img src={logo} alt="Logo" style={{ maxHeight: '50px', width: 'auto' }} />
            </div>
            <button className="close-sidebar" onClick={closeSidebar} aria-label="Close navigation">×</button>
          </div>
          
          <ul className="sidebar-links-list">
            <li><a href="#home" onClick={closeSidebar} className="active">Home</a></li>
            <li><a href="#treatments" onClick={closeSidebar}>Treatments</a></li>
            <li><a href="#services" onClick={closeSidebar}>Specialists</a></li>
            <li><a href="#smile-gallery" onClick={closeSidebar}>Smile Gallery</a></li>
            <li><a href="#technology" onClick={closeSidebar}>Technology</a></li>
            <li><a href="#about" onClick={closeSidebar}>Our Hospital</a></li>
          </ul>
          
          <div className="mobile-cta">
            <button className="cta-btn secondary-mobile-btn" onClick={closeSidebar}>Book Appointment</button>
          </div>
        </div>

        {/* Backdrop Mask Blur Overlay */}
        <div className={`mobile-overlay ${isOpen ? 'visible' : ''}`} onClick={closeSidebar} />
      </div>
    </nav>
  );
};

export default Navbar;