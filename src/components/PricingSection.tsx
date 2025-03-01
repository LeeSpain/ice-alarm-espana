
import { Check } from "lucide-react";

const PricingSection = () => {
  const pricingTiers = [
    {
      title: "1 Product",
      price: "€24.99",
      period: "per month",
      discount: "No discount",
      features: [
        "24/7 AI Guardian support",
        "Emergency call center access",
        "Family dashboard access",
        "Real-time health monitoring",
        "Unlimited alerts & notifications",
        "Monthly health reports"
      ],
      featured: false
    },
    {
      title: "2 Products",
      price: "€44.98",
      originalPrice: "€49.98",
      period: "per month",
      discount: "10% discount",
      features: [
        "All features from 1 Product",
        "Priority emergency response",
        "Enhanced AI health insights",
        "Wellness goal tracking",
        "Consolidated health dashboard",
        "Quarterly health assessment"
      ],
      featured: true
    },
    {
      title: "3 Products",
      price: "€59.97",
      originalPrice: "€74.97",
      period: "per month",
      discount: "20% discount",
      features: [
        "All features from 2 Products",
        "Premium AI Guardian features",
        "VIP call center support",
        "Advanced health analytics",
        "Custom emergency protocols",
        "Monthly wellness consultation"
      ],
      featured: false
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="chip-primary mx-auto mb-4 animate-fade-in">Transparent Pricing</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Simple & Affordable <span className="text-ice-blue">Membership Plans</span>
          </h2>
          <p className="text-lg text-gray-600 animate-fade-in">
            Purchase your devices outright and choose a flexible monthly membership plan with discounts for multiple products.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div 
              key={index} 
              className={`rounded-xl overflow-hidden transition-all-300 animate-fade-in ${
                tier.featured 
                  ? "border-2 border-ice-blue shadow-lg relative scale-105 bg-white z-10" 
                  : "border border-gray-200 shadow-md bg-white"
              }`}
              style={{ animationDelay: `${0.1 + index * 0.2}s` }}
            >
              {tier.featured && (
                <div className="bg-ice-orange text-white text-xs font-bold uppercase py-1 px-3 absolute top-0 right-0 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">{tier.title}</h3>
                
                <div className="mb-6">
                  <p className="flex items-end">
                    <span className="text-3xl font-bold text-ice-blue">{tier.price}</span>
                    <span className="text-gray-500 ml-2">{tier.period}</span>
                  </p>
                  {tier.originalPrice && (
                    <p className="text-sm text-gray-500 mt-1">
                      <span className="line-through">{tier.originalPrice}</span> {tier.discount}
                    </p>
                  )}
                  {!tier.originalPrice && (
                    <p className="text-sm text-gray-500 mt-1">{tier.discount}</p>
                  )}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="w-5 h-5 text-ice-blue mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="#purchase" 
                  className={`w-full py-2 px-4 rounded-md text-center font-medium transition-all-300 block ${
                    tier.featured 
                      ? "bg-ice-blue text-white hover:bg-ice-blue-light" 
                      : "border border-ice-blue text-ice-blue hover:bg-ice-blue hover:text-white"
                  }`}
                >
                  Select Plan
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-bold mb-4">Device Purchase Prices</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-medium mb-2">SOS Pendant</h4>
              <p className="text-xl font-bold text-ice-blue">€110.00</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-medium mb-2">Medical Dispenser</h4>
              <p className="text-xl font-bold text-ice-blue">€249.99</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-medium mb-2">Glucose Monitor</h4>
              <p className="text-xl font-bold text-ice-blue">€149.99</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
