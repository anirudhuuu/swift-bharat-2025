import faqDividerLogo from "@/assets/svg/faq-divider.svg";
import { useState } from "react";

const Faqs = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const frequentlyAskedQuestions = [
    {
      id: 1,
      question: "Who should attend Swift Conference India 2025?",
      answer:
        "Swift Conference India 2025 is designed for developers, designers, and tech enthusiasts who are passionate about Swift and iOS development. Whether you're a seasoned professional or just starting out, there's something for everyone.",
    },
    // {
    //   id: 2,
    //   question: "What's included in my registration?",
    //   answer:
    //     "Your registration includes access to all keynote sessions, workshops, and panel discussions, as well as meals and refreshments during the conference. You will also receive a conference swag bag with exclusive merchandise.",
    // },
    // {
    //   id: 3,
    //   question: "What is the refund policy?",
    //   answer:
    //     "If you need to cancel your registration, please do so at least 30 days before the event for a full refund. Cancellations made within 30 days of the event will not be eligible for a refund, but you may transfer your registration to another person.",
    // },
    // {
    //   id: 4,
    //   question: "Will sessions be recorded?",
    //   answer:
    //     "Yes, all keynote sessions and selected workshops will be recorded and made available to attendees after the conference. This allows you to revisit the content at your convenience.",
    // },
    // {
    //   id: 5,
    //   question: "How can I become a speaker?",
    //   answer:
    //     "If you're interested in speaking at Swift Conference India 2025, please submit your proposal through our website. We are looking for engaging talks on Swift, iOS development, and related topics. The deadline for speaker submissions is [insert date].",
    // },
    {
      id: 6,
      question: "Is there a dress code?",
      answer:
        "There is no formal dress code for the conference. We recommend comfortable attire suitable for a tech event. Many attendees opt for casual or business casual clothing.",
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
