import swiftLogo from "@/assets/2026/svg/swift-logo.svg";
import { Fragment, useEffect, useState } from "react";

const MobileNavDivider = () => (
  <li aria-hidden className="lg:hidden">
    <div className="h-px w-full bg-foreground/20" />
  </li>
);

const navItems = [
  { label: "Schedule", sectionId: "schedule" },
  { label: "Speakers", sectionId: "speakers" },
  { label: "About", sectionId: "about" },
  { label: "Sponsors", sectionId: "sponsors" },
  { label: "Venue", sectionId: "venue" },
] as const;

const scrollToSection = (sectionId: string) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
};

const NAV_LINK_CLASS =
  "group w-full cursor-pointer text-left text-lg font-medium lg:w-auto";

const NavLinkLabel = ({ children }: { children: string }) => (
  <span className="relative inline-block">
    {children}
    <span
      aria-hidden
      className="absolute -bottom-0.5 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-card-accent transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
    />
  </span>
);

const NavLinks = ({ onNavigate }: { onNavigate?: () => void }) => (
  <>
    {navItems.map((item, index) => (
      <Fragment key={item.label}>
        {index > 0 && <MobileNavDivider />}
        <li>
          <button
            type="button"
            onClick={() => {
              scrollToSection(item.sectionId);
              onNavigate?.();
            }}
            className={NAV_LINK_CLASS}
          >
            <NavLinkLabel>{item.label}</NavLinkLabel>
          </button>
        </li>
      </Fragment>
    ))}
  </>
);

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const goToTickets = () => {
    scrollToSection("tickets");
    setMenuOpen(false);
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50 px-4 pb-4 pt-6 sm:px-6 sm:pb-5 sm:pt-7 md:px-12 md:pt-8">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4">
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("about");
          }}
          className="flex shrink-0 items-center gap-3 text-lg font-semibold text-foreground sm:gap-3.5 sm:text-xl md:text-2xl"
        >
          <img
            src={swiftLogo}
            alt=""
            className="h-16 w-16 object-contain sm:h-20 sm:w-20 md:h-24 md:w-24"
          />
          <span>Swift Bharat</span>
        </a>

        <nav
          aria-label="Main"
          className="hidden items-center gap-8 text-lg font-medium text-foreground lg:flex"
        >
          <ul className="flex items-center gap-8">
            <NavLinks />
          </ul>
        </nav>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 cursor-pointer items-center justify-center lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            width="25"
            height="14"
            viewBox="0 0 25 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <line
              x1="0"
              y1="1.23438"
              x2="25"
              y2="1.23438"
              stroke="currentColor"
              strokeWidth="1.5"
              className={`origin-center transition-all duration-300 ${menuOpen ? "translate-y-[6px] rotate-45" : ""
                }`}
            />
            <line
              x1="0"
              y1="13.2344"
              x2="25"
              y2="13.2344"
              stroke="currentColor"
              strokeWidth="1.5"
              className={`origin-center transition-all duration-300 ${menuOpen ? "translate-y-[-6px] -rotate-45" : ""
                }`}
            />
          </svg>
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 flex flex-col bg-background transition-opacity duration-300 lg:hidden ${menuOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
          }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex flex-1 flex-col items-center justify-center px-6">
          <ul className="flex w-full max-w-sm flex-col items-stretch gap-1">
            <NavLinks onNavigate={() => setMenuOpen(false)} />
          </ul>
        </div>
        <div className="p-6">
          <button
            type="button"
            onClick={goToTickets}
            className="flex h-14 w-full cursor-pointer items-center justify-center rounded-full bg-foreground text-lg font-semibold text-background transition-opacity hover:opacity-90"
          >
            Get Tickets
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
