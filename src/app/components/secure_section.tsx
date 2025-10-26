"use client";
import React, { useEffect, useState } from "react";

export default function SecureSection() {
  const [securecard, Setsecurecard] = useState<Secure[]>([]);

  useEffect(() => {
    fetch("/data/securedata.json")
      .then((res) => res.json())
      .then((data) => Setsecurecard(data))
      .catch((err) => console.error("Error loading data:", err));
  }, []);
  
  return (
    <>
      <section className="py-8 md:py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-secondary text-sm font-semibold tracking-wide">
            SECURITY
          </h3>

          <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12 mt-4 mb-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent leading-tight md:w-1/2">
              We protect your money at every step with Easy Pay
            </h1>
            <p className="text-[#4D525F] w-full md:w-1/2">
              Easy Pay ensures your money is protected at every step with
              advanced encryption, real-time monitoring, and multi-factor
              authentication.
            </p>
          </div>

    
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 items-start md:divide-x md:divide-gray-200 bg-[#F6F6F6] px-6 md:px-0 py-10 mt-10 rounded-2xl">
            {securecard.map((data) => (
           
              <div key={data.id} className="md:px-8">
           
                <div
                  className={`w-3 h-3 rounded-full mb-4 ${data.colorClass}`}
                  style={{
                    boxShadow: `0 0 0 8px ${data.borderClass}`,
                  }}
                ></div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {data.title}
                </h3>

                <p className="text-sm text-gray-600">{data.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
