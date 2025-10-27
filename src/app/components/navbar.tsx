"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TextAlignJustify, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "feature", text: "Feature" },
    { to: "pricing", text: "Pricing" },
    { to: "security", text: "Security" },
    { to: "benefits", text: "Benefits" },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-md border-gray-200/50 dark:border-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="shrink-0">
              <ScrollLink to="hero" smooth={true} duration={500} className="cursor-pointer">
                <Image src="/logo.png" alt="navlogo image" width={153} height={73} />
              </ScrollLink>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.text}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-100} // adjust for navbar height
                  className="text-lg font-semibold text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
                >
                  {link.text}
                </ScrollLink>
              ))}
            </nav>

            {/* Desktop Contact Button */}
            <div className="hidden md:flex items-center space-x-3">
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-100}
                className="px-6 py-3 text-lg font-medium bg-primary text-white rounded-full hover:bg-accent transition-colors shadow-sm cursor-pointer"
              >
                Contact
              </ScrollLink>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <TextAlignJustify className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } bg-white dark:bg-gray-900`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex h-16 items-center justify-between">
            <div className="w-[153px]"></div>
            <div className="flex items-center">
              <button
                onClick={toggleMobileMenu}
                aria-label="Close mobile menu"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Mobile Links */}
          <nav className="mt-8 flex flex-col space-y-6 px-2">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.text}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-100}
                className="block rounded-md px-3 py-2 text-2xl font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
                onClick={toggleMobileMenu}
              >
                {link.text}
              </ScrollLink>
            ))}

            <hr className="border-gray-200 dark:border-gray-700" />

            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-100}
              className="block w-full px-6 py-3 text-lg font-medium bg-primary text-white rounded-full hover:bg-accent transition-colors shadow-sm cursor-pointer"
              onClick={toggleMobileMenu}
            >
              Contact
            </ScrollLink>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
