import { useSiteRoutes } from "@/lib/use-site-routes";
import { useMemo, useState, type ReactNode } from "react";
import { Link } from "react-router";

type Faq = {
  id: number;
  question: string;
  answer: ReactNode;
};

function buildFaqs(callForSpeakersPath: string): Faq[] {
  return [
    {
      id: 1,
      question: "Who should attend Swift Conference India 2026?",
      answer:
        "Swift Conference India 2026 is designed for developers, designers and tech enthusiasts who are passionate about Swift and iOS development. Whether you're a seasoned professional or just starting out, there's something for everyone.",
    },
    {
      id: 2,
      question: "What's included in my registration?",
      answer:
        "Your registration includes access to all keynote sessions, lunch and refreshments, conference materials, and our post-conference mixer.",
    },
    {
      id: 3,
      question: "What is the refund policy?",
      answer: (
        <>
          All ticket sales are final and non-refundable. In case of event
          cancellation due to unforeseen circumstances (natural disasters,
          government restrictions, etc.), a full or partial refund may be issued
          at the discretion of the organizers. Tickets may be transferred to
          another individual only with prior written approval from the
          organizing team at least 7 days before the event via{" "}
          <a
            href="mailto:support@swiftbharat.org"
            className="underline hover:opacity-80"
          >
            support@swiftbharat.org
          </a>
          .
        </>
      ),
    },
    {
      id: 4,
      question: "Will sessions be recorded?",
      answer:
        "As of now, no — we're optimizing for a great in-person experience since it's our very first edition.",
    },
    {
      id: 5,
      question: "How can I become a speaker?",
      answer: (
        <>
          We&apos;d love to hear from you! Visit our{" "}
          <Link
            to={callForSpeakersPath}
            className="underline hover:opacity-80"
          >
            Call for Speakers
          </Link>{" "}
          page to learn more and submit your proposal.
        </>
      ),
    },
    {
      id: 6,
      question: "Is there a dress code?",
      answer:
        "There is no formal dress code for the conference. We recommend comfortable attire suitable for a tech event. Many attendees opt for casual or business casual clothing.",
    },
  ];
}

const Faqs = () => {
  const routes = useSiteRoutes();
  const faqs = useMemo(
    () => buildFaqs(routes.callForSpeakers),
    [routes.callForSpeakers],
  );
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section id="faqs" className="px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-[1133px]">
        <h2 className="text-center text-[clamp(2.5rem,6vw,4.5rem)] font-bold">
          FAQs
        </h2>

        <ul className="mt-10 border-t border-foreground">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <li
                key={faq.id}
                className="border-b border-foreground last:border-b-0"
              >
                <button
                  type="button"
                  className="w-full cursor-pointer py-8 text-left text-base font-semibold transition-opacity duration-200 hover:opacity-70 md:py-10 md:text-lg"
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  {faq.question}
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                >
                  <div className="overflow-hidden">
                    <div
                      id={`faq-answer-${faq.id}`}
                      className={`pb-8 text-base leading-relaxed text-foreground/90 transition-opacity duration-300 ease-in-out md:pb-10 md:text-lg ${isOpen ? "opacity-100" : "opacity-0"
                        }`}
                    >
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Faqs;
