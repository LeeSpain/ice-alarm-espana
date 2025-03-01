
import { MessageCircle, BellRing, Heart, Activity } from "lucide-react";

const AIGuardianSection = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-ice-blue to-ice-blue-light text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')] opacity-10 bg-cover bg-center"></div>
      
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="chip bg-white/20 text-white mb-4">AI-Powered Assistance</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet Your Personal <span className="text-white">AI Guardian</span>
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Your AI Guardian provides continuous health monitoring, personalized insights, and proactive alerts to keep you safe and healthy. It's like having a medical professional by your side 24/7.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Voice & Chat Interaction</h3>
                  <p className="opacity-90">Communicate naturally with your AI Guardian through voice or text messages.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <BellRing className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Proactive Alerts</h3>
                  <p className="opacity-90">Receive timely notifications about potential health issues before they become critical.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Health Insights</h3>
                  <p className="opacity-90">Get personalized recommendations based on your health data and history.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="bg-white rounded-xl p-6 shadow-lg max-w-md mx-auto">
              <div className="flex items-center gap-4 border-b border-gray-100 pb-4 mb-6">
                <div className="w-12 h-12 bg-ice-blue rounded-full flex items-center justify-center text-white font-bold">AI</div>
                <div>
                  <h4 className="font-bold text-gray-900">AI Guardian</h4>
                  <p className="text-sm text-gray-500">Online • Personal Health Assistant</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="bg-gray-100 rounded-lg rounded-tl-none p-3 max-w-[80%]">
                  <p className="text-gray-800">Good morning! Your glucose level was slightly high last night. Would you like some dietary recommendations?</p>
                  <span className="text-xs text-gray-500 mt-1 block">9:15 AM</span>
                </div>
                
                <div className="bg-ice-blue/10 rounded-lg rounded-tr-none p-3 max-w-[80%] ml-auto">
                  <p className="text-gray-800">Yes, what should I eat today?</p>
                  <span className="text-xs text-gray-500 mt-1 block">9:17 AM</span>
                </div>
                
                <div className="bg-gray-100 rounded-lg rounded-tl-none p-3 max-w-[80%]">
                  <p className="text-gray-800">Try reducing sugar intake and drinking more water. I recommend a breakfast with high fiber content like oatmeal with berries. I'll monitor your levels throughout the day.</p>
                  <span className="text-xs text-gray-500 mt-1 block">9:18 AM</span>
                </div>
              </div>
              
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Type your message..." 
                  className="w-full rounded-full border border-gray-200 py-3 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-ice-blue/50"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-ice-blue flex items-center justify-center text-white">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIGuardianSection;
