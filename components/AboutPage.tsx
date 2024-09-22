import React from 'react';
import TeamPage from 'components/Team'
import Footer from './Footer';

const AboutPage: React.FC = () => {
  return (
    <div>
      <div className="bg-[#E0F3F8] py-16 px-8">
        {/* First Row: About Us */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-lg text-gray-600">
            We are dedicated to transforming healthcare management by offering a platform that bridges the gap between hospitals and patients. Our services enable hospitals to streamline their operations while empowering patients with easy access to health records, lab reports, and appointments. At the core of our mission is improving the patient experience with innovative, user-friendly solutions.            </p>
          </div>
          <div>
            <img
              src="/assets/teamphoto1.svg"
              alt="Team Photo"
              className="w-full rounded-lg"
            />
          </div>
        </div>

        {/* Second Row: Our Mission */}
        <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="/assets/growth.svg"
              alt="Grow Better"
              className="w-full rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Our Mission: Helping Millions Grow Better
            </h3>
            <p className="text-lg text-gray-600">
            We aim to revolutionize the healthcare experience by simplifying access to essential services for both hospitals and patients. Our mission is to ensure healthcare is efficient, transparent, and accessible, helping healthcare providers focus on care while patients manage their health effortlessly. Together, we strive for better outcomes and healthier communities through smart digital solutions.            </p>
          </div>
        </div>
        {/* Second Row: Our Mission */}
        <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Our Story
            </h3>
            <p className="text-lg text-gray-600">
            Founded with the vision to make healthcare simpler and more accessible, we recognized the need for a unified platform that caters to both hospitals and patients. What began as a small initiative has grown into a comprehensive solution, offering tools for managing health records, lab reports, and appointments seamlessly. Our journey is driven by a passion for innovation and a commitment to enhancing healthcare experiences for everyone.            </p>
          </div>
          <div>
            <img
              src="/assets/ourstory.svg"
              alt="Grow Better"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
      <TeamPage/>
      <Footer/>
    </div>
  );
};

export default AboutPage;
