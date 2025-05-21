import swiftBharatLogo from "./assets/swift-bharat-logo.png";
import heroBackground from "./assets/hero-background.png";

const App = () => {
  return (
    <>
      <div
        className="flex flex-col justify-start items-center font-display h-[1200px] w-full"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "50% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <nav className="flex w-full px-3 py-5 mx-auto items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={swiftBharatLogo}
              alt="Swift Bharat"
              width={40}
              className="sm:w-[50px]"
            />
            <span className="font-bold text-base">Swift Bharat</span>
          </div>
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center justify-center gap-8 mx-auto text-[#0C0C11] font-normal text-sm">
            <li className="cursor-pointer">Schedule</li>
            <li className="cursor-pointer">Speakers</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Sponsors</li>
            <li className="cursor-pointer">Venue</li>
          </ul>
          <button className="hidden md:block bg-[#0D3A3F] text-[#EDEDEC] font-normal py-2 px-6 rounded-2xl text-sm cursor-pointer">
            Get Tickets
          </button>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-[#0D3A3F] focus:outline-none"
              aria-label="Open menu"
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                if (menu) menu.classList.toggle("hidden");
              }}
            >
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          {/* Mobile Menu */}
          <div
            id="mobile-menu"
            className="absolute top-20 left-0 w-full bg-white/95 shadow-lg flex flex-col items-center gap-4 py-4 z-50 hidden md:hidden"
          >
            <ul className="flex flex-col items-center gap-4 text-[#0C0C11] font-normal text-base">
              <li className="cursor-pointer">Schedule</li>
              <li className="cursor-pointer">Speakers</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Sponsors</li>
              <li className="cursor-pointer">Venue</li>
            </ul>
            <button className="bg-[#0D3A3F] text-[#EDEDEC] font-normal py-2 px-6 rounded-2xl text-base cursor-pointer">
              Get Tickets
            </button>
          </div>
        </nav>
        <div className="bg-white/30 rounded-4xl px-8 py-2.5 w-fit mb-2.5">
          <span className="uppercase text-sm lg:text-base text-[#053020]/60">
            15-17 Sep, 2025
          </span>
        </div>
        <h1 className="text-5xl lg:text-7xl font-bold text-[#053020] mb-4">
          Swift Bharat 2025
        </h1>
        <div className="mb-10 font-light text-center text-base lg:text-xl text-[#053020]/60">
          <h3>Meet experts from Apple and the global Swift community.</h3>
          <h3>Learn, build, and connect over three packed days.</h3>
        </div>
        <button className="bg-[#0D3A3F] text-[#FAF8F5] font-medium py-4 px-5 rounded-2xl cursor-pointer mb-4">
          Get Tickets
        </button>
        <h4 className="mb-10 font-light text-sm lg:text-lg text-[#053020]/60">
          Bangalore International Convention Center
        </h4>
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
