import swiftLogo from "@/assets/2026/svg/swift-logo.svg";

const navLinks = [
  { label: "Schedule", href: "#about" },
  { label: "Speakers", href: "#speakers" },
  { label: "About", href: "#about" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Venue", href: "#venue" },
] as const;

const NavBar = () => (
  <header className="absolute inset-x-0 top-0 z-50 px-6 py-5 md:px-12">
    <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6">
      <a
        href="#"
        className="flex items-center gap-2 text-lg font-bold text-foreground"
      >
        <img src={swiftLogo} alt="" className="h-12 w-12 object-contain" />
        <span>Swift Bharat</span>
      </a>
      <nav
        aria-label="Main"
        className="hidden items-center gap-6 text-lg font-medium text-foreground md:flex"
      >
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="hover:opacity-70">
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  </header>
);

export default NavBar;
