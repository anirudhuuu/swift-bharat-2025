import { Separator } from "@/components/ui/separator";
import dateAddressBackground from "@/assets/date-address-background.png";

const Address = () => {
  return (
    <div
      className="flex flex-col w-full font-display min-h-[590px]"
      style={{
        backgroundImage: `url(${dateAddressBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "0% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-2xl mx-auto mt-12 px-6 md:px-12 text-black">
        <h2 className="uppercase font-normal text-base lg:text-lg text-black/60 mb-4">
          Dates
        </h2>
        <p className="font-semibold text-3xl lg:text-5xl leading-tight">
          15th-17th
          <br />
          September, 2025
        </p>
        <Separator className="my-10 bg-black/20" />
        <h2 className="uppercase font-normal text-base lg:text-lg text-black/60 mb-4">
          Address
        </h2>
        <p className="font-semibold text-3xl lg:text-5xl leading-tight">
          Bangalore International Convention Center
        </p>
      </div>
    </div>
  );
};

export default Address;
