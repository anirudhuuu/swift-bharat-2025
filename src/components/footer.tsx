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
        <h4 className="text-lg lg:text-xl mb-3">Swift Bharat</h4>
        <section
          aria-labelledby="footer-brand"
          className="max-w-full lg:w-80 text-sm lg:text-base"
        >
          <p className="mb-2">
            Meet experts from Apple and the global Swift community.
          </p>
          <p>Learn, build, and connect over three packed days.</p>
        </section>
      </div>
      <div className="flex flex-col sm:flex-row">
        <nav aria-labelledby="footer-links" className="flex-1 min-w-0">
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
        {/* <nav aria-labelledby="footer-social" className="flex-1 min-w-0">
          <h4 className="font-semibold mb-3 text-base lg:text-lg">Connect</h4>
          <ul className="font-light italic flex flex-col gap-1.5 text-sm lg:text-base">
            <li className="cursor-pointer hover:underline">Linkedin</li>
            <li className="cursor-pointer hover:underline">Behance</li>
          </ul>
        </nav> */}
        <section aria-labelledby="footer-contact" className="flex-1 min-w-0">
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
            {/* <li>
              <a
                href="tel:+91987654321"
                className="cursor-pointer hover:underline"
              >
                +91 98765 4321
              </a>
            </li> */}
            {/* <li className="leading-relaxed">
              <a
                href="https://maps.app.goo.gl/oWC7t5cr2ik8VTqdA"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline cursor-pointer"
              >
                Bengaluru International Convention Center, 10th Mile, Tumkur
                Road, Bengaluru
              </a>
            </li> */}
          </ul>
        </section>
      </div>
      <div className="h-24" />
    </footer>
  );
};

export default Footer;
