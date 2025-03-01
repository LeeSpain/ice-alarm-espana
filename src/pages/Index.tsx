
import { useEffect } from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import ProductsSection from "../components/ProductsSection";
import AIGuardianSection from "../components/AIGuardianSection";
import PricingSection from "../components/PricingSection";
import TestimonialSection from "../components/TestimonialSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    // Smooth scroll to section when clicking on anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust for fixed header
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Initialize animation on scroll
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll('.animate-fade-in, .animate-slide-up, .animate-slide-down, .animate-slide-left, .animate-slide-right');
      
      scrollElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementHeight = element.getBoundingClientRect().height;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - elementHeight / 2) {
          element.classList.add('opacity-100');
          element.classList.remove('opacity-0');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProductsSection />
        <AIGuardianSection />
        <PricingSection />
        <TestimonialSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
