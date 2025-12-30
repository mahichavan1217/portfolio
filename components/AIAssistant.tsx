
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { gsap } from 'gsap';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: "Hello! I'm Jay's AI assistant. Ask me anything about his expertise in ANSYS, FEA, or CAD." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `You are a professional AI assistant for Jay Kuwar's engineering portfolio. 
          Jay is a Mechanical Engineer student at PVGCOE, Nashik (CGPA 8.07). 
          Expertise: ANSYS (FEA & CFD), PTC Creo, SolidWorks, CATIA. 
          Projects: Chassis analysis, Excavator RBD, Venturimeter CFD.
          Goal: Help recruiters understand Jay's technical depth. 
          Keep answers concise, technical, and professional. 
          If asked about contact, give: jaykuwar310@gmail.com or +91 8055361505.`,
        },
      });

      setMessages(prev => [...prev, { role: 'ai', text: response.text || "I'm having trouble connecting right now." }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', text: "System overload. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[200]">
      {/* Chat Window */}
      {isOpen && (
        <div 
          ref={chatRef}
          className="bg-engineer-card border border-white/10 w-[320px] sm:w-[380px] h-[450px] rounded-2xl shadow-2xl flex flex-col overflow-hidden mb-4 animate-in slide-in-from-bottom-4 fade-in duration-300"
        >
          <div className="p-4 bg-blue-600 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-white">
                <i className="fa-solid fa-robot text-xs"></i>
              </div>
              <div className="text-white font-bold text-sm">Engineering Assistant</div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div className="flex-grow p-4 overflow-y-auto custom-scrollbar flex flex-col gap-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-br-none' 
                    : 'bg-white/5 border border-white/10 text-slate-300 rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl rounded-bl-none text-slate-400">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-white/5 bg-black/20">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about ANSYS skills..."
                className="flex-grow bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-blue-600 hover:bg-blue-500 w-10 h-10 rounded-lg flex items-center justify-center text-white disabled:opacity-50"
              >
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center text-xl transition-all hover:scale-110 active:scale-95"
      >
        {isOpen ? <i className="fa-solid fa-chevron-down"></i> : <i className="fa-solid fa-bolt-lightning"></i>}
      </button>
    </div>
  );
};

export default AIAssistant;
