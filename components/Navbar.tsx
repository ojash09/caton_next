import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center bg-gradient-to-r  bg-[#F5F7F8]  p-2.5">
      <div className="flex items-center">
        <Image src="/assets/logo-no-background.svg" alt="logo" width="64" height={64} className="w-[7rem] my-1  mx-2.5" />
      </div>
      <div className="flex gap-16 pr-52">
        <Link href="/" className="text-lg text-black no-underline">Home</Link>
        <Link href="/services" className="text-lg text-black no-underline">Services</Link>
        <Link href="/about" className="text-lg text-black no-underline">About</Link>
        <Link href="/contact" className="text-lg text-black no-underline">Contact us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
