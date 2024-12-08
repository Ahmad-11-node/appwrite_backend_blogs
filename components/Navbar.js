import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-purple-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">CodeRockers</div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navbar Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-6`}
        >
          <a href="#" className="block md:inline-block py-2 px-3 hover:bg-purple-500 rounded">
            Home
          </a>
          <a href="#" className="block md:inline-block py-2 px-3 hover:bg-purple-500 rounded">
            About
          </a>
          <a href="#" className="block md:inline-block py-2 px-3 hover:bg-purple-500 rounded">
            Services
          </a>
          <a href="#" className="block md:inline-block py-2 px-3 hover:bg-purple-500 rounded">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
