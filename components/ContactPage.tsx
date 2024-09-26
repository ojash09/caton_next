"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import LoadingAnimation from './LoadingAnimation'; // Import the loading animation component

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(true); // State for page loading
  const [isSubmitting, setIsSubmitting] = useState(false); // State for form submission

  useEffect(() => {
    // Simulate page load delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate 2 seconds delay for page loading

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true); // Show loading during form submission

    // Prepare data for sending to the API
    const emailData = {
      email: formData.email,
      subject: 'Thank You for Reaching Out! We Will Get Back to You Soon',
      textMessage: `
      Dear ${formData.name},
      Thank you for contacting us! We appreciate your interest and will review your message shortly. 
      Our team is dedicated to providing you with the best possible service, and we aim to respond to all inquiries 
      as quickly as possible.  
      
      Thank you for your patience, and we look forward to assisting you!
      Best regards,
      Caton Healthcare
      `,
      htmlMessage: `<p>Dear <strong>${formData.name}</strong>,</p>

<p>Thank you for contacting us! We appreciate your interest and will review your message shortly. Our team is dedicated to providing you with the best possible service, and we aim to respond to all inquiries as quickly as possible.</p>

<p>Thank you for your patience, and we look forward to assisting you!</p>

<p>Best regards,<br />
Caton Healthcare</p>
`, 
      attachmentPath: '', 
    };

    try {
      // Send a POST request to the API
      const response = await fetch('/api/sendmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Email sent successfully:', result.message);
      } else {
        console.error('Error sending email:', response.statusText);
      }
    } catch (error) {
      console.error('Request failed:', error);
    } finally {
      setIsSubmitting(false); // Hide loading after form submission
    }

    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  // // If the page is still loading or the form is submitting, show the loading animation
  // if (isLoading || isSubmitting) {
  //   return <LoadingAnimation />;
  // }

  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-gradient-to-r from-[#003C43] to-[#77B0AA] text-white h-96 flex justify-center items-center">
        <h1 className="text-6xl font-bold absolute top-10">
          Let&apos;s have a talk
        </h1>
        <Image
          src="/assets/undraw_joyride_re_968t.svg"
          alt="Flamingo"
          width="64"
          height={64}
          className="absolute bottom-0 w-64"
        />
      </div>

      {/* Contact Section */}
      <div className="max-w-screen-lg mx-auto py-16 flex flex-col gap-8 md:flex-row">
        {/* Column 2: Pitch Us Form */}
        <div className="bg-white p-8 flex flex-col items-start justify-start shadow-lg w-full">
          <h2 className="text-3xl font-semibold mb-6">Pitch us</h2>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                Your Name
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded-lg"
                type="text"
                id="name"
                placeholder="Your name is"
                value={formData.name}
                onChange={handleChange}
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
                placeholder="Your email is"
                value={formData.email}
                onChange={handleChange}
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
                placeholder="I would like to discuss this project."
                value={formData.message}
                onChange={handleChange}
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

      {/* Google Map Section (Full Width) */}
      <div className="max-w-screen-lg mx-auto py-16 bg-white p-8 flex flex-col items-start justify-start shadow-lg w-full">
        <h2 className="text-3xl font-semibold mb-4">Our Location</h2>
        <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8849.011191821282!2d79.65151894328459!3d21.1702638232454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2b3f51f74884a9%3A0xfdde1401295524b5!2sGandhi%20Chowk%20Rd%2C%20Bhandara%2C%20Maharashtra%20441904!5e0!3m2!1sen!2sin!4v1727039304042!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
