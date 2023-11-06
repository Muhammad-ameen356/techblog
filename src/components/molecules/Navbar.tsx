import React, { useState } from "react";

const Navbar = () => {
  return (
    <nav className="bg-accent p-4 ">
      <div className="container-fluid mx-auto flex justify-between items-center">
        {/* Left Side */}
        <div className="flex items-center">
          <a href="#" className="text-white text-2xl font-bold mr-4">
            Next.js Project
          </a>
          <div className="hidden md:flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="bg-white px-2 py-1 rounded-full focus:outline-none"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <div className="md:hidden flex items-center">
            <button
              className="text-white focus:outline-none"
              // onClick={toggleNavbar}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-white">
              User Account
            </a>
            <a href="#" className="text-white">
              Notification
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* {isOpen && (
        <div className="md:hidden mt-4">
          <a href="#" className="block text-white py-2">
            User Account
          </a>
          <a href="#" className="block text-white py-2">
            Notification
          </a>
        </div>
      )} */}
    </nav>
  );
};

export default Navbar;
