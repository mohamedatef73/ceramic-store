
'use client'; // Ensure this is a client component
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  FiMenu,
  FiX,
  FiShoppingCart,
  FiUser,
  FiSun,
  FiMoon,
} from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Handle dark mode toggle
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Initialize dark mode based on user's preference or system settings
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" aria-label="Home">
              {/* Replace with your logo image or text */}
              <Image src="/ccg.png" alt="Logo" width={120} height={40} />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center">
            <Link
              href="/"
              className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-teal-500"
            >
              Home
            </Link>
            <Link
              href="/ProductsDetails"
              className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-teal-500"
            >
              Products
            </Link>
            <Link
              href="/Movies"
              className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-teal-500"
            >
              movies box office
            </Link>
            <Link
              href="/ContactUs"
              className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-teal-500"
            >
              Contact us
            </Link>
          </div>

          {/* Right Section: Icons */}
          <div className="flex items-center">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-teal-500 focus:outline-none"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>

            {/* Shopping Cart */}
            <Link href="/CartPage" className="ml-4 text-gray-700 dark:text-gray-200 hover:text-teal-500" aria-label="Cart">
              <FiShoppingCart size={20} />
            </Link>

            {/* User Profile */}
            <Link href="/LoginPage" className="ml-4 text-gray-700 dark:text-gray-200 hover:text-teal-500" aria-label="User Profile">
              <FiUser size={20} />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden ml-4 p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-teal-500 focus:outline-none"
              aria-label="Toggle Menu"
              aria-expanded={isMenuOpen ? 'true' : 'false'}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800">
          <Link
            href="/"
            onClick={handleLinkClick}
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Home
          </Link>
          <Link
            href="/ProductsDetails"
            onClick={handleLinkClick}
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Products
          </Link>
          <Link
            href="/Movies"
            onClick={handleLinkClick}
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Movies Box Office
          </Link>
          <Link
            href="/ContactUs"
            onClick={handleLinkClick}
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Contact us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// components/Navbar.tsx

