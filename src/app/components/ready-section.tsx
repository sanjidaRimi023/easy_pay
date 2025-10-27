import React from "react";

export default function ReadySection() {
  return (
    <section
      className="container mx-auto my-12 md:my-20 bg-cover bg-center rounded-2xl px-4 sm:px-6 md:px-12 lg:px-16"
      style={{
        backgroundImage: "url(/ready_last.png)",
      }}
    >
      <div className="flex flex-col items-center justify-center text-white text-center py-16 sm:py-20 md:py-24 space-y-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
          Ready to experience seamless <br className="hidden sm:block" />
          secure payments globally
        </h1>

        <p className="max-w-md sm:max-w-lg md:max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed">
          Ready for hassle-free, secure payments anywhere in the world? Start
          using Monks Pay today — it’s fast, free, and focused on keeping your
          transactions secure!
        </p>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center">
          <button className="w-full sm:w-auto py-3 px-6 text-base sm:text-lg font-medium bg-primary text-white rounded-full hover:bg-accent transition-colors shadow-sm">
            Download the app
          </button>
          <button className="w-full sm:w-auto py-3 px-6 text-base sm:text-lg font-medium border-2 border-white text-white rounded-full shadow-sm hover:bg-white/10 transition-colors">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
}
