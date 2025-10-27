/* eslint-disable react-hooks/immutability */
"use client";

import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Testimonial = {
  id: number;
  name: string;
  position: string;
  image: string;
  message: string;
  rating: number;
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md h-full flex flex-col justify-between transition-all hover:shadow-lg">
      {/* Rating */}
      <div className="flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            className="h-5 w-5 text-yellow-400"
            fill="currentColor"
          />
        ))}
      </div>

      {/* Message */}
      <p className="text-gray-600 dark:text-gray-300 mt-6 grow italic">
        “{testimonial.message}”
      </p>

      {/* Author */}
      <div className="flex items-center mt-8">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={60}
          height={60}
          className="rounded-full object-cover"
        />
        <div className="ml-4">
          <p className="font-semibold text-gray-900 dark:text-white">
            {testimonial.name}
          </p>
          <p className="text-sm text-gray-500">{testimonial.position}</p>
        </div>
      </div>
    </div>
  );
};

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("/data/testimonial.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
      .catch((err) => console.error("Error loading testimonial data:", err));
  }, []);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  });

  const handlePrev = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

  const handleNext = () =>
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );

  if (testimonials.length === 0) {
    return (
      <section className="bg-gray-50 dark:bg-gray-900 py-20 text-center">
        <p className="text-gray-500">Loading testimonials...</p>
      </section>
    );
  }

  const firstCardIndex = currentIndex;
  const secondCardIndex = (currentIndex + 1) % testimonials.length;

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-20 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Left Side */}
        <div className="w-full lg:w-1/3 text-center lg:text-left">
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3 leading-tight">
            Trusted by users worldwide
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-6 text-lg">
            Real experiences from people who trust Monks Pay for fast, secure,
            and transparent transactions.
          </p>

          {/* Arrows */}
          <div className="flex gap-4 mt-10 justify-center lg:justify-start">
            <button
              onClick={handlePrev}
              className="h-14 w-14 flex items-center justify-center rounded-full border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 transition"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={handleNext}
              className="h-14 w-14 flex items-center justify-center rounded-full border border-transparent bg-gray-900 text-white hover:bg-gray-700 transition"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Right Side (Animated Cards) */}
        <div className="w-full lg:w-2/3 relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col md:flex-row gap-8"
              >
                <div className="w-full md:w-1/2">
                  <TestimonialCard testimonial={testimonials[firstCardIndex]} />
                </div>
                {testimonials.length > 1 && (
                  <div className="w-full md:w-1/2 hidden md:block">
                    <TestimonialCard
                      testimonial={testimonials[secondCardIndex]}
                    />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
