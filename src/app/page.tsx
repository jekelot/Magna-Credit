"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const [amount, setAmount] = useState(5000000);
  const [term, setTerm] = useState(12);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
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
      <section className="relative pt-12 pb-20 lg:pt-28 lg:pb-36 overflow-hidden">
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-gradient-to-bl from-magna-yellow/30 to-magna-green/5 rounded-l-[120px] -z-10 hidden md:block"></div>
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-magna-blue/5 rounded-full blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            className="flex-1 max-w-2xl"
            initial="hidden"
            animate="show"
            variants={containerVariants}
          >
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-7xl font-black text-magna-blue leading-[1.1] mb-6">
              Instant and Secure <br className="hidden md:block" />
              <span className="text-magna-green relative inline-block">
                Personal Loans
                <motion.span 
                  initial={{ scaleX: 0 }} 
                  animate={{ scaleX: 1 }} 
                  transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                  className="absolute bottom-1 left-0 w-full h-3 bg-magna-yellow/60 -z-10 origin-left"
                />
              </span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-600 font-medium mb-10">
              Very flexible approval rules designed for you.
            </motion.p>
            <motion.ul variants={containerVariants} className="flex flex-col gap-5 mb-10">
              {['Easy Approval Process', 'Up to UGX 100,000,000', 'Quick Instant Cash in less than 1 hour'].map((item, i) => (
                <motion.li key={i} variants={itemVariants} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-magna-blue/10 flex items-center justify-center flex-shrink-0 text-magna-blue shadow-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="text-lg text-gray-800 font-semibold">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 40, delay: 0.2 }}
            className="w-full lg:w-[480px] bg-white rounded-[2rem] shadow-2xl shadow-magna-blue/10 border border-gray-100 p-8 relative z-10"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Apply for a Personal Loan</h3>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-gray-600 font-semibold">Loan amount</label>
                  <span className="text-magna-blue font-black text-xl">{amount.toLocaleString()} USh</span>
                </div>
                <input 
                  type="range" min="500000" max="100000000" step="500000"
                  value={amount} onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-magna-green hover:accent-green-600 transition-all"
                />
                <div className="flex justify-between mt-2 text-sm font-medium text-gray-400">
                  <span>500 000</span>
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
                <div className="flex justify-between mt-2 text-sm font-medium text-gray-400">
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
                <Link href="/personal-loans" className="block w-full bg-magna-green hover:bg-green-700 text-white py-4 rounded-xl font-bold text-lg text-center transition-colors shadow-lg shadow-magna-green/30 hover:shadow-magna-green/50">
                  Apply Now
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Cards Section */}
      <section className="py-24 bg-gray-50 relative">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            <motion.div variants={itemVariants} whileHover={{ y: -8 }} className="bg-white rounded-3xl p-10 shadow-xl shadow-gray-200/50 border-t-4 border-magna-blue flex flex-col items-start gap-6 group transition-all">
              <div className="w-16 h-16 rounded-2xl bg-magna-blue/10 flex items-center justify-center text-magna-blue group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">Personal Loans</h3>
                <p className="text-gray-600 font-medium leading-relaxed mb-6">Get instant cash with simple requirements. Perfect for personal projects, emergencies, and more.</p>
              </div>
              <Link href="/personal-loans" className="mt-auto px-6 py-3 bg-gray-50 text-magna-blue rounded-xl font-bold group-hover:bg-magna-blue group-hover:text-white transition-colors flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} whileHover={{ y: -8 }} className="bg-white rounded-3xl p-10 shadow-xl shadow-gray-200/50 border-t-4 border-magna-green flex flex-col items-start gap-6 group transition-all">
              <div className="w-16 h-16 rounded-2xl bg-magna-green/10 flex items-center justify-center text-magna-green group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">Logbook Loans</h3>
                <p className="text-gray-600 font-medium leading-relaxed mb-6">Use your car logbook as security to get a CASH LOAN while you continue driving your car.</p>
              </div>
              <Link href="/logbook-loans" className="mt-auto px-6 py-3 bg-gray-50 text-magna-green rounded-xl font-bold group-hover:bg-magna-green group-hover:text-white transition-colors flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-16 items-center max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">What do I need to get a loan?</h2>
            <p className="text-xl text-gray-600 font-medium mb-10">To get a loan from Magna Credit, you only need to meet these simple criteria:</p>
            <ul className="space-y-6">
              {['Original National ID or Passport', 'Provide security/collateral', 'Age 23 - 70', 'Active phone number'].map((item, idx) => (
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
            transition={{ duration: 0.6 }}
            className="flex-1 w-full"
          >
            <div className="bg-gradient-to-br from-magna-blue/5 to-magna-green/10 rounded-[3rem] w-full aspect-square md:aspect-[4/3] flex items-center justify-center relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl"></div>
              <div className="bg-white p-8 rounded-3xl shadow-xl z-10 max-w-xs text-center border border-white/50 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                <div className="w-16 h-16 bg-magna-green rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg shadow-magna-green/40">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">Fast Approval</h3>
                <p className="text-gray-600 font-medium">Get approved and funded in under 60 minutes.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gray-50 relative border-y border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">How to get a loan</h2>
            <p className="text-xl text-gray-500 font-medium">Four simple steps to your instant cash</p>
          </div>
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { num: 1, title: "Provide your details", color: "magna-yellow" },
              { num: 2, title: "Fill application online or at branch", color: "magna-blue" },
              { num: 3, title: "Security assessment & approval", color: "magna-green" },
              { num: 4, title: "Get money the same day!", color: "magna-yellow" }
            ].map((step, i) => (
              <motion.div key={i} variants={itemVariants} className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 relative group overflow-hidden">
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-900 font-black text-2xl mb-6 group-hover:scale-110 group-hover:bg-magna-yellow/20 transition-all duration-300">{step.num}</div>
                <h3 className="font-bold text-gray-900 text-lg leading-tight relative z-10">{step.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-magna-blue py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-20"></div>
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-magna-green rounded-full blur-3xl opacity-50"></div>
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between max-w-6xl gap-10 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight text-center md:text-left"
          >
            Get up to UGX 100M <br />
            <span className="text-magna-yellow">Instant Cash Today</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Link href="/personal-loans" className="bg-magna-green hover:bg-green-600 text-white px-12 py-5 rounded-full font-bold text-xl transition-transform hover:scale-105 whitespace-nowrap shadow-2xl shadow-magna-green/50 inline-block">
              Apply Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
