import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <section className="bg-gray-100">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-teal-400 to-blue-500 text-white h-96 flex justify-center items-center">
        <h1 className="text-5xl font-bold absolute">Let's have a talk</h1>
        <img
          src="/path-to-flamingo-image/flamingo.png"
          alt="Flamingo"
          className="absolute bottom-0 right-10 w-1/4"
        />
      </div>

      {/* Contact Info and Form Section */}
      <div className="max-w-7xl mx-auto py-16 px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Side: Contact Info */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Meet us</h2>
          <p className="text-lg mb-4">
            <i className="fas fa-phone-alt"></i> +40728300333
          </p>
          <p className="text-lg mb-4">
            <i className="fas fa-envelope"></i> contact@brandaffair.ro
          </p>
          <p className="text-lg mb-4">
            <i className="fas fa-map-marker-alt"></i> Amman St, no 35, 4th floor, ap 10, Bucharest
          </p>

          {/* Map */}
          <div className="w-full h-64 bg-gray-700 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=..."
              className="w-full h-full"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Pitch us</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                Your Name
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded-lg"
                type="text"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Your Email
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded-lg"
                type="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg"
                id="message"
                rows={4}
                placeholder="Describe your project"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg w-full"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
