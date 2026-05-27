"use client";

import { useState } from "react";
import Link from "next/link";

export default function HeroSection() {
  const [amount, setAmount] = useState(5000000);

  return (
    <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
      {/* Background shape */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-magna-yellow/20 rounded-l-[100px] -z-10 hidden md:block"></div>
      
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12 items-center">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-magna-blue leading-tight mb-6">
            Instant and Secure <br className="hidden md:block" />
            <span className="text-magna-green">Personal Loans</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-semibold mb-8">
            Get up to UGX 100M with easy approval in less than 1 hour. Look no further!
          </p>
          
          <ul className="flex flex-col gap-4 mb-10">
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-magna-blue/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-magna-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <span className="text-lg text-gray-800 font-medium">Quick Instant Cash</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-magna-blue/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-magna-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <span className="text-lg text-gray-800 font-medium">Easy Approval Process</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-magna-blue/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-magna-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <span className="text-lg text-gray-800 font-medium">Making it possible</span>
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#apply" className="bg-magna-blue hover:bg-blue-800 text-white px-8 py-4 rounded-full font-bold text-lg text-center transition-colors shadow-lg shadow-magna-blue/30">
              Apply Now
            </Link>
            <a href="https://wa.me/256755868748" target="_blank" rel="noopener noreferrer" className="bg-white border-2 border-magna-green text-magna-green hover:bg-magna-green/5 px-8 py-4 rounded-full font-bold text-lg text-center transition-colors flex items-center justify-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.827z"/></svg>
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Right Content - Calculator */}
        <div className="w-full lg:w-[480px] bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 relative z-10">
          <h3 className="text-2xl font-bold text-magna-blue mb-6">Calculate Your Loan</h3>
          
          <div className="space-y-8">
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-gray-600 font-medium">Loan Amount</label>
                <span className="text-magna-green font-bold text-lg">UGX {amount.toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                min="500000" 
                max="100000000" 
                step="500000"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-magna-green"
              />
              <div className="flex justify-between mt-2 text-xs text-gray-400">
                <span>UGX 500k</span>
                <span>UGX 100M</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center">
              <p className="text-gray-500 font-medium mb-1">Estimated Monthly Payment</p>
              <p className="text-3xl font-black text-magna-blue">
                UGX {Math.round((amount * 1.15) / 12).toLocaleString()}*
              </p>
              <p className="text-xs text-gray-400 mt-2">*This is an estimate. Final rate depends on assessment.</p>
            </div>

            <button className="w-full bg-magna-green hover:bg-green-700 text-white py-4 rounded-xl font-bold text-lg transition-colors">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
