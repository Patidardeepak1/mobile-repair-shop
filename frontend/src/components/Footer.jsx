import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-md  py-8">

      <div className="max-w-screen-xl mx-auto px-4 text-center">
        {/* Footer Branding and Description */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-black-400 dark:text-white">Maa Jagdamba Mobile Repair</h2>
          <p className="text-sm text-gray-800 dark:text-gray-400">
            Your one-stop solution for mobile repairs. Fast, reliable, and affordable services.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="mt-4 space-x-6 text-sm text-gray-800 dark:text-gray-400">
          <a href="/" className="hover:text-blue-400 transition-colors">Home</a>
          <a href="/about" className="hover:text-blue-400 transition-colors">About Us</a>
          <a href="/services" className="hover:text-blue-400 transition-colors">Services</a>
          <a href="/contact" className="hover:text-blue-400 transition-colors">Contact</a>
        </div>

        {/* Divider and Copyright */}
        <div className="mt-6 dark:text-gray-400  pt-4 text-sm text-gray-800">
          <p>&copy; {new Date().getFullYear()} Maa Jagdamba Mobile Repair. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
