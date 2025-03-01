
import { ArrowRight, PhoneCall, Users, Heart } from "lucide-react";
import { useState } from "react";

const CTASection = () => {
  const [hoverButton, setHoverButton] = useState<string | null>(null);
  
  return (
    <section id="register" className="py-24 bg-ice-blue text-white relative overflow-hidden">
      {/* Enhanced background with parallax effect */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')] opacity-20 bg-cover bg-center transform scale-110" 
           style={{ transform: "scale(1.1)" }}></div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-ice-blue/90 via-ice-blue/80 to-ice-blue/70"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-ice-orange/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.1s" }}>
            <div className="inline-block px-4 py-1 bg-white/10 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              Join Thousands of Satisfied Users
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 animate-fade-in opacity-0" style={{ animationDelay: "0.3s" }}>
            Ready to Experience <span className="relative inline-block">
              Peace of Mind?
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-white opacity-40 rounded"></span>
            </span>
          </h2>
          
          <p className="text-lg md:text-xl opacity-90 mb-10 animate-fade-in opacity-0" style={{ animationDelay: "0.5s" }}>
            Join the thousands of satisfied users who trust ICE Alarm España for their 
            health monitoring and emergency response needs. Take the first step toward 
            a safer, more secure lifestyle today.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto mb-10 animate-fade-in opacity-0" style={{ animationDelay: "0.7s" }}>
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl text-center hover:bg-white/15 transition-all-300">
              <div className="rounded-full bg-white/15 w-14 h-14 mx-auto flex items-center justify-center mb-4">
                <Heart className="w-7 h-7" />
              </div>
              <h3 className="font-semibold mb-2">Health Monitoring</h3>
              <p className="text-sm opacity-80">Real-time health tracking and insights</p>
            </div>
            
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl text-center hover:bg-white/15 transition-all-300">
              <div className="rounded-full bg-white/15 w-14 h-14 mx-auto flex items-center justify-center mb-4">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="font-semibold mb-2">Family Connection</h3>
              <p className="text-sm opacity-80">Keep loved ones informed and connected</p>
            </div>
            
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl text-center hover:bg-white/15 transition-all-300">
              <div className="rounded-full bg-white/15 w-14 h-14 mx-auto flex items-center justify-center mb-4">
                <PhoneCall className="w-7 h-7" />
              </div>
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-sm opacity-80">Professional help whenever you need it</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-in opacity-0" style={{ animationDelay: "0.9s" }}>
            <a 
              href="#register" 
              className="relative overflow-hidden group bg-white text-ice-blue px-8 py-4 rounded-lg hover:bg-opacity-95 transition-all-300 font-medium shadow-lg hover:shadow-xl flex items-center justify-center gap-3 w-full sm:w-auto min-w-[200px]"
              onMouseEnter={() => setHoverButton('get-started')}
              onMouseLeave={() => setHoverButton(null)}
            >
              <span className="relative z-10">Get Started Now</span>
              <ArrowRight size={18} className={`relative z-10 transition-transform duration-500 ${hoverButton === 'get-started' ? 'translate-x-1' : ''}`} />
              <div className="absolute inset-0 bg-gradient-to-r from-white to-white/90 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </a>
            
            <a 
              href="#contact" 
              className="relative overflow-hidden group border-2 border-white text-white px-8 py-4 rounded-lg hover:text-ice-blue transition-all-300 font-medium flex items-center justify-center w-full sm:w-auto min-w-[200px]"
              onMouseEnter={() => setHoverButton('contact')}
              onMouseLeave={() => setHoverButton(null)}
            >
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      
      {/* Animated particles effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white/10 animate-pulse"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: Math.random() * 0.2
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default CTASection;
