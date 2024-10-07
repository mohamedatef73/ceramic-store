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

'use client'; // Ensure this is a client component

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX, FiShoppingCart, FiUser, FiChevronDown, FiSearch, FiSun, FiMoon } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import { Transition } from '@headlessui/react';
import router, { useRouter } from 'next/router';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  // const router = useRouter();

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Handle scroll to show/hide navbar
  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      const scrollY = window.scrollY;

      if (scrollY > lastScrollY && scrollY > 70) {
        setShowNavbar(false); // Scrolling down
      } else {
        setShowNavbar(true); // Scrolling up
      }

      setLastScrollY(scrollY);
    }
  };

  useEffect(() => {
    // Event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // Handle dark mode toggle
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Close mobile menu on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setIsMenuOpen(false);
    };
    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [event]);

  return (
    <IconContext.Provider value={{ size: '1.5em' }}>
      <nav
        className={`fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow-md z-50 transition-transform duration-300 ${
          showNavbar ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" aria-label="Home">
            <Image src="/ccg.png" alt="logo" width={150} height={50} />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-8 items-center">
            <li className="relative group">
              <Link href="/" className="text-gray-700 dark:text-gray-200 hover:text-teal-500 font-medium">
                Home
              </Link>
            </li>
            <li className="relative group">
              <Link href="/porcelain" className="text-gray-700 dark:text-gray-200 hover:text-teal-500 font-medium">
                Porcelain
              </Link>
            </li>
            <li className="relative group">
              <Link href="/porcelainProducts" className="text-gray-700 dark:text-gray-200 hover:text-teal-500 font-medium">
                Ceramic
              </Link>
            </li>
            <li className="relative group">
              <Link href="/movies" className="text-gray-700 dark:text-gray-200 hover:text-teal-500 font-medium">
                Movies
              </Link>
            </li>
            {/* Add more navigation links as needed */}
          </ul>

          {/* Right Section: Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="hidden sm:block pl-3 pr-10 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <FiSearch className="text-gray-400" />
              </div>
            </div>
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="text-gray-700 dark:text-gray-200 hover:text-teal-500 focus:outline-none"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <FiSun /> : <FiMoon />}
            </button>
            {/* Shopping Cart */}
            <Link href="/cart" aria-label="Cart">
              <FiShoppingCart className="text-gray-700 dark:text-gray-200 hover:text-teal-500" />
            </Link>
            {/* User Profile */}
            <Link href="/profile" aria-label="User Profile">
              <FiUser className="text-gray-700 dark:text-gray-200 hover:text-teal-500" />
            </Link>
            {/* Social Media Icons */}
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Image src="/facebook.svg" alt="Facebook" width={24} height={24} className="w-6 h-6" />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Image src="/instagram.svg" alt="Instagram" width={24} height={24} className="w-6 h-6" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex items-center justify-center text-gray-700 dark:text-gray-200 hover:text-teal-500 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            aria-expanded={isMenuOpen ? 'true' : 'false'}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <Transition
          show={isMenuOpen}
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 translate-x-full"
          enterTo="opacity-100 translate-x-0"
          leave="transition ease-in duration-150 transform"
          leaveFrom="opacity-100 translate-x-0"
          leaveTo="opacity-0 translate-x-full"
        >
          {(ref) => (
            <div ref={ref} className="lg:hidden fixed top-0 right-0 w-3/4 max-w-sm h-full bg-white dark:bg-white  z-50">
              <div className="flex flex-col items-start p-4 space-y-4">
                {/* Close Button */}
                <button
                  onClick={toggleMenu}
                  className="self-end text-gray-700 dark:text-gray-200 hover:text-teal-500 focus:outline-none"
                  aria-label="Close Menu"
                >
                  <FiX size={24} />
                </button>
                {/* Navigation Links */}
                <Link href="/" className="w-full text-gray-700 dark:text-gray-200 hover:text-teal-500 font-medium" onClick={toggleMenu}>
                  Home
                </Link>
                <Link href="/porcelain" className="w-full text-gray-700 dark:text-gray-200 hover:text-teal-500 font-medium" onClick={toggleMenu}>
                  Porcelain
                </Link>
                <Link href="/porcelainProducts" className="w-full text-gray-700 dark:text-gray-200 hover:text-teal-500 font-medium" onClick={toggleMenu}>
                  Ceramic
                </Link>
                <Link href="/movies" className="w-full text-gray-700 dark:text-gray-200 hover:text-teal-500 font-medium" onClick={toggleMenu}>
                  Movies
                </Link>
                {/* Add more navigation links as needed */}
                {/* Search Bar */}
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-3 pr-10 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <FiSearch className="text-gray-400" />
                  </div>
                </div>
                {/* Dark Mode Toggle */}
                <button
                  onClick={toggleDarkMode}
                  className="flex items-center text-gray-700 dark:text-gray-200 hover:text-teal-500 focus:outline-none"
                  aria-label="Toggle Dark Mode"
                >
                  {darkMode ? <FiSun /> : <FiMoon />}
                  <span className="ml-2 text-sm">Dark Mode</span>
                </button>
                {/* Icons */}
                <div className="flex space-x-4 mt-4">
                  <Link href="/cart" aria-label="Cart" onClick={toggleMenu}>
                    <FiShoppingCart className="text-gray-700 dark:text-gray-200 hover:text-teal-500" size={24} />
                  </Link>
                  <Link href="/profile" aria-label="User Profile" onClick={toggleMenu}>
                    <FiUser className="text-gray-700 dark:text-gray-200 hover:text-teal-500" size={24} />
                  </Link>
                  <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <Image src="/facebook.svg" alt="Facebook" width={24} height={24} className="w-6 h-6" />
                  </Link>
                  <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Image src="/instagram.svg" alt="Instagram" width={24} height={24} className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </IconContext.Provider>
  );
};

export default Navbar;

// components/Navbar.tsx

