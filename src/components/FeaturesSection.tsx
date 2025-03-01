
import { ShieldAlert, Heart, Brain, Gauge, Clock, Phone } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <ShieldAlert className="w-6 h-6 text-ice-blue" />,
      title: "Emergency Response",
      description: "Immediate assistance with one-touch SOS calls and automatic fall detection."
    },
    {
      icon: <Brain className="w-6 h-6 text-ice-blue" />,
      title: "AI Guardian",
      description: "Personalized AI assistant providing health insights and preventive recommendations."
    },
    {
      icon: <Gauge className="w-6 h-6 text-ice-blue" />,
      title: "Health Monitoring",
      description: "Real-time tracking of vital health metrics including glucose levels and medication."
    },
    {
      icon: <Clock className="w-6 h-6 text-ice-blue" />,
      title: "24/7 Availability",
      description: "Round-the-clock monitoring and support from our professional call center."
    },
    {
      icon: <Heart className="w-6 h-6 text-ice-blue" />,
      title: "Family Connection",
      description: "Keep loved ones informed with real-time updates and dashboard access."
    },
    {
      icon: <Phone className="w-6 h-6 text-ice-blue" />,
      title: "Professional Support",
      description: "Direct connection to trained specialists who can provide immediate assistance."
    }
  ];

  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="chip-primary mx-auto mb-4 animate-fade-in">AI-Powered Features</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Advanced Technology for Your <span className="text-ice-blue">Safety & Well-being</span>
          </h2>
          <p className="text-lg text-gray-600 animate-fade-in">
            Our integrated system combines cutting-edge technology with human care to provide comprehensive health monitoring and emergency response solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card-premium animate-fade-in" 
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-ice-blue/10 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
