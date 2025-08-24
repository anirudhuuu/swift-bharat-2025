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
import communityLeafLeft from "@/assets/svg/community-left.svg";
import communitySponsor1 from "@/assets/svg/community-sponsor-1.svg";
import communitySponsor2 from "@/assets/svg/community-sponsor-2.svg";
import communitySponsor3 from "@/assets/svg/community-sponsor-3.svg";
import communityLeafRight from "@/assets/svg/community-right.svg";

const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="flex flex-col items-center px-4 py-12"
      style={{
        backgroundImage: `url(${sponsorsBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "80% center",
        backgroundRepeat: "no-repeat",
        minHeight: "1500px",
        maxHeight: "2000px",
      }}
    >
      <h2 className="font-bold text-3xl sm:text-5xl text-center mb-8">
        Sponsors
      </h2>
      <div className="w-full my-4 flex flex-col items-center justify-center relative">
        <div className="absolute top-1/2 left-1/2 bg-[#FBDD93] px-4 -translate-x-1/2 -translate-y-1/2 z-10 font-thin uppercase text-lg text-black/60">
          Platinum Sponsor
        </div>
        <img
          src={sponsorDivider}
          alt="Divider"
          className="h-6 sm:h-8 w-full object-contain"
        />
      </div>
      <div className="w-full my-4 flex flex-col items-center justify-center relative">
        <div className="absolute top-1/2 left-1/2 bg-[#FBDD93] px-4 -translate-x-1/2 -translate-y-1/2 z-10 font-thin uppercase text-lg text-black/60">
          Gold Sponsor
        </div>
        <img
          src={sponsorDivider}
          alt="Divider"
          className="h-6 sm:h-8 w-full object-contain"
        />
      </div>
      <div className="w-full my-4 flex flex-col items-center justify-center relative">
        <div className="absolute top-1/2 left-1/2 bg-[#FBDD93] px-4 -translate-x-1/2 -translate-y-1/2 z-10 font-thin uppercase text-lg text-black/60">
          Silver Sponsors
        </div>
        <img
          src={sponsorDivider}
          alt="Divider"
          className="h-6 sm:h-8 w-full object-contain"
        />
      </div>
      <div className="w-full my-4 flex flex-col items-center justify-center relative">
        <div className="absolute top-1/2 left-1/2 bg-[#FBDD93] px-4 -translate-x-1/2 -translate-y-1/2 z-10 font-thin uppercase text-lg text-black/60">
          Community Sponsors
        </div>
        <img
          src={sponsorDivider}
          alt="Divider"
          className="h-6 sm:h-8 w-full object-contain"
        />
      </div>
    </section>
  );
};

export default Sponsors;
