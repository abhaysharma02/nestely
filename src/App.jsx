import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Features from './components/Features';
import Screenshots from './components/Screenshots';
import Pricing from './components/Pricing';
import HowItWorks from './components/HowItWorks';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  // Smooth scroll behavior
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="font-sans bg-brand-darker min-h-screen text-brand-gray overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Features />
        <Screenshots />
        <Pricing />
        <HowItWorks />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
