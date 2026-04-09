import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Check } from 'lucide-react';
import React, { useState, useEffect } from 'react';

export function ContactModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setErrorMessage('NAME, EMAIL, AND MESSAGE ARE REQUIRED');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'NETWORK ERROR');
      }

      setStatus('success');
      setTimeout(() => {
          onClose();
          setStatus('idle');
          setName('');
          setEmail('');
          setSubject('');
          setMessage('');
      }, 3000);
    } catch (err: any) {
      setErrorMessage(err.message || 'FAILED TO SEND MESSAGE');
      setStatus('error');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="contact-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[999999] bg-[#0a0a0a]/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="w-full max-w-2xl bg-[#fdf9fa] border-4 border-black relative shadow-[16px_16px_0_0_#1a1a1a] my-8"
          >
            {/* Header */}
            <div className="bg-[#1a1a1a] text-white p-6 flex justify-between items-center border-b-4 border-black">
              <h2 className="text-xl md:text-2xl font-black uppercase tracking-widest text-[#b19cd9]">Contact Hub</h2>
              <button 
                onClick={onClose}
                className="text-white hover:text-[#b19cd9] transition-colors"
              >
                <X className="w-8 h-8 md:w-10 md:h-10 border-2 border-transparent hover:border-[#b19cd9] p-1" />
              </button>
            </div>

            <div className="p-6 md:p-10">
              {status === 'success' ? (
                <div className="text-center py-12 flex flex-col items-center">
                  <div className="w-24 h-24 bg-[#1a1a1a] flex items-center justify-center rounded-none mb-8 shadow-[8px_8px_0_0_#b19cd9] border-4 border-black">
                    <Check className="w-12 h-12 text-[#b19cd9]" strokeWidth={4} />
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#1a1a1a] mb-6 leading-none">
                    Transmission <br/> Received
                  </h3>
                  <p className="text-lg font-bold text-gray-600 bg-gray-100 p-4 border-l-4 border-[#b19cd9]">Your message has been logged in the system.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-black uppercase tracking-widest text-black">Name</label>
                      <input 
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-white border-4 border-black p-4 text-lg font-bold outline-none focus:border-[#60507c] focus:shadow-[8px_8px_0_0_#60507c] transition-all"
                        placeholder="IDENTIFY YOURSELF"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-black uppercase tracking-widest text-black">Email</label>
                      <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white border-4 border-black p-4 text-lg font-bold outline-none focus:border-[#60507c] focus:shadow-[8px_8px_0_0_#60507c] transition-all"
                        placeholder="RETURN ADDRESS"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-black uppercase tracking-widest text-black">Subject</label>
                    <input 
                      type="text" 
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full bg-white border-4 border-black p-4 text-lg font-bold outline-none focus:border-[#60507c] focus:shadow-[8px_8px_0_0_#60507c] transition-all"
                      placeholder="MESSAGE CLASSIFICATION"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-black uppercase tracking-widest text-black">Message</label>
                    <textarea 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      className="w-full bg-white border-4 border-black p-4 text-lg font-bold outline-none focus:border-[#60507c] focus:shadow-[8px_8px_0_0_#60507c] transition-all resize-none"
                      placeholder="CONSTRUCT YOUR PACKET..."
                    />
                  </div>

                  {status === 'error' && (
                    <div className="bg-red-500 text-white p-4 font-black uppercase text-sm border-4 border-black tracking-wider shadow-[4px_4px_0_0_#1a1a1a]">
                      Critical Error: {errorMessage}
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className="mt-4 w-full bg-[#1a1a1a] text-white p-6 font-black text-xl uppercase tracking-widest flex justify-center items-center gap-4 hover:bg-[#b19cd9] hover:text-black border-4 border-black transition-all duration-300 shadow-[8px_8px_0_0_transparent] hover:shadow-[8px_8px_0_0_#1a1a1a] disabled:opacity-50"
                  >
                    {status === 'loading' ? 'TRANSMITTING...' : 'SEND TRANSMISSION'}
                    <Send className="w-6 h-6" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
