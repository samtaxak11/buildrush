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
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Home as HomeIcon, Briefcase, HelpCircle, DollarSign } from 'lucide-react';

const navItems = [
  { name: 'Home', url: '#', icon: HomeIcon },
  { name: 'Projects', url: '#projects', icon: Briefcase },
  { name: 'FAQ', url: '#faq', icon: HelpCircle },
  { name: 'Pricing', url: '#pricing', icon: DollarSign }
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
      <CtaSection />
      <Footer />
      <NavBar items={navItems} />
    </main>
  );
}