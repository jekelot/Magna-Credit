"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  id: number;
  sender: "agent" | "user";
  text: string;
};

export default function AIAgentChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: "agent", text: "Hi there! I'm the Magna Credit AI Assistant. I can help you apply for a loan instantly. To get started, what is your full name?" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [step, setStep] = useState(0); 
  // Step 0: Waiting for Name
  // Step 1: Waiting for Amount
  // Step 2: Waiting for Security
  // Step 3: Finished
  
  const [userData, setUserData] = useState({ name: "", amount: "", security: "" });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue.trim();
    const newMessages = [...messages, { id: Date.now(), sender: "user" as const, text: userText }];
    setMessages(newMessages);
    setInputValue("");

    // Simulate AI response delay
    setTimeout(() => {
      let nextAgentMessage = "";
      
      if (step === 0) {
        setUserData(prev => ({ ...prev, name: userText }));
        nextAgentMessage = `Nice to meet you, ${userText}! How much money are you looking to borrow? (e.g., 5,000,000 UGX)`;
        setStep(1);
      } else if (step === 1) {
        setUserData(prev => ({ ...prev, amount: userText }));
        nextAgentMessage = `Got it. You're looking for ${userText}. Lastly, what kind of security/collateral do you have? (e.g., Car Logbook, Land Title, Salary)`;
        setStep(2);
      } else if (step === 2) {
        setUserData(prev => ({ ...prev, security: userText }));
        nextAgentMessage = `Perfect! I've collected all your details. Please click the button below to complete your application with a live agent on WhatsApp.`;
        setStep(3);
      }

      if (nextAgentMessage) {
        setMessages(prev => [...prev, { id: Date.now(), sender: "agent", text: nextAgentMessage }]);
      }
    }, 800);
  };

  const handleWhatsApp = () => {
    const text = `Hello Magna Credit! I would like to apply for a loan.\n\n*Name:* ${userData.name}\n*Amount needed:* ${userData.amount}\n*Security/Collateral:* ${userData.security}`;
    const url = `https://wa.me/256755868748?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-magna-blue hover:bg-blue-800 text-white rounded-full shadow-2xl flex items-center justify-center z-50 transition-transform hover:scale-110"
        aria-label="Open AI Assistant"
      >
        {isOpen ? (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
        ) : (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
        )}
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-28 right-6 w-[350px] sm:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl shadow-magna-blue/20 border border-gray-100 flex flex-col z-50 overflow-hidden"
          >
          {/* Header */}
          <div className="bg-magna-blue p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            </div>
            <div>
              <h3 className="font-bold text-white leading-tight">Magna AI Assistant</h3>
              <p className="text-magna-yellow text-xs font-medium">Online</p>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50 flex flex-col gap-4">
            <AnimatePresence initial={false}>
              {messages.map((msg) => (
                <motion.div 
                  key={msg.id} 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm shadow-sm ${
                    msg.sender === "user" 
                      ? "bg-magna-green text-white rounded-br-sm" 
                      : "bg-white text-gray-800 border border-gray-100 rounded-bl-sm"
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              
              {step === 3 && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="flex justify-start"
                >
                <div className="max-w-[80%] bg-white border border-gray-100 shadow-sm rounded-2xl rounded-bl-sm p-4">
                  <p className="text-sm text-gray-800 mb-3 font-medium">Your application is ready!</p>
                  <button 
                    onClick={handleWhatsApp}
                    className="w-full bg-magna-green hover:bg-green-700 text-white font-bold py-2 px-4 rounded-xl text-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.827z"/></svg>
                    Send to WhatsApp
                  </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
            <form onSubmit={handleSend} className="flex gap-2">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={step >= 3}
                placeholder={step >= 3 ? "Application ready" : "Type your message..."}
                className="flex-1 px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-magna-blue disabled:bg-gray-50 disabled:text-gray-400"
              />
              <button 
                type="submit"
                disabled={step >= 3 || !inputValue.trim()}
                className="w-10 h-10 bg-magna-blue hover:bg-blue-800 disabled:bg-gray-300 text-white rounded-xl flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
              </button>
            </form>
          </div>
        </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
