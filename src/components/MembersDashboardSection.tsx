
import { 
  LayoutDashboard, 
  Bell, 
  Users, 
  Activity, 
  Gauge, 
  Calendar, 
  LineChart
} from "lucide-react";

const MembersDashboardSection = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-white">
      <div className="bg-[url('https://images.unsplash.com/photo-1581472723648-909f4851d4ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')] absolute inset-0 bg-cover bg-center opacity-5"></div>
      
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="chip-primary mb-4">Centralized Monitoring</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your <span className="text-ice-blue">Members Dashboard</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our comprehensive Members Dashboard puts you in control of your health data, connecting all your devices into one intuitive interface. Monitor your health metrics, view alerts, and access emergency assistance instantly.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-ice-blue text-white flex items-center justify-center flex-shrink-0">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Real-Time Health Tracking</h3>
                  <p className="text-gray-600">View all your vital health metrics in real-time with historical trends and patterns identified by our AI.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-ice-blue text-white flex items-center justify-center flex-shrink-0">
                  <Bell className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Smart Notifications</h3>
                  <p className="text-gray-600">Receive timely alerts about medications, glucose levels, and emergency situations directly to your dashboard or mobile app.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-ice-blue text-white flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Family Access</h3>
                  <p className="text-gray-600">Provide peace of mind to your loved ones with shared access to your health data, allowing them to check on your well-being.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <div className="bg-ice-blue text-white p-4">
                <div className="flex items-center gap-3">
                  <LayoutDashboard size={20} />
                  <h3 className="font-bold">ICE Alarm Members Dashboard</h3>
                </div>
              </div>
              
              <div className="bg-white p-6 border border-gray-100">
                <div className="grid grid-cols-2 gap-4 mb-6">
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
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-3 flex items-center gap-2">
                    <LineChart size={16} className="text-ice-blue" />
                    Weekly Health Trend
                  </h4>
                  <div className="h-32 bg-ice-blue/10 rounded-lg flex items-end p-3 gap-1">
                    {[35, 42, 58, 48, 62, 38, 55].map((h, i) => (
                      <div 
                        key={i} 
                        className="flex-1 bg-ice-blue hover:bg-ice-blue-light transition-colors rounded-t-sm" 
                        style={{ height: `${h}%` }}
                        title={`Day ${i+1}: ${h}%`}
                      ></div>
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="text-sm font-medium mb-3">Recent Alerts</h4>
                  <div className="space-y-2">
                    <div className="bg-green-50 p-3 rounded-lg text-sm">
                      <div className="font-medium text-green-800">SOS Check-in Complete</div>
                      <div className="text-green-600 text-xs">Today, 09:15 AM</div>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-lg text-sm">
                      <div className="font-medium text-amber-800">Medication Reminder</div>
                      <div className="text-amber-600 text-xs">Today, 08:00 AM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembersDashboardSection;
