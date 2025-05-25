import { FaArrowRight } from "react-icons/fa";
import { IoPin } from "react-icons/io5";

const Hero = () => {
  return (
    <>
      <div className="bg-white/30 rounded-4xl px-8 py-1.5 w-fit mt-8 mb-2.5">
        <span className="uppercase text-sm font-light lg:text-base text-[#053020]/60">
          15-17 Sep, 2025
        </span>
      </div>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#053020] mb-4">
        Swift Bharat 2025
      </h1>
      <div className="mb-10 font-light text-center text-base md:text-xl lg:text-2xl text-[#053020]/60">
        <h3>Meet experts from Apple and the global Swift community.</h3>
        <h3>Learn, build, and connect over three packed days.</h3>
      </div>

      <button className="relative flex items-center gap-4 bg-[#0D3A3F] text-[#FAF8F5] font-medium py-2.5 pl-6 pr-4 rounded-2xl cursor-pointer mb-4">
        <span>Get Tickets</span>
        <div className="h-8 border-l border-dashed border-[#FAF8F5]/20"></div>
        <FaArrowRight className="text-[#FAF8F5]/60 text-xl" />
        <div className="absolute top-0 right-[48px] w-2.5 h-1.5 bg-[#FAF8F5]/90 rounded-b-full"></div>
        <div className="absolute bottom-0 right-[48px] w-2.5 h-1.5 bg-[#FAF8F5]/90 rounded-t-full"></div>
      </button>

      <h4 className="flex items-center mb-10 font-light text-sm lg:text-lg text-[#053020]/60">
        <IoPin className="transform -scale-x-100 mr-2" />
        Bangalore International Convention Center
      </h4>
    </>
  );
};

export default Hero;
