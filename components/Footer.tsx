import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-green-400 to-blue-200 text-black p-10 flex justify-center">
      <div className="w-full max-w-screen-xl flex justify-between">
        <div className="flex-1 mr-5">
          <h3 className="font-bold mb-2.5">About</h3>
          <p className="mb-5 text-gray-800">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
          </p>
          <div className="flex mt-2.5">
            <FaFacebookF className="text-2xl text-gray-600 mr-2.5 cursor-pointer" />
            <FaTwitter className="text-2xl text-gray-600 mr-2.5 cursor-pointer" />
            <FaInstagram className="text-2xl text-gray-600 mr-2.5 cursor-pointer" />
            <FaYoutube className="text-2xl text-gray-600 cursor-pointer" />
          </div>
        </div>

        <div className="flex-1 mr-5">
          <h3 className="font-bold mb-2.5">Quick Links</h3>
          <ul className="list-none p-0">
            <li><Link href="/symptoms" className="text-purple-600 no-underline mb-2.5 block">Symptoms</Link></li>
            <li><Link href="/prevention" className="text-purple-600 no-underline mb-2.5 block">Prevention</Link></li>
            <li><Link href="/faqs" className="text-purple-600 no-underline mb-2.5 block">FAQs</Link></li>
            <li><Link href="/about-coronavirus" className="text-purple-600 no-underline mb-2.5 block">About Coronavirus</Link></li>
            <li><Link href="/contact" className="text-purple-600 no-underline mb-2.5 block">Contact Us</Link></li>
          </ul>
        </div>

        <div className="flex-1 mr-5">
          <h3 className="font-bold mb-2.5">Helpful Links</h3>
          <ul className="list-none p-0">
            <li><Link href="/healthcare-professional" className="text-purple-600 no-underline mb-2.5 block">Healthcare Professional</Link></li>
            <li><Link href="/lgu-facilities" className="text-purple-600 no-underline mb-2.5 block">LGU Facilities</Link></li>
            <li><Link href="/protect-family" className="text-purple-600 no-underline mb-2.5 block">Protect Your Family</Link></li>
            <li><Link href="/world-health" className="text-purple-600 no-underline mb-2.5 block">World Health</Link></li>
          </ul>
        </div>

        <div className="flex-1">
          <h3 className="font-bold mb-2.5">Resources</h3>
          <ul className="list-none p-0">
            <li><Link href="https://www.who.int" className="text-purple-600 no-underline mb-2.5 block">WHO Website</Link></li>
            <li><Link href="https://www.cdc.gov" className="text-purple-600 no-underline mb-2.5 block">CDC Website</Link></li>
            <li><Link href="https://www.gov.com" className="text-purple-600 no-underline mb-2.5 block">Gov Website</Link></li>
            <li><Link href="https://www.doh.gov" className="text-purple-600 no-underline mb-2.5 block">DOH Website</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
