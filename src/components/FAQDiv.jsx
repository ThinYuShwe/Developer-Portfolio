import { useState } from "react";
import minus from "../assets/HomePage/minus.png";
import plus from "../assets/HomePage/plus.png";

export function FAQDiv() {
  const [openFaqs, setOpenFaqs] = useState([]);
  const faqData = [
    {
      id: "01",
      question: "Are you available for full-time or freelance work?",
      answer:
        "Yes. I'm open to full-time opportunities, freelance projects, and contract-based work depending on the project's scope and requirements.",
    },
    {
      id: "02",
      question: "What type of web development do you specialize in?",
      answer:
        "I specialize in front-end development, building responsive, accessible, and high-performance web applications using modern JavaScript frameworks and technologies.",
    },
    {
      id: "03",
      question: "What technologies do you work with?",
      answer:
        "I primarily work with React, JavaScript, HTML, CSS, and Git. I'm also experienced with responsive web design.",
    },
    {
      id: "04",
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary depending on complexity. Small websites can take a few days, while larger web applications may require several weeks of development and testing.",
    },
    {
      id: "05",
      question: "Do you work with remote teams and international clients?",
      answer:
        "Yes. I regularly collaborate with remote teams, communicate effectively across time zones, and use modern tools for project management and version control.",
    },
  ];

  const handleToggle = (id) => {
    if (openFaqs.includes(id)) {
      // Remove the id from the array
      setOpenFaqs(openFaqs.filter((faqId) => faqId !== id));
    } else {
      // Add the id to the array
      setOpenFaqs([...openFaqs, id]);
    }
  };
  return (
    <>
      <section className="faq-section">
        <header className="faq-header">
          <h2 className="faq-title">FAQs</h2>

          <p className="faq-description">
            No jargon, no fluff. Just clear answers to the most common questions
            about the work and process.
          </p>
        </header>

        <ul className="faq-list">
          {faqData.map((faq) => (
            <li className="faq-item" key={faq.id}>
              <article className="faq-card">
                <div className="faq-question-group">
                  <p className="faq-number">{faq.id}</p>

                  <div className="faq-content">
                    <h3 className="faq-question">{faq.question}</h3>

                    <div className="faq-toggle">
                      {openFaqs.includes(faq.id) ? (
                        <button
                          className="minus-btn"
                          onClick={() => handleToggle(faq.id)}
                        >
                          <img
                            src={minus}
                            alt="minus icon"
                            className="faq-icon faq-icon-minus"
                          />
                        </button>
                      ) : (
                        <button
                          className="plus-btn"
                          onClick={() => handleToggle(faq.id)}
                        >
                          <img src={plus} alt="expand" className="faq-icon" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                {openFaqs.includes(faq.id) && (
                  <p className="faq-answer">{faq.answer}</p>
                )}
              </article>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
