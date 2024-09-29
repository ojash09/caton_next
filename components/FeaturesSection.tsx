import React from 'react';

const featuresData = [
  {
    title: 'OP Management',
    category: 'Patient Care',
    icon: '⚙️', // Example icon placeholder
    description: 'Manage outpatient services effectively.'
  },
  {
    title: 'IP Management and ADT',
    category: 'Patient Care',
    icon: '🩺',
    description: 'Handle inpatient services and admissions.'
  },
  {
    title: 'Registration and Appointment',
    category: 'Patient Care',
    icon: '📅',
    description: 'Simplify the registration and appointment processes.'
  },
  {
    title: 'Doctor’s Workbench (CPOE)',
    category: 'Clinical',
    icon: '📝',
    description: 'Manage orders and clinical workflows efficiently.'
  },
  {
    title: 'Nursing, OT',
    category: 'Clinical',
    icon: '👩‍⚕️',
    description: 'Oversee nursing operations and surgical procedures.'
  }
];

const FeaturesSection = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-wrap lg:flex-nowrap">
        
        

        {/* Right Column: Features Section */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:px-12">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="w-full sm:w-64 bg-white rounded-none shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col items-start"
            >
              {/* Feature Icon */}
              <div className="text-4xl text-blue-600 mb-4">
                {feature.icon}
              </div>
              {/* Feature Category */}
              <p className="text-sm text-gray-500 mb-1 uppercase tracking-wide">{feature.category}</p>
              {/* Feature Title */}
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{feature.title}</h3>
              {/* Feature Description */}
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Left Column: Text Section */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:mt-32 text-center lg:text-left">
          <h2 className="text-4xl font-bold mb-4">Caton Hospital Software Modules</h2>
          <p className="text-gray-700 mb-6 text-2xl">
            Our hospital management software provides extensive coverage for all departments and functions. From clinical to administrative modules, Caton is your one-stop solution for efficient hospital operations.
          </p>
          <div className='flex items-start'>
          <a 
            href="#" 
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">
            View all modules
          </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FeaturesSection;
