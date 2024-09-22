import React from 'react';
import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import ServicesPage from '@components/ServicesPage';
import '../globals.css'
const Services: React.FC = () => {
  return (
    <div>
      <Navbar />
      <ServicesPage/>
      <Footer />
    </div>
  );
};

export default Services;
