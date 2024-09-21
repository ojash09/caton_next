import React from 'react';
import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import ServicesPage from '@components/ServicesPage';

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
