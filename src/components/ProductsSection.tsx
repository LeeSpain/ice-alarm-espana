
import { ArrowRight, PhoneCall, HeartPulse, Bell } from "lucide-react";
import { Link } from "react-router-dom";

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
      ],
      description: "Our SOS Pendant provides immediate emergency response with 24/7 monitoring by our dedicated call center in Malaga, Spain. When activated, our trained professionals respond immediately, assessing the situation and dispatching appropriate help."
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
      ],
      description: "Every medication photo is monitored by our professional team to ensure proper medication adherence. Our call center staff verifies each dose, and if medications are missed, we provide immediate follow-up to ensure your health is not compromised."
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
      ],
      description: "Each glucose check is monitored by our dedicated healthcare professionals. Our call center team analyzes your readings in real-time, providing immediate intervention for concerning levels and personalized advice to maintain optimal health."
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
          <div className="mt-6 flex justify-center items-center gap-2 animate-fade-in">
            <PhoneCall size={20} className="text-ice-blue" />
            <p className="text-md text-gray-700 font-medium">
              24/7 Dedicated Call Center in Malaga, Spain
            </p>
          </div>
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
                
                {/* Monitoring highlight for each product */}
                <div className="mb-6 p-3 bg-ice-blue/10 rounded-lg flex items-start gap-2">
                  {product.id === "sos-pendant" && <Bell size={16} className="text-ice-blue shrink-0 mt-1" />}
                  {product.id === "medical-dispenser" && <HeartPulse size={16} className="text-ice-blue shrink-0 mt-1" />}
                  {product.id === "glucose-monitor" && <HeartPulse size={16} className="text-ice-blue shrink-0 mt-1" />}
                  <p className="text-sm text-gray-700">{product.description.substring(0, 120)}...</p>
                </div>
                
                <Link 
                  to={`/products/${product.id}`} 
                  className="button-secondary w-full flex items-center justify-center gap-2"
                >
                  Learn More
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-ice-blue/10 via-ice-blue/5 to-ice-blue/10 p-6 rounded-xl animate-fade-in">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <div className="rounded-full bg-ice-blue/20 p-3">
              <PhoneCall size={24} className="text-ice-blue" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">24/7 Dedicated Monitoring Service</h3>
              <p className="text-gray-600">
                Our professional call center in Malaga monitors every SOS alert, medication photo, and glucose reading to ensure your safety and well-being. 
                <span className="hidden md:inline"> Available in both English and Spanish with full translation services provided.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
