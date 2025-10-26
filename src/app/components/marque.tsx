"use client";
import Image from "next/image";
import React from "react";

export interface Logo {
  name: string;
  image: string;
  color?: string;
}

interface MarqueeProps {
  Logos: Logo[];
  direction?: "forwards" | "reverse";
}

const combinedLogo: Logo[] = [
  { name: "company image", image: "/marque3.png", color: "#F7DF1E" },
  { name: "company image", image: "/marque4.png", color: "#3178C6" },

  { name: "company image", image: "/marque1.png", color: "#61DAFB" },
  { name: "company image", image: "/marque5.png", color: "#FFFFFF" },
  { name: "company image", image: "/marque3.png", color: "#F7DF1E" },
  { name: "company image", image: "/marque4.png", color: "#3178C6" },
  { name: "company image", image: "/marque5.png", color: "#339933" },
  { name: "company image", image: "/marque3.png", color: "#F7DF1E" },
  { name: "company image", image: "/marque4.png", color: "#3178C6" },
];

const Marquee: React.FC<MarqueeProps> = ({ Logos, direction = "forwards" }) => {
  const animationName = direction === "forwards" ? "marquee" : "marqueeReverse";

  return (
    <div
      className="overflow-hidden w-full mb-20"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 2rem, black calc(100% - 2rem), transparent)",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: `${animationName} 20s linear infinite`,
        }}
      >
        {[...Logos, ...Logos].map((Logo, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-2xl mx-10"
          >
            <Image
              width={120}
              height={120}
              src={Logo.image}
              alt={Logo.name}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const MarqueeLogos: React.FC = () => {
  return (
    <div className="w-full">
      <Marquee Logos={combinedLogo} direction="forwards" />
    </div>
  );
};

export default MarqueeLogos;
