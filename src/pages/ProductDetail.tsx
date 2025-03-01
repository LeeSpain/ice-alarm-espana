
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, PhoneCall, HeartPulse, Bell, MapPin, Clock, Shield, Activity } from "lucide-react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const ProductDetail = () => {
  const { productId } = useParams();
  
  // Product data
  const products = {
    "sos-pendant": {
      name: "SOS Pendant",
      price: "€110.00",
      monthlyFee: "€24.99/month",
      image: "https://images.unsplash.com/photo-1584208124888-3a26a201729a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      description: "Our SOS Pendant provides immediate emergency response with 24/7 monitoring by our dedicated call center in Malaga, Spain. When activated, our trained professionals respond immediately, assessing the situation and dispatching appropriate help.",
      features: [
        {
          icon: <Bell size={20} className="text-ice-blue" />,
          title: "One-Touch Emergency Call",
          description: "Press the button once to instantly connect to our professional call center, available 24/7 to assist you."
        },
        {
          icon: <MapPin size={20} className="text-ice-blue" />,
          title: "GPS Location Tracking",
          description: "Your exact location is immediately sent to our call center and emergency services if needed."
        },
        {
          icon: <Activity size={20} className="text-ice-blue" />,
          title: "Fall Detection",
          description: "Automatically alerts our call center if a fall is detected, even if you cannot press the button."
        },
        {
          icon: <PhoneCall size={20} className="text-ice-blue" />,
          title: "Custom Emergency Contacts",
          description: "We can notify your family members or designated contacts automatically when an emergency occurs."
        }
      ],
      callCenterInfo: "Our Malaga-based call center is staffed by highly trained professionals who respond to every SOS alert. They assess your situation, provide immediate guidance, and dispatch emergency services if required. Bilingual staff ensures communication in both English and Spanish.",
      techSpecs: [
        "Battery life: Up to 5 days",
        "Water resistant: IP67 rated",
        "Connectivity: Cellular + GPS",
        "Range: Nationwide coverage",
        "Weight: 35g",
        "Dimensions: 45mm x 30mm x 15mm"
      ]
    },
    "medical-dispenser": {
      name: "Medical Dispenser",
      price: "€249.99",
      monthlyFee: "€24.99/month",
      image: "https://images.unsplash.com/photo-1587854680352-936b22b91030?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      description: "Our Medical Dispenser ensures medication adherence through automated dispensing and professional monitoring. Each medication photo is reviewed by our trained staff to verify proper usage.",
      features: [
        {
          icon: <Clock size={20} className="text-ice-blue" />,
          title: "Automated Pill Dispensing",
          description: "Dispenses your medications at precisely scheduled times, eliminating the risk of missed doses."
        },
        {
          icon: <Bell size={20} className="text-ice-blue" />,
          title: "Missed Medication Alerts",
          description: "If a medication is not taken, our system alerts both you and our call center for follow-up."
        },
        {
          icon: <PhoneCall size={20} className="text-ice-blue" />,
          title: "Emergency Escalation",
          description: "Multiple missed doses trigger direct intervention from our healthcare professionals."
        },
        {
          icon: <HeartPulse size={20} className="text-ice-blue" />,
          title: "Prescription Management",
          description: "Our system keeps track of all your medications and reminds you when refills are needed."
        }
      ],
      callCenterInfo: "Every medication photo taken by the dispenser is monitored by our professional team in Malaga. They verify each dose and can contact you immediately if medications are missed or taken incorrectly. This ensures your medication regimen is followed precisely for optimal health outcomes.",
      techSpecs: [
        "Capacity: Up to 28 doses",
        "Battery backup: 48 hours",
        "Connectivity: Wi-Fi + Cellular",
        "Camera: 5MP for medication verification",
        "Dimensions: 220mm x 150mm x 100mm",
        "Alerts: Visual, audio, and remote notifications"
      ]
    },
    "glucose-monitor": {
      name: "Glucose Monitor",
      price: "€149.99",
      monthlyFee: "€24.99/month",
      image: "https://images.unsplash.com/photo-1579684288361-5c1a2957a700?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      description: "Our Glucose Monitor provides continuous tracking of blood sugar levels with every reading analyzed by our healthcare professionals. Immediate intervention is provided for concerning levels.",
      features: [
        {
          icon: <Activity size={20} className="text-ice-blue" />,
          title: "Continuous Glucose Tracking",
          description: "Regularly monitors and records your glucose levels, providing a comprehensive view of your health."
        },
        {
          icon: <Shield size={20} className="text-ice-blue" />,
          title: "AI-Powered Health Analysis",
          description: "Our AI system analyzes trends and patterns to predict potential health issues before they occur."
        },
        {
          icon: <PhoneCall size={20} className="text-ice-blue" />,
          title: "Call Center Intervention",
          description: "Trained healthcare professionals monitor your readings and contact you when levels are concerning."
        },
        {
          icon: <Bell size={20} className="text-ice-blue" />,
          title: "Emergency Response",
          description: "Dangerous glucose levels trigger immediate emergency protocols and professional assistance."
        }
      ],
      callCenterInfo: "Our dedicated healthcare team in Malaga monitors each glucose reading in real-time. They analyze patterns, provide personalized advice, and intervene immediately when readings indicate potential health risks. This constant monitoring ensures that concerning glucose trends are addressed before they become serious health issues.",
      techSpecs: [
        "Reading range: 1.1-33.3 mmol/L",
        "Memory: Stores up to 900 readings",
        "Reading time: 5 seconds",
        "Sample size: 0.5 μL",
        "Battery life: Up to 1000 readings",
        "Connectivity: Bluetooth + Cellular"
      ]
    }
  };
  
  const product = products[productId as keyof typeof products];
  
  if (!product) {
    return (
      <div>
        <NavBar />
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link to="/products" className="text-ice-blue hover:underline">
            Return to Products
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div>
      <NavBar />
      <main>
        <div className="container py-16">
          <Link to="/#products" className="flex items-center gap-2 text-ice-blue hover:underline mb-8">
            <ArrowLeft size={16} />
            <span>Back to All Products</span>
          </Link>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            
            <div>
              <div className="chip-primary mb-3">{product.name}</div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.price}</h1>
              <p className="text-lg text-gray-600 mb-6">{product.monthlyFee}</p>
              
              <div className="bg-ice-blue/10 p-6 rounded-xl mb-8">
                <p className="text-gray-700">{product.description}</p>
              </div>
              
              <div className="flex gap-4 mb-8">
                <a href="#contact" className="button-primary flex-1 text-center">Contact Us</a>
                <a href="#register" className="button-secondary flex-1 text-center">Get Started</a>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center gap-3">
                  <PhoneCall size={20} className="text-ice-blue" />
                  <p className="text-gray-700 font-medium">24/7 Monitoring from our Malaga Call Center</p>
                </div>
                <p className="text-sm text-gray-600 mt-2">Available in both English and Spanish</p>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {product.features.map((feature, index) => (
                <div key={index} className="border border-gray-100 rounded-xl p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-ice-blue/10 p-3">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-16 bg-gradient-to-r from-ice-blue/10 via-ice-blue/5 to-ice-blue/10 p-8 rounded-xl">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="rounded-full bg-white p-4 shadow-md">
                <PhoneCall size={32} className="text-ice-blue" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3">Dedicated Call Center Monitoring</h2>
                <p className="text-gray-700">{product.callCenterInfo}</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-8">Technical Specifications</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {product.techSpecs.map((spec, index) => (
                <div key={index} className="flex items-center gap-3 p-4 border border-gray-100 rounded-lg">
                  <span className="text-ice-blue">•</span>
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
