
import { ArrowRight } from "lucide-react";

const ProductsSection = () => {
  const products = [
    {
      id: "sos-pendant",
      name: "SOS Pendant",
      price: "€110.00",
      monthlyFee: "€24.99/month",
      image: "https://images.unsplash.com/photo-1584208124888-3a26a201729a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      features: [
        "One-touch emergency call",
        "GPS location tracking",
        "Fall detection",
        "Custom emergency contacts",
        "AI Guardian integration",
        "Daily well-being check-ins"
      ]
    },
    {
      id: "medical-dispenser",
      name: "Medical Dispenser",
      price: "€249.99",
      monthlyFee: "€24.99/month",
      image: "https://images.unsplash.com/photo-1587854680352-936b22b91030?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      features: [
        "Automated pill dispensing",
        "Missed medication alerts",
        "Emergency escalation",
        "AI Guardian reminders",
        "Call Center monitoring",
        "Prescription management"
      ]
    },
    {
      id: "glucose-monitor",
      name: "Glucose Monitor",
      price: "€149.99",
      monthlyFee: "€24.99/month",
      image: "https://images.unsplash.com/photo-1579684288361-5c1a2957a700?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      features: [
        "Continuous glucose tracking",
        "AI-powered health analysis",
        "Call Center intervention",
        "Dietary recommendations",
        "Emergency response",
        "Health trend analysis"
      ]
    }
  ];

  return (
    <section id="products" className="section-padding">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="chip-secondary mx-auto mb-4 animate-fade-in">Our Products</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Integrated <span className="text-ice-blue">Health Monitoring</span> Solutions
          </h2>
          <p className="text-lg text-gray-600 animate-fade-in">
            Our suite of connected devices works seamlessly together to provide comprehensive health monitoring and emergency response capabilities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-white transition-all-300 hover-scale-sm animate-fade-in" 
              style={{ animationDelay: `${0.1 + index * 0.2}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform-300 group-hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <div className="chip-primary mb-3">{product.name}</div>
                <h3 className="text-xl font-bold mb-2">{product.price}</h3>
                <p className="text-sm text-gray-600 mb-4">{product.monthlyFee}</p>
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-ice-blue mt-0.5">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a href={`#${product.id}`} className="button-secondary w-full flex items-center justify-center gap-2">
                  Learn More
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
