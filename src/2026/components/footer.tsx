import { useSiteRoutes } from "@/lib/use-site-routes";
import { Link, useLocation } from "react-router";

const quickLinks = [
  { label: "About", sectionId: "about" },
  { label: "Speakers", sectionId: "speakers" },
  { label: "Schedule", sectionId: "schedule" },
  { label: "Tickets", sectionId: "tickets" },
] as const;

const scrollToSection = (sectionId: string) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
};

const socialLinks = [
  { label: "Linkedin", href: "https://www.linkedin.com/company/swift-bharat/" },
  { label: "X (Twitter)", href: "https://x.com/swiftbharat" },
  { label: "Instagram", href: "https://www.instagram.com/swift.bharat/" },
] as const;

const Footer = () => {
  const routes = useSiteRoutes();
  const { pathname } = useLocation();

  return (
    <footer className="bg-footer px-6 py-14 text-white md:px-12 md:py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-start lg:gap-20 xl:gap-28 2xl:gap-36">
        <div className="w-full max-w-xs shrink-0">
          <p className="text-2xl font-bold">Swift Bharat</p>
          <p className="mt-4 text-sm leading-snug text-white/80">
            Meet experts from Apple and the global Swift community. Learn, build, and connect over two packed days.
          </p>
        </div>

        <div className="grid min-w-0 w-full max-w-md grid-cols-2 gap-x-6 gap-y-10 sm:max-w-lg sm:gap-x-8 md:max-w-xl lg:max-w-2xl lg:grid-cols-4 lg:gap-8 xl:max-w-3xl">
          <nav aria-label="Quick links">
            <p className="font-bold">Quick Links</p>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-white/80">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={{ pathname: routes.home, hash: `#${link.sectionId}` }}
                    className="hover:text-lime"
                    onClick={() => {
                      if (pathname === routes.home) {
                        scrollToSection(link.sectionId);
                      }
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Social links">
            <p className="font-bold">Connect</p>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-white/80">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-lime"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Built by">
            <p className="font-bold">Built by</p>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-white/80">
              <li>
                <a
                  href="https://x.com/arkade_club"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-lime"
                >
                  Arkade Club ~ Design
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/nirudhuuu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-lime"
                >
                  Anirudh Jwala ~ Code
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <p className="font-bold">Get in touch</p>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-white/80">
              <li>
                <a
                  href="mailto:hello@swiftbharat.org"
                  className="hover:text-lime"
                >
                  hello@swiftbharat.org
                </a>
              </li>
              <li>
                <a href="tel:+919833451538" className="hover:text-lime">
                  +91 9833451538
                </a>
              </li>
              <li className="max-w-[245px] leading-relaxed">
                <a
                  href="https://maps.app.goo.gl/1STD2hQbhK6v4aZx8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-lime"
                >
                  Yashwantrao Chavan Center, Mumbai
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-7xl text-right text-sm text-white/60">
        <Link
          to={routes.terms}
          className="hover:text-lime"
          onClick={() => window.scrollTo(0, 0)}
        >
          Event Terms
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
