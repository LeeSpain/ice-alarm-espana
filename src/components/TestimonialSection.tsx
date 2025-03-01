
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "María García",
      role: "SOS Pendant User",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      quote: "The SOS Pendant saved my life when I fell at home. The emergency team arrived within minutes, and my daughter was immediately notified. The AI Guardian checks on me daily, which gives me peace of mind living alone."
    },
    {
      name: "Antonio Fernández",
      role: "Medical Dispenser & Glucose Monitor User",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      quote: "Managing my diabetes used to be stressful, but the Glucose Monitor and AI Guardian have transformed my life. I get timely alerts and helpful advice, and my medication is always dispensed on schedule. My doctor is impressed with how stable my levels have become."
    },
    {
      name: "Isabel Rodríguez",
      role: "Family Member",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      quote: "I live 300km away from my mother, and ICE Alarm has been a game-changer. I can check her health status anytime through the dashboard, and the AI Guardian notifies me if anything seems off. It's like having a personal caregiver for her around the clock."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="chip-secondary mx-auto mb-4 animate-fade-in">Customer Stories</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Hear From Our <span className="text-ice-blue">Satisfied Users</span>
          </h2>
          <p className="text-lg text-gray-600 animate-fade-in">
            Discover how ICE Alarm España has improved the lives of our users and provided peace of mind to their families.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-all duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-50 rounded-2xl p-8 shadow-sm animate-fade-in">
                    <div className="flex items-center gap-2 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-ice-orange text-ice-orange" />
                      ))}
                    </div>
                    
                    <blockquote className="text-lg text-gray-700 italic mb-8">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="flex items-center gap-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-bold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-ice-blue hover:text-white hover:border-ice-blue transition-all-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-ice-blue hover:text-white hover:border-ice-blue transition-all-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex justify-center mt-4 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all-300 ${
                  index === currentIndex ? "bg-ice-blue w-6" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
