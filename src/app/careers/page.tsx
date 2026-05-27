import Link from "next/link";

export default function Careers() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <section className="bg-magna-blue py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
            Careers at Magna Credit
          </h1>
          <p className="text-xl text-magna-yellow font-medium leading-relaxed max-w-2xl mx-auto">
            Join our team and help make financial services accessible to all Ugandans.
          </p>
        </div>
      </section>

      {/* Why work with us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-gray-900">Why work with us?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 text-center">
              <div className="w-14 h-14 bg-magna-green/10 rounded-xl flex items-center justify-center text-magna-green mx-auto mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Growth Opportunities</h3>
              <p className="text-gray-600">We invest in our people. Build a rewarding long-term career with continuous learning and advancement opportunities.</p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 text-center">
              <div className="w-14 h-14 bg-magna-yellow/30 rounded-xl flex items-center justify-center text-magna-blue mx-auto mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Competitive Pay</h3>
              <p className="text-gray-600">We offer highly competitive compensation packages, performance bonuses, and great benefits.</p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 text-center">
              <div className="w-14 h-14 bg-magna-blue/10 rounded-xl flex items-center justify-center text-magna-blue mx-auto mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Impactful Work</h3>
              <p className="text-gray-600">Be part of a team that directly improves the lives and businesses of everyday Ugandans.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Open Positions</h2>
          
          <div className="space-y-6">
            {/* Position 1 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-magna-green transition-colors">
              <div>
                <h3 className="text-xl font-bold text-magna-blue mb-2">Loan Officer</h3>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> Nakawa Branch</span>
                  <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> Full-time</span>
                </div>
              </div>
              <a href="https://wa.me/256755868748" target="_blank" rel="noopener noreferrer" className="bg-magna-green hover:bg-green-700 text-white px-8 py-3 rounded-xl font-bold text-center transition-colors">
                Apply via WhatsApp
              </a>
            </div>

            {/* Position 2 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-magna-green transition-colors">
              <div>
                <h3 className="text-xl font-bold text-magna-blue mb-2">Customer Service Representative</h3>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> Nakawa Branch</span>
                  <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> Full-time</span>
                </div>
              </div>
              <a href="https://wa.me/256755868748" target="_blank" rel="noopener noreferrer" className="bg-magna-green hover:bg-green-700 text-white px-8 py-3 rounded-xl font-bold text-center transition-colors">
                Apply via WhatsApp
              </a>
            </div>

            {/* Position 3 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-magna-green transition-colors">
              <div>
                <h3 className="text-xl font-bold text-magna-blue mb-2">Sales Agent</h3>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> Kampala / Field</span>
                  <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> Commission</span>
                </div>
              </div>
              <a href="https://wa.me/256755868748" target="_blank" rel="noopener noreferrer" className="bg-magna-green hover:bg-green-700 text-white px-8 py-3 rounded-xl font-bold text-center transition-colors">
                Apply via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <p className="text-xl text-gray-600 mb-6">Don&apos;t see a role that fits? Send us your CV and we&apos;ll keep you in mind for future opportunities.</p>
          <a href="mailto:info@magnacredit.co.ug" className="text-xl font-bold text-magna-blue hover:text-magna-green transition-colors underline">
            info@magnacredit.co.ug
          </a>
        </div>
      </section>
    </div>
  );
}
