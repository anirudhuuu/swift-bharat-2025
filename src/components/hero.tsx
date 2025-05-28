import ticketBackground from "../assets/ticket.svg";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-14 px-4 text-center max-w-4xl mx-auto">
      <h1 className="text-5xl lg:text-6xl font-bold mb-4">
        <span className="tracking-wide">Swift</span> Bharat 2025
      </h1>

      <div className="mb-10 font-light text-base lg:text-lg text-black/60 space-y-2">
        <p>Meet experts from Apple and the global Swift community.</p>
        <p>Learn, build, and connect over three packed days.</p>
      </div>

      <button
        type="button"
        aria-label="Get tickets for Swift Bharat 2025"
        className="relative flex items-center gap-8 text-[#FAF8F5] font-medium py-4 pl-7 pr-18 rounded-2xl cursor-pointer mb-4 overflow-hidden"
      >
        <img
          src={ticketBackground}
          alt="ticket background"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
        />
        <span className="z-10">Get Tickets</span>
      </button>
    </div>
  );
};

export default Hero;
