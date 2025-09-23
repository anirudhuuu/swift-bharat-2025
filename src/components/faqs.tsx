import faqDividerLogo from "@/assets/svg/faq-divider.svg";
import { useState } from "react";

const Faqs = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const frequentlyAskedQuestions = [
    {
      id: 1,
      question: "Who should attend Swift Conference India 2025?",
      answer:
        "Swift Conference India 2025 is designed for developers, designers and tech enthusiasts who are passionate about Swift and iOS development. Whether you're a seasoned professional or just starting out, there's something for everyone.",
    },
    {
      id: 2,
      question: "Is there a dress code?",
      answer:
        "There is no formal dress code for the conference. We recommend comfortable attire suitable for a tech event. Many attendees opt for casual or business casual clothing.",
    },
    {
      id: 3,
      question: "What are the conference timings and schedule?",
      answer:
        "The detailed schedule will be shared closer to the event. Stay tuned!",
    },
    {
      id: 4,
      question: "Where is the venue?",
      answer: (
        <>
          The event will be hosted at{" "}
          <a
            href="https://maps.app.goo.gl/c4yYsrS1d8YUKcpF8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800 cursor-pointer"
          >
            BIC - Bangalore International Centre
          </a>
        </>
      ),
    },
    {
      id: 5,
      question: "How can I become a sponsor for Swift Bharat 2025?",
      answer: (
        <>
          We'd love your support! Please email us directly at{" "}
          <a
            href="mailto:hello@swiftbharat.org"
            className="text-blue-600 underline hover:text-blue-800 cursor-pointer"
          >
            hello@swiftbharat.org
          </a>
        </>
      ),
    },
    {
      id: 6,
      question: "Will the event be streamed or recorded?",
      answer:
        "As of now, no — we're optimizing for a great in-person experience since it's our very first edition.",
    },
    {
      id: 7,
      question: "Who has designed and built the website?",
      answer: (
        <>
          The website has been designed by&nbsp;
          <a
            href="https://x.com/aryanuiux"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800 cursor-pointer"
          >
            Aryan
          </a>
          &nbsp;and built by&nbsp;
          <a
            href="https://x.com/nirudhuuu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800 cursor-pointer"
          >
            Anirudh
          </a>
          .
        </>
      ),
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center max-w-3xl mx-auto px-4 py-16 sm:py-24">
      <h2 className="font-bold text-3xl sm:text-5xl text-center mb-10 sm:mb-16">
        FAQs
      </h2>
      <div className="w-full">
        {frequentlyAskedQuestions.map((faq) => (
          <div key={faq.id}>
            <div className="w-full my-4 flex justify-center">
              <img
                src={faqDividerLogo}
                alt="Divider"
                className="h-6 sm:h-8 w-full object-contain"
              />
            </div>
            <button
              className="w-full text-left text-base sm:text-lg font-semibold focus:outline-none transition-colors cursor-pointer"
              onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              aria-expanded={openId === faq.id}
              aria-controls={`answer-${faq.id}`}
            >
              {faq.question}
            </button>
            <div
              id={`answer-${faq.id}`}
              className={`
                        mt-2 text-gray-700 overflow-hidden transition-[max-height,opacity] duration-300
                        ${
                          openId === faq.id
                            ? "max-h-40 opacity-100"
                            : "max-h-0 opacity-0"
                        }
                    `}
            >
              <div className="py-2 px-1">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
