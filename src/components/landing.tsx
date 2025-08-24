import heroBackground from "@/assets/hero-background.png";
import speaker1 from "@/assets/speaker-1.png";
import speaker2 from "@/assets/speaker-2.png";
import speaker3 from "@/assets/speaker-3.png";
import speaker4 from "@/assets/speaker-4.png";
import speaker5 from "@/assets/speaker-5.png";
import speaker6 from "@/assets/speaker-6.png";
import speaker7 from "@/assets/speaker-7.png";
import Hero from "@/components/hero";
import Navbar from "@/components/nav-bar";

const speakers = [
  speaker1,
  speaker2,
  speaker3,
  speaker4,
  speaker5,
  speaker6,
  speaker7,
];

const Landing = () => {
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
