import heroBuildingSealink from "@/assets/2026/hero/hero-building-sealink.webp";
import swiftBharatTitle from "@/assets/2026/hero/swift-bharat-title.svg";

const Hero = () => (
  <section
    id="about"
    className="relative overflow-x-hidden bg-background pt-24 sm:pt-28 md:pt-32"
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
      <div className="pointer-events-none absolute inset-x-0 top-3 z-30 flex w-full flex-col items-center gap-[clamp(1rem,2.5vw,3rem)] px-4 sm:top-[4%] md:top-[6%] lg:top-[8%]">
        <img
          src={swiftBharatTitle}
          alt="Swift Bharat"
          width={743}
          height={315}
          className="h-auto w-[75vw] max-w-56 object-contain sm:max-w-72 md:max-w-96 lg:max-w-120 xl:max-w-xl 2xl:max-w-184"
        />
        <span
          className="font-samarkan w-full max-w-[min(90vw,28rem)] text-center text-[clamp(2.25rem,calc(1rem+6.5vw),8.5rem)] font-normal leading-[0.72] tracking-[clamp(-0.35px,-0.005em,-0.58px)] text-[#17358B] [text-shadow:9.32px_13.98px_27.97px_rgba(0,0,0,0.05)] sm:max-w-[min(85vw,32rem)] md:max-w-[min(80vw,36rem)] lg:max-w-md xl:max-w-lg 2xl:max-w-xl"
          aria-label="2026"
        >
          2026
        </span>
      </div>
    </div>
  </section>
);

export default Hero;
