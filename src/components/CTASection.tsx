
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-ice-blue text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')] opacity-10 bg-cover bg-center"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Peace of Mind?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Join the thousands of satisfied users who trust ICE Alarm España for their health monitoring and emergency response needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#register" className="bg-white text-ice-blue px-6 py-3 rounded-md hover:bg-opacity-90 transition-all-300 font-medium shadow-md hover:shadow-lg flex items-center justify-center gap-2">
              Get Started Now
              <ArrowRight size={16} />
            </a>
            <a href="#contact" className="border-2 border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-ice-blue transition-all-300 font-medium flex items-center justify-center">
              Contact Us
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
    </section>
  );
};

export default CTASection;
