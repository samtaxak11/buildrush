"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProcessSection from "@/components/ProcessSection";
import ProjectsSection from "@/components/ProjectsSection";
import WhyUsSection from "@/components/WhyUsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhoWeWorkWithSection from "@/components/WhoWeWorkWithSection";
import PricingSection from "@/components/PricingSection";
import FaqSection from "@/components/FaqSection";
import MeetFounderSection from "@/components/MeetFounderSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Home as HomeIcon, Briefcase, HelpCircle, DollarSign, Lightbulb, RocketIcon, X } from 'lucide-react';

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar isScrolled={isScrolled} />
      <HeroSection />
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
      <NavBar items={navItems} />
    </main>
  );
}