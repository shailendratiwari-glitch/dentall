import React from 'react';
import './Doctors.css';
import maleDoctorImage from '../assets/male1.svg';
import femaleDoctorImage from '../assets/female2.svg';
export default function Doctors() {
  return (
    <div className="doctors-wrapper">
      <div className="section-header">
          <span className="tiny-center-tag-dark">OUR MEDICAL LEADERSHIP</span>
        <h2>World-Class Clinical Experts</h2>
      </div>
      
      <div className="doctors-grid">
        <div className="doctor-card">
          <div className="doctor-image-wrapper">
            <img src={maleDoctorImage} alt="Doctor One" />
          </div>
          <h3>Dr. SHIVAM CHATURVEDI</h3>
          <span className="doctor-specialty">Prosthodontist & Oral Implantologist</span>
          <p>BDS (BVP, Pune), MIDS (Lucknow) Ex. Asso. Professor, Rama Dental College.</p>
        </div>

        <div className="doctor-card">
          <div className="doctor-image-wrapper">
            <img src={femaleDoctorImage} alt="Doctor Two" />
          </div>
          <h3>Dr. Ankita CHATURVEDI</h3>
          <span className="doctor-specialty">Prosthodontist & Maxillofacial Prosthetist</span>
          <p>Ex. Senior Resident, KGMC, Lucknow Ex. Asst. Professor, Rama Dental College.</p>
        </div>
      </div>
    </div>
  );
}