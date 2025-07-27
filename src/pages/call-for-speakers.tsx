import callForSpeakers from "@/assets/call-for-speakers.png";
import speakersBackground from "@/assets/speakers-background.jpg";
import swiftBharatLogo from "@/assets/svg/swiftLogo-yellow.svg";
import Footer from "@/components/footer";
import { Link } from "react-router-dom";

const CallForSpeakers = () => {
  return (
    <div className="flex flex-col justify-start items-start font-display w-full">
      <section className="w-full flex flex-col items-center px-8 md:px-24 py-16">
        <div className="flex flex-col items-center text-center mb-8">
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-7 md:mb-8"
          >
            <img
              src={swiftBharatLogo}
              alt="Swift Bharat"
              loading="lazy"
              className="w-[60px] h-[60px] md:w-[80px] md:h-[80px]"
            />
            <span className="font-samarkan text-3xl md:text-5xl text-[#0A451C]">
              Swift Bharat
            </span>
          </Link>
          <p className="font-light text-xs md:text-sm text-black/60">
            Meet experts from Apple and the global Swift community.
          </p>
          <p className="font-light text-xs md:text-sm text-black/60">
            Learn, build, and connect over two packed days.
          </p>
        </div>

        <div className="w-full max-w-5xl">
          <div
            className="relative rounded-3xl p-8 md:p-16 overflow-hidden bg-cover bg-center"
            style={{
              backgroundImage: `url(${speakersBackground})`,
              imageRendering: "auto",
            }}
          >
            <div className="flex justify-center mb-8">
              <img
                src={callForSpeakers}
                alt="Call for Speakers"
                className="object-cover w-52 md:w-72 lg:w-96 h-auto"
              />
            </div>

            <div className="text-center flex flex-col gap-y-2">
              <p className="uppercase font-normal text-xs md:text-sm text-[#FCE5AFCC]">
                Submissions close on August 15, 2025
              </p>
              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-7 md:mb-8 text-[#FCE5AF] cursor-pointer hover:underline"
                onClick={() =>
                  window.open(
                    "https://www.papercall.io/swift-bharat-2025",
                    "_blank"
                  )
                }
                tabIndex={0}
                role="button"
                aria-label="Open Bangalore International Convention Center in Maps"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    window.open(
                      "https://www.papercall.io/swift-bharat-2025",
                      "_blank"
                    );
                  }
                }}
              >
                Call for Speakers
              </h2>
            </div>
          </div>
        </div>

        <div className="w-full max-w-5xl mt-6 sm:mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-8">
          <div className="w-fit">
            <h2 className="uppercase font-normal text-base lg:text-lg text-black/60 mb-1">
              Dates
            </h2>
            <h2 className="font-medium text-xl">26th-27th September, 2025</h2>
          </div>
          <div className="w-fit">
            <h2 className="uppercase font-normal text-base lg:text-lg text-black/60 mb-1">
              Venue
            </h2>
            <h2
              className="font-medium text-xl cursor-pointer hover:underline"
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
              Bangalore International Centre
            </h2>
          </div>
        </div>
      </section>

      <div className="h-8" />
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default CallForSpeakers;
