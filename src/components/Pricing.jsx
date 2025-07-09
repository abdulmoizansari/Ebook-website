import React from "react";

const plans = [
  {
    name: "Basic",
    price: "$99",
    features: [
      "Up to 50 pages",
      "Standard design",
      "Email support",
    ],
    highlight: false,
  },
  {
    name: "Premium",
    price: "$199",
    features: [
      "Up to 200 pages",
      "Custom design",
      "Priority support",
      "Free revisions",
    ],
    highlight: true,
  },
];

const check = (
  <svg className="inline w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
);

const Pricing = () => (
  <section className="py-16 bg-blue-100" id="pricing">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Choose the Plan That Fits You Best</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`relative bg-white p-8 rounded-lg shadow text-center border-2 transition-all duration-300 ${plan.highlight ? "border-blue-700 scale-105 z-10" : "border-transparent"}`}
          >
            {plan.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-700 text-white px-4 py-1 rounded-full text-xs font-bold shadow">Best Value</div>
            )}
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">{plan.name}</h3>
            <div className="text-4xl font-bold text-blue-800 mb-4">{plan.price}</div>
            <ul className="mb-6 text-left space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-gray-700 flex items-center">{check}{feature}</li>
              ))}
            </ul>
            <a href="#contact" className={`inline-block w-full bg-blue-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-800 transition ${plan.highlight ? "mt-2" : ""}`}>Select</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing; 