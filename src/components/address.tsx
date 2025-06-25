import dateAddressBackground from "@/assets/date-address-background.png";
import { Separator } from "@/components/ui/separator";

const Address = () => {
  return (
    <section
      id="venue"
      className="w-full font-display min-h-[550px] py-8 lg:py-12"
      style={{
        backgroundImage: `url(${dateAddressBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "0% 60%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Map Section */}
          <div className="w-full lg:w-1/2 max-w-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.080780770615!2d77.6352903!3d12.966682599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae141c75792a85%3A0x69f8bae5fe7a6f35!2sBangalore%20International%20Centre!5e0!3m2!1sen!2sin!4v1750828508474!5m2!1sen!2sin"
              className="w-full h-64 md:h-80 lg:h-96 rounded-lg shadow-sm border-none"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info Section */}
          <div className="w-full lg:w-1/2 max-w-xl text-black">
            <h2 className="uppercase font-medium text-base lg:text-lg text-black/60 mb-4">
              Dates
            </h2>
            <h2 className="font-semibold text-4xl md:text-heading-2">
              26th-27th
              <br />
              September, 2025
            </h2>
            <Separator className="my-10 bg-black/20" />
            <h2 className="uppercase font-medium text-base lg:text-lg text-black/60 mb-4">
              Address
            </h2>
            <h2
              className="font-semibold text-4xl md:text-heading-2 cursor-pointer hover:underline"
              onClick={() =>
                window.open(
                  "https://maps.app.goo.gl/oWC7t5cr2ik8VTqdA",
                  "_blank"
                )
              }
              tabIndex={0}
              role="button"
              aria-label="Open Bangalore International Convention Center in Maps"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  window.open(
                    "https://maps.app.goo.gl/oWC7t5cr2ik8VTqdA",
                    "_blank"
                  );
                }
              }}
            >
              Bangalore International Convention Center
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Address;
