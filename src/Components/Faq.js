import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Faq = () => {
  const faqData = [
    {
      question: "What Is SEO And Why Is It Important For My Business?",
      answer: "SEO stands for Search Engine Optimization, which is the process of optimizing your website to rank higher in search engine results pages (SERPs). It is crucial for driving organic traffic and increasing visibility online."
    },
    {
      question: "How Long Does It Take To See Results From SEO?",
      answer: "SEO results typically take 3-6 months to see significant improvements depending on your industry, competition, and content quality."
    },
    {
      question: "What Services Do SEO Marketing Companies Offer?",
      answer: "SEO services include keyword research, content optimization, link building, site auditing, and technical SEO improvements."
    },
    {
      question: "How Can I Track My SEO Progress?",
      answer: "You can track your SEO progress using tools like Google Analytics, Search Console, and third-party software such as Ahrefs and SEMrush."
    },
    {
      question: "Why Do Search Engine Rankings Fluctuate?",
      answer: "Search engine rankings can fluctuate due to algorithm updates, changes in competitor websites, or adjustments to your own site's content and backlinks."
    },
    {
      question: "Is SEO Better Than Paid Advertising?",
      answer: "Both SEO and paid advertising have their benefits. SEO provides long-term organic traffic, while paid ads can generate immediate results. Combining both often yields the best results."
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <div className="container-fluid mb-4" style={{ backgroundColor: '#0235c3' }}>
        <div className="row">
          <div className="col-md-12 text-center py-5">
            <h2 className="text-white">Frequently Asked Questions</h2>
            <p className="lead text-white">Find answers to the most common questions about SEO and digital marketing strategies.</p>
          </div>
        </div>
      </div>

      <div className="container mb-4">
        <h4 className="text-center mb-4">Common Questions About SEO</h4>
        <div className="accordion" id="accordionExample">
          {faqData.map((faq, index) => (
            <div className="accordion-item border mb-3" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className={`accordion-button ${activeIndex === index ? '' : 'collapsed'}`}
                  type="button"
                  onClick={() => handleToggle(index)}
                  aria-expanded={activeIndex === index}
                  aria-controls={`collapse${index}`}
                >
                  {faq.question}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}
                aria-labelledby={`heading${index}`}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;