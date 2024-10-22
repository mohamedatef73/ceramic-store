// 'use client'; // Ensure this is a client component
// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import {
//   FiMenu,
//   FiX,
//   FiShoppingCart,
//   FiUser,
//   FiSun,
//   FiMoon,
// } from 'react-icons/fi';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);

//   // Toggle mobile menu
//   const toggleMenu = () => setIsMenuOpen((prev) => !prev);

//   // Handle dark mode toggle
//   const toggleDarkMode = () => {
//     setDarkMode((prevDarkMode) => {
//       const newDarkMode = !prevDarkMode;
//       if (newDarkMode) {
//         document.documentElement.classList.add('dark');
//         localStorage.setItem('theme', 'dark');
//       } else {
//         document.documentElement.classList.remove('dark');
//         localStorage.setItem('theme', 'light');
//       }
//       return newDarkMode;
//     });
//   };

//   // Close mobile menu when a link is clicked
//   const handleLinkClick = () => {
//     setIsMenuOpen(false);
//   };

//   // Initialize dark mode based on user's preference or system settings
//   useEffect(() => {
//     const theme = localStorage.getItem('theme');
//     if (
//       theme === 'dark' ||
//       (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
//     ) {
//       setDarkMode(true);
//       document.documentElement.classList.add('dark');
//     } else {
//       setDarkMode(false);
//       document.documentElement.classList.remove('dark');
//     }
//   }, []);

//   return (
//     <nav className="bg-white dark:bg-gray-800 shadow fixed w-full z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0 flex items-center">
//             <Link href="/" aria-label="Home">
//               <Image src="/ccg.png" alt="Logo" width={120} height={40} />
//             </Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex md:items-center">
//             <Link
//               href="/"
//               className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-teal-500"
//             >
//               Home
//             </Link>
//             <Link
//               href="/ProductsDetails"
//               className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-teal-500"
//             >
//               Products
//             </Link>
//             <Link
//               href="/Movies"
//               className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-teal-500"
//             >
//               Movies Box Office
//             </Link>
//             <Link
//               href="/ContactUs"
//               className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-teal-500"
//             >
//               Contact us
//             </Link>
//           </div>

//           {/* Right Section: Icons */}
//           <div className="flex items-center">
//             {/* Dark Mode Toggle */}
//             <button
//               onClick={toggleDarkMode}
//               className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-teal-500 focus:outline-none"
//               aria-label="Toggle Dark Mode"
//             >
//               {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
//             </button>

//             {/* Shopping Cart */}
//             <Link href="/CartPage" className="ml-4 text-gray-700 dark:text-gray-200 hover:text-teal-500" aria-label="Cart">
//               <FiShoppingCart size={20} />
//             </Link>

//             {/* User Profile */}
//             <Link href="/LoginPage" className="ml-4 text-gray-700 dark:text-gray-200 hover:text-teal-500" aria-label="User Profile">
//               <FiUser size={20} />
//             </Link>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={toggleMenu}
//               className="md:hidden ml-4 p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-teal-500 focus:outline-none"
//               aria-label="Toggle Menu"
//               aria-expanded={isMenuOpen ? 'true' : 'false'}
//             >
//               {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-white dark:bg-gray-800">
//           <Link
//             href="/"
//             onClick={handleLinkClick}
//             className="block px-4 py-2 text-2xl text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
//           >
//             Home
//           </Link>
//           <Link
//             href="/ProductsDetails"
//             onClick={handleLinkClick}
//             className="block px-4 py-2 text-2xl text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
//           >
//             Products
//           </Link>
//           <Link
//             href="/Movies"
//             onClick={handleLinkClick}
//             className="block px-4 py-2 text-2xl text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
//           >
//             Movies Box Office
//           </Link>
//           <Link
//             href="/ContactUs"
//             onClick={handleLinkClick}
//             className="block px-4 py-2 text-2xl text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
//           >
//             Contact us
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
'use client'; // Ensures client-side component
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiHome, FiShoppingCart, FiUser, FiSun, FiMoon, FiPhone, FiMenu, FiX, FiMove } from 'react-icons/fi';
import Image from 'next/image';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle dark mode
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

  // Initialize dark mode from localStorage
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
    <nav className="bg-white dark:bg-gray-800 fixed top-0 w-full z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Left Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="relative group">
            <span className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-teal-500">
              Home
            </span>
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/ProductsDetails" className="relative group">
            <span className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-teal-500">
              Shop
            </span>
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/CartPage" className="relative group">
            <span className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-teal-500">
              Cart
            </span>
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Center Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image src="/ccg.png" alt="Logo" width={80} height={20} className="cursor-pointer rounded-lg" />
          </Link>
        </div>

        {/* Right Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/ContactUs" className="relative group">
            <span className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-teal-500">
              Contact Us
            </span>
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/LoginPage" className="relative group">
            <span className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-teal-500">
              Account
            </span>
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/Movies" className="relative group">
            <span className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-teal-500">
              Movies
            </span>
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>


          {/* Dark Mode Toggle */}
          <button onClick={toggleDarkMode} className="text-gray-700 dark:text-gray-200 hover:text-teal-500">
            {darkMode ? <FiSun size={22} /> : <FiMoon size={22} />}
          </button>
        </div>

        {/* Hamburger Menu */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-700 dark:text-gray-200 hover:text-teal-500">
          {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg py-4 flex flex-col items-center space-y-4">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-xl text-gray-700 dark:text-gray-200">
            Home
          </Link>
          <Link href="/ProductsDetails" onClick={() => setIsMenuOpen(false)} className="text-xl text-gray-700 dark:text-gray-200">
            Shop
          </Link>
          <Link href="/CartPage" onClick={() => setIsMenuOpen(false)} className="text-xl text-gray-700 dark:text-gray-200">
            Cart
          </Link>
          <Link href="/ContactUs" onClick={() => setIsMenuOpen(false)} className="text-xl text-gray-700 dark:text-gray-200">
            Contact Us
          </Link>
          <Link href="/LoginPage" onClick={() => setIsMenuOpen(false)} className="text-xl text-gray-700 dark:text-gray-200">
            Account
          </Link>
          <Link href="/Movies" onClick={() => setIsMenuOpen(false)} className="text-xl text-gray-700 dark:text-gray-200">
            Movies
          </Link>

        </div>
      )}

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed inset-x-0 bottom-0 z-50 bg-white dark:bg-gray-800 shadow-t-lg">
        <div className="flex justify-around items-center py-3">
          <Link href="/" className="text-gray-700 dark:text-gray-200 hover:text-teal-500">
            <FiHome size={24} />
            <span className="block text-sm">Home</span>
          </Link>
          <Link href="/shop" className="text-gray-700 dark:text-gray-200 hover:text-teal-500">
            <FiShoppingCart size={24} />
            <span className="block text-sm">Shop</span>
          </Link>
          <Link href="/contact" className="text-gray-700 dark:text-gray-200 hover:text-teal-500">
            <FiPhone size={24} />
            <span className="block text-sm">Contact</span>
          </Link>
          <Link href="/account" className="text-gray-700 dark:text-gray-200 hover:text-teal-500">
            <FiUser size={24} />
            <span className="block text-sm">Account</span>
          </Link>
          <Link href="/account" className="text-gray-700 dark:text-gray-200 hover:text-teal-500">
            <FiMove size={24} />
            <span className="block text-sm">Movies</span>
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
