import { useState } from "react";
import { Button } from "@/components/ui/button";
import swiftBharatLogo from "../assets/swift-bharat-logo.png";

const NavLinks = () => (
  <>
    <li className="cursor-pointer">Schedule</li>
    <li className="cursor-pointer">Speakers</li>
    <li className="cursor-pointer">About</li>
    <li className="cursor-pointer">Sponsors</li>
    <li className="cursor-pointer">Venue</li>
  </>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex w-full px-10 lg:px-16 py-8 items-center justify-between relative">
      <div className="flex items-center gap-2">
        <img
          src={swiftBharatLogo}
          alt="Swift Bharat"
          loading="lazy"
          className="w-[70px] h-[70px]"
        />
        <span className="font-display font-bold text-lg leading-7">
          Swift Bharat
        </span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex items-center gap-10 text-[#0C0C11] font-light text-lg font-display">
        <NavLinks />
      </ul>

      <Button className="hidden lg:block bg-[#0D3A3F] text-white py-4 px-10 rounded-xl text-lg font-display font-normal w-44 h-14 cursor-pointer">
        Get Tickets
      </Button>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button
          type="button"
          className="text-[#0D3A3F] focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <svg
            width="25"
            height="14"
            viewBox="0 0 25 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0"
              y1="1.23438"
              x2="25"
              y2="1.23438"
              stroke="black"
              strokeWidth="1.5"
              className={`transition-all duration-300 origin-center ${
                menuOpen
                  ? "translate-y-[6px] rotate-45"
                  : "translate-y-0 rotate-0"
              }`}
            />
            <line
              x1="0"
              y1="13.2344"
              x2="25"
              y2="13.2344"
              stroke="black"
              strokeWidth="1.5"
              className={`transition-all duration-300 origin-center ${
                menuOpen
                  ? "-translate-y-[6px] -rotate-45"
                  : "translate-y-0 rotate-0"
              }`}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg flex flex-col items-center gap-4 py-12 z-50 md:hidden">
          <ul className="flex flex-col items-center gap-12 text-[#0C0C11] font-light text-lg font-display">
            <NavLinks />
          </ul>
          <div className="h-6" />
          <Button className="bg-[#0D3A3F] text-white py-4 px-10 rounded-xl text-lg font-display font-normal w-44 h-14 cursor-pointer">
            Get Tickets
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
