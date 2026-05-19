import sponsorsLeft from "@/assets/2026/svg/sponsor-left.svg"
import sponsorsRight from "@/assets/2026/svg/sponsor-right.svg";

const Sponsors = () => (
  <section id="sponsors" className="px-6 py-16 md:px-12 md:py-24">
    <div className="mx-auto max-w-3xl text-center">
      <div className="flex items-center justify-center gap-4">
        <img
          src={sponsorsLeft}
          alt="Sponsors Left"
          className="h-16 w-10 md:h-20 md:w-12"
          aria-hidden
        />
        <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold">
          Sponsors
        </h2>
        <img
          src={sponsorsRight}
          alt="Sponsors Right"
          className="h-16 w-10 md:h-20 md:w-12"
          aria-hidden
        />
      </div>

      <p className="mt-6 text-base leading-relaxed text-foreground/90 md:text-lg">
        Behind every great conference are the partners who believe in the
        community. We&apos;re proud to be supported by our sponsors, that helps
        make Swift Conference India 2026 possible.
      </p>

      <a
        href="mailto:hello@swiftbharat.org"
        className="mt-10 inline-flex min-w-[280px] cursor-pointer items-center justify-center rounded-full bg-foreground px-8 py-4 text-lg font-semibold text-white transition-opacity hover:opacity-90"
      >
        Know More
      </a>
    </div>
  </section>
);

export default Sponsors;
