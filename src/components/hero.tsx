import ticketBackground from "@/assets/svg/ticket.svg";
import Heading from "@/components/heading";
import SubHeading from "@/components/sub-heading";
import { HashLink as Link } from "react-router-hash-link";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-14 px-1.5 text-center">
      <div className="flex flex-col items-center mb-6">
        <Heading>Swift Bharat 2025</Heading>
        <div className="h-4" />
        <SubHeading>
          Meet experts from Apple and the global Swift community.
        </SubHeading>
        <SubHeading>
          Learn, build, and connect over three packed days.
        </SubHeading>
      </div>

      <Link
        to="#tickets"
        type="button"
        aria-label="Get tickets for Swift Bharat 2025"
        className="relative flex items-center gap-8 text-[#FAF8F5] font-medium py-4 pl-7 pr-18 rounded-2xl cursor-pointer mb-4 overflow-hidden"
      >
        <img
          src={ticketBackground}
          alt="ticket background"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
        />
        <span className="z-10">Get Tickets</span>
      </Link>
    </div>
  );
};

export default Hero;
