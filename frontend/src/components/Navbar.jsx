import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './Toggle';

import logo from '../assets/logoma.png'; 


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close the mobile menu when an item is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-md px-4 py-3 fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="flex items-center">
        <img src={logo} alt="Maa Jagdamba Mobile Repair Logo" className="h-10 mr-3" />

          <h1 className="text-2xl font-extrabold text-black-600 dark:text-white">
            Maa Jagdamba Mobile Repair
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:text-blue-500 dark:hover:text-gray-300">Home</Link>
          <Link to="/services" className="hover:text-blue-500 dark:hover:text-gray-300">Services</Link>
          <Link to="/about" className="hover:text-blue-500 dark:hover:text-gray-300">About</Link>
          <Link to="/contact" className="hover:text-blue-500 dark:hover:text-gray-300">Contact</Link>
          <ThemeToggle />
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-blue-600 dark:text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg rounded-b-lg mt-2 py-2 px-4 space-y-2">
          <Link to="/" className="block text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded px-3 py-2" onClick={closeMenu}>Home</Link>
          <Link to="/services" className="block text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded px-3 py-2" onClick={closeMenu}>Services</Link>
          <Link to="/about" className="block text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded px-3 py-2" onClick={closeMenu}>About</Link>
          <Link to="/contact" className="block text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded px-3 py-2" onClick={closeMenu}>Contact</Link>
          <div className="mt-2"><ThemeToggle /></div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
