import Link from "next/link";

export default function News() {
  const newsItems = [
    {
      date: "October 15, 2023",
      title: "Magna Credit Opens New Branch",
      excerpt: "We are excited to announce our expansion with a new branch opening soon to serve more Ugandans with fast, accessible credit.",
    },
    {
      date: "September 02, 2023",
      title: "New Loan Products Available",
      excerpt: "Introducing more flexible loan options designed specifically for small business owners and civil servants. Check out our new terms.",
    },
    {
      date: "August 01, 2023",
      title: "We Are Open!",
      excerpt: "Magna Credit Limited is now officially open for business at Haruna Tower, Nakawa. Come visit us for all your instant cash needs.",
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <section className="bg-magna-blue py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
            News & Updates
          </h1>
          <p className="text-xl text-magna-yellow font-medium leading-relaxed max-w-2xl mx-auto">
            Stay up to date with the latest from Magna Credit Limited.
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, idx) => (
              <article key={idx} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                <div className="text-sm font-bold text-magna-green mb-4">{item.date}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">{item.title}</h2>
                <p className="text-gray-600 mb-8 flex-grow">{item.excerpt}</p>
                <Link href="#" className="inline-flex items-center gap-2 text-magna-blue font-bold hover:text-magna-green transition-colors mt-auto">
                  Read more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media CTA */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <div className="w-16 h-16 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Follow us on Instagram</h2>
          <p className="text-lg text-gray-600 mb-6">Stay connected and get the latest updates directly on your feed.</p>
          <a href="https://www.instagram.com/magnacredit37/" target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-magna-blue hover:text-magna-green transition-colors underline">
            @magnacredit37
          </a>
        </div>
      </section>
    </div>
  );
}
