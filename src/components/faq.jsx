import React, { useState } from 'react';
import './faq.css';

export default function FAQ() {
  // Track which FAQ index is currently expanded
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What should I expect during my first dental examination?",
      answer: "Your initial visit involves a comprehensive structural assessment. This includes low-radiation digital imaging, periodontal tissue mapping, oral cancer screening, and a tailored long-term hygiene and preventive pathway designed by our specialists."
    },
    {
      question: "How long do custom orthodontic clear aligners take to show results?",
      answer: "While individual structural density varies, initial structural adjustments are typically measurable within 4 to 6 weeks. Complete alignment roadmaps generally span between 6 to 18 months, depending on compliance and bone remodeling velocity."
    },
    {
      question: "What materials are used in your maxillofacial restorative implants?",
      answer: "We utilize exclusively surgical-grade, highly biocompatible titanium alloys and zirconium ceramics. These materials maximize osseointegration (bone bonding) and offer pristine long-term durability that matches natural tooth mechanics."
    },
    {
      question: "How safe are your in-clinic clinical teeth whitening procedures?",
      answer: "Our whitening procedures are structurally non-invasive and chemically balanced. We implement advanced gum barrier isolation protocols to completely protect soft tissue, using desensitizing buffers that ensure zero enamel enamel depletion."
    },
    {
      question: "Do you offer emergency dental intervention or immediate surgical care?",
      answer: "Yes. Our facility reserves diagnostic priority windows daily for acute clinical trauma, severe odontogenic pain, or structural failures to ensure rapid pain management and prevent deeper microbial spread."
    }
  ];

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close if clicked again
    } else {
      setActiveIndex(index); // Open clicked item
    }
  };

  return (
    <section className="faq-section snap-section">
      <div className="faq-container">
        
        {/* Header Block matching your Treatments style layout */}
        <div className="faq-header">
          <span className="faq-pill-tag">Support Desk</span>
          <h2>Frequently Asked Questions</h2>
          <p>Get instant clinical transparency on diagnostic workflows, scheduling protocols, and advanced restorative treatments.</p>
        </div>

        {/* Accordion List wrapper */}
        <div className="faq-accordion-wrapper">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={index} 
                className={`faq-item ${isOpen ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question-row">
                  <h3>{item.question}</h3>
                  <div className="faq-toggle-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12" className="horizontal-line"></line>
                    </svg>
                  </div>
                </div>
                
                <div className="faq-answer-pane">
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}