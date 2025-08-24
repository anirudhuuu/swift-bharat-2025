import sponsorsBackground from "@/assets/green-lush-background.png";
import sponsorDivider from "@/assets/svg/sponsor-divider.svg";

const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="flex flex-col items-center px-4 py-12 min-h-[2650px]"
      style={{
        backgroundImage: `url(${sponsorsBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "50% center",
        backgroundRepeat: "no-repeat",
        minHeight: "800px",
        maxHeight: "2200px",
      }}
    >
      <h2 className="font-bold text-3xl sm:text-5xl text-center mb-16">
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
