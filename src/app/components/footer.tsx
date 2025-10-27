"use client";
import Image from "next/image";
import React from "react";



const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black text-gray-900 dark:text-white py-12 px-4 font-inter border-t border-gray-200 dark:border-gray-800">
      <div className="flex md:flex-row flex-col justify-between container mx-auto">
        <div>
          <Image src="/logo.png" alt="footer logo" width={153} height={65} />
          <p className="text-[#4D525F] w-[278px]">
            Easy Pay offers secure, seamless, and fee-free payments for
            effortless global transactions.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-20">
          <nav>
            <h6 className="font-bold text-2xl text-accent">Services</h6>
            <ul className="grid gap-2 my-2">
              <li className="">Features</li>
              <li className="">How it work</li>
              <li className="">security</li>
              <li className="">Testimonial</li>
            </ul>
          </nav>
          <nav>
            <h6 className="font-bold text-2xl text-accent">Company</h6>
            <ul className="grid gap-2 my-2">
              <li className="">privacy policy</li>
              <li className="">Terms & Condition</li>
              <li className="">Jobs</li>
              <li className="">Press kit</li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="text-center text-gray-500 dark:text-gray-400 text-sm pt-10 mt-10 border-t border-gray-200 dark:border-gray-700">
        <p>
          2024 ©Easy Pay. All rights reserved. Fintech Landing Page by MUHIB
        </p>
      </div>
    </footer>
  );
};

export default Footer;
