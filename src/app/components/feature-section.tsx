"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {Feature} from "../../types/feature"
export default function FeatureSection() {
  const [features, setFeatures] = useState<Feature[]>([]);

  useEffect(() => {
    fetch("/data/feature.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data))
      .catch((err) => console.error("Error loading data:", err));
  }, []);

  return (
    <section className="container mx-auto px-4 sm:px-6 my-24">
      {/* Header */}
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <span className="text-secondary text-sm font-semibold tracking-wide">
          FEATURE
        </span>
        <h1 className="text-accent text-3xl md:text-4xl font-bold mt-2">
          Why choose Easy Pay for <br /> effortless payments?
        </h1>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl shadow-sm border flex flex-col items-center text-center transition-transform hover:scale-105"
            style={{ backgroundColor: item.bg_color }}
          >
            <Image
              width={100}
              height={100}
              src={item.image}
              alt={item.title}
              className="w-16 h-16 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
