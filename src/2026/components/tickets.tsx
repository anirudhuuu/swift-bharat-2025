import SectionTitle from "@/2026/components/section-title";
import TicketCardShell from "@/2026/components/ticket-card-shell";
import TicketCardShellLimited from "@/2026/components/ticket-card-shell-limited";
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
    title: "Super Early Bird",
    currency: "₹",
    amount: "4,999",
    konfhubUrl: buildKonfhubUrl("101764", "101764|1"),
    limited: true,
  },
  {
    title: "Regular Ticket",
    currency: "₹",
    amount: "5,999",
    konfhubUrl: buildKonfhubUrl("101765", "101765|1"),
    limited: false,
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
    <section
      id="tickets"
      className="px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[944px]">
        <SectionTitle className="text-center">get your ticket</SectionTitle>

        <div className="mt-6 grid grid-cols-1 justify-items-center gap-6 sm:mt-8 sm:gap-8 md:mt-10 md:grid-cols-2 md:gap-8 lg:mt-12">
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
              className="mt-6 h-[min(600px,80vh)] w-full rounded-xl border-2 border-foreground/20 shadow-lg sm:mt-8 sm:h-[700px] sm:rounded-2xl md:mt-10 md:h-[800px]"
            />
          )}
        </div>
      </div>
    </section>
  );
};

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={`mt-0.5 shrink-0 sm:mt-1 ${className}`}
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
    <article className="relative w-full max-w-70 sm:max-w-[20rem] md:max-w-90 lg:max-w-103.25">
      {ticket.limited ? (
        <TicketCardShellLimited gradientId={gradientId} className="h-auto w-full" />
      ) : (
        <TicketCardShell gradientId={gradientId} className="h-auto w-full" />
      )}

      <div className="absolute inset-0 flex flex-col">
        <div className="flex flex-col items-center px-[7%] pt-[10%] text-center sm:pt-[12%]">
          <p className="flex items-baseline justify-center gap-1 text-4xl font-semibold leading-none tracking-tight text-lime sm:gap-1.5 sm:text-5xl lg:text-[3.25rem]">
            <span>{ticket.currency}</span>
            <span className="tabular-nums">{ticket.amount}</span>
          </p>
          <p className="mt-2 text-lg font-normal text-white sm:mt-3 sm:text-xl">
            {ticket.title}
          </p>
        </div>

        <div className="mt-4 flex flex-col items-center px-[7%] sm:mt-5 md:mt-7">
          <ul className="flex w-max max-w-full flex-col gap-3 text-sm leading-snug text-white/60 sm:gap-4 sm:text-base md:gap-[1.15rem] md:text-lg">
            {ticketFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-2 sm:gap-3">
                <CheckIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="min-h-0 flex-1" aria-hidden />

        <div className="h-6 shrink-0 sm:h-8 md:h-10 lg:h-12" aria-hidden />

        <div className="px-[6%] pb-[4%] sm:pb-[4.5%]">
          <button
            type="button"
            onClick={onBuyNow}
            className="flex h-12 w-full cursor-pointer items-center justify-center rounded-2xl bg-white text-base font-bold text-foreground transition-opacity hover:opacity-90 sm:h-14 sm:text-lg md:h-16 md:text-xl lg:h-18 lg:text-2xl"
          >
            Buy Now
          </button>
        </div>
      </div>
    </article>
  );
}

export default Tickets;
