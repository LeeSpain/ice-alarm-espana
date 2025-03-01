
import { ShieldAlert, Heart, Brain, Gauge, Clock, Phone } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <ShieldAlert className="w-8 h-8 text-white" />,
      title: "Emergency Response",
      description: "Immediate assistance with one-touch SOS calls and automatic fall detection."
    },
    {
      icon: <Brain className="w-8 h-8 text-white" />,
      title: "AI Guardian",
      description: "Personalized AI assistant providing health insights and preventive recommendations."
    },
    {
      icon: <Gauge className="w-8 h-8 text-white" />,
      title: "Health Monitoring",
      description: "Real-time tracking of vital health metrics including glucose levels and medication."
    },
    {
      icon: <Clock className="w-8 h-8 text-white" />,
      title: "24/7 Availability",
      description: "Round-the-clock monitoring and support from our professional call center."
    },
    {
      icon: <Heart className="w-8 h-8 text-white" />,
      title: "Family Connection",
      description: "Keep loved ones informed with real-time updates and dashboard access."
    },
    {
      icon: <Phone className="w-8 h-8 text-white" />,
      title: "Professional Support",
      description: "Direct connection to trained specialists who can provide immediate assistance."
    }
  ];

  return (
    <section id="features" className="section-padding relative overflow-hidden bg-white">
      {/* Subtle background patterns */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
      <div className="absolute w-full h-full bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1024&q=80')] opacity-[0.03] bg-cover bg-center"></div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="chip-primary mx-auto mb-4 animate-fade-in">AI-Powered Features</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Advanced Technology for Your <span className="text-ice-blue">Safety & Well-being</span>
          </h2>
          <p className="text-lg text-gray-600 animate-fade-in">
            Our integrated system combines cutting-edge technology with human care to provide comprehensive health monitoring and emergency response solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center relative animate-fade-in" 
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              {/* Feature icon with floating effect */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-16 bg-gradient-to-br from-ice-blue to-ice-blue-light rounded-2xl shadow-lg flex items-center justify-center transform rotate-[10deg] hover:rotate-0 transition-all duration-300">
                  {feature.icon}
                </div>
              </div>
              
              {/* Feature content */}
              <div className="pt-12 pb-6 px-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 h-full w-full">
                <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                
                {/* Bottom decoration */}
                <div className="w-16 h-1 bg-ice-blue/20 rounded-full mx-auto mt-6"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Professional support callout */}
        <div className="mt-20 bg-ice-blue/5 rounded-2xl p-8 border border-ice-blue/10 animate-fade-in">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3 flex-shrink-0">
              <div className="relative">
                <div className="w-16 h-16 bg-ice-blue rounded-2xl flex items-center justify-center shadow-lg mb-4 mx-auto md:mx-0">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-center md:text-left">Professional Call Center</h3>
                <div className="w-16 h-1 bg-ice-blue/50 rounded-full mb-4 mx-auto md:mx-0"></div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <p className="text-gray-700 mb-4">
                Our dedicated call center in Malaga, Spain provides 24/7 monitoring and support to all ICE Alarm users. 
                Staffed by trained healthcare professionals who speak both English and Spanish, our team ensures your 
                safety and well-being around the clock.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-50">
                  <h4 className="font-semibold text-ice-blue mb-2">SOS Monitoring</h4>
                  <p className="text-sm text-gray-600">Immediate emergency response to SOS calls with live human interaction.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-50">
                  <h4 className="font-semibold text-ice-blue mb-2">Medication Verification</h4>
                  <p className="text-sm text-gray-600">Professional review of medication photos ensuring proper adherence.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-50">
                  <h4 className="font-semibold text-ice-blue mb-2">Glucose Supervision</h4>
                  <p className="text-sm text-gray-600">Expert analysis of glucose readings with personalized advice.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
