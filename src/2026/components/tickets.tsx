import SectionTitle from "@/2026/components/section-title";
import TicketCardShell from "@/2026/components/ticket-card-shell";
import { useId, useRef, useState } from "react";

const ticketFeatures = [
  "All keynote sessions",
  "Lunch and refreshments",
  "Conference materials",
  "Post conference mixer",
] as const;

const KONFHUB_2026_THEME = {
  desc: "true",
  bg: "d9ff00",
  secondaryBg: "ffffff",
  ticketBg: "ffffff",
  borderCl: "1a1a1a",
  fontColor: "1a1a1a",
  ticketCl: "1a1a1a",
  btnColor: "1a1a1a",
  fontFamily: "Hind",
  borderRadius: "16",
  widget_type: "quick",
  screen: "2",
} as const;

const buildKonfhubUrl = (ticketsId: string, ticketId: string) => {
  const params = new URLSearchParams({
    ...KONFHUB_2026_THEME,
    tickets: ticketsId,
    ticketId,
  });
  return `https://konfhub.com/widget/swift-bharat-2026?${params.toString()}`;
};

const tickets = [
  {
    title: "Early Bird",
    currency: "₹",
    amount: "4,999",
    konfhubUrl: buildKonfhubUrl("101764", "101764|1"),
  },
  {
    title: "Regular Ticket",
    currency: "₹",
    amount: "5,999",
    konfhubUrl: buildKonfhubUrl("101765", "101765|1"),
  },
] as const;

const Tickets = () => {
  const [activeKonfhubUrl, setActiveKonfhubUrl] = useState<string | null>(null);
  const purchaseTicket = useRef<HTMLDivElement>(null);

  const openKonfhubWidget = (konfhubUrl: string) => {
    setActiveKonfhubUrl(konfhubUrl);
    purchaseTicket.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="tickets" className="px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-[944px]">
        <SectionTitle className="text-center">get your tickets</SectionTitle>

        <div className="mt-12 grid justify-items-center gap-8 md:grid-cols-2">
          {tickets.map((ticket) => (
            <TicketCard
              key={ticket.title}
              ticket={ticket}
              onBuyNow={() => openKonfhubWidget(ticket.konfhubUrl)}
            />
          ))}
        </div>

        <div id="purchase" ref={purchaseTicket} className="w-full">
          {activeKonfhubUrl && (
            <iframe
              key={activeKonfhubUrl}
              src={activeKonfhubUrl}
              id="konfhub-widget"
              title="Register for Swift Bharat 2026"
              width="100%"
              height="800"
              allow="payment"
              className="mt-10 rounded-2xl border-2 border-foreground/20 shadow-lg"
            />
          )}
        </div>
      </div>
    </section>
  );
};

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="mt-1 shrink-0"
      aria-hidden
    >
      <path
        d="M2.5 8.2L6.2 11.9L13.5 4.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.6"
      />
    </svg>
  );
}

function TicketCard({
  ticket,
  onBuyNow,
}: {
  ticket: (typeof tickets)[number];
  onBuyNow: () => void;
}) {
  const gradientId = useId();

  return (
    <article className="relative w-full max-w-[413px]">
      <TicketCardShell gradientId={gradientId} className="h-auto w-full" />

      <div className="absolute inset-0 flex flex-col">
        <div className="flex flex-col items-center px-8 pt-18 text-center">
          <p className="flex items-baseline justify-center gap-1.5 text-[3.25rem] font-semibold leading-none tracking-tight text-lime">
            <span>{ticket.currency}</span>
            <span className="tabular-nums">{ticket.amount}</span>
          </p>
          <p className="mt-3 text-xl font-normal text-white">{ticket.title}</p>
        </div>

        <div className="mt-7 flex flex-col items-center px-8">
          <ul className="flex w-max flex-col gap-[1.15rem] text-lg leading-snug text-white/60">
            {ticketFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <CheckIcon />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="min-h-0 flex-1" aria-hidden />

        <div className="h-18 shrink-0" aria-hidden />

        <div className="px-[2.4rem] pb-[2.1rem]">
          <button
            type="button"
            onClick={onBuyNow}
            className="flex h-18 w-full cursor-pointer items-center justify-center rounded-full bg-white text-2xl font-bold text-foreground transition-opacity hover:opacity-90"
          >
            Buy Now
          </button>
        </div>
      </div>
    </article>
  );
}

export default Tickets;
