import { FaArrowRight } from "react-icons/fa";
import ticketBackground from "../assets/ticket.svg";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-14">
      <h1 className="text-5xl md:text-7xl lg:text-6xl font-bold mb-4">
        <span className="tracking-wide">Swift</span> Bharat 2025
      </h1>
      <div className="mb-10 font-light text-center text-base lg:text-lg text-black/60">
        <h3>Meet experts from Apple and the global Swift community.</h3>
        <h3>Learn, build, and connect over three packed days.</h3>
      </div>

      <button className="relative flex items-center gap-8 text-[#FAF8F5] font-medium py-4 pl-7 pr-18 rounded-2xl cursor-pointer mb-4 overflow-hidden">
        <img
          src={ticketBackground}
          alt="ticket background"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
        />
        <span className="z-10">Get Tickets</span>
        <FaArrowRight className="text-[#FAF8F5]/60 text-lg z-10 absolute right-3.5" />
      </button>
    </div>
  );
};

export default Hero;
