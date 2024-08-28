import React from "react";
import Link from "next/link";

const LoginButton = () => {
  return (
    // <button
    //   type="button"
    //   className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    // >
    <div className="flex items-center px-6 bg-lime-500 hover:bg-lime-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg  py-2 text-center w-full">
      <Link href="/LoginPage" legacyBehavior>
        <a className="relative inline-flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 13l4-4m0 0l-4-4m4 4H7m4 4a4 4 0 11-4-4 4 4 0 014 4z"
            />
          </svg>
          Login
        </a>
      </Link>
    </div>
  );
};

export default LoginButton;
