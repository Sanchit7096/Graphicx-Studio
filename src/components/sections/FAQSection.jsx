import React, { useState } from "react";

function FAQSection({ faqContent }) {
  const [openFaq, setOpenFaq] = useState(null);

  if (!faqContent || !faqContent.items) return null;

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="w-full py-10 md:py-16 px-5 sm:px-6 lg:px-8 xl:px-10 font-poppins" aria-label="Frequently Asked Questions">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-white mb-10 md:mb-12 font-poppins text-center leading-tight">
          {faqContent.heading}
        </h2>
        <div className="max-w-6xl mx-auto space-y-4">
          {faqContent.items.map((item, index) => {
            const isOpen = openFaq === index;
            const btnId = `faq-btn-${index}`;
            const regionId = `faq-answer-${index}`;

            return (
              <div
                key={index}
                className="bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden"
              >
                <button
                  id={btnId}
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  aria-controls={regionId}
                  className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between text-left hover:bg-zinc-900/80 transition-colors duration-300"
                >
                  <span className="text-white text-lg sm:text-xl font-poppins leading-tight pr-4">
                    {item.question}
                  </span>
                  <span className="text-orange-500 text-3xl font-light transform transition-transform duration-300 shrink-0" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div
                    id={regionId}
                    role="region"
                    aria-labelledby={btnId}
                    className="px-6 sm:px-8 pb-6"
                  >
                    <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default React.memo(FAQSection);
