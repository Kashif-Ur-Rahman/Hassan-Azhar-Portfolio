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
      <h1 className="relative text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradientFlow ml-16">
        <span className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-white pr-2 animate-typing ">
          Hassan Azhar
        </span>
        <span className="animate-blink">|</span>
      </h1>

      {/* Menu Items */}
      <div className="hidden md:flex space-x-8">
        <Link
          href="/"
          className={`${menuOpen === "Home" ? "text-2xl text-green-500 underline underline-offset-8" : "text-white hover:text-green-300"} font-medium`}
          onClick={() => handlesetMenuOpen("Home")}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`${menuOpen === "About" ? "text-2xl text-green-500 underline underline-offset-8" : "text-white hover:text-green-300"} font-medium`}
          onClick={() => handlesetMenuOpen("About")}
        >
          About
        </Link>
        <Link
          href="/projects"
          className={`${menuOpen === "Projects" ? "text-2xl text-green-500 underline underline-offset-8" : "text-white hover:text-green-300"} font-medium`}
          onClick={() => handlesetMenuOpen("Projects")}
        >
          Projects
        </Link>
        <Link
          href="/testimonial"
          className={`${menuOpen === "Testimonial" ? "text-2xl text-green-500 underline underline-offset-8" : "text-white hover:text-green-300"} font-medium`}
          onClick={() => handlesetMenuOpen("Testimonial")}
        >
          Testimonial
        </Link>
        <Link
          href="/contact"
          className={`${menuOpen === "Contact" ? "text-2xl text-green-500 underline underline-offset-8" : "text-white hover:text-green-300"} font-medium`}
          onClick={() => handlesetMenuOpen("Contact")}
        >
          Contact
        </Link>
      </div>

      {/* Resume Button */}
      <Link
        href="/Hassan_Azhar_Resume.pdf"
        download
        target={"_blank"}
        className="hidden md:block bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-600 mr-40"
      >
        <span className="relative 2xl:text-2xl">Resume</span>
      </Link>

      {/* Mobile Menu Button */}
      <div className="md:hidden text-white">
        <GiHamburgerMenu size={35} />
      </div>
    </nav>
  );
};

export default Navbar;
