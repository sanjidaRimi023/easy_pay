import React from "react";

export default function SecureSection() {
  return (
    <>
      <section className="bg-[#F6F6F6] py-8 md:py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-secondary text-sm font-semibold tracking-wide">
            SECURITY
          </h3>

          <div className="flex items-center gap-70">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent leading-tight">
              We protect your money at every step with Easy Pay
            </h1>
            <p className="text-[#4D525F] w-1/2 p-1">
              Easy Pay ensures your money is protected at every step with
              advanced encryption, real-time monitoring, and multi-factor
              authentication.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
