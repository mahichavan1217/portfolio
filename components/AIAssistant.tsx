
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: "Hello! I'm Jay's AI assistant. I can tell you about his expertise in ANSYS simulations, FEA/CFD projects, or his CAD design skills. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
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
      // Accessing API_KEY directly as required by system instructions
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `You are a professional and technical AI representative for Jay Kuwar, a Mechanical Engineer. 
          Context: Jay is a B.E. student at PVGCOE, Nashik (CGPA 8.07). 
          His core strengths: ANSYS (FEA/CFD), PTC Creo, SolidWorks, and Rigid Body Dynamics. 
          Projects: Chassis analysis, IC Engine Piston simulations, Fluid flow studies.
          Tone: Highly professional, engineering-focused, concise. 
          Objective: Impress recruiters by highlighting Jay's analytical skills and technical precision.
          Contact Info: jaykuwar310@gmail.com | +91 8055361505.`,
        },
      });

      const text = response.text || "I'm currently recalibrating. Please try asking another technical question.";
      setMessages(prev => [...prev, { role: 'ai', text }]);
    } catch (error: any) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'ai', text: "I'm having trouble accessing the mainframe. Please check your connection or API key configuration." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[200]">
      {isOpen && (
        <div className="bg-engineer-card border border-white/10 w-[320px] sm:w-[380px] h-[480px] rounded-2xl shadow-2xl flex flex-col overflow-hidden mb-4 animate-in slide-in-from-bottom-4 fade-in duration-300">
          <div className="p-4 bg-gradient-to-r from-blue-700 to-blue-600 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-white">
                <i className="fa-solid fa-microchip animate-pulse"></i>
              </div>
              <div>
                <div className="text-white font-bold text-sm">Jay's AI Assistant</div>
                <div className="text-[10px] text-blue-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Online
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white p-1">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div className="flex-grow p-4 overflow-y-auto custom-scrollbar flex flex-col gap-4 bg-black/40">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-br-none shadow-lg' 
                    : 'bg-white/5 border border-white/10 text-slate-300 rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl rounded-bl-none">
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-white/5 bg-engineer-dark/50">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about ANSYS or FEA..."
                className="flex-grow bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition-all text-white placeholder:text-slate-600"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-blue-600 hover:bg-blue-500 w-11 h-11 rounded-xl flex items-center justify-center text-white disabled:opacity-50 transition-all active:scale-95 shadow-lg shadow-blue-600/20"
              >
                <i className="fa-solid fa-paper-plane text-xs"></i>
              </button>
            </div>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-[0_0_30px_rgba(37,99,235,0.5)] flex items-center justify-center text-2xl transition-all hover:scale-110 active:scale-95 group relative"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-engineer-dark"></span>
        {isOpen ? <i className="fa-solid fa-chevron-down"></i> : <i className="fa-solid fa-robot"></i>}
      </button>
    </div>
  );
};

export default AIAssistant;
