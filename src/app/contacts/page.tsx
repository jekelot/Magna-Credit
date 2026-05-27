"use client";

import { useState } from "react";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Normally handled by a backend API
    alert("Thank you for your message. We will get back to you shortly!");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="bg-magna-blue py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-magna-yellow font-medium">
            We&apos;re here to help
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Col: Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-3xl font-black text-gray-900 mb-8">Get in Touch</h2>
                
                <div className="space-y-6">
                  {/* Phone */}
                  <a href="https://wa.me/256755868748" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors group">
                    <div className="w-12 h-12 bg-magna-green/10 rounded-xl flex items-center justify-center text-magna-green group-hover:bg-magna-green group-hover:text-white transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Phone & WhatsApp</h3>
                      <p className="text-magna-blue font-semibold">0755 868 748</p>
                    </div>
                  </a>

                  {/* Email */}
                  <a href="mailto:info@magnacredit.co.ug" className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors group">
                    <div className="w-12 h-12 bg-magna-blue/10 rounded-xl flex items-center justify-center text-magna-blue group-hover:bg-magna-blue group-hover:text-white transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                      <p className="text-magna-blue font-semibold">info@magnacredit.co.ug</p>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl">
                    <div className="w-12 h-12 bg-magna-yellow/30 rounded-xl flex items-center justify-center text-magna-blue">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Visit Us</h3>
                      <p className="text-gray-600">Haruna Tower, Nakawa<br/>Level 4</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">Office Hours</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between"><span>Monday - Friday</span> <span className="font-medium text-gray-900">8:00 AM - 5:00 PM</span></li>
                  <li className="flex justify-between"><span>Saturday</span> <span className="font-medium text-gray-900">9:00 AM - 1:00 PM</span></li>
                  <li className="flex justify-between"><span>Sunday</span> <span className="font-medium text-magna-blue">Closed</span></li>
                </ul>
              </div>
            </div>

            {/* Right Col: Form */}
            <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-magna-green focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-magna-green focus:border-transparent transition-all"
                      placeholder="07XX XXX XXX"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email Address (Optional)</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-magna-green focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea 
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-magna-green focus:border-transparent transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button type="submit" className="bg-magna-green hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg w-full md:w-auto transition-colors">
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
