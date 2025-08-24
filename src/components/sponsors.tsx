import sponsorsBackground from "@/assets/green-lush-background.png";
import sponsorDivider from "@/assets/svg/sponsor-divider.svg";
import platinumLeafLeaves from "@/assets/svg/platinum-left.svg";
import revenueCat from "@/assets/svg/revenue-cat.svg";
import platinumLeafRight from "@/assets/svg/platinum-right.svg";
import goldLeafLeft from "@/assets/svg/gold-left.svg";
import boxClub from "@/assets/svg/box-club.svg";
import goldLeafRight from "@/assets/svg/gold-right.svg";
import silverLeafLeft from "@/assets/svg/silver-left.svg";
import mercari from "@/assets/svg/mercari.svg";
import zoho from "@/assets/svg/zoho.svg";
import signEasy from "@/assets/svg/signeasy.svg";
import silverLeafRight from "@/assets/svg/silver-right.svg";
// import communityLeafLeft from "@/assets/svg/community-left.svg";
// import communitySponsor1 from "@/assets/svg/community-sponsor-1.svg";
// import communitySponsor2 from "@/assets/svg/community-sponsor-2.svg";
// import communitySponsor3 from "@/assets/svg/community-sponsor-3.svg";
// import communityLeafRight from "@/assets/svg/community-right.svg";

const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="flex flex-col items-center px-4 py-12"
      style={{
        backgroundImage: `url(${sponsorsBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "65% center",
        backgroundRepeat: "no-repeat",
        minHeight: "1150px",
        maxHeight: "2000px",
      }}
    >
      <h2 className="font-bold text-3xl sm:text-5xl text-center mb-8">
        Sponsors
      </h2>

      {/* Platinum Sponsor */}
      <div className="w-full my-4 flex flex-col items-center justify-center relative mb-8">
        <div className="absolute top-1/2 left-1/2 bg-[#FBDD93] px-2 sm:px-4 -translate-x-1/2 -translate-y-1/2 z-10 font-thin uppercase text-base sm:text-lg text-black/60">
          Platinum Sponsor
        </div>
        <img
          src={sponsorDivider}
          alt="Divider"
          className="h-6 sm:h-8 w-full max-w-5xl object-contain"
        />
      </div>
      <div className="flex items-center justify-center gap-3 sm:gap-5">
        <img
          src={platinumLeafLeaves}
          alt="Platinum Leaf Left"
          className="h-12 sm:h-16 w-auto object-contain"
        />
        <a
          href="https://www.revenuecat.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={revenueCat}
            alt="Revenue Cat"
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </a>
        <img
          src={platinumLeafRight}
          alt="Platinum Leaf Right"
          className="h-12 sm:h-16 w-auto object-contain"
        />
      </div>
      <div className="h-8 sm:h-14 w-full" />

      {/* Gold Sponsor */}
      <div className="w-full my-4 flex flex-col items-center justify-center relative mb-8">
        <div className="absolute top-1/2 left-1/2 bg-[#FBDD93] px-2 sm:px-4 -translate-x-1/2 -translate-y-1/2 z-10 font-thin uppercase text-base sm:text-lg text-black/60">
          Gold Sponsor
        </div>
        <img
          src={sponsorDivider}
          alt="Divider"
          className="h-6 sm:h-8 w-full max-w-5xl object-contain"
        />
      </div>
      <div className="flex items-center justify-center gap-3 sm:gap-6">
        <img
          src={goldLeafLeft}
          alt="Gold Leaf Left"
          className="h-12 sm:h-16 w-auto object-contain"
        />
        <a
          href="https://boxbox.club/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={boxClub}
            alt="Box Club"
            className="h-12 sm:h-16 w-auto object-contain"
          />
        </a>
        <img
          src={goldLeafRight}
          alt="Gold Leaf Right"
          className="h-12 sm:h-16 w-auto object-contain"
        />
      </div>
      <div className="h-8 sm:h-14 w-full" />

      {/* Silver Sponsors */}
      <div className="w-full my-4 flex flex-col items-center justify-center relative mb-8">
        <div className="absolute top-1/2 left-1/2 bg-[#FBDD93] px-2 sm:px-4 -translate-x-1/2 -translate-y-1/2 z-10 font-thin uppercase text-base sm:text-lg text-black/60">
          Silver Sponsors
        </div>
        <img
          src={sponsorDivider}
          alt="Divider"
          className="h-6 sm:h-8 w-full max-w-5xl object-contain"
        />
      </div>
      <div className="flex items-center justify-center gap-2 sm:gap-4">
        <img
          src={silverLeafLeft}
          alt="Silver Leaf Left"
          className="h-12 sm:h-16 w-auto object-contain"
        />
        <div className="flex xs:flex-row gap-8 sm:gap-36 items-center">
          <a
            href="https://www.mercari.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={mercari}
              alt="Mercari"
              className="h-8 sm:h-10 w-auto object-contain"
            />
          </a>
          <a
            href="https://www.zoho.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={zoho}
              alt="Zoho"
              className="h-8 sm:h-10 w-auto object-contain"
            />
          </a>
          <a
            href="https://signeasy.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={signEasy}
              alt="SignEasy"
              className="h-8 sm:h-10 w-auto object-contain"
            />
          </a>
        </div>
        <img
          src={silverLeafRight}
          alt="Silver Leaf Right"
          className="h-12 sm:h-16 w-auto object-contain"
        />
      </div>
      <div className="h-8 sm:h-14 w-full" />

      {/* Community Sponsors */}
      {/* <div className="w-full my-4 flex flex-col items-center justify-center relative mb-8">
        <div className="absolute top-1/2 left-1/2 bg-[#FBDD93] px-2 sm:px-4 -translate-x-1/2 -translate-y-1/2 z-10 font-thin uppercase text-base sm:text-lg text-black/60">
          Community Sponsors
        </div>
        <img
          src={sponsorDivider}
          alt="Divider"
          className="h-6 sm:h-8 w-full object-contain"
        />
      </div>
      <div className="flex items-center justify-center gap-4 sm:gap-8">
        <img
          src={communityLeafLeft}
          alt="Community Leaf Left"
          className="h-12 sm:h-16 w-auto object-contain"
        />
        <div className="flex gap-8 sm:gap-36 items-center">
          <img
            src={communitySponsor1}
            alt="Community Sponsor 1"
            className="h-12 sm:h-16 w-auto object-contain"
          />
          <img
            src={communitySponsor2}
            alt="Community Sponsor 2"
            className="h-12 sm:h-16 w-auto object-contain"
          />
          <img
            src={communitySponsor3}
            alt="Community Sponsor 3"
            className="h-12 sm:h-16 w-auto object-contain"
          />
        </div>
        <img
          src={communityLeafRight}
          alt="Community Leaf Right"
          className="h-12 sm:h-16 w-auto object-contain"
        />
      </div> */}
      <div className="h-8 sm:h-16 w-full" />
    </section>
  );
};

export default Sponsors;
