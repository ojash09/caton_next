import React from 'react';

const featuresData = [
  {
    title: 'Analytics',
    description: 'Advanced analytics to track hospital performance and patient data.'
  },
  {
    title: 'Mobility',
    description: 'Access the system from anywhere with a mobile-friendly interface.'
  },
  {
    title: 'Patient Portal',
    description: 'A user-friendly patient portal for secure communication and access to medical records.'
  },
  {
    title: 'Billing and Insurance',
    description: 'Automate billing and manage insurance claims with ease.'
  },
  {
    title: 'Finance and Budgeting',
    description: 'Comprehensive financial tools for budgeting and tracking hospital expenses.'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 flex flex-wrap lg:flex-nowrap">
        
        {/* Left Column: Text Section */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-4">Our Healthcare Management System</h2>
          <p className="text-gray-700 mb-6">
            Our healthcare management system offers extensive coverage for all departments and functions.
            From patient care to back-office management, our software is designed to streamline hospital operations
            and improve the quality of care. With analytics, mobility, and financial tools, your hospital can achieve 
            operational efficiency and deliver better patient outcomes.
          </p>
          <p className="text-gray-700">
            Explore our comprehensive features below and see how we can help your hospital thrive.
          </p>
        </div>

        {/* Right Column: Features Section */}
        <div className="w-full lg:w-1/2 flex flex-wrap justify-center gap-8">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
