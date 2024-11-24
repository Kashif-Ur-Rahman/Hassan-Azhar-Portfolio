"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState("Home");

  const handlesetMenuOpen = (menu: string) => {
    setMenuOpen(menu);
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-transparent">
      <h1 className="ml-64 xs:text-2xl flex items-center text-xl sm:text-3xl text-center md:text-3xl xl:text-4xl HDD:text-6xl bg-gradient-to-r from-[#d86cdb]  to-[#6973ff] text-transparent bg-clip-text font-roboto xs:flex">
        Hassan{" "}
        <span className="ml-2 bg-gradient-to-r from-[#69E6CD] to-[#e4e709] text-transparent bg-clip-text">
          Azhar
        </span>
      </h1>

      {/* Menu Items */}
      <div className="hidden md:flex space-x-8">
        <Link
          href="/"
          className={`${menuOpen === "Home" ? "text-green-500 underline underline-offset-8" : "text-white hover:text-green-300"} font-medium`}
          onClick={() => handlesetMenuOpen("Home")}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`${menuOpen === "About" ? "text-green-500 underline underline-offset-8" : "text-white hover:text-green-300"} font-medium`}
          onClick={() => handlesetMenuOpen("About")}
        >
          About
        </Link>
        <Link
          href="/projects"
          className={`${menuOpen === "Projects" ? "text-green-500 underline underline-offset-8" : "text-white hover:text-green-300"} font-medium`}
          onClick={() => handlesetMenuOpen("Projects")}
        >
          Projects
        </Link>
        <Link
          href="/testimonial"
          className={`${menuOpen === "Testimonial" ? "text-green-500 underline underline-offset-8" : "text-white hover:text-green-300"} font-medium`}
          onClick={() => handlesetMenuOpen("Testimonial")}
        >
          Testimonial
        </Link>
        <Link
          href="/contact"
          className={`${menuOpen === "Contact" ? "text-green-500 underline underline-offset-8" : "text-white hover:text-green-300"} font-medium`}
          onClick={() => handlesetMenuOpen("Contact")}
        >
          Contact
        </Link>
      </div>

      {/* Resume Button */}
      <Link
        href="/resume"
        className="hidden md:block bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-600 mr-40"
      >
        Resume
      </Link>

      {/* Mobile Menu Button */}
      <div className="md:hidden text-white">
        <GiHamburgerMenu size={35} />
      </div>
    </nav>
  );
};

export default Navbar;
