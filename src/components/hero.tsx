import { FaArrowRight } from "react-icons/fa";
import { IoPin } from "react-icons/io5";
import ticketBackground from "../assets/ticket.svg";

const Hero = () => {
  return (
    <>
      <div className="bg-white/30 rounded-4xl px-8 py-1.5 w-fit mt-8 mb-2.5">
        <span className="uppercase font-light text-sm lg:text-base text-[#053020]/60">
          15-17 Sep, 2025
        </span>
      </div>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#053020] mb-4">
        <span className="tracking-wide">Swift</span> Bharat 2025
      </h1>
      <div className="mb-10 font-light text-center text-base md:text-xl lg:text-2xl text-[#053020]/60">
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

      <h4 className="flex items-center mb-10 font-light text-sm lg:text-lg text-[#053020]/60">
        <IoPin className="transform -scale-x-100 mr-2" />
        Bangalore International Convention Center
      </h4>
    </>
  );
};

export default Hero;
