// // import React from "react"

// // const GetApp = () => {
// //   return <div>FetApp</div>
// // }

// // export default GetApp


// // components/Navbar.js
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
//   FiInstagram,
//   FiFacebook
// } from 'react-icons/fi';
// import LoginButton from './LoginButton';
// import { Button } from 'flowbite-react';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);

//   // Toggle mobile menu
//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   // Handle dark mode toggle
//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     if (!darkMode) {
//       document.documentElement.classList.add('dark');
//       localStorage.setItem('theme', 'dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//       localStorage.setItem('theme', 'light');
//     }
//   };

//   // Close mobile menu when a link is clicked
//   const handleLinkClick = () => {
//     setIsMenuOpen(false);
//   };

//   // Initialize dark mode based on user's preference or system settings
//   useEffect(() => {
//     if (
//       localStorage.theme === 'dark' ||
//       (!('theme' in localStorage) &&
//         window.matchMedia('(prefers-color-scheme: dark)').matches)
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
//         <div className="flex justify-between h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0 flex items-center">
//             <Link href="/" aria-label="Home">
//               {/* Replace with your logo image or text */}
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
//               movies box office
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
//             <Image
//         alt="menu"
//         src="/menu.svg"
//         width={32}
//         height={32}
//         className="inline-block cursor-pointer lg:hidden"
//         onClick={toggleMenu}
//       />
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`lg:hidden fixed top-0 left-0 w-full h-full bg-white z-40 transition-transform duration-300 ${
//           isMenuOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         {/* Exit Button */}
//         <div className="flex justify-end p-4">
//           <button
//             className="text-gray-800 text-2xl transform transition-transform hover:rotate-90"
//             onClick={toggleMenu}
//           >
//             ✕
//           </button>
//         </div>

//         {/* Menu Items */}
//         <ul className="flex flex-col items-center justify-center h-full gap-6">
//           <li
//             className="text-gray-800 text-lg cursor-pointer"
//             onClick={toggleMenu}
//           >
//             <Link href="/porcelain">porcelain</Link>
//           </li>
//           <li
//             className="text-gray-800 text-lg cursor-pointer"
//             onClick={toggleMenu}
//           >
//             <Link href="/ProductsDetails">ProductsDetails</Link>
//           </li>
//           <li
//             className="text-gray-800 text-lg cursor-pointer"
//             onClick={toggleMenu}
//           >
//             <Link href="/Movies">Movies</Link>
//           </li>
//           <li
//             className="text-gray-800 text-lg cursor-pointer"
//             onClick={toggleMenu}
//           >
//             <Link href="/">home</Link>
//           </li>

//           <div className="text-white text-xl font-bold w-full">
//             {/* <Link href="/CartPage">MyStore</Link> 
//              </div> 
//              <div className=''>
//             <CartButton /> */}
//           </div>
//           <Button
//             type="button"
//             title="تسوق المنتجات"
//             icon="/cart.png"
//             variant="btn_dark_green"
//           />

//          <div className="hidden lg:flex space-x-4 items-center">
//          <button
//               onClick={toggleDarkMode}
//               className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-teal-500 focus:outline-none"
//               aria-label="Toggle Dark Mode"
//             >
//               {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
//             </button>

//            <Link href="/cart" className="text-white hover:text-green-600">
//              <FiShoppingCart className="text-wgite hover:text-green-600 md:text-2xl lg:text-3xl" />
//            </Link>
//            <Link
//              href="/profile"
//              className="text-white hover:text-teal-600 md:text-2xl lg:text-3xl "
//            >
//              <FiFacebook />
//            </Link>
//            <Link
//              href="/profile"
//              className="text-white hover:text-orange-50  md:text-2xl lg:text-3xl "
//            >
//              <FiInstagram />
//            </Link>
//          </div>

//           {/* <div className="flex bg-blue-500 w-60 justify-center h-12  rounded-lg">
//           <img src="/facebook.svg" className="w-8 mx-2" alt="Facebook" />
//         <img src="/instagram.svg" className="w-8 mx-2" alt="Instagram" />

//           </div> */}

//           <li>
//         <div className="text-white text-xl font-bold bg-lime-600 w-full">
//             <Link href="/loginbutton">Login</Link>
//           </div> 
//          <div>
//             <LoginButton />
//           </div>

//           </li> 
//           </ul>
//           </div>
//           </div>
//     </nav>
//   );
// };

// export default Navbar;


