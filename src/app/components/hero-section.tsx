"use client";
import React from "react";
import Navbar from "./navbar";
import Image from "next/image";
import { TrendingUp } from "lucide-react";
import AnimateSvg from "./AnimateSvg";

export default function HeroSection() {
  return (
    <section
      className="relative rounded-3xl overflow-hidden m-4 md:m-6 bg-cover bg-center"
      style={{ backgroundImage: "url('/banner_bg_image.png')" }}
    >
      <div className="absolute top-0 left-0 w-full z-20 md:mt-10">
        <Navbar />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between container mx-auto  px-4 sm:px-6 pt-24 md:pt-32">
        <div className="max-w-lg text-center md:text-left">
          <p className="text-xs md:text-sm font-medium text-gray-600 tracking-widest mb-2">
            EASY PAYMENT
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent leading-tight">
            Pay{" "}
            <span className="relative inline-block">
              fast and smarter
              <div className="absolute left-0 w-full" style={{ bottom: "-10px" }}>
                <AnimateSvg
                  width="100%"
                  height="20"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  className="my-svg-animation"
                  path="M 0 60 Q 50 5 100 40, 92.36 59.52"
                  strokeColor="#2E68FD"
                  strokeWidth={30}
                  strokeLinecap="round"
                  animationDuration={1.5}
                  animationDelay={0}
                  animationBounce={0.3}
                  reverseAnimation={false}
                  enableHoverAnimation={false}
                />
              </div>
            </span>{" "}
            from anywhere
          </h1>

          <p className="text-gray-600 font-medium mt-3 md:mt-4 text-sm md:text-base">
            Experience the future of payments: fast, secure, and tailored for the next generation&apos;s convenience and trust.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 justify-center md:justify-start">
            <Image
              width={144}
              height={48}
              src="/app_store.png"
              alt="App Store"
              className="h-12 w-auto"
            />
            <Image
              width={144}
              height={48}
              src="/google_play.png"
              alt="Google Play"
              className="h-12 w-auto"
            />
          </div>
        </div>

        <div className="relative mt-10 md:mt-0">
          <Image
            width={1000}
            height={700}
            src="/banner_image.png"
            alt="User with phone"
            className="w-[260px] sm:w-[350px] md:w-[450px] lg:w-[500px] rounded-3xl z-10 relative mx-auto md:mx-0"
          />

          <div className="hidden lg:block absolute bottom-6 left-1/2 md:left-6 -translate-x-1/2 md:translate-x-0 bg-white shadow-xl rounded-xl px-4 md:px-5 py-3 md:py-4 text-sm z-20 w-52 h-[116] sm:w-auto">
            <p className="text-gray-800 font-semibold text-sm md:text-base">
              Payment Received
            </p>
            <p className="text-primary font-bold text-lg md:text-xl">
              +35,890.00
            </p>
            <span className="flex gap-2 md:gap-4 items-center justify-center md:justify-start">
              <p className="text-color text-xs">11th Jan, 2024</p>
              <p className="flex items-center text-xs text-[#37C390] md:text-sm">
                3.09% <TrendingUp size={14} className="ml-1" />
              </p>
            </span>
          </div>
          <div className="absolute top-50 right-0 z-10">
          
            <Image src="/banner_avatar.png"
            alt="avatar image" width={210}
            height={72}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
