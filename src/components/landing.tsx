import Hero from "@/components/hero";
import Navbar from "@/components/nav-bar";
import heroBackground from "@/assets/hero-background.png";

const Landing = () => {
  return (
    <div
      className="flex flex-col justify-start items-center font-display h-[1280px] w-full"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "50% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      <Hero />
    </div>
  );
};

export default Landing;
