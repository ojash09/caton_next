import React from 'react';

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-400 to-blue-200 text-white h-96 flex justify-center items-center">
        <h1 className="text-6xl font-bold absolute top-20 " >
          Services
        </h1>
        <img
          src="/assets/undraw_server_down_s-4-lk.svg"
          alt="Flamingo"
          className="absolute bottom-2 w-64"
        />
      </div>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto py-16 px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Service 1: Salesforce Consulting */}
        <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-start">
          <div className="mb-4">
            <img
              src="/assets/undraw_connection.svg"
              alt="Salesforce Consulting Icon"
              className="w-16 h-16"
            />
          </div>
          <h2 className="text-2xl font-semibold mb-4">Online Appointment booking</h2>
          <p className="text-gray-600 mb-6">
            We analyze the business environment and propose a plan for Salesforce cloud services implementation based on business data and long-time expertise. Our expert team provides professional Salesforce consulting services at an enterprise level.
          </p>
          <a href="#" className="text-blue-500 hover:underline font-bold">
            Learn More &gt;
          </a>
        </div>

        {/* Service 2: Salesforce Implementation */}
        <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-start">
          <div className="mb-4">
            <img
              src="/assets/undraw_organizer.svg"
              alt="Salesforce Implementation Icon"
              className="w-16 h-16"
            />
          </div>
          <h2 className="text-2xl font-semibold mb-4">Managing Health Records</h2>
          <p className="text-gray-600 mb-6">
            At WaveOC, we pay attention to the process of Salesforce implementation. Our expert team collects requirements, develops, and sets up different Salesforce features and tests the system to ensure the best performance and efficiency.
          </p>
          <a href="#" className="text-blue-500 hover:underline font-bold">
            Learn More &gt;
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
