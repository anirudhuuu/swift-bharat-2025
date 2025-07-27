import Footer from "@/components/footer";
import Navbar from "@/components/nav-bar";
import type { FC } from "react";

interface TermsBlockProps {
  id: number;
  heading: string;
  terms: { id: number; label: string; points?: string[] }[];
}

const TermsBlock: FC<TermsBlockProps> = ({ heading, terms }) => {
  return (
    <div className="mb-8">
      <h3 className="font-semibold text-xl md:text-2xl mb-2">{heading}</h3>
      <ul className="list-disc list-inside space-y-1 text-sm md:text-lg">
        {terms.map((term) => (
          <>
            <li key={term.id}>{term.label}</li>
            {term.points && term.points.length > 0 && (
              <ul className="list-disc list-inside ml-4">
                {term.points.map((point, index) => (
                  <li key={`${term.id}-${index}`}>{point}</li>
                ))}
              </ul>
            )}
          </>
        ))}
      </ul>
    </div>
  );
};

const TermsAndCondition = () => {
  const termsAndConditions: TermsBlockProps[] = [
    {
      id: 1,
      heading: "1. Ticket Purchase & Entry",
      terms: [
        {
          id: 1,
          label:
            "Tickets are non-transferable unless explicitly approved by the organizers.",
        },
        {
          id: 2,
          label:
            "Each ticket admits one person to the conference on the designated dates.",
        },
        {
          id: 3,
          label:
            "A valid government-issued photo ID may be required at entry for verification.",
        },
        {
          id: 4,
          label:
            "The organizers reserve the right to refuse entry to anyone for misconduct or violation of these terms.",
        },
      ],
    },
    {
      id: 2,
      heading: "2. Refund & Cancellation Policy",
      terms: [
        {
          id: 1,
          label: "All ticket sales are final and non-refundable.",
        },
        {
          id: 2,
          label:
            "In case of event cancellation due to unforeseen circumstances (natural disasters, government restrictions, etc.), a full or partial refund may be issued at the discretion of the organizers.",
        },
        {
          id: 3,
          label:
            "Tickets may be transferred to another individual only with prior written approval from the organizing team at least 7 days before the event via support@swiftbharat.org.",
        },
      ],
    },
    {
      id: 3,
      heading: "3. Code of Conduct",
      terms: [
        {
          id: 1,
          label:
            "Swift Bharat is a welcoming, inclusive space. All attendees, speakers, sponsors, and volunteers are expected to follow our Code of Conduct:",
          points: [
            "Be respectful to others.",
            "Harassment, discrimination, or disrespectful behaviour will not be tolerated.",
            "Any violation may result in immediate removal from the event without a refund.",
          ],
        },
      ],
    },
    {
      id: 4,
      heading: "4. Schedule & Content",
      terms: [
        {
          id: 1,
          label:
            "The schedule and list of speakers are subject to change. We strive to keep all programming as announced, but adjustments may be necessary.",
        },
        {
          id: 2,
          label:
            "Speaker views are their own and do not reflect those of the organizers or sponsors.",
        },
      ],
    },
    {
      id: 5,
      heading: "5. Photography & Media",
      terms: [
        {
          id: 1,
          label:
            "The event will be photographed and recorded. By attending, you consent to being photographed, filmed, and/or recorded for promotional and archival purposes.",
        },
        {
          id: 2,
          label:
            "If you do not wish to be photographed or recorded, please notify the event staff upon arrival.",
        },
      ],
    },
    {
      id: 6,
      heading: "6. Liability Waiver",
      terms: [
        {
          id: 1,
          label:
            "The organizers are not responsible for any loss, damage, injury, or theft during the event.",
        },
        {
          id: 2,
          label:
            "Please take responsibility for your belongings and ensure your safety throughout the event.",
        },
      ],
    },
    {
      id: 7,
      heading: "7. COVID-19 & Health Guidelines",
      terms: [
        {
          id: 1,
          label:
            "Health and safety protocols (if any) will be communicated closer to the event date in accordance with local government guidelines.",
        },
        {
          id: 2,
          label:
            "Attendees may be required to comply with temperature checks, masking, or other safety measures.",
        },
      ],
    },
    {
      id: 8,
      heading: "8. Privacy Policy",
      terms: [
        {
          id: 1,
          label:
            "Attendee contact information will be used solely for communication about Swift Bharat and will not be shared with third parties without your consent.",
        },
      ],
    },
    {
      id: 9,
      heading: "9. Modification of Terms",
      terms: [
        {
          id: 1,
          label:
            "The organizers reserve the right to modify these terms at any time. Any updates will be posted on the official event website or communicated via email.",
        },
        {
          id: 2,
          label:
            "If you have any questions, feel free to reach out to us at support@swiftbharat.org.",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col justify-start items-start font-display w-full">
      <Navbar showNavItems={false} />
      <section id="terms-and-conditions" className="px-8 md:px-24">
        <h2 className="font-bold text-2xl md:text-4xl mb-8">
          Terms & Conditions
        </h2>
        <div className="flex flex-col text-left">
          {termsAndConditions.map((block) => (
            <TermsBlock
              key={block.id}
              id={block.id}
              heading={block.heading}
              terms={block.terms}
            />
          ))}
        </div>
      </section>
      <div className="h-24" />
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default TermsAndCondition;
