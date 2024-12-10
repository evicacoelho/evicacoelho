import React, { useEffect } from 'react';
import Typed from 'typed.js';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'isotope-layout';

import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Service } from './components/Service';
import { Experience } from './components/Experience';
import { Banner } from './components/Banner';
import { Portfolio } from './components/Portfolio';
import { Price } from './components/Price';
import { Testimonial } from './components/Testimonial';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Loader
    const loader = () => {
      setTimeout(() => {
        const loaderElement = document.getElementById('loader');
        if (loaderElement) {
          loaderElement.classList.remove('show');
        }
      }, 1);
    };
    loader();

    // Back to top button
    const handleScroll = () => {
      const backToTopButton = document.querySelector('.back-to-top') as HTMLElement;
      if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
      } else {
        backToTopButton.style.display = 'none';
      }
    };

    const handleBackToTopClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) {
      backToTopButton.addEventListener('click', handleBackToTopClick);
    }
    window.addEventListener('scroll', handleScroll);

    // Sticky Navbar
    const handleNavbarScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 0) {
        navbar?.classList.add('nav-sticky');
      } else {
        navbar?.classList.remove('nav-sticky');
      }
    };
    window.addEventListener('scroll', handleNavbarScroll);

    // Smooth scrolling on the navbar links
    const navbarLinks = document.querySelectorAll('.navbar-nav a');
    navbarLinks.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        const hash = (event.target as HTMLAnchorElement).hash;
        if (hash) {
          const target = document.querySelector(hash) as HTMLElement;
          if (target) {
            const offset = target.offsetTop - 45;
            window.scrollTo({ top: offset, behavior: 'smooth' });
          }
        }
      });
    });

    // Typed.js Initialization
    const heroText = document.querySelector('.hero .hero-text h2');
    if (heroText) {
      const typedStrings = document.querySelector('.hero .hero-text .typed-text')?.textContent;
      if (typedStrings) {
        new Typed('.hero .hero-text h2', {
          strings: typedStrings.split(', '),
          typeSpeed: 100,
          backSpeed: 20,
          loop: true,
        });
      }
    }

    // Skills Progress
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
      const width = bar.getAttribute('aria-valuenow');
      if (width) {
        (bar as HTMLElement).style.width = `${width}%`;
      }
    });

    // Portfolio Filter
    return () => {
      // Cleanup listeners
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleNavbarScroll);
      if (backToTopButton) {
        backToTopButton.removeEventListener('click', handleBackToTopClick);
      }
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Footer />
        <a href="#" className="btn back-to-top">Back To the Top<i className="fa fa-chevron-up"></i></a>
        <div id="loader" className="show">
            <div className="loader"></div>
        </div>
      </header>
    </div>
  );
}

export default App;
