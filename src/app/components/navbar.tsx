"use client";
import Image from "next/image";
import Link from "next/link";
// Removed Link and Image imports from 'next'
import React, { useState } from "react"; // Import React and useState
import { TextAlignJustify, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#", text: "Feature" },
    { href: "#", text: "Pricing" },
    { href: "#", text: "Security" },
    { href: "#", text: "Benefits" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-md border-gray-200/50 dark:border-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="shrink-0">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="navlogo image"
                  width={153}
                  height={73}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.text}
                  href={link.href}
                  className="text-lg font-semibold text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  {link.text}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-3">
              <Link
                href="#"
                className="px-6 py-3 text-lg font-medium bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-sm"
              >
                Contact
              </Link>
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
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <TextAlignJustify className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Menu */}
      <div
        id="mobile-menu"
        className={`
          fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out md:hidden
          ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } bg-white dark:bg-gray-900
        `}
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
                <span className="sr-only">Close main menu</span>
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="mt-8 flex flex-col space-y-6 px-2">
            {navLinks.map((link) => (
              <Link
                key={link.text}
                href={link.href}
                className="block rounded-md px-3 py-2 text-2xl font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={toggleMobileMenu}
              >
                {link.text}
              </Link>
            ))}

            <hr className="border-gray-200 dark:border-gray-700" />

            <Link
              href="#"
              className="block w-full rounded-full bg-blue-600 px-6 py-4 text-center text-xl font-medium text-white hover:bg-blue-700 transition-colors shadow-sm"
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
