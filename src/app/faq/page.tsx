"use client";

import { useState } from "react";
import Link from "next/link";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Magna Credit Limited?",
      answer: "Magna Credit Limited is a registered financial service company in Uganda providing instant and secure personal loans up to UGX 100M."
    },
    {
      question: "What do I need to apply for a loan?",
      answer: "You only need an Original National ID or Passport, valid security/collateral, be aged between 23 - 70 years, and have an active phone number."
    },
    {
      question: "How long does the approval process take?",
      answer: "Our process is extremely fast. If you meet all the criteria and provide the necessary documents, you can get approved and receive your cash in less than 1 hour."
    },
    {
      question: "What is the maximum loan amount I can get?",
      answer: "We offer flexible loan amounts ranging from UGX 500,000 up to a maximum of UGX 100,000,000, depending on your assessment and the value of your security."
    },
    {
      question: "What kind of security or collateral do you accept?",
      answer: "We accept various forms of security including motor vehicle logbooks, land titles, and salary guarantees for employed individuals."
    },
    {
      question: "How do I repay my loan?",
      answer: "We offer flexible monthly installment plans ranging from 6 to 24 months. You can make payments via mobile money or bank transfer as per your agreement."
    },
    {
      question: "Where is your office located?",
      answer: "We are located at Haruna Tower, Nakawa, on Level 4. You are welcome to visit our branch during office hours."
    },
    {
      question: "How do I contact customer support?",
      answer: "You can reach us directly via WhatsApp or call us at 0755 868 748, or email us at info@magnacredit.co.ug."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <section className="bg-magna-blue py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-magna-yellow font-medium">
            Find answers to common questions about our services
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-4 mb-16">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all">
                <button 
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                >
                  <span className={`font-bold text-lg ${openIndex === idx ? 'text-magna-green' : 'text-gray-900'}`}>
                    {faq.question}
                  </span>
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${openIndex === idx ? 'bg-magna-green/10 text-magna-green rotate-180' : 'bg-gray-100 text-gray-500'}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </span>
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-600 leading-relaxed pt-2 border-t border-gray-50">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-white rounded-3xl p-8 md:p-10 text-center border border-gray-100 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Still have questions?</h3>
            <p className="text-gray-600 mb-6">Our team is ready to help you with any other inquiries you might have.</p>
            <Link href="/contacts" className="inline-block bg-magna-blue hover:bg-blue-800 text-white px-8 py-3 rounded-full font-bold transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
