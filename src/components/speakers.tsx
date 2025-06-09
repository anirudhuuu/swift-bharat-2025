import speakersBackground from "@/assets/speakers-background.jpg";
import arimaJainImage from "@/assets/speakers/arima-jain.svg";
import arimaJainImageMobile from "@/assets/speakers/arima-jain-mobile.svg";
import danijelaVrzanImage from "@/assets/speakers/danijela-vrzan.svg";
import danijelaVrzanImageMobile from "@/assets/speakers/danijela-vrzan-mobile.svg";
import paulHudsonImage from "@/assets/speakers/paul-hudson.svg";
import paulHudsonImageMobile from "@/assets/speakers/paul-hudson-mobile.svg";
import peterFrieseImage from "@/assets/speakers/peter-friese.svg";
import peterFrieseImageMobile from "@/assets/speakers/peter-friese-mobile.svg";
import rajaVijayaramanImage from "@/assets/speakers/raja-vijayaraman.svg";
import rajaVijayaramanImageMobile from "@/assets/speakers/raja-vijayaraman-mobile.svg";
import sandeepRanadeImage from "@/assets/speakers/sandeep-ranade.svg";
import sandeepRanadeImageMobile from "@/assets/speakers/sandeep-ranade-mobile.svg";
import speakersLeftLogo from "@/assets/svg/speakersLeft.svg";
import speakersRightLogo from "@/assets/svg/speakersRight.svg";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Speakers = () => {
  const speakersOfEvents = [
    {
      id: 1,
      name: "Arima Jain",
      image: arimaJainImage,
      imageMobile: arimaJainImageMobile,
      role: "Founder of Hacking With Swift",
      description:
        "Learning and sharing at Hacking With Swift, author of Swift.",
      socials: {
        twitter: "https://twitter.com/arimajain",
        linkedin: "https://www.linkedin.com/in/arimajain/",
      },
    },
    {
      id: 2,
      name: "Danijela Vrzan",
      image: danijelaVrzanImage,
      imageMobile: danijelaVrzanImageMobile,
      role: "Founder of Hacking With Swift",
      description:
        "Learning and sharing at Hacking with Swift, author of Swift.",
      socials: {
        twitter: "https://twitter.com/johndoe",
        linkedin: "https://www.linkedin.com/in/johndoe/",
      },
    },
    {
      id: 3,
      name: "Paul Hudson",
      image: paulHudsonImage,
      imageMobile: paulHudsonImageMobile,
      role: "Founder of Hacking With Swift",
      description:
        "Learning and sharing at Hacking with Swift, author of Swift.",
      socials: {
        twitter: "https://twitter.com/johndoe",
        linkedin: "https://www.linkedin.com/in/johndoe/",
      },
    },
    {
      id: 4,
      name: "Peter Friese",
      image: peterFrieseImage,
      imageMobile: peterFrieseImageMobile,
      role: "Founder of Hacking With Swift",
      description:
        "Learning and sharing at Hacking with Swift, author of Swift.",
      socials: {
        twitter: "https://twitter.com/johndoe",
        linkedin: "https://www.linkedin.com/in/johndoe/",
      },
    },
    {
      id: 5,
      name: "Raja Vijayaraman",
      image: rajaVijayaramanImage,
      imageMobile: rajaVijayaramanImageMobile,
      role: "Founder of Hacking With Swift",
      description:
        "Learning and sharing at Hacking with Swift, author of Swift.",
      socials: {
        twitter: "https://twitter.com/johndoe",
        linkedin: "https://www.linkedin.com/in/johndoe/",
      },
    },
    {
      id: 6,
      name: "Sandeep Ranade",
      image: sandeepRanadeImage,
      imageMobile: sandeepRanadeImageMobile,
      role: "Founder of Hacking With Swift",
      description:
        "Learning and sharing at Hacking with Swift, author of Swift.",
      socials: {
        twitter: "https://twitter.com/johndoe",
        linkedin: "https://www.linkedin.com/in/johndoe/",
      },
    },
  ];

  return (
    <section
      className="flex flex-col items-center justify-center w-[calc(100vw-5%)] mt-12 mx-auto px-4 py-12 rounded-3xl"
      aria-labelledby="speakers-heading"
      style={{
        backgroundImage: `url(${speakersBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-between max-w-fit gap-8 mb-8">
        <img
          src={speakersLeftLogo}
          alt="left arrow"
          className="w-10 sm:w-18 md:w-auto"
        />
        <h2
          id="speakers-heading"
          className="font-bold text-3xl md:text-5xl text-[#F5DB9F]"
        >
          Speakers
        </h2>
        <img
          src={speakersRightLogo}
          alt="right arrow"
          className="w-10 sm:w-18 md:w-auto"
        />
      </div>

      <div className="h-24" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-28 gap-x-6 w-fit justify-items-center">
        {speakersOfEvents.map((speaker) => (
          <div
            key={speaker.id}
            className="relative bg-[#FCE5AF] rounded-2xl pt-24 pb-6 px-6 flex flex-col shadow-md h-64 md:h-72"
          >
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet={speaker.imageMobile || speaker.image}
              />
              <img
                src={speaker.image}
                alt={speaker.name}
                className="absolute -top-24 md:-top-28 -left-2 w-auto sm:w-40 md:w-auto object-cover rounded-lg"
              />
            </picture>

            <div className="flex justify-end space-x-2 mt-2 md:absolute md:top-4 md:right-4 md:mt-0">
              <a
                href={speaker.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F5DB9F] p-3 rounded-full"
              >
                <FaXTwitter className="w-5 h-5 text-black" />
              </a>
              <a
                href={speaker.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F5DB9F] p-3 rounded-full"
              >
                <FaLinkedinIn className="w-5 h-5 text-black" />
              </a>
            </div>

            <div className="mt-auto flex flex-col">
              <h3 className="text-xl font-medium text-black">{speaker.name}</h3>
              <p className="text-[#CB6A31] text-sm font-medium">
                {speaker.role}
              </p>
              <p className="text-gray-700 text-sm">{speaker.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Speakers;
