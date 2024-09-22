import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-green-400 to-blue-200 text-white h-96 flex justify-center items-center">
        <h1 className="text-6xl font-bold absolute top-10 " >
          Let's have a talk
        </h1>
        <img
          src="/assets/undraw_joyride_re_968t.svg"
          alt="Flamingo"
          className="absolute bottom-0 w-64"
        />
      </div>

      {/* Contact Section */}
      <div className="max-w-screen-lg mx-auto py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Google Map */}
        <div className="bg-white p-8 flex flex-col items-start justify-start shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">Our Location</h2>
          <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8849.011191821282!2d79.65151894328459!3d21.1702638232454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2b3f51f74884a9%3A0xfdde1401295524b5!2sGandhi%20Chowk%20Rd%2C%20Bhandara%2C%20Maharashtra%20441904!5e0!3m2!1sen!2sin!4v1727039304042!5m2!1sen!2sin" className="w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"></iframe>
          </div>
        </div>

        {/* Column 2: Meet Us */}
        <div className="bg-white p-8 flex flex-col items-start justify-start shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">Meet us</h2>
          <p className="text-lg mb-4">
            <i className="fas fa-phone-alt"></i> +919370647514
          </p>
          <p className="text-lg mb-4">
            <i className="fas fa-envelope"></i> catonhealthcares@gmail.com
          </p>
          <p className="text-lg mb-4">
            <i className="fas fa-map-marker-alt"></i> Gandhi chowk, Bhandara, 441905
          </p>
        </div>

        {/* Column 3: Pitch Us Form */}
        <div className="bg-white p-8 flex flex-col items-start justify-start shadow-lg">
          <h2 className="text-3xl font-semibold mb-6">Pitch us</h2>
          <form className="w-full">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                Your Name
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded-lg"
                type="text"
                id="name"
                placeholder="Your name is"
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
                placeholder="your email is"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg"
                id="message"
                rows={2}
                placeholder="I would like to discuss about this project."
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
    </div>
  );
};

export default ContactPage;
