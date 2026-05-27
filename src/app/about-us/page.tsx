import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="bg-magna-blue py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            About Magna Credit Limited
          </h1>
          <p className="text-xl md:text-2xl text-magna-yellow font-medium">
            Making it possible since day one
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100 shadow-sm">
              <div className="w-14 h-14 bg-magna-blue rounded-xl flex items-center justify-center text-white mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h2 className="text-3xl font-black text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To provide accessible, fast, and secure financial solutions that empower Ugandans to achieve their goals. We believe in eliminating barriers to financial growth.
              </p>
            </div>
            
            <div className="bg-magna-green/5 rounded-3xl p-10 border border-magna-green/20 shadow-sm">
              <div className="w-14 h-14 bg-magna-green rounded-xl flex items-center justify-center text-white mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              </div>
              <h2 className="text-3xl font-black text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the most trusted and innovative financial service provider in Uganda, recognized for our speed, transparency, and customer-centric approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision we make and every loan we approve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 bg-magna-blue/10 rounded-full flex items-center justify-center text-magna-blue mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">We operate with complete transparency. No hidden fees, no surprises.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 bg-magna-green/10 rounded-full flex items-center justify-center text-magna-green mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Speed</h3>
              <p className="text-gray-600">Fast approvals and same-day cash because we know your time is valuable.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 bg-magna-yellow/30 rounded-full flex items-center justify-center text-magna-blue mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">Modern financial solutions designed to meet the modern needs of Ugandans.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 bg-magna-blue/10 rounded-full flex items-center justify-center text-magna-blue mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customer First</h3>
              <p className="text-gray-600">Your success is our success. We build long-term relationships based on trust.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-black text-magna-blue mb-6">Who We Are</h2>
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="mb-4">
              Magna Credit Limited is a premier financial service company located in the heart of Nakawa at Haruna Tower, Level 4. We specialize in providing instant and secure personal loans up to UGX 100M.
            </p>
            <p>
              Our process is designed to be as simple as possible. We only require three things: your Name, the Amount you need, and your Security details. With these, our dedicated team works swiftly to ensure you get funded in less than an hour.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-magna-green py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8">Ready to get started?</h2>
          <Link href="/personal-loans" className="inline-block bg-white text-magna-green hover:bg-gray-50 px-10 py-4 rounded-full font-bold text-xl transition-colors shadow-xl">
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
}
