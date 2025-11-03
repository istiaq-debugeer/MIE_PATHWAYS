"use client";

import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      className="relative h-[90vh] flex items-center justify-center text-white bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/images/hero-bg.jpg')", // Replace with your actual image in /public/images/
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 text-center max-w-4xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Your Pathway to <br /> Global Excellence
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Study at the only NCUK accredited centre in Bangladesh and secure
          guaranteed progression to over 65 universities across the UK,
          Australia, and New Zealand.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">Apply Now →</Button>
          <Button size="lg" variant="outline">
            ▶ Watch Video
          </Button>
        </div>

        <div className="flex justify-center gap-10 mt-12 text-white/90">
          <div>
            <p className="text-3xl font-bold">65+</p>
            <p>Partner Universities</p>
          </div>
          <div>
            <p className="text-3xl font-bold">100%</p>
            <p>Progression Rate</p>
          </div>
          <div>
            <p className="text-3xl font-bold">15+</p>
            <p>Years of Excellence</p>
          </div>
        </div>
      </div>
    </section>
  );
}
