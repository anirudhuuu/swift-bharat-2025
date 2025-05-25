import heroBackground from "./assets/hero-background.png";
import Hero from "./components/hero";
import NavBar from "./components/nav-bar";

const App = () => {
  return (
    <>
      <div
        className="flex flex-col justify-start items-center font-display h-[1200px] w-full"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "50% 80%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <NavBar />
        <Hero />
      </div>

      <h2 className="font-display text-6xl font-bold text-[#053020]">
        Schedule
      </h2>

      <div className="bg-red-900">
        <h2 className="font-display text-6xl font-bold text-[#F4DA9E]">
          Speakers
        </h2>
      </div>

      <h2 className="font-display text-6xl font-bold text-[#053020]">
        Get Your Tickets
      </h2>

      <h2 className="font-display text-6xl font-bold text-[#053020]">FAQs</h2>
    </>
  );
};

export default App;
