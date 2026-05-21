import heroBuildingSealink from "@/assets/2026/hero/hero-building-sealink.webp";
import swiftBharatTitle from "@/assets/2026/hero/swift-bharat-title.svg";

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
  </section>
);

export default Hero;
