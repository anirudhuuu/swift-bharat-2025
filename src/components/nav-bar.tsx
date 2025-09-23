import navDividerLogo from "@/assets/svg/nav-divider.svg";
import swiftBharatLogo from "@/assets/svg/swiftLogo.png";
import swiftBharatMobileLogo from "@/assets/svg/swiftMobileLogo.png";
import { Button } from "@/components/ui/button";
import { Fragment, useEffect, useState } from "react";

const navItems = [
  {
    id: 1,
    label: "Schedule",
    link: "schedule",
  },
  {
    id: 2,
    label: "Speakers",
    link: "speakers",
  },
  {
    id: 3,
    label: "Get Tickets",
    link: "tickets",
  },
  {
    id: 4,
    label: "Sponsors",
    link: "sponsors",
  },
  {
    id: 5,
    label: "Venue",
    link: "venue",
  },
];

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const NavLinks = ({ onClick }: { onClick?: () => void }) => (
  <>
    {navItems.map((item, id) => (
      <Fragment key={item.id}>
        <img src={navDividerLogo} alt="divider" className="block lg:hidden" />
        <li
          className="cursor-pointer text-lg hover:opacity-80 transition-opacity"
          onClick={() => {
            scrollToSection(item.link);
            onClick?.();
          }}
        >
          {item.label}
        </li>
        {id === navItems.length - 1 && (
          <img src={navDividerLogo} alt="divider" className="block lg:hidden" />
        )}
      </Fragment>
    ))}
  </>
);

const Navbar = ({ showNavItems = true }: { showNavItems?: boolean }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <nav className="flex w-full px-6 lg:px-18 py-8 items-center justify-between relative">
      <div className="flex items-center gap-2">
        <div
          onClick={() => (window.location.href = "/")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img
            src={swiftBharatLogo}
            alt="Swift Bharat"
            className="w-[70px] h-[70px]"
          />
          <span className="font-samarkan font-bold text-3xl leading-7">
            Swift Bharat
          </span>
        </div>
      </div>

      {showNavItems && (
        <>
          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-10 text-[#0C0C11] font-light text-lg font-display">
            <NavLinks />
          </ul>

          <Button
            onClick={() => scrollToSection("tickets")}
            className="hidden lg:block bg-[#0D3A3F] text-white py-4 px-10 rounded-xl text-lg font-display font-normal w-44 h-14 cursor-pointer hover:opacity-90 transition-opacity"
          >
            Get Tickets
          </Button>

          {/* Mobile Menu Button */}
          <div
            className="lg:hidden cursor-pointer"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <button
              type="button"
              className="text-[#0D3A3F] focus:outline-none z-50 relative cursor-pointer"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
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

          {/* Mobile Menu - Full Page with Fade-in Animation */}
          <div
            className={`fixed inset-0 top-0 left-0 w-full h-full bg-[#F5DB9F] z-40 flex flex-col lg:hidden transition-opacity duration-300 ease-in-out ${
              menuOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <div
              className={`px-6 py-8 flex justify-between transition-transform duration-300 ease-out ${
                menuOpen ? "translate-y-0" : "-translate-y-4"
              }`}
            >
              <div className="flex items-center gap-2">
                <img
                  src={swiftBharatMobileLogo}
                  alt="Swift Bharat"
                  className="w-[70px] h-[70px]"
                />
                <span className="font-samarkan font-bold text-3xl leading-7">
                  Swift Bharat
                </span>
              </div>
            </div>
            <div
              className={`flex-1 flex flex-col items-center transition-all duration-500 delay-100 ${
                menuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <ul className="flex flex-col gap-2 text-[#0C0C11] font-normal text-xl font-display px-3">
                <NavLinks onClick={() => setMenuOpen(false)} />
              </ul>
            </div>
            <div
              className={`p-8 w-full flex justify-center transition-all duration-500 delay-200 ${
                menuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <Button
                onClick={() => {
                  scrollToSection("tickets");
                  setMenuOpen(false);
                }}
                className="bg-[#0D3A3F] text-white py-4 px-10 rounded-xl text-lg font-display font-normal h-14 cursor-pointer w-full hover:opacity-90 transition-opacity"
              >
                Get Tickets
              </Button>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
