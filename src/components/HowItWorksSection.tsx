export default function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Name & Contact",
      description: "Provide your basic details including your name and active phone number."
    },
    {
      number: "2",
      title: "Desired Amount",
      description: "Let us know how much you need. We offer instant and secure loans up to UGX 100M."
    },
    {
      number: "3",
      title: "Security Assessment",
      description: "Provide your security/collateral details for quick evaluation."
    },
    {
      number: "4",
      title: "Get Funded",
      description: "Once approved, receive your cash instantly in less than 1 hour!"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-magna-blue mb-4">How It Works</h2>
          <p className="text-lg text-gray-600">
            Getting a loan with Magna Credit is simple and straightforward. Just follow this procedure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 relative group">
              <div className="w-14 h-14 bg-magna-yellow rounded-xl flex items-center justify-center text-magna-blue font-black text-2xl mb-6 group-hover:scale-110 transition-transform">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-magna-blue mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
