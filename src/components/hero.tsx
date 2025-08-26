import ticketBackground from "@/assets/svg/ticket.svg";
import Heading from "@/components/heading";
import SubHeading from "@/components/sub-heading";
import { useCallback } from "react";

const Hero = () => {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mt-14 px-1.5 text-center">
      <div className="flex flex-col items-center mb-6">
        <Heading>Swift Bharat 2025</Heading>
        <div className="h-4" />
        <div className="max-w-4xl px-8">
          <SubHeading>
            Swift Bharat is an international Apple developer conference, built
            by and for Indian developers.
          </SubHeading>
          <div className="h-1.5" />
          <SubHeading>
            Join 200+ iOS engineers and tech leads for two days of pure Swift
            and real-world insights.
          </SubHeading>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("tickets")}
        type="button"
        aria-label="Get tickets for Swift Bharat 2025"
        className="relative flex items-center gap-8 text-[#FAF8F5] font-medium py-4 pl-7 pr-18 rounded-2xl cursor-pointer mb-4 overflow-hidden hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#F5DB9F] focus:ring-offset-2"
      >
        <img
          src={ticketBackground}
          alt="ticket background"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
        />
        <span className="z-10">Get Tickets</span>
      </button>
    </div>
  );
};

export default Hero;
