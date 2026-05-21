import revenueCat from "@/assets/2025/svg/revenue-cat.svg";
import sponsorsLeft from "@/assets/2026/svg/sponsor-left.svg";
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
        className="mt-10 inline-flex min-w-[280px] cursor-pointer items-center justify-center rounded-2xl bg-foreground px-8 py-4 text-lg font-semibold text-white transition-opacity hover:opacity-90"
      >
        Become a Sponsor
      </a>

      <div className="h-8 sm:h-14 w-full" />

      <div className="mx-auto mt-10 w-full max-w-5xl border-b border-ink pb-10 md:pb-12">
        <p className="mx-auto flex h-[30px] w-full max-w-[342px] items-center justify-center self-stretch text-center text-base font-semibold uppercase leading-[29px] tracking-[2px] text-black/60">
          Platinum
        </p>
        <a
          href="https://www.revenuecat.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex justify-center transition-opacity hover:opacity-85"
        >
          <img
            src={revenueCat}
            alt="RevenueCat"
            className="h-10 w-auto object-contain sm:h-12 md:h-14"
          />
        </a>
      </div>


    </div>
  </section>
);

export default Sponsors;
