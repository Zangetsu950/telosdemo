import React, { useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Clients from '../components/sections/Clients';
import Process from '../components/sections/Process';
import Stats from '../components/sections/Stats';
import Services from '../components/sections/Services';
import ClientLogos from '../components/sections/ClientLogos';
import CTA from '../components/sections/CTA';
import About from '../components/sections/About';
import './Home.css';

const Home = () => {
  // Smooth scrolling for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        if (!targetId) return; // Skip if href is just "#"
        
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Offset for header
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Cleanup
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function() {});
      });
    };
  }, []);
  
  return (
    <>
      <Header />
      <main className="main-content">
        <Hero />
        <Clients />
        <Process />
        <Stats />
        <Services />
        <ClientLogos />
        <CTA />
        <About />
      </main>
      <Footer />
    </>
  );
};

export default Home;