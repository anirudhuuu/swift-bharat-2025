import { useSiteRoutes } from "@/lib/use-site-routes";
import { Link } from "react-router";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Speakers", href: "#speakers" },
  { label: "Schedule", href: "#about" },
  { label: "Tickets", href: "#tickets" },
] as const;

const socialLinks = [
  { label: "Linkedin", href: "https://www.linkedin.com/company/swift-bharat/" },
  { label: "X (Twitter)", href: "https://x.com/swiftbharat" },
  { label: "Instagram", href: "https://www.instagram.com/swiftbharat/" },
] as const;

const Footer = () => {
  const routes = useSiteRoutes();

  return (
    <footer className="bg-footer px-6 py-14 text-white md:px-12 md:py-16">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-2xl font-bold">Swift Bharat</p>
          <p className="mt-4 max-w-xs text-sm leading-snug text-white/80">
            Meet experts from Apple and the global Swift community. Learn, build, and connect over two packed days.
          </p>
        </div>

        <nav aria-label="Quick links">
          <p className="font-bold">Quick Links</p>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-white/80">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-lime">
                  {link.label}
                </a>
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
              Yashwantrao Chavan Center, Mumbai
            </li>
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-7xl text-right text-sm text-white/60">
        <Link to={routes.terms} className="hover:text-lime">
          Event Terms
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
