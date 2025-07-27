import { Link } from "react-router-dom"; // Add this import

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Footer = () => {
  return (
    <footer
      aria-label="Footer"
      className="flex flex-col lg:flex-row min-h-72 bg-[#053020] text-white px-4 sm:px-8 lg:px-20 py-8 lg:py-12 lg:justify-between gap-8 lg:gap-0"
    >
      <div className="flex-1">
        <h4 className="text-2xl lg:text-3xl mb-3 font-bold font-samarkan">
          Swift Bharat
        </h4>
        <section
          aria-labelledby="footer-brand"
          className="max-w-full lg:w-80 text-sm lg:text-base"
        >
          <p className="mb-2">
            Swift Bharat is an international Apple developer conference, built
            by and for Indian developers.
          </p>
          <p>
            Join 200+ iOS engineers and tech leads for two days of pure Swift
            and real-world insights.
          </p>
        </section>
      </div>
      <div className="flex flex-col sm:flex-row gap-8">
        <nav aria-labelledby="footer-links" className="flex-1 min-w-fit">
          <h4 className="font-semibold mb-3 text-base lg:text-lg">
            Quick Links
          </h4>
          <ul className="font-light italic flex flex-col gap-1.5 text-sm lg:text-base">
            {/* <li className="cursor-pointer hover:underline">About</li> */}
            <li
              className="cursor-pointer hover:underline"
              onClick={() => scrollToSection("speakers")}
            >
              Speakers
            </li>
            <li
              className="cursor-pointer hover:underline"
              onClick={() => scrollToSection("sponsors")}
            >
              Sponsors
            </li>
            <li
              className="cursor-pointer hover:underline"
              onClick={() => scrollToSection("venue")}
            >
              Venue
            </li>
          </ul>
        </nav>
        <nav aria-labelledby="footer-social" className="flex-1 min-w-0">
          <h4 className="font-semibold mb-3 text-base lg:text-lg">Connect</h4>
          <ul className="font-light italic flex flex-col gap-1.5 text-sm lg:text-base">
            <a
              href="https://x.com/swiftbharat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="cursor-pointer hover:underline">X (Twitter)</li>
            </a>

            <a
              href="https://www.linkedin.com/company/swift-bharat/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="cursor-pointer hover:underline">LinkedIn</li>
            </a>
          </ul>
        </nav>
        <nav aria-labelledby="footer-built" className="flex-1 min-w-32">
          <h4 className="font-semibold mb-3 text-base lg:text-lg">Built by</h4>
          <ul className="font-light italic flex flex-col gap-1.5 text-sm lg:text-base">
            <li>
              <a
                href="https://x.com/aryanuiux"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:underline"
              >
                Aryan ~ Design
              </a>
            </li>
            <li>
              <a
                href="https://x.com/nirudhuuu"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:underline"
              >
                Anirudh ~ Code
              </a>
            </li>
          </ul>
        </nav>
        <section aria-labelledby="footer-contact" className="flex-1 min-w-fit">
          <h4 className="font-semibold mb-3 text-base lg:text-lg">
            Get in touch
          </h4>
          <ul className="font-light italic flex flex-col gap-1.5 text-sm lg:text-base">
            <li>
              <a
                href="mailto:hello@swiftbharat.org"
                className="cursor-pointer hover:underline"
              >
                hello@swiftbharat.org
              </a>
            </li>
            <li>
              <Link
                to="/call-for-speakers"
                className="cursor-pointer hover:underline"
              >
                Call for Speakers
              </Link>
            </li>
            <li>
              <Link
                to="/terms-and-conditions"
                className="cursor-pointer hover:underline"
              >
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </section>
      </div>
      <div className="h-24" />
    </footer>
  );
};

export default Footer;
