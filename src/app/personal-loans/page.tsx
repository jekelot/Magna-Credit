"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PersonalLoans() {
  const [amount, setAmount] = useState(5000000);
  const [term, setTerm] = useState(12);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemTransition = {
    type: "spring",
    stiffness: 50,
    damping: 15
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: itemTransition }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-gray-50/50">
        <div className="absolute top-0 right-0 w-full lg:w-[45%] h-[120%] bg-gradient-to-br from-magna-yellow/20 to-magna-green/10 rounded-l-[150px] -z-10 hidden lg:block transform -translate-y-10"></div>
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center max-w-7xl">
          <motion.div 
            className="flex-1 max-w-2xl"
            initial="hidden"
            animate="show"
            variants={containerVariants}
          >
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6 relative inline-block z-10">
              <span className="relative z-10">Personal Loans</span>
              <motion.span 
                initial={{ scaleX: 0 }} 
                animate={{ scaleX: 1 }} 
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                className="absolute bottom-2 left-0 w-[105%] h-[30%] bg-magna-yellow -z-10 transform -rotate-1 origin-left"
              ></motion.span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-600 font-medium mb-8">
              Very flexible approval rules for personal loans
            </motion.p>
            
            <motion.h3 variants={itemVariants} className="text-xl font-bold text-magna-blue mb-4">Best Rate Guarantee</motion.h3>
            
            <motion.ul variants={containerVariants} className="flex flex-col gap-5 mb-10">
              {[
                'Easy Approval for Personal Loans',
                'Up to UGX 100,000,000 payable in 24 months',
                'Swift Process - Get Approved in Just 24 Hours'
              ].map((item, idx) => (
                <motion.li key={idx} variants={itemVariants} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-magna-blue/10 flex items-center justify-center flex-shrink-0 text-magna-blue shadow-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="text-lg text-gray-900 font-semibold">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Calculator Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 40, delay: 0.2 }}
            className="w-full lg:w-[480px] bg-white rounded-[2rem] shadow-2xl shadow-magna-blue/10 border border-gray-100 p-8 lg:p-10 relative z-10 lg:ml-auto"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Apply for a Personal Loan</h3>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-gray-600 font-semibold">Loan amount</label>
                  <span className="text-magna-blue font-black text-xl">{amount.toLocaleString()} USh</span>
                </div>
                <input 
                  type="range" min="2000000" max="100000000" step="500000"
                  value={amount} onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-magna-green hover:accent-green-600 transition-all"
                />
                <div className="flex justify-between mt-2 text-sm text-gray-400 font-medium">
                  <span>2 000 000</span>
                  <span>100 000 000</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-gray-600 font-semibold">Loan term</label>
                  <span className="text-magna-blue font-black text-xl">{term} months</span>
                </div>
                <input 
                  type="range" min="6" max="24" step="1"
                  value={term} onChange={(e) => setTerm(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-magna-green hover:accent-green-600 transition-all"
                />
                <div className="flex justify-between mt-2 text-sm text-gray-400 font-medium">
                  <span>6</span>
                  <span>24</span>
                </div>
              </div>
              <div className="pt-6 border-t border-gray-100">
                <div className="flex flex-col mb-8">
                  <span className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">Monthly payment</span>
                  <span className="text-4xl font-black text-gray-900">
                    {Math.round((amount * 1.15) / term).toLocaleString()} <span className="text-2xl text-gray-500 font-bold">USh</span>
                  </span>
                </div>
                <button className="w-full bg-magna-green hover:bg-green-700 text-white py-4 rounded-xl font-bold text-lg text-center transition-colors shadow-lg shadow-magna-green/30 hover:shadow-magna-green/50">
                  Apply Now
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-16 items-center max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">What do I need to secure a Personal Loan with Magna Credit?</h2>
            <p className="text-xl text-magna-blue font-bold mb-10">To get a loan from Magna Credit, you need to meet these criteria:</p>
            <ul className="space-y-6">
              {[
                'Original National ID or Passport', 
                'Provide security/collateral', 
                'Age 23 - 70', 
                'Active phone number'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-magna-blue/10 flex items-center justify-center flex-shrink-0 text-magna-blue">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="text-lg text-gray-800 font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 w-full relative h-[400px]"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-[3rem] overflow-hidden flex items-center justify-center shadow-xl">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]"></div>
                <div className="bg-magna-green/95 backdrop-blur-sm p-8 absolute bottom-8 left-8 rounded-2xl shadow-2xl border border-white/20 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                  <h3 className="text-3xl font-black text-white leading-tight">Enjoy Life with<br/>Lowest Monthly Payments<br/><span className="text-magna-yellow">with Magna Credit</span></h3>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gray-50 border-t border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">Personal loans in Uganda</h2>
            <p className="text-xl text-gray-500 font-medium">How to get a loan</p>
          </div>
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { num: 1, title: "Provide your name & details", desc: "Provide your basic details including your name and active phone number." },
              { num: 2, title: "Fill in the application", desc: "Choose conditions according to your needs — select loan amount, repayment period." },
              { num: 3, title: "Security assessment", desc: "A Magna Credit associate will contact you shortly. Provide your security details." },
              { num: 4, title: "Get money the same day!", desc: "Receive the money instantly and pay back with small monthly installments." }
            ].map((step, i) => (
              <motion.div key={i} variants={itemVariants} className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 relative group overflow-hidden">
                <div className="flex gap-4 items-start mb-6">
                  <div className="w-12 h-12 bg-magna-yellow/30 rounded-2xl flex items-center justify-center text-gray-900 font-black text-xl flex-shrink-0 group-hover:scale-110 transition-transform">{step.num}</div>
                  <h3 className="font-bold text-gray-900 text-lg leading-tight mt-2 relative z-10">{step.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-magna-green py-20 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-white/10 rounded-full blur-3xl opacity-50"></div>
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between max-w-7xl gap-10 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-white leading-tight text-center md:text-left"
          >
            Get up to UGX 100M using your<br />Personal Loan
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Link href="/contacts" className="bg-white text-magna-blue hover:bg-gray-50 px-12 py-5 rounded-full font-bold text-xl transition-transform hover:scale-105 whitespace-nowrap shadow-2xl inline-block">
              Apply Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
