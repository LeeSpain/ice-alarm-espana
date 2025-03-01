
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="chip-primary mb-4 animate-slide-right" style={{ animationDelay: "0.3s" }}>
              AI-Powered Health Monitoring
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-right" style={{ animationDelay: "0.5s" }}>
              <span className="text-ice-blue block">Your Health Guardian</span>
              <span className="block mt-2">Always By Your Side</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 animate-slide-right" style={{ animationDelay: "0.7s" }}>
              Experience real-time health monitoring and emergency response with our integrated system powered by AI. Providing peace of mind for you and your loved ones.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-right" style={{ animationDelay: "0.9s" }}>
              <a href="#products" className="button-secondary">
                Explore Products
              </a>
              <a href="#contact" className="button-outline">
                Contact Us
              </a>
            </div>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <div className="aspect-square relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-ice-blue/20 to-ice-orange/20 mix-blend-overlay"></div>
              <img
                src="https://images.unsplash.com/photo-1551384955-271c010ee6ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="ICE Alarm health monitoring device"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/2 -right-6 md:-right-16 w-32 h-32 bg-ice-orange/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-1/3 -left-6 md:-left-16 w-24 h-24 bg-ice-blue/10 rounded-full blur-xl"></div>
            
            {/* Stats card */}
            <div className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-16 glass-morphism rounded-xl p-4 shadow-lg animate-slide-up" style={{ animationDelay: "1.1s" }}>
              <p className="text-sm font-medium text-gray-600 mb-2">User Satisfaction</p>
              <p className="text-2xl font-bold text-ice-blue">98%</p>
            </div>
            
            {/* 24/7 Support card */}
            <div className="absolute -top-6 -right-6 md:top-8 md:-right-16 glass-morphism rounded-xl p-4 shadow-lg animate-slide-up" style={{ animationDelay: "1.3s" }}>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <p className="text-sm font-medium text-gray-600">24/7 Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-ice-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-ice-orange/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
