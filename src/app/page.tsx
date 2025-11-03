"use client";

import HeroSection from "@/components/homepage/HeroSection";
import ProgrammeOverview from "@/components/homepage/ProgrammeOverview";
import RoadmapSection from "@/components/homepage/RoadmapSection";
import WhyChooseSection from "@/components/homepage/WhyChooseSection";
import AlumniSection from "@/components/homepage/AlumniSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProgrammeOverview />
      <RoadmapSection />
      <WhyChooseSection />
      <AlumniSection />
    </>
  );
}
