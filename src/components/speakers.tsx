import speakersBackground from "@/assets/speakers-background.jpg";
import arimaJainImageMobile from "@/assets/speakers/arima-jain-mobile.png";
import arimaJainImage from "@/assets/speakers/arima-jain.png";
import danijelaVrzanImageMobile from "@/assets/speakers/danijela-vrzan-mobile.png";
import danijelaVrzanImage from "@/assets/speakers/danijela-vrzan.png";
import paulHudsonImageMobile from "@/assets/speakers/paul-hudson-mobile.png";
import paulHudsonImage from "@/assets/speakers/paul-hudson.png";
// import peterFrieseImageMobile from "@/assets/speakers/peter-friese-mobile.png";
// import peterFrieseImage from "@/assets/speakers/peter-friese.png";
import krzysztofZabłockiImageMobile from "@/assets/speakers/krzysztof-mobile.png";
import krzysztofZabłockiImage from "@/assets/speakers/krzysztof.png";
import rajaVijayaramanImageMobile from "@/assets/speakers/raja-vijayaraman-mobile.png";
import rajaVijayaramanImage from "@/assets/speakers/raja-vijayaraman.png";
import sandeepRanadeImageMobile from "@/assets/speakers/sandeep-ranade-mobile.png";
import sandeepRanadeImage from "@/assets/speakers/sandeep-ranade.png";
import speakersLeftLogo from "@/assets/svg/speakersLeft.svg";
import speakersRightLogo from "@/assets/svg/speakersRight.svg";
// import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Speakers = () => {
  const speakersOfEvents = [
    {
      id: 1,
      name: "Arima Jain",
      image: arimaJainImage,
      imageMobile: arimaJainImageMobile,
      role: "Founder and CEO of Lil Artist",
      // description: "Learning and sharing at Hacking With Swift, author of Swift.",
      socials: {
        twitter: "https://x.com/ArimaJain",
        // linkedin: "https://www.linkedin.com/in/arimajain/",
      },
    },
    {
      id: 2,
      name: "Danijela Vrzan",
      image: danijelaVrzanImage,
      imageMobile: danijelaVrzanImageMobile,
      role: "iOS Developer, writer and conference speaker",
      // description: "Learning and sharing at Hacking with Swift, author of Swift.",
      socials: {
        twitter: "https://x.com/dvrzan",
        // linkedin: "https://www.linkedin.com/in/johndoe/",
      },
    },
    {
      id: 3,
      name: "Paul Hudson",
      image: paulHudsonImage,
      imageMobile: paulHudsonImageMobile,
      role: "Founder of Hacking With Swift",
      // description: "Learning and sharing at Hacking with Swift, author of Swift.",
      socials: {
        twitter: "https://x.com/twostraws",
        // linkedin: "https://www.linkedin.com/in/johndoe/",
      },
    },
    // {
    //   id: 4,
    //   name: "Peter Friese",
    //   image: peterFrieseImage,
    //   imageMobile: peterFrieseImageMobile,
    //   role: "Author and Staff Developer Advocate on the Firebase at Google",
    //   // description: "Learning and sharing at Hacking with Swift, author of Swift.",
    //   socials: {
    //     twitter: "https://x.com/peterfriese",
    //     // linkedin: "https://www.linkedin.com/in/johndoe/",
    //   },
    // },
    {
      id: 4,
      name: "Krzysztof Zabłocki",
      image: krzysztofZabłockiImage,
      imageMobile: krzysztofZabłockiImageMobile,
      role: "Principal Swift Engineer",
      // description: "Learning and sharing at Hacking with Swift, author of Swift.",
      socials: {
        twitter: "https://x.com/merowing_",
        // linkedin: "https://www.linkedin.com/in/johndoe/",
      },
    },
    {
      id: 5,
      name: "Raja Vijayaraman",
      image: rajaVijayaramanImage,
      imageMobile: rajaVijayaramanImageMobile,
      role: "Apple Design Award Winner and Building Waple Stuff Studio ",
      // description: "Learning and sharing at Hacking with Swift, author of Swift.",
      socials: {
        twitter: "https://x.com/rajavijayaraman",
        // linkedin: "https://www.linkedin.com/in/johndoe/",
      },
    },
    {
      id: 6,
      name: "Sandeep Ranade",
      image: sandeepRanadeImage,
      imageMobile: sandeepRanadeImageMobile,
      role: "Geek-Gayak-Guru, Creator of NaadSadhana (Apple Design Award Winner)",
      // description: "Learning and sharing at Hacking with Swift, author of Swift.",
      socials: {
        twitter: "https://x.com/sandeepranade",
        // linkedin: "https://www.linkedin.com/in/johndoe/",
      },
    },
  ];

  return (
    <section
      id="speakers"
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-y-36 gap-x-6 w-fit justify-items-center px-4 md:px-12">
        {speakersOfEvents.map((speaker) => (
          <div
            key={speaker.id}
            className="relative bg-[#FCE5AF] rounded-2xl pt-24 pb-6 px-6 flex flex-col shadow-md mt-8 h-64 md:h-72 w-full"
          >
            <picture>
              <source media="(max-width: 640px)" srcSet={speaker.imageMobile} />
              <source media="(min-width: 641px)" srcSet={speaker.image} />
              <img
                src={speaker.image}
                alt={speaker.name}
                className="absolute -top-10 sm:-top-18 md:-top-36 -left-3 sm:-left-1 w-full h-auto max-w-[240px] sm:max-w-[160px] md:max-w-[240px] rounded-lg object-contain"
                style={{ maxHeight: "100%", width: "100%" }}
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
              {/* <a
                href={speaker.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F5DB9F] p-3 rounded-full"
              >
                <FaLinkedinIn className="w-5 h-5 text-black" />
              </a> */}
            </div>

            <div className="mt-auto flex flex-col">
              <h3 className="text-xl font-medium text-black">{speaker.name}</h3>
              <p className="text-[#CB6A31] text-sm font-medium">
                {speaker.role}
              </p>
              <p className="text-gray-700 text-sm">
                {/* {speaker.description} */}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Speakers;
