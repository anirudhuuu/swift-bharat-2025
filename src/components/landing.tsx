import heroBackground from "@/assets/hero-background.png";
import speaker1 from "@/assets/speaker-1.png";
import speaker2 from "@/assets/speaker-2.png";
import speaker3 from "@/assets/speaker-3.png";
import speaker4 from "@/assets/speaker-4.png";
import speaker5 from "@/assets/speaker-5.png";
import speaker6 from "@/assets/speaker-6.png";
import speaker7 from "@/assets/speaker-7.png";
import speaker8 from "@/assets/speaker-8.png";
import speaker9 from "@/assets/speaker-9.png";
import speaker10 from "@/assets/speaker-10.png";
import speaker11 from "@/assets/speaker-11.png";
import speaker12 from "@/assets/speaker-12.png";
import speaker13 from "@/assets/speaker-13.png";
import speaker14 from "@/assets/speaker-14.png";
import speaker15 from "@/assets/speaker-15.png";
import Hero from "@/components/hero";
import Navbar from "@/components/nav-bar";

const Landing = () => {
  const speakers = [
    speaker1,
    speaker2,
    speaker3,
    speaker4,
    speaker5,
    speaker6,
    speaker7,
    speaker8,
    speaker9,
    speaker10,
    speaker11,
    speaker12,
    speaker13,
    speaker14,
    speaker15,
  ];
  return (
    <div
      className="relative flex flex-col justify-start items-center font-display h-[1280px] w-full overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "50% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute bottom-0 w-full overflow-hidden h-[440px] pointer-events-none">
        <div className="animate-scroll flex w-max gap-2">
          {[...speakers, ...speakers, ...speakers].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`speaker-${i}`}
              loading="eager"
              className="h-[28rem] w-[28rem] object-contain"
            />
          ))}
        </div>
      </div>
      <Navbar />
      <Hero />
    </div>
  );
};

export default Landing;
