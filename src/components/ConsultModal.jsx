import React, { useState } from 'react';
import './ConsultModal.css';

export default function ConsultModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.department) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', department: '' });
        setSubmitted(false);
        onClose();
      }, 2000);
    }
  };

  const handleClose = () => {
    setFormData({ name: '', email: '', department: '' });
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={handleClose} aria-label="Close modal">
          ✕
        </button>
        <span className="tiny-center-tag-dark">CLINICAL TRIAGE</span>
        <h3>Request an Expert Consultation</h3>
        <p>Directly communicate your medical symptoms or aesthetic goals with our senior clinical directors.</p>
        
        {submitted ? (
          <div className="success-message">
            <p style={{ fontSize: '1.2rem', color: '#005EA2', fontWeight: 'bold' }}>✓ Request Received!</p>
            <p>Our team will contact you shortly.</p>
          </div>
        ) : (
          <form className="modal-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Patient Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
            >
              <option value="">Select Desired Department</option>
              <option value="surgery">Oral Surgery</option>
              <option value="aesthetic">Cosmetic Dentistry</option>
              <option value="general">Routine Clinical Evaluation</option>
            </select>
            <button type="submit" className="modal-submit-btn">Prioritize My Request</button>
          </form>
        )}
      </div>
    </div>
  );
}