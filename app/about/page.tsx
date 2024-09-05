import Navbar from "@components/Navbar";

const About = () => {
  return (
    <><div>
          <Navbar />
      </div>
      <div className="bg-white py-10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">About Us</h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Who We Are</h2>
                          <p className="text-gray-700 text-lg">
                              Welcome to **Caton Health**, your trusted partner in healthcare management. Our platform is dedicated to providing
                              comprehensive online healthcare solutions that simplify how you manage your health and wellness. With Caton, you can easily
                              book doctor appointments, track your fitness, and securely store and manage your health records—all in one place.
                          </p>
                      </div>

                      {/* Section 2: Mission */}
                      <div>
                          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Mission</h2>
                          <p className="text-gray-700 text-lg">
                              Our mission is to empower individuals by giving them control over their healthcare journey. Whether it's scheduling appointments,
                              keeping track of medical history, or setting fitness goals, Caton Health provides a seamless, user-friendly experience
                              that puts your health first. We believe that taking charge of your health should be simple, secure, and stress-free.
                          </p>
                      </div>
                  </div>

                  {/* Section 3: Features */}
                  <div className="mt-10">
                      <h2 className="text-3xl font-semibold text-gray-900 text-center mb-8">What We Offer</h2>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                          <div className="text-center">
                              <div className="bg-green-100 p-6 rounded-lg shadow-lg">
                                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Online Appointment Booking</h3>
                                  <p className="text-gray-700">
                                      Book appointments with the best doctors in your area with just a few clicks. Our platform connects you with trusted healthcare
                                      providers for in-person or virtual visits.
                                  </p>
                              </div>
                          </div>

                          <div className="text-center">
                              <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
                                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Manage Health Records</h3>
                                  <p className="text-gray-700">
                                      Securely store, manage, and access your medical records at any time. Say goodbye to paperwork and keep your health data organized
                                      with our easy-to-use record management system.
                                  </p>
                              </div>
                          </div>

                          <div className="text-center">
                              <div className="bg-yellow-100 p-6 rounded-lg shadow-lg">
                                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Fitness Tracking</h3>
                                  <p className="text-gray-700">
                                      Monitor your fitness journey with our integrated tracking tools. Set fitness goals, track your progress, and stay motivated on your
                                      path to a healthier lifestyle.
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>

                  {/* Section 4: Conclusion */}
                  <div className="mt-16 text-center">
                      <h2 className="text-3xl font-semibold text-gray-900 mb-4">Your Health, Your Way</h2>
                      <p className="text-gray-700 text-lg">
                          At Caton Health, we are dedicated to making healthcare management as easy as possible. Join us today and take the first step toward
                          a healthier, more organized future.
                      </p>
                      <button className="mt-8 bg-blue-700 text-white text-lg py-3 px-6 rounded-md hover:bg-blue-800">
                          Join Us
                      </button>
                  </div>
              </div>
          </div></>
  );
};

export default About;
