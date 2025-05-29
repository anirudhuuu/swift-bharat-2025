import dateAddressBackground from "@/assets/date-address-background.png";
import Heading from "@/components/heading";
import { Separator } from "@/components/ui/separator";

const Address = () => {
  return (
    <div
      className="flex flex-col w-full font-display min-h-[550px]"
      style={{
        backgroundImage: `url(${dateAddressBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "0% 60%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-xl mx-auto mt-12 px-6 md:px-12 text-black">
        <h2 className="uppercase font-medium text-base lg:text-lg text-black/60 mb-4">
          Dates
        </h2>
        <Heading fontWeight="semibold" mdFontSize="text-heading-2">
          15th-17th
          <br />
          September, 2025
        </Heading>
        <Separator className="my-10 bg-black/20" />
        <h2 className="uppercase font-medium text-base lg:text-lg text-black/60 mb-4">
          Address
        </h2>
        <Heading fontWeight="semibold" mdFontSize="text-heading-2">
          Bangalore International Convention Center
        </Heading>
      </div>
    </div>
  );
};

export default Address;
