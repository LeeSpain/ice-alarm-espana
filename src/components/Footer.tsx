
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold text-white">ICE Alarm</span>
              <span className="text-ice-orange font-semibold">España</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Comprehensive health monitoring and emergency response systems powered by AI technology.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-ice-blue hover:text-white transition-all-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-ice-blue hover:text-white transition-all-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-ice-blue hover:text-white transition-all-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-ice-blue hover:text-white transition-all-300">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Products</h3>
            <ul className="space-y-3">
              <li>
                <a href="#sos-pendant" className="text-gray-400 hover:text-white transition-colors">SOS Pendant</a>
              </li>
              <li>
                <a href="#medical-dispenser" className="text-gray-400 hover:text-white transition-colors">Medical Dispenser</a>
              </li>
              <li>
                <a href="#glucose-monitor" className="text-gray-400 hover:text-white transition-colors">Glucose Monitor</a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#ai-guardian" className="text-gray-400 hover:text-white transition-colors">AI Guardian</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
              <li>
                <a href="#careers" className="text-gray-400 hover:text-white transition-colors">Careers</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-ice-orange mt-1" />
                <span className="text-gray-400">+34 911 123 456</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-ice-orange mt-1" />
                <span className="text-gray-400">info@icealarm.es</span>
              </li>
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-ice-orange mt-1" />
                <span className="text-gray-400">
                  Calle Principal 123<br />
                  28001 Madrid, España
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} ICE Alarm España. All rights reserved.
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="#privacy" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#terms" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
              <a href="#cookies" className="text-gray-500 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
