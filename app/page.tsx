"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Home as HomeIcon, Briefcase, HelpCircle, DollarSign, Lightbulb, RocketIcon, X } from 'lucide-react';

// Dynamically import non-critical sections with loading states
const ProcessSection = dynamic(() => import("@/components/ProcessSection"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
  ssr: false
});

const ProjectsSection = dynamic(() => import("@/components/ProjectsSection"), {
  loading: () => <div className="h-96 bg-white animate-pulse" />,
  ssr: false
});

const WhyUsSection = dynamic(() => import("@/components/WhyUsSection"), {
  loading: () => <div className="h-96 bg-gray-900 animate-pulse" />,
  ssr: false
});

const HowItWorksSection = dynamic(() => import("@/components/HowItWorksSection"), {
  loading: () => <div className="h-96 bg-white animate-pulse" />,
  ssr: false
});

const WhoWeWorkWithSection = dynamic(() => import("@/components/WhoWeWorkWithSection"), {
  loading: () => <div className="h-96 bg-white animate-pulse" />,
  ssr: false
});

const PricingSection = dynamic(() => import("@/components/PricingSection"), {
  loading: () => <div className="h-96 bg-gray-900 animate-pulse" />,
  ssr: false
});

const FaqSection = dynamic(() => import("@/components/FaqSection"), {
  loading: () => <div className="h-96 bg-white animate-pulse" />,
  ssr: false
});

const MeetFounderSection = dynamic(() => import("@/components/MeetFounderSection"), {
  loading: () => <div className="h-96 bg-white animate-pulse" />,
  ssr: false
});

const CtaSection = dynamic(() => import("@/components/CtaSection"), {
  loading: () => <div className="h-96 bg-gray-900 animate-pulse" />,
  ssr: false
});

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="h-24 bg-gray-900 animate-pulse" />,
  ssr: false
});

const navItems = [
  { name: 'Home', url: '#', icon: HomeIcon },
  { name: 'Work', url: '#projects', icon: Briefcase },
  { name: 'Our Process', url: '#how-it-works', icon: RocketIcon },
  { name: 'Pricing', url: '#pricing', icon: DollarSign },
  { name: 'Connect on X', url: '', icon: X },
  { name: 'Share your Idea', url: 'https://tally.so/r/m6y4xA', icon: Lightbulb }
];

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [showSections, setShowSections] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hero section loaded callback
  const handleHeroLoaded = () => {
    setHeroLoaded(true);
    // Delay showing other sections to ensure hero is fully rendered
    setTimeout(() => {
      setShowSections(true);
    }, 100);
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar isScrolled={isScrolled} />
      <HeroSection onLoaded={handleHeroLoaded} />
      
      {/* Only render other sections after hero is loaded */}
      {showSections && (
        <>
          <ProcessSection />
          <ProjectsSection />
          <WhyUsSection />
          <HowItWorksSection />
          <WhoWeWorkWithSection />
          <PricingSection />
          <FaqSection />
          <MeetFounderSection />
          <CtaSection />
          <Footer />
        </>
      )}
      
      <NavBar items={navItems} />
    </main>
  );
}