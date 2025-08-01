import { useRef, useState } from "react";

const Tickets = () => {
  const [showIframe, setShowIframe] = useState(false);
  const purchaseTicket = useRef<HTMLDivElement>(null);

  const ticketOptions = [
    {
      id: 1,
      title: "Early Bird",
      price: "₹ 4,999",
      features: ["All Early Bird Pass benefits"],
      bg: "bg-[#053020]",
      text: "text-[#F5DB9F]",
      button: {
        bg: "bg-[#F5DB9F]",
        text: "text-[#053020]",
        hover: "hover:bg-[#FCE5AF]",
        label: "Sold Out",
      },
      ariaLabel: "Buy Early Bird Pass",
      soldOut: true,
    },
    {
      id: 2,
      title: "Regular Ticket",
      price: "₹ 5,999",
      features: ["All days conference and supporting events access"],
      bg: "bg-[#053020]",
      text: "text-[#F5DB9F]",
      button: {
        bg: "bg-[#F5DB9F]",
        text: "text-[#053020]",
        hover: "hover:bg-[#FCE5AF]",
        label: "Buy Now",
      },
      ariaLabel: "Buy Regular Ticket",
    },
  ];

  const purchaseTicketOnKonfhub = () => {
    setShowIframe(true);
    purchaseTicket.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="tickets"
      className="flex flex-col items-center justify-center max-w-7xl mx-auto px-4 py-16 sm:py-24"
      aria-labelledby="tickets-heading"
    >
      <h2
        id="tickets-heading"
        className="font-bold text-3xl sm:text-5xl text-center mb-4"
      >
        Get Your Tickets
      </h2>
      <h4 className="w-full max-w-md text-center font-light text-black/80 mb-2">
        Secure your spot at Swift Conference India 2025.
      </h4>
      {/* w-full */}
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 w-fit">
          {ticketOptions.map((option) => (
            <div
              key={option.id}
              className={`${option.bg} ${option.text} max-h-fit rounded-3xl p-6 text-left flex flex-col h-full`}
              aria-label={`${option.title} ticket`}
            >
              <h3 className="text-sm font-medium mb-2">{option.title}</h3>
              <p className="text-2xl font-bold mb-8">{option.price}</p>
              <ul
                className="text-left font-light gap-2 mb-6 flex flex-col"
                aria-label={`${option.title} features`}
              >
                {option.features.map((feature, i) => (
                  <li key={i}>
                    <span aria-hidden="true" className="mr-1">
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
                <br />
              </ul>
              <button
                className={`${option.button.bg} ${
                  option.button.text
                } w-full cursor-pointer font-normal px-6 py-2 rounded-lg ${
                  option.button.hover
                } transition-colors mt-auto ${
                  option.soldOut ? "opacity-50 cursor-not-allowed" : ""
                }`}
                aria-label={option.ariaLabel}
                onClick={purchaseTicketOnKonfhub}
                disabled={option.soldOut}
              >
                {option.button.label}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div id="purchase" ref={purchaseTicket} className="w-full">
        {showIframe && (
          <iframe
            src="https://konfhub.com/widget/dummy-event-5c7368ee?desc=false&ticketId=49824&secondaryBg=fce5af&ticketBg=fce5af&borderCl=fce5af&bg=f5db9f&fontColor=000000&ticketCl=000000&btnColor=053020&fontFamily=Nunito&borderRadius=12"
            id="konfhub-widget"
            title="Register for Swift Bharat"
            width="100%"
            height="800"
            className="mt-10 rounded-lg border-2 border-white/20 shadow-lg"
          ></iframe>
        )}
      </div>
    </section>
  );
};

export default Tickets;
