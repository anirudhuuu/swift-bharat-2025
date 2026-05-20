import heroBuildingSealink from "@/assets/2026/hero/hero-building-sealink.webp";
import swiftBharatTitle from "@/assets/2026/hero/swift-bharat-title.svg";
import ticketSea from "@/assets/2026/hero/ticket-seat.svg";

const Hero = () => (
  <section
    id="about"
    className="relative overflow-x-hidden bg-background pt-20"
  >
    <div className="relative z-20 w-full">
      <img
        src={heroBuildingSealink}
        alt="Building and sea link"
        width={1440}
        height={727}
        className="block aspect-1440/727 h-auto w-full"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 top-3 z-30 flex justify-center px-4 sm:top-[4%] md:top-[6%] lg:top-[8%]">
        <img
          src={swiftBharatTitle}
          alt="Swift Bharat"
          width={743}
          height={315}
          className="h-auto w-[68vw] max-w-48 object-contain sm:max-w-60 md:max-w-80 lg:max-w-104 xl:max-w-lg 2xl:max-w-160"
        />
      </div>
    </div>

    <div className="relative z-0 -mt-2 w-full pb-20 sm:-mt-5 sm:pb-0">
      <img
        alt="Sea of tickets"
        src={ticketSea}
        className="block h-auto w-full"
        width={1440}
        height={1046}
        aria-hidden
      />
      <div
        id="venue"
        className="absolute inset-0 z-10 mx-auto grid max-w-[1440px] grid-cols-1 items-start px-6 pt-[32%] sm:items-center sm:pt-[34%] md:grid-cols-2 md:items-start md:px-16 md:pt-[34%] lg:px-24 lg:pt-[36%] xl:pt-[38%] 2xl:pt-[40%]"
      >
        <div className="w-fit max-w-[min(calc(100vw-3rem),20rem)] text-ink sm:min-w-48 sm:max-w-68 md:min-w-[16rem] md:max-w-xs lg:min-w-[18rem] lg:max-w-sm xl:max-w-md 2xl:max-w-lg">
          <p className="text-[2.75rem] font-bold leading-[0.9] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            19-20
          </p>
          <p className="mt-1 text-lg font-bold leading-tight sm:mt-2 sm:text-xl md:text-2xl lg:text-3xl">
            November, 2026
          </p>
          <hr className="my-5 w-full max-w-full border-t border-ink sm:my-6 md:my-8" />
          <p className="text-[0.625rem] font-normal uppercase tracking-[0.2em] sm:text-xs">
            Address
          </p>
          <p className="mt-2 text-base font-bold leading-snug sm:mt-3 sm:text-lg md:text-xl lg:text-2xl">
            Yashwantrao Chavan
          </p>
          <p className="text-base font-bold leading-snug sm:text-lg md:text-xl lg:text-2xl">
            Center, Mumbai
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
