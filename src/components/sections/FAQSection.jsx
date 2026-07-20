import React, { useState } from "react";

function FAQSection({ faqContent }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="w-full bg-black py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-16 font-poppins text-center leading-tight">
          {faqContent.heading}
        </h2>
        <div className="max-w-6xl mx-auto space-y-4">
          {faqContent.items.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-zinc-900/80 transition-colors duration-300"
              >
                <span className="text-white font-semibold text-xl font-poppins leading-tight">
                  {item.question}
                </span>
                <span className="text-orange-500 text-3xl transform transition-transform duration-300">
                  {openFaq === index ? "−" : "+"}
                </span>
              </button>
              {openFaq === index && (
                <div className="px-8 pb-6">
                  <p className="text-white/70 text-base leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
