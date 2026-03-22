import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/globals.css';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import WhyUs from './components/WhyUs/WhyUs';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';
import { Analytics } from "@vercel/analytics/next"

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <ContactForm />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
};

export default App;
