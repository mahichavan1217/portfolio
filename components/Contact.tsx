import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      setFormData({ name: '', subject: '', email: '', message: '' });
      setTimeout(() => setFormState('idle'), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="bg-gradient-to-br from-engineer-card to-black rounded-3xl overflow-hidden border border-white/5 relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/5 blur-[120px] pointer-events-none"></div>
        
        <div className="grid md:grid-cols-2 p-8 md:p-16 gap-16 relative z-10">
          <div>
            <h2 className="text-xs font-mono text-blue-500 uppercase tracking-[0.3em] mb-4">Contact Me</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-6">Let's connect for engineering innovation.</h3>
            <p className="text-slate-400 mb-8 max-w-md font-light">
              I'm open to opportunities in CAD Design, Simulation, and Industrial Manufacturing.
            </p>

            <div className="space-y-6 mb-10">
              <a href="mailto:jaykuwar310@gmail.com" className="flex items-center gap-4 group cursor-pointer no-underline">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase font-mono">Email</div>
                  <div className="text-lg font-bold text-white">jaykuwar310@gmail.com</div>
                </div>
              </a>
              <a href="tel:+918055361505" className="flex items-center gap-4 group cursor-pointer no-underline">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase font-mono">Phone</div>
                  <div className="text-lg font-bold text-white">+91 8055361505</div>
                </div>
              </a>
            </div>

            <div className="mb-12">
              <a 
                href="/Jay_Kuwar_Resume.pdf" 
                download="Jay_Kuwar_Resume.pdf"
                className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-blue-500/30 hover:border-blue-500 hover:bg-blue-600/10 text-white font-bold rounded-xl transition-all active:scale-95 no-underline group shadow-lg shadow-blue-500/5"
              >
                <i className="fa-solid fa-file-pdf text-blue-500 group-hover:scale-110 transition-transform"></i>
                Download Full Resume (PDF)
              </a>
            </div>

            <div className="flex gap-4">
              <a href="https://linkedin.com/in/jay-kuwar" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all shadow-xl shadow-black/20"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="mailto:jaykuwar310@gmail.com" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all shadow-xl shadow-black/20"><i className="fa-solid fa-envelope"></i></a>
            </div>
          </div>

          <div className="relative">
            {formState === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-blue-500/10 rounded-2xl border border-blue-500/20 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-4xl text-white mb-6 shadow-lg shadow-blue-500/40">
                  <i className="fa-solid fa-check"></i>
                </div>
                <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
                <p className="text-slate-400">Thank you for reaching out. I'll get back to you shortly.</p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="mt-8 text-blue-500 font-bold uppercase text-xs tracking-widest hover:text-blue-400"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-500 uppercase">Full Name</label>
                    <input 
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-all text-white" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-500 uppercase">Subject</label>
                    <input 
                      required
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-all text-white" 
                      placeholder="Project Inquiry" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-500 uppercase">Email Address</label>
                  <input 
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-all text-white" 
                    placeholder="john@company.com" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-500 uppercase">Message</label>
                  <textarea 
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5} 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-all resize-none text-white" 
                    placeholder="Describe your engineering needs..."
                  ></textarea>
                </div>
                <button 
                  disabled={formState === 'sending'}
                  className="w-full py-4 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-900/50 disabled:cursor-not-allowed text-white font-bold rounded-xl shadow-xl shadow-blue-600/20 transition-all active:scale-95 flex items-center justify-center gap-3"
                >
                  {formState === 'sending' ? (
                    <>
                      <i className="fa-solid fa-circle-notch animate-spin"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-paper-plane"></i>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;