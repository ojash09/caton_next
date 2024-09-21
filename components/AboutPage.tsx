import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-8">
      {/* First Row: About Us */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-lg text-gray-600">
            HubSpot’s company and culture are a lot like our product. They’re crafted, not cobbled, for a delightful experience.
          </p>
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
            Our Mission: Helping Millions of Organizations Grow Better
          </h3>
          <p className="text-lg text-gray-600">
            We believe not just in growing bigger, but in growing better. And growing better means aligning the success of your own business with the success of your customers. Win-win!
          </p>
        </div>
      </div>
      {/* Second Row: Our Mission */}
      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        <div>
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Our Mission: Helping Millions of Organizations Grow Better
          </h3>
          <p className="text-lg text-gray-600">
            We believe not just in growing bigger, but in growing better. And growing better means aligning the success of your own business with the success of your customers. Win-win!
          </p>
        </div>
        <div>
          <img
            src="/assets/growth.svg"
            alt="Grow Better"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
