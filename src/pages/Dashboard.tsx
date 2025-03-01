
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  LayoutDashboard, 
  Bell, 
  Users, 
  Activity, 
  Gauge, 
  Calendar, 
  LineChart, 
  Settings, 
  Heart, 
  Phone, 
  ShieldAlert, 
  UserCircle,
  LogOut,
  Home,
  MessageSquare,
  HelpCircle
} from "lucide-react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Dashboard = () => {
  const [activeSidebarItem, setActiveSidebarItem] = useState("overview");
  
  const sidebarItems = [
    { id: "overview", name: "Overview", icon: <LayoutDashboard size={20} /> },
    { id: "health", name: "Health Metrics", icon: <Heart size={20} /> },
    { id: "alerts", name: "Alerts & Notifications", icon: <Bell size={20} /> },
    { id: "devices", name: "My Devices", icon: <Gauge size={20} /> },
    { id: "family", name: "Family Access", icon: <Users size={20} /> },
    { id: "calendar", name: "Calendar", icon: <Calendar size={20} /> },
    { id: "emergency", name: "Emergency Contacts", icon: <Phone size={20} /> },
    { id: "messages", name: "Messages", icon: <MessageSquare size={20} /> },
    { id: "support", name: "Support", icon: <HelpCircle size={20} /> },
    { id: "settings", name: "Settings", icon: <Settings size={20} /> },
  ];
  
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      <div className="pt-24 pb-16">
        <div className="container">
          <div className="flex items-center gap-4 mb-8">
            <Link to="/" className="flex items-center gap-2 text-ice-blue hover:underline">
              <Home size={16} />
              <span>Back to Home</span>
            </Link>
            <span className="text-gray-400">|</span>
            <h1 className="text-2xl font-bold text-gray-800">Members Dashboard</h1>
          </div>
          
          <div className="grid grid-cols-12 gap-8">
            {/* Sidebar */}
            <div className="col-span-12 lg:col-span-3">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-ice-blue/10 flex items-center justify-center">
                      <UserCircle size={32} className="text-ice-blue" />
                    </div>
                    <div>
                      <h3 className="font-bold">John Doe</h3>
                      <p className="text-sm text-gray-500">Premium Member</p>
                    </div>
                  </div>
                </div>
                
                <div className="py-4">
                  {sidebarItems.map((item) => (
                    <button
                      key={item.id}
                      className={`w-full text-left px-6 py-3 flex items-center gap-3 transition-colors ${
                        activeSidebarItem === item.id
                          ? "bg-ice-blue/10 text-ice-blue border-r-4 border-ice-blue"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                      onClick={() => setActiveSidebarItem(item.id)}
                    >
                      <span className="text-current">{item.icon}</span>
                      <span>{item.name}</span>
                    </button>
                  ))}
                  
                  <div className="px-6 pt-4 mt-4 border-t border-gray-100">
                    <button className="w-full text-left py-3 flex items-center gap-3 text-gray-600 hover:text-red-500 transition-colors">
                      <LogOut size={20} />
                      <span>Log Out</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="col-span-12 lg:col-span-9">
              <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Welcome back, John</h2>
                  <span className="text-sm bg-green-100 text-green-800 rounded-full px-3 py-1">All systems active</span>
                </div>
                
                <p className="text-gray-600 mb-6">
                  Your health metrics are being monitored 24/7 by our professional team in Malaga, Spain. 
                  All data is securely stored and analyzed to provide you with the best care possible.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Heart size={16} className="text-ice-blue" />
                      <span className="text-sm font-medium">Heart Rate</span>
                    </div>
                    <div className="text-2xl font-bold">78 bpm</div>
                    <div className="text-xs text-green-600 mt-1">Normal range</div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Gauge size={16} className="text-ice-blue" />
                      <span className="text-sm font-medium">Glucose Level</span>
                    </div>
                    <div className="text-2xl font-bold">112 mg/dL</div>
                    <div className="text-xs text-green-600 mt-1">Within normal range</div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar size={16} className="text-ice-blue" />
                      <span className="text-sm font-medium">Medication</span>
                    </div>
                    <div className="text-2xl font-bold">1/3 Today</div>
                    <div className="text-xs text-amber-600 mt-1">Next dose: 14:00</div>
                  </div>
                </div>
                
                <div className="bg-ice-blue/5 p-6 rounded-lg border border-ice-blue/20">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-ice-blue/10 p-3 flex-shrink-0">
                      <ShieldAlert size={24} className="text-ice-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">24/7 Professional Monitoring</h3>
                      <p className="text-gray-600">
                        Our dedicated medical team in Malaga monitors all your health data in real-time. 
                        Every medication photo, glucose reading, and emergency call is handled by our 
                        trained professionals, ensuring your safety at all times.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Health Trends */}
              <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <LineChart size={20} className="text-ice-blue" />
                  Weekly Health Trends
                </h3>
                
                <div className="h-64 bg-ice-blue/5 rounded-lg flex items-end p-6 gap-2">
                  {[35, 42, 58, 48, 62, 38, 55, 40, 45, 52, 60, 48, 54, 50].map((h, i) => (
                    <div 
                      key={i} 
                      className="flex-1 bg-ice-blue hover:bg-ice-blue-light transition-colors rounded-t-sm" 
                      style={{ height: `${h}%` }}
                      title={`Day ${i+1}: ${h}%`}
                    ></div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-2 px-6">
                  <span>7/1</span>
                  <span>7/3</span>
                  <span>7/5</span>
                  <span>7/7</span>
                  <span>7/9</span>
                  <span>7/11</span>
                  <span>7/14</span>
                </div>
              </div>
              
              {/* Recent Alerts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Bell size={20} className="text-ice-blue" />
                    Recent Alerts
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="font-medium text-green-800">SOS Check-in Complete</div>
                      <div className="text-green-600 text-sm">Today, 09:15 AM</div>
                      <div className="text-green-700 text-xs mt-1">Confirmed by call center operator Maria</div>
                    </div>
                    
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <div className="font-medium text-amber-800">Medication Reminder</div>
                      <div className="text-amber-600 text-sm">Today, 08:00 AM</div>
                      <div className="text-amber-700 text-xs mt-1">Morning insulin dose</div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="font-medium text-blue-800">Glucose Check Verified</div>
                      <div className="text-blue-600 text-sm">Yesterday, 20:30 PM</div>
                      <div className="text-blue-700 text-xs mt-1">Reading reviewed by medical staff</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Activity size={20} className="text-ice-blue" />
                    Device Status
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-ice-blue/10 flex items-center justify-center">
                          <Phone size={20} className="text-ice-blue" />
                        </div>
                        <div>
                          <div className="font-medium">SOS Pendant</div>
                          <div className="text-xs text-gray-500">Last connected: 10 minutes ago</div>
                        </div>
                      </div>
                      <span className="flex items-center gap-1 text-green-600 text-sm">
                        <span className="w-2 h-2 rounded-full bg-green-600"></span>
                        Active
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-ice-blue/10 flex items-center justify-center">
                          <Gauge size={20} className="text-ice-blue" />
                        </div>
                        <div>
                          <div className="font-medium">Glucose Monitor</div>
                          <div className="text-xs text-gray-500">Last reading: 2 hours ago</div>
                        </div>
                      </div>
                      <span className="flex items-center gap-1 text-green-600 text-sm">
                        <span className="w-2 h-2 rounded-full bg-green-600"></span>
                        Active
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-ice-blue/10 flex items-center justify-center">
                          <Calendar size={20} className="text-ice-blue" />
                        </div>
                        <div>
                          <div className="font-medium">Medical Dispenser</div>
                          <div className="text-xs text-gray-500">Next dose: Today, 14:00</div>
                        </div>
                      </div>
                      <span className="flex items-center gap-1 text-green-600 text-sm">
                        <span className="w-2 h-2 rounded-full bg-green-600"></span>
                        Active
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
