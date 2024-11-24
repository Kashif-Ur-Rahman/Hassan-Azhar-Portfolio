import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4 mt-8 h-40">
      <div className="container mx-auto text-center flex">
        <h2 className="text-4xl bg-gradient-to-r from-[#69E6CD] to-[#e4e709] text-transparent bg-clip-text mr-52 ml-20 mt-12">Hassan Azhar</h2>
        <div className="flex gap-6 text-xl font-medium mt-12 ml-10">
                    <a className="transition hover:text-teal-500 dark:hover:text-teal-400" href="/about">About</a>
                    <a className="transition hover:text-teal-500 dark:hover:text-teal-400" href="/project">Project</a>
                    <a className="transition hover:text-teal-500 dark:hover:text-teal-400" href="/testimonial">Testimonial</a>
                    <a className="transition hover:text-teal-500 dark:hover:text-teal-400" href="/contact">Contact</a>
                  </div>
        <p className="text-xl ml-52 mt-12">© {new Date().getFullYear()} Hassan Azhar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
