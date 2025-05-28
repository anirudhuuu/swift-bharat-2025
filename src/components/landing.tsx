import { useEffect, useState } from "react";
import Hero from "@/components/hero";
import Navbar from "@/components/nav-bar";
import heroBackgroundMobile from "@/assets/hero-background-mobile.png";
import heroBackground from "@/assets/hero-background.png";

const Landing = () => {
  const [bgImage, setBgImage] = useState<string | null>(null);

  useEffect(() => {
    const updateBg = () => {
      setBgImage(
        window.innerWidth <= 768 ? heroBackgroundMobile : heroBackground
      );
    };

    updateBg();
    window.addEventListener("resize", updateBg);

    return () => window.removeEventListener("resize", updateBg);
  }, []);

  if (!bgImage) return null;

  return (
    <div
      className="flex flex-col justify-start items-center font-display h-[1280px] w-full"
      style={{
        backgroundImage: `url(${bgImage})`,
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
