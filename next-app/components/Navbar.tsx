
// // import React, { useState } from "react";
// // import Image from "next/image";
// // import Link from "next/link";
// // import Button from "./Button";
// // import CartButton from "./CartButton";
// // import LoginButton from "./LoginButton";

// // const Navbar = () => {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// //   const toggleMenu = () => {
// //     setIsMenuOpen(!isMenuOpen);
// //   };

// //   return (
// //     <nav className="flexBetween max-container padding-container z-30 py-5  bg-black bg-opacity-50  hover:bg-opacity-70 transition duration-500 ease-in-out mt-5 rounded-lg  w-full h-16  ">
// //       <Link href="/">
// //         <Image src="/ccg.png" alt="logo" width={200} height={29} />
// //       </Link>
// //       <ul
// //         className={`lg:flex ${isMenuOpen ? "block" : "hidden"} h-full gap-12`}
// //       >
// //         <li className="regular-16 text-white forced-color-adjust-none flexCenter cursor-pointer pb1.5 transition-all hover:font-bold">
// //           <Link href="/">Home</Link>
// //         </li>
// //         <li className="regular-16 text-white flexCenter cursor-pointer pb1.5 transition-all hover:font-bold">
// //           <Link href="/porcelain">porcelain</Link>
// //         </li>
// //         <li className="regular-16 text-white flexCenter cursor-pointer pb1.5 transition-all hover:font-bold">
// //           <Link href="/porcelainProducts">ceramic</Link>
// //         </li>
// //         <li className="regular-16 text-white flexCenter cursor-pointer pb1.5 transition-all hover:font-bold">
// //           <Link href="/Movies">Movies</Link>
// //         </li>
// //         {/* <li className="regular-16 text-gray-50 flexCenter cursor-pointer pb1.5 transition-all hover:font-bold">
// //           <Link href="/LoginPage">ValidateForm</Link>
// //         </li> */}
// //         <div className="container mx-auto flex justify-between gap-5 items-center">
// //           {/* <div className=''>
// //             <CartButton />
// //           </div>
// //           <div className= "">
// //            <LoginButton />
// //           </div> */}
// //           {/* <Button
// //             type="button"
// //             title="تسوق المنتجات"
// //             icon="/cart.png"
// //             variant="btn_dark_green"
// //           /> */}
// //         </div>
// //       </ul>

// //       <div className="lg:flexCenter hidden">
// //         {/* <Button
// //           type="button"
// //           title="تسوق المنتجات"
// //           icon="/cart.png"
// //           variant="btn_dark_green"
// //         /> */}
// //         <Button
// //           type="button"
          
// //           title="تسوق المنتجات"
// //           icon="/cart.png"
// //           variant="btn_dark_green"
// //         />
// //         <img src="/facebook.svg" className="w-8 mx-2" alt="Facebook" />
// //         <img src="/instagram.svg" className="w-8 mx-2" alt="Instagram" />
// //       </div>

// //       {/* Menu Icon for small screens */}
// //       <Image
// //         alt="menu"
// //         src="/menu.svg"
// //         width={32}
// //         height={32}
// //         className="inline-block cursor-pointer lg:hidden"
// //         onClick={toggleMenu}
// //       />

// //       {/* Mobile Menu */}
// //       <div
// //         className={`lg:hidden fixed top-0 left-0 w-full h-full bg-white z-40 transition-transform duration-300 ${
// //           isMenuOpen ? "translate-x-0" : "translate-x-full"
// //         }`}
// //       >
// //         {/* Exit Button */}
// //         <div className="flex justify-end p-4">
// //           <button
// //             className="text-gray-800 text-2xl transform transition-transform hover:rotate-90"
// //             onClick={toggleMenu}
// //           >
// //             ✕
// //           </button>
// //         </div>

// //         {/* Menu Items */}
// //         <ul className="flex flex-col items-center justify-center h-full gap-6">
// //           <li
// //             className="text-gray-800 text-lg cursor-pointer"
// //             onClick={toggleMenu}
// //           >
// //             <Link href="/porcelain">porcelain</Link>
// //           </li>
// //           <li
// //             className="text-gray-800 text-lg cursor-pointer"
// //             onClick={toggleMenu}
// //           >
// //             <Link href="/porcelainProducts">ceramic</Link>
// //           </li>
// //           <li
// //             className="text-gray-800 text-lg cursor-pointer"
// //             onClick={toggleMenu}
// //           >
// //             <Link href="/Movies">Movies</Link>
// //           </li>
// //           <li
// //             className="text-gray-800 text-lg cursor-pointer"
// //             onClick={toggleMenu}
// //           >
// //             <Link href="/">home</Link>
// //           </li>

// //           <div className="text-white text-xl font-bold w-full">
// //             {/* <Link href="/CartPage">MyStore</Link> 
// //              </div> 
// //              <div className=''>
// //             <CartButton /> */}
// //           </div>
// //           <Button
// //             type="button"
// //             title="تسوق المنتجات"
// //             icon="/cart.png"
// //             variant="btn_dark_green"
// //           />
// //           <div className="flex bg-blue-500 w-60 justify-center h-12  rounded-lg">
// //           <img src="/facebook.svg" className="w-8 mx-2" alt="Facebook" />
// //         <img src="/instagram.svg" className="w-8 mx-2" alt="Instagram" />

// //           </div>

// //           {/* <li>
// //         <div className="text-white text-xl font-bold bg-lime-600 w-full">
// //             <Link href="/loginbutton">Login</Link>
// //           </div> 
// //          <div>
// //             <LoginButton />
// //           </div>

// //           </li>  */}
// //         </ul>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;
// 'use client'; // Ensure this is a client component

// import Link from 'next/link';
// import Image from 'next/image';
// import { useState, useEffect } from 'react';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [showNavbar, setShowNavbar] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   const handleScroll = () => {
//     if (typeof window !== 'undefined') {
//       const scrollY = window.scrollY;

//       // Show or hide navbar based on scroll direction
//       if (scrollY > lastScrollY) {
//         setShowNavbar(false); // Scrolling down
//       } else {
//         setShowNavbar(true); // Scrolling up
//       }

//       // Set last scroll position
//       setLastScrollY(scrollY);
//     }
//   };

//   useEffect(() => {
//     // Set up event listener for scroll
//     window.addEventListener('scroll', handleScroll);

//     // Cleanup event listener on component unmount
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [lastScrollY]);

//   return (
//     <nav className={`flexBetween max-container padding-container z-30 py-5 bg-black bg-opacity-50 hover:bg-opacity-70 transition duration-500 ease-in-out mt-5 rounded-lg w-full h-16 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
//       <Link href="/" aria-label="Home">
//         <Image src="/ccg.png" alt="logo" width={200} height={29} layout="intrinsic" />
//       </Link>
      
//       <ul className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} h-full gap-12`}>
//         <li className="regular-16 text-white flexCenter cursor-pointer pb1.5 transition-all hover:font-bold">
//           <Link href="/">Home</Link>
//         </li>
//         <li className="regular-16 text-white flexCenter cursor-pointer pb1.5 transition-all hover:font-bold">
//           <Link href="/porcelain">Porcelain</Link>
//         </li>
//         <li className="regular-16 text-white flexCenter cursor-pointer pb1.5 transition-all hover:font-bold">
//           <Link href="/porcelainProducts">Ceramic</Link>
//         </li>
//         <li className="regular-16 text-white flexCenter cursor-pointer pb1.5 transition-all hover:font-bold">
//           <Link href="/Movies">Movies</Link>
//         </li>
//       </ul>

//       <div className="lg:flexCenter hidden">
//         <Image src="/cart.png" alt="Cart" width={32} height={32} className="w-8 mx-2" />
//         <img src="/facebook.svg" className="w-8 mx-2 border border-white rounded-full p-1" alt="Facebook" />
//         <img src="/instagram.svg" className="w-8 mx-2 border border-white rounded-full p-1" alt="Instagram" />
//       </div>

//       {/* Menu Icon for small screens */}
//       <Image
//         alt="menu"
//         src="/menu.svg"
//         width={32}
//         height={32}
//         className="inline-block cursor-pointer lg:hidden"
//         onClick={toggleMenu}
//       />

//       {/* Mobile Menu */}
//       <div className={`lg:hidden fixed top-0 left-0 w-full h-full bg-white z-40 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
//         {/* Exit Button */}
//         <div className="flex justify-end p-4">
//           <button className="text-gray-800 text-2xl" onClick={toggleMenu}>
//             ✕
//           </button>
//         </div>

//         {/* Menu Items */}
//         <ul className="flex flex-col items-center justify-center h-full gap-6">
//           <li className="text-gray-800 text-lg cursor-pointer" onClick={toggleMenu}>
//             <Link href="/porcelain">Porcelain</Link>
//           </li>
//           <li className="text-gray-800 text-lg cursor-pointer" onClick={toggleMenu}>
//             <Link href="/porcelainProducts">Ceramic</Link>
//           </li>
//           <li className="text-gray-800 text-lg cursor-pointer" onClick={toggleMenu}>
//             <Link href="/Movies">Movies</Link>
//           </li>
//           <li className="text-gray-800 text-lg cursor-pointer" onClick={toggleMenu}>
//             <Link href="/">Home</Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
// "use client"; // Ensure this is a client component

// import Link from "next/link";
// import Image from "next/image";
// import { useState, useEffect } from "react";
// import {
//   FiMenu,
//   FiX,
//   FiShoppingCart,
//   FiUser,
//   FiChevronDown,
//   FiSearch,
//   FiInstagram,
//   FiFacebook,
// } from "react-icons/fi";
// import { IconContext } from "react-icons";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [showNavbar, setShowNavbar] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   const handleScroll = () => {
//     if (typeof window !== "undefined") {
//       const scrollY = window.scrollY;

//       // Show or hide navbar based on scroll direction
//       if (scrollY > lastScrollY) {
//         setShowNavbar(false); // Scrolling down
//       } else {
//         setShowNavbar(true); // Scrolling up
//       }

//       // Set last scroll position
//       setLastScrollY(scrollY);
//     }
//   };

//   useEffect(() => {
//     // Set up event listener for scroll
//     window.addEventListener("scroll", handleScroll);

//     // Cleanup event listener on component unmount
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [lastScrollY]);

//   return (
//     <nav
//       className={`flexBetween max-container padding-container z-30 py-5 bg-black bg-opacity-50 hover:bg-opacity-70 transition duration-500 ease-in-out mt-5 rounded-lg w-full h-16 ${
//         showNavbar ? "translate-y-0" : "-translate-y-full"
//       }`}
//     >
//       <Link href="/" aria-label="Home">
//         <Image
//           src="/ccg.png"
//           alt="logo"
//           width={200}
//           height={29}
//           layout="intrinsic"
//         />
//       </Link>

//       <ul
//         className={`lg:flex ${isMenuOpen ? "block" : "hidden"} h-full gap-12`}
//       >
//         <li className="regular-16 text-white flexCenter cursor-pointer pb1.5 transition-all hover:font-bold">
//           <Link href="/">Home</Link>
//         </li>
//         <li className="regular-16 text-white flexCenter cursor-pointer pb1.5 transition-all hover:font-bold">
//           <Link href="/ProductsDetails">Products</Link>
//         </li>
//         <li className="regular-16 text-white flexCenter cursor-pointer pb1.5 transition-all hover:font-bold">
//           <Link href="/porcelainProducts">Ceramic</Link>
//         </li>
//         <li className="regular-16 text-white flexCenter cursor-pointer pb1.5 transition-all hover:font-bold">
//           <Link href="/Movies">Movies</Link>
//         </li>
//       </ul>

//       <div className="flex items-center space-x-4">
//         {/* Desktop Icons */}
//         <div className="hidden lg:flex space-x-4 items-center">
//           <Link href="/cart" className="text-white hover:text-green-600">
//             <FiShoppingCart className="text-wgite hover:text-green-600 md:text-2xl lg:text-3xl" />
//           </Link>
//           <Link
//             href="/profile"
//             className="text-white hover:text-teal-600 md:text-2xl lg:text-3xl "
//           >
//             <FiFacebook />
//           </Link>
//           <Link
//             href="/profile"
//             className="text-white hover:text-orange-50  md:text-2xl lg:text-3xl "
//           >
//             <FiInstagram />
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="lg:hidden flex items-center">
//           <button
//             onClick={toggleMenu}
//             className="text-gray-700 hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
//           >
//             {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Menu Icon for small screens */}
//       {/* <Image
//         alt="menu"
//         src="/menu.svg"
//         width={32}
//         height={32}
//         className="inline-block cursor-pointer lg:hidden"
//         onClick={toggleMenu}
//       />
//  */}
//       {/* Mobile Menu */}
//       <div
//         className={`lg:hidden fixed top-0 left-0 w-full h-full  z-40 transition-transform duration-300 ${
//           isMenuOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         {/* Exit Button */}
//         <div className="flex justify-end p-4">
//           <button className="text-gray-800 text-2xl" onClick={toggleMenu}>
//             ✕
//           </button>
//         </div>

//         {/* Menu Items */}
//         {/* <ul className="flex flex-col items-center justify-center h-full gap-6">
//           <li
//             className="text-gray-800 text-lg cursor-pointer"
//             onClick={toggleMenu}
//           >
//             <Link href="/ProductsDetails">Products</Link>
//           </li>
//                     <li className="text-gray-800 text-lg cursor-pointer" onClick={toggleMenu}>
// //             <Link href="/porcelain">Porcelain</Link>
//            </li>
//           <li className="text-gray-800 text-lg cursor-pointer" onClick={toggleMenu}>
//              <Link href="/porcelainProducts">Ceramic</Link>
//           </li>
//           <li className="text-gray-800 text-lg cursor-pointer" onClick={toggleMenu}>
//             <Link href="/Movies">Movies</Link>
//           </li>
//            <li className="text-gray-800 text-lg cursor-pointer" onClick={toggleMenu}>
//             <Link href="/">Home</Link>
//           </li>
//         </ul> */}
//         <div className="px-5 py-3 border-t border-gray-200 flex items-center justify-between">
//           <Link href="/cart" className="text-gray-700 hover:text-teal-600">
//             <FiShoppingCart />
//           </Link>
//           <Link href="/profile" className="text-gray-700 hover:text-teal-600">
//             <FiFacebook />
//           </Link>
//           <Link href="/profile" className="text-gray-700 hover:text-teal-600">
//             <FiInstagram />
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;// components/Navbar.tsx

// components/Navbar.js
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
              About
            </Link>
            <Link
              href="/contact"
              className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-teal-500"
            >
              Contact
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
            <Link href="/cart" className="ml-4 text-gray-700 dark:text-gray-200 hover:text-teal-500" aria-label="Cart">
              <FiShoppingCart size={20} />
            </Link>

            {/* User Profile */}
            <Link href="/profile" className="ml-4 text-gray-700 dark:text-gray-200 hover:text-teal-500" aria-label="User Profile">
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
            href="/products"
            onClick={handleLinkClick}
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Products
          </Link>
          <Link
            href="/about"
            onClick={handleLinkClick}
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={handleLinkClick}
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// components/Navbar.tsx

