import speakersBackground from "@/assets/speakers-background.jpg";
import arimaJainImageMobile from "@/assets/speakers/arima-jain-mobile.png";
import arimaJainImage from "@/assets/speakers/arima-jain.png";
import danijelaVrzanImageMobile from "@/assets/speakers/danijela-vrzan-mobile.png";
import danijelaVrzanImage from "@/assets/speakers/danijela-vrzan.png";
import krzysztofZabłockiImageMobile from "@/assets/speakers/krzysztof-mobile.png";
import krzysztofZabłockiImage from "@/assets/speakers/krzysztof.png";
import paulHudsonImageMobile from "@/assets/speakers/paul-hudson-mobile.png";
import paulHudsonImage from "@/assets/speakers/paul-hudson.png";
import rajaVijayaramanImageMobile from "@/assets/speakers/raja-vijayaraman-mobile.png";
import rajaVijayaramanImage from "@/assets/speakers/raja-vijayaraman.png";
import sandeepRanadeImageMobile from "@/assets/speakers/sandeep-ranade-mobile.png";
import sandeepRanadeImage from "@/assets/speakers/sandeep-ranade.png";
import speakersLeftLogo from "@/assets/svg/speakersLeft.svg";
import speakersRightLogo from "@/assets/svg/speakersRight.svg";
import { FaXTwitter } from "react-icons/fa6";

const Speakers = () => {
  const speakersOfEvents = [
    {
      id: 1,
      name: "Arima Jain",
      image: arimaJainImage,
      imageMobile: arimaJainImageMobile,
      role: "Founder and CEO of Lil Artist",
      socials: {
        twitter: "https://x.com/ArimaJain",
      },
    },
    {
      id: 2,
      name: "Danijela Vrzan",
      image: danijelaVrzanImage,
      imageMobile: danijelaVrzanImageMobile,
      role: "iOS Developer, writer and conference speaker",
      socials: {
        twitter: "https://x.com/dvrzan",
      },
    },
    {
      id: 3,
      name: "Paul Hudson",
      image: paulHudsonImage,
      imageMobile: paulHudsonImageMobile,
      role: "Founder of Hacking With Swift",
      socials: {
        twitter: "https://x.com/twostraws",
      },
    },
    {
      id: 4,
      name: "Krzysztof Zabłocki",
      image: krzysztofZabłockiImage,
      imageMobile: krzysztofZabłockiImageMobile,
      role: "Principal Swift Engineer",
      socials: {
        twitter: "https://x.com/merowing_",
      },
    },
    {
      id: 5,
      name: "Raja Vijayaraman",
      image: rajaVijayaramanImage,
      imageMobile: rajaVijayaramanImageMobile,
      role: "Apple Design Award Winner and Building Waple Stuff Studio ",
      socials: {
        twitter: "https://x.com/rajavijayaraman",
      },
    },
    {
      id: 6,
      name: "Sandeep Ranade",
      image: sandeepRanadeImage,
      imageMobile: sandeepRanadeImageMobile,
      role: "Geek-Gayak-Guru, Creator of NaadSadhana (Apple Design Award Winner)",
      socials: {
        twitter: "https://x.com/sandeepranade",
      },
    },
  ];

  return (
    <section
      id="speakers"
      className="flex flex-col items-center justify-center w-[calc(100vw-10%)] mt-12 mx-auto px-4 py-12 rounded-3xl bg-cover bg-center sm:bg-[auto_100%]"
      aria-labelledby="speakers-heading"
      style={{
        backgroundImage: `url(${speakersBackground})`,
        imageRendering: "auto",
      }}
    >
      <div className="flex justify-between items-center max-w-fit gap-8 mb-8">
        <img src={speakersLeftLogo} alt="left arrow" className="w-16 lg:w-20" />
        <h2
          id="speakers-heading"
          className="font-bold text-3xl md:text-4xl lg:text-5xl text-[#F5DB9F]"
        >
          Speakers
        </h2>
        <img
          src={speakersRightLogo}
          alt="right arrow"
          className="w-16 lg:w-20"
        />
      </div>

      <div className="h-14" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-18 md:gap-y-22 gap-x-6 w-fit justify-items-center px-4 md:px-12">
        {speakersOfEvents.map((speaker) => (
          <div
            key={speaker.id}
            className="relative bg-[#FCE5AF] rounded-2xl flex flex-col shadow-md mt-8 w-full"
          >
            <div className="flex items-end justify-between relative px-3">
              <picture>
                <source
                  media="(max-width: 640px)"
                  srcSet={speaker.imageMobile}
                />
                <source media="(min-width: 641px)" srcSet={speaker.image} />
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-48 h-48 absolute -top-24 left-0 object-contain"
                />
              </picture>
              <div className="flex justify-center space-x-2 mt-4">
                <a
                  href={speaker.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#F5DB9F] p-3 rounded-full"
                >
                  <FaXTwitter className="w-5 h-5 text-black" />
                </a>
              </div>
            </div>
            {/* Info below */}
            <div className="flex flex-col items-start px-6 py-6 mt-2">
              <h3 className="text-xl font-medium text-black">{speaker.name}</h3>
              <p className="text-[#CB6A31] text-sm font-medium mt-1">
                {speaker.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Speakers;
