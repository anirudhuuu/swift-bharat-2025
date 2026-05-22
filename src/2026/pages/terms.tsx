import Footer from "@/2026/components/footer";
import swiftLogo from "@/assets/2026/svg/swift-logo.svg";
import { useSiteRoutes } from "@/lib/use-site-routes";
import { Fragment, useEffect } from "react";
import { Link } from "react-router";

type TermItem = {
    id: number;
    label: string;
    points?: string[];
};

type TermsBlockData = {
    id: number;
    heading: string;
    terms: TermItem[];
};

const TERMS_AND_CONDITIONS: TermsBlockData[] = [
    {
        id: 1,
        heading: "1. Ticket Purchase & Entry",
        terms: [
            {
                id: 1,
                label: "Tickets are non-transferable unless explicitly approved by the organizers.",
            },
            {
                id: 2,
                label: "Each ticket admits one person to the conference on the designated dates.",
            },
            {
                id: 3,
                label: "A valid government-issued photo ID may be required at entry for verification.",
            },
            {
                id: 4,
                label: "The organizers reserve the right to refuse entry to anyone for misconduct or violation of these terms.",
            },
        ],
    },
    {
        id: 2,
        heading: "2. Refund & Cancellation Policy",
        terms: [
            { id: 1, label: "All ticket sales are final and non-refundable." },
            {
                id: 2,
                label: "In case of event cancellation due to unforeseen circumstances (natural disasters, government restrictions, etc.), a full or partial refund may be issued at the discretion of the organizers.",
            },
            {
                id: 3,
                label: "Tickets may be transferred to another individual only with prior written approval from the organizing team at least 7 days before the event via support@swiftbharat.org.",
            },
        ],
    },
    {
        id: 3,
        heading: "3. Code of Conduct",
        terms: [
            {
                id: 1,
                label: "Swift Bharat is a welcoming, inclusive space. All attendees, speakers, sponsors, and volunteers are expected to follow our Code of Conduct:",
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
                label: "The schedule and list of speakers are subject to change. We strive to keep all programming as announced, but adjustments may be necessary.",
            },
            {
                id: 2,
                label: "Speaker views are their own and do not reflect those of the organizers or sponsors.",
            },
        ],
    },
    {
        id: 5,
        heading: "5. Photography & Media",
        terms: [
            {
                id: 1,
                label: "The event will be photographed and recorded. By attending, you consent to being photographed, filmed, and/or recorded for promotional and archival purposes.",
            },
            {
                id: 2,
                label: "If you do not wish to be photographed or recorded, please notify the event staff upon arrival.",
            },
        ],
    },
    {
        id: 6,
        heading: "6. Liability Waiver",
        terms: [
            {
                id: 1,
                label: "The organizers are not responsible for any loss, damage, injury, or theft during the event.",
            },
            {
                id: 2,
                label: "Please take responsibility for your belongings and ensure your safety throughout the event.",
            },
        ],
    },
    {
        id: 7,
        heading: "7. COVID-19 & Health Guidelines",
        terms: [
            {
                id: 1,
                label: "Health and safety protocols (if any) will be communicated closer to the event date in accordance with local government guidelines.",
            },
            {
                id: 2,
                label: "Attendees may be required to comply with temperature checks, masking, or other safety measures.",
            },
        ],
    },
    {
        id: 8,
        heading: "8. Privacy Policy",
        terms: [
            {
                id: 1,
                label: "Attendee contact information will be used solely for communication about Swift Bharat and will not be shared with third parties without your consent.",
            },
        ],
    },
    {
        id: 9,
        heading: "9. Modification of Terms",
        terms: [
            {
                id: 1,
                label: "The organizers reserve the right to modify these terms at any time. Any updates will be posted on the official event website or communicated via email.",
            },
            {
                id: 2,
                label: "If you have any questions, feel free to reach out to us at support@swiftbharat.org.",
            },
        ],
    },
];

function TermsBlock({ heading, terms }: TermsBlockData) {
    return (
        <section className="mb-8 md:mb-10">
            <h2 className="mb-3 text-xl font-semibold text-foreground md:text-2xl">
                {heading}
            </h2>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground/90 md:text-base">
                {terms.map((term) => (
                    <li key={term.id}>
                        {term.label}
                        {term.points && term.points.length > 0 && (
                            <ul className="mt-2 list-disc space-y-1 pl-5">
                                {term.points.map((point, index) => (
                                    <li key={`${term.id}-${index}`}>{point}</li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </section>
    );
}

const TermsAndCondition = () => {
    const routes = useSiteRoutes();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex min-h-screen flex-col bg-lime text-foreground">
            <header className="px-4 pb-6 pt-6 sm:px-6 md:px-12 md:pt-8">
                <Link
                    to={routes.home}
                    className="inline-flex items-center gap-3 text-lg font-semibold transition-opacity hover:opacity-80 sm:gap-3.5 sm:text-xl md:text-2xl"
                >
                    <img
                        src={swiftLogo}
                        alt=""
                        className="h-14 w-14 object-contain sm:h-16 sm:w-16 md:h-20 md:w-20"
                    />
                    <span>Swift Bharat</span>
                </Link>
            </header>

            <main
                id="terms-and-conditions"
                className="mx-auto w-full max-w-4xl flex-1 px-6 pb-12 md:px-12 md:pb-16 lg:px-8"
            >
                <h1 className="font-samarkan text-[clamp(2.5rem,6vw,4rem)] leading-[0.95] tracking-tight">
                    terms & conditions
                </h1>
                <div className="mt-8 md:mt-10">
                    {TERMS_AND_CONDITIONS.map((block) => (
                        <Fragment key={block.id}>
                            <TermsBlock {...block} />
                        </Fragment>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default TermsAndCondition;
