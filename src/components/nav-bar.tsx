import swiftBharatLogo from "../assets/swift-bharat-logo.png";

const NavBar = () => {
  return (
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
      <ul className="hidden md:flex items-center justify-center gap-10 mx-auto text-[#0C0C11] font-light text-sm">
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
        <ul className="flex flex-col items-center gap-4 text-[#0C0C11] font-light text-base">
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
  );
};

export default NavBar;
