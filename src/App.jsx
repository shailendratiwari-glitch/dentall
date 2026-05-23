import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Doctors from './components/Doctors';
import Consultation from './components/Consultation';
import Footer from './components/Footer';
import Specialists from './components/Specialist';
import ConsultModal from './components/ConsultModal';
import FAQ from './components/faq';
import CTA from './components/Cta';
import Testimonials from './components/Testimonials';
import './App.css'; 

function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 10000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <section id="home" className="snap-section">
          <Hero />
        </section>
        <section id="about" className="snap-section">
          <About />
        </section>
        <section id="services" className="snap-section">
          <Services />
          <Testimonials />
        </section>
        <section id="doctors" className="snap-section">
          <Doctors /> </section>
<section id="Specialists" className="snap-section">
          <Specialists/> 

          

        </section>
        <section id="faq" className="snap-section">
          <FAQ />
        </section>
        <section id="consultation" className="snap-section">
          <Consultation onOpenModal={() => setShowModal(true)} />
        </section>
        <section id="cta" className="snap-section">
          <CTA />
        </section>
      </main>
            <Footer />
      <ConsultModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}

export default App;