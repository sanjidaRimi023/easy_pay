"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Wroks } from "@/types/works";

export default function WorksSection() {
  const [works, setWorks] = useState<Wroks[]>([]);

  useEffect(() => {
    fetch("/data/workscard.json")
      .then((res) => res.json())
      .then((data) => setWorks(data))
      .catch((err) => console.error("Error loading data:", err));
  }, []);

  return (
    <section className="bg-[#F6F6F6] py-8 md:py-20">
      <div className="container mx-auto px-4">
        <h3 className="text-secondary text-sm font-semibold tracking-wide">
          HOW IT WORKS
        </h3>

        <div className="flex justify-between items-end flex-wrap gap-4 mt-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent leading-tight">
            Make payments, transfers, and <br /> more in 3 simple steps
          </h1>
          <button className="px-6 py-4 text-lg font-medium bg-primary text-white rounded-full hover:bg-accent transition-colors shadow-sm">
            Get Started Now
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-y-8 md:gap-y-0 mt-14 bg-white rounded-3xl p-8 shadow-sm md:divide-x md:divide-gray-200">
          {works.map((item) => (
            <div
              key={item.number}
              className="flex flex-col items-start relative px-14 py-6"
            >
             
              <span className="absolute bottom-32 left-16 text-7xl font-bold text-[#F6F6F6] select-none z-0">
                {item.number}
              </span>
           
              <div className="p-4 rounded-2xl relative z-20">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={48}
                  height={48}
                />
              </div>
        
              <h3 className="text-lg font-semibold text-accent relative">
                {item.title}
              </h3>
    
              <p className="text-gray-500 text-sm relative z-10">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}