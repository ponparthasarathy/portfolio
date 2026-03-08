"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SkillsOrbit from "@/components/SkillsOrbit";
import ProjectDeck from "@/components/ProjectDeck";
import CodingProfiles from "@/components/CodingProfiles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CosmicBackground from "@/components/CosmicBackground";
import SystemBootLoader from "@/components/SystemBootLoader";
import Script from "next/script";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Pon Parthasarathy",
    "jobTitle": "Full Stack Software Engineer",
    "url": "https://your-portfolio-domain.com",
    "sameAs": [
      "https://github.com/ponparthasarathy",
      "https://www.linkedin.com/in/pon-parthasarathy-9b56052a7/"
    ],
    "description": "Full Stack Software Engineer | AI / ML Developer specialized in intelligent systems and modern digital experiences."
  };

  return (
    <main className="relative min-h-screen w-full selection:bg-indigo-500/30 overflow-hidden">
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <AnimatePresence mode="wait">
        {!isLoaded ? (
          <SystemBootLoader key="loader" onComplete={() => setIsLoaded(true)} />
        ) : (
          <>
            <CosmicBackground />
            <Navbar />

            <div className="flex flex-col relative z-10">
              <Hero />
              <About />
              <SkillsOrbit />
              <ProjectDeck />
              <CodingProfiles />
              <Contact />
              <Footer />
            </div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
