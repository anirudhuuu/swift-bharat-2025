import sponsorsBackground from "@/assets/green-lush-background.png";
import boxClub from "@/assets/svg/box-club.svg";
import communityLeafLeft from "@/assets/svg/community-left.svg";
import communityLeafRight from "@/assets/svg/community-right.svg";
import goldLeafLeft from "@/assets/svg/gold-left.svg";
import goldLeafRight from "@/assets/svg/gold-right.svg";
import gratitude from "@/assets/svg/gratitude.svg";
import logitech from "@/assets/svg/logitech.png";
import lookaway from "@/assets/svg/lookaway.png";
import mercari from "@/assets/svg/mercari.svg";
import nunch from "@/assets/svg/nunch.png";
import platinumLeafLeaves from "@/assets/svg/platinum-left.svg";
import platinumLeafRight from "@/assets/svg/platinum-right.svg";
import revenueCat from "@/assets/svg/revenue-cat.svg";
import signEasy from "@/assets/svg/signeasy.png";
import silverLeafLeft from "@/assets/svg/silver-left.svg";
import silverLeafRight from "@/assets/svg/silver-right.svg";
import sponsorDivider from "@/assets/svg/sponsor-divider.svg";
import teleprompter from "@/assets/svg/teleprompter.png";
import zoho from "@/assets/svg/zoho.png";

const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="flex flex-col items-center px-4 py-8 sm:py-12"
      style={{
        backgroundImage: `url(${sponsorsBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "65% center",
        backgroundRepeat: "no-repeat",
        minHeight: "1000px",
        maxHeight: "2000px",
      }}
    >
      <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-6 sm:mb-8">
        Sponsors
      </h2>

      {/* Platinum Sponsor */}
      <div className="w-full my-4 flex flex-col items-center justify-center relative mb-8">
        <div className="absolute top-1/2 left-1/2 bg-[#FBDD93] px-2 sm:px-4 -translate-x-1/2 -translate-y-1/2 z-10 font-thin uppercase text-sm sm:text-lg text-black/60">
          Platinum Sponsor
        </div>
        <img
          src={sponsorDivider}
          alt="Divider"
          className="h-6 sm:h-8 w-full max-w-5xl object-contain"
          loading="lazy"
        />
      </div>
      <div className="flex items-center justify-center gap-3 sm:gap-5 w-full max-w-4xl px-4">
        <img
          src={platinumLeafLeaves}
          alt="Platinum Leaf Left"
          className="h-10 sm:h-12 md:h-16 w-auto object-contain flex-shrink-0"
          loading="lazy"
        />
        <a
          href="https://www.revenuecat.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 transition-transform duration-200 flex-shrink-0"
        >
          <img
            src={revenueCat}
            alt="Revenue Cat"
            className="h-8 sm:h-10 md:h-12 w-auto object-contain max-w-[200px] sm:max-w-none"
            loading="lazy"
          />
        </a>
        <img
          src={platinumLeafRight}
          alt="Platinum Leaf Right"
          className="h-10 sm:h-12 md:h-16 w-auto object-contain flex-shrink-0"
          loading="lazy"
        />
      </div>
      <div className="h-8 sm:h-14 w-full" />

      {/* Gold Sponsor */}
      <div className="w-full my-4 flex flex-col items-center justify-center relative mb-8">
        <div className="absolute top-1/2 left-1/2 bg-[#FBDD93] px-2 sm:px-4 -translate-x-1/2 -translate-y-1/2 z-10 font-thin uppercase text-sm sm:text-lg text-black/60">
          Gold Sponsor
        </div>
        <img
          src={sponsorDivider}
          alt="Divider"
          className="h-6 sm:h-8 w-full max-w-5xl object-contain"
          loading="lazy"
        />
      </div>
      <div className="flex items-center justify-center gap-3 sm:gap-6 w-full max-w-4xl px-4">
        <img
          src={goldLeafLeft}
          alt="Gold Leaf Left"
          className="h-10 sm:h-12 md:h-16 w-auto object-contain flex-shrink-0"
          loading="lazy"
        />
        <a
          href="https://boxbox.club/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 transition-transform duration-200 flex-shrink-0"
        >
          <img
            src={boxClub}
            alt="Box Club"
            className="h-8 sm:h-12 md:h-16 w-auto object-contain max-w-[200px] sm:max-w-none"
            loading="lazy"
          />
        </a>
        <img
          src={goldLeafRight}
          alt="Gold Leaf Right"
          className="h-10 sm:h-12 md:h-16 w-auto object-contain flex-shrink-0"
          loading="lazy"
        />
      </div>
      <div className="h-8 sm:h-14 w-full" />

      {/* Silver Sponsors */}
      <div className="w-full my-4 flex flex-col items-center justify-center relative mb-8">
        <div className="absolute top-1/2 left-1/2 bg-[#FBDD93] px-2 sm:px-4 -translate-x-1/2 -translate-y-1/2 z-10 font-thin uppercase text-sm sm:text-lg text-black/60">
          Silver Sponsors
        </div>
        <img
          src={sponsorDivider}
          alt="Divider"
          className="h-6 sm:h-8 w-full max-w-5xl object-contain"
          loading="lazy"
        />
      </div>
      <div className="flex items-center justify-center gap-2 sm:gap-4 w-full max-w-4xl px-4">
        <img
          src={silverLeafLeft}
          alt="Silver Leaf Left"
          className="h-10 sm:h-12 md:h-16 w-auto object-contain flex-shrink-0"
          loading="lazy"
        />
        <div className="flex flex-row gap-2 sm:gap-4 md:gap-6 lg:gap-8 items-center justify-center flex-1 min-w-0 overflow-x-hidden">
          <a
            href="https://www.mercari.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity duration-200 flex-shrink-0 hover:opacity-80"
          >
            <img
              src={mercari}
              alt="Mercari"
              className="h-5 sm:h-8 md:h-10 w-auto object-contain max-w-[100px] sm:max-w-none"
              loading="lazy"
            />
          </a>
          <a
            href="https://www.zoho.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity duration-200 flex-shrink-0 hover:opacity-80"
          >
            <img
              src={zoho}
              alt="Zoho"
              className="h-5 sm:h-8 md:h-10 w-auto object-contain max-w-[100px] sm:max-w-none"
              loading="lazy"
            />
          </a>
          <a
            href="https://signeasy.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity duration-200 flex-shrink-0 hover:opacity-80"
          >
            <img
              src={signEasy}
              alt="SignEasy"
              className="h-5 sm:h-8 md:h-10 w-auto object-contain max-w-[100px] sm:max-w-none"
              loading="lazy"
            />
          </a>
        </div>
        <img
          src={silverLeafRight}
          alt="Silver Leaf Right"
          className="h-10 sm:h-12 md:h-16 w-auto object-contain flex-shrink-0"
          loading="lazy"
        />
      </div>
      <div className="h-8 sm:h-16 w-full" />

      {/* Community Sponsors */}
      <div className="w-full my-4 flex flex-col items-center justify-center relative mb-8">
        <div className="absolute top-1/2 left-1/2 bg-[#FBDD93] px-2 sm:px-4 -translate-x-1/2 -translate-y-1/2 z-10 font-thin uppercase text-sm sm:text-lg text-black/60">
          Community Sponsors
        </div>
        <img
          src={sponsorDivider}
          alt="Divider"
          className="h-6 sm:h-8 w-full max-w-5xl object-contain"
          loading="lazy"
        />
      </div>
      <div className="flex items-center justify-center gap-3 sm:gap-6 w-full max-w-4xl px-4">
        <img
          src={communityLeafLeft}
          alt="Community Leaf Left"
          className="h-10 sm:h-12 md:h-16 w-auto object-contain flex-shrink-0"
          loading="lazy"
        />
        <div className="flex flex-row gap-2 sm:gap-4 md:gap-6 lg:gap-8 items-center justify-center flex-1 min-w-0 overflow-x-hidden">
          <a
            href="https://www.gratefulness.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity duration-200 flex-shrink-0 hover:opacity-80"
          >
            <img
              src={gratitude}
              alt="Gratitude"
              className="h-12 sm:h-12 md:h-16 lg:h-20 w-auto object-contain rounded sm:rounded-xl max-w-[180px] sm:max-w-[200px] md:max-w-none"
              loading="lazy"
            />
          </a>
          <a
            href="https://lookaway.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity duration-200 flex-shrink-0 hover:opacity-80"
          >
            <img
              src={lookaway}
              alt="Lookaway"
              className="h-12 sm:h-12 md:h-16 lg:h-20 w-auto object-contain max-w-[180px] sm:max-w-[200px] md:max-w-none"
              loading="lazy"
            />
          </a>
          <a
            href="https://nunch.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity duration-200 flex-shrink-0 hover:opacity-80"
          >
            <img
              src={nunch}
              alt="Nunch"
              className="h-12 sm:h-12 md:h-16 lg:h-20 w-auto object-contain rounded-xl max-w-[180px] sm:max-w-[200px] md:max-w-none"
              loading="lazy"
            />
          </a>
        </div>
        <img
          src={communityLeafRight}
          alt="Community Leaf Right"
          className="h-10 sm:h-12 md:h-16 w-auto object-contain flex-shrink-0"
          loading="lazy"
        />
      </div>
      <div className="h-8 sm:h-16 w-full" />
      <div className="flex items-center justify-center gap-3 sm:gap-6 w-full max-w-4xl px-4">
        <img
          src={communityLeafLeft}
          alt="Community Leaf Left"
          className="h-10 sm:h-12 md:h-16 w-auto object-contain flex-shrink-0"
          loading="lazy"
        />
        <div className="flex flex-row gap-2 sm:gap-4 md:gap-6 lg:gap-8 items-center justify-center flex-1 min-w-0 overflow-x-hidden">
          <a
            href="https://teleprompterpro.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity duration-200 flex-shrink-0 hover:opacity-80"
          >
            <img
              src={teleprompter}
              alt="Teleprompter"
              className="h-12 sm:h-12 md:h-16 lg:h-20 w-auto object-contain rounded sm:rounded-xl max-w-[180px] sm:max-w-[200px] md:max-w-none"
              loading="lazy"
            />
          </a>
          <a
            href="https://www.logitech.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity duration-200 flex-shrink-0 hover:opacity-80"
          >
            <img
              src={logitech}
              alt="Logitech"
              className="h-10 sm:h-10 md:h-12 lg:h-14 w-auto object-contain max-w-[120px] sm:max-w-[140px] md:max-w-[160px]"
              loading="lazy"
            />
          </a>
        </div>
        <img
          src={communityLeafRight}
          alt="Community Leaf Right"
          className="h-10 sm:h-12 md:h-16 w-auto object-contain flex-shrink-0"
          loading="lazy"
        />
      </div>
      <div className="h-8 sm:h-16 w-full" />
    </section>
  );
};

export default Sponsors;
