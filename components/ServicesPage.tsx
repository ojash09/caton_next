import React from 'react';
import Image from 'next/image';
const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#003C43] to-[#77B0AA] text-white h-96 flex justify-center items-center">
        <h1 className="text-6xl font-bold absolute top-20 " >
          Services
        </h1>
        <Image
          src="/assets/undraw_server_down_s-4-lk.svg"
          alt="Flamingo"
          width="64"
          height={64}
          className="absolute bottom-2 w-64"
        />
      </div>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto py-16 px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Service 1: Salesforce Consulting */}
        <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-start">
          <div className="mb-4">
            <Image
              src="/assets/undraw_connection.svg"
              alt="Salesforce Consulting Icon"
              width="64"
              height={64}
              className="w-16 h-16"
            />
          </div>
          <h2 className="text-2xl font-semibold mb-4">Online Appointment booking</h2>
          <p className="text-gray-600 mb-6">
          Say goodbye to long queues and waiting times! With our seamless online appointment booking system, patients can easily schedule consultations with the best doctors at their convenience. Stay in control of your health with just a few clicks.          </p>
          <a href="#" className="text-blue-500 hover:underline font-bold">
            Learn More &gt;
          </a>
        </div>

        {/* Service 2: Salesforce Implementation */}
        <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-start">
          <div className="mb-4">
            <Image
              src="/assets/undraw_organizer.svg"
              alt="Salesforce Implementation Icon"
              width="64"
              height={64}
              className="w-16 h-16"
            />
          </div>
          <h2 className="text-2xl font-semibold mb-4">Managing Health Records</h2>
          <p className="text-gray-600 mb-6">
          Your health history is always at your fingertips! Our platform enables patients to securely store, access, and share their medical records in one centralized location. Simplifying health management for both patients and healthcare providers.          </p>
          <a href="#" className="text-blue-500 hover:underline font-bold">
            Learn More &gt;
          </a>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto py-16 px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Service 1: Salesforce Consulting */}
        <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-start">
          <div className="mb-4">
            <Image
              src="/assets/undraw_report.svg"
              alt="Salesforce Consulting Icon"
              width="64"
              height={64}
              className="w-16 h-16"
            />
          </div>
          <h2 className="text-2xl font-semibold mb-4">Lab Reports</h2>
          <p className="text-gray-600 mb-6">
          Access your lab results anytime, anywhere. Our platform ensures that patients receive accurate, up-to-date lab reports directly to their personal dashboard, making it easy to keep track of your medical progress and share results with your healthcare provider.          
          </p>
          <a href="#" className="text-blue-500 hover:underline font-bold">
            Learn More &gt;
          </a>
        </div>

        {/* Service 2: Salesforce Implementation */}
        <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-start">
          <div className="mb-4">
            <Image
              src="/assets/undraw_fitness.svg"
              alt="Salesforce Implementation Icon"
              width="64"
              height={64}
              className="w-16 h-16"
            />
          </div>
          <h2 className="text-2xl font-semibold mb-4">Fitness Tracking</h2>
          <p className="text-gray-600 mb-6">
          Track your journey to better health! Our integrated fitness tracker monitors your daily activities, exercise, and overall wellness. Stay motivated with real-time insights and achieve your health goals more efficiently.          

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
