import speakersBackground from "@/assets/speakers-background.jpg";
import arimaJainImageMobile from "@/assets/speakers/arima-jain-mobile.png";
import arimaJainImage from "@/assets/speakers/arima-jain.png";
import charlieChapmanImageMobile from "@/assets/speakers/charlie-chapman-mobile.png";
import charlieChapmanImage from "@/assets/speakers/charlie-chapman.png";
import chiraayuKPandyaImageMobile from "@/assets/speakers/chiraayu-k-pandya-mobile.png";
import chiraayuKPandyaImage from "@/assets/speakers/chiraayu-k-pandya.png";
import curtCliftonImageMobile from "@/assets/speakers/curt-clifton-mobile.png";
import curtCliftonImage from "@/assets/speakers/curt-clifton.png";
import danijelaVrzanImageMobile from "@/assets/speakers/danijela-vrzan-mobile.png";
import danijelaVrzanImage from "@/assets/speakers/danijela-vrzan.png";
import garimaBothraImageMobile from "@/assets/speakers/garima-bothra-mobile.png";
import garimaBothraImage from "@/assets/speakers/garima-bothra.png";
import hariomPalkarImageMobile from "@/assets/speakers/hariom-palkar-mobile.png";
import hariomPalkarImage from "@/assets/speakers/hariom-palkar.png";
import harshilShahImageMobile from "@/assets/speakers/harshil-shah-mobile.png";
import harshilShahImage from "@/assets/speakers/harshil-shah.png";
import joshHoltzImageMobile from "@/assets/speakers/josh-holtz-mobile.png";
import joshHoltzImage from "@/assets/speakers/josh-holtz.png";
import kamalKumarImageMobile from "@/assets/speakers/kamal-kumar-mobile.png";
import kamalKumarImage from "@/assets/speakers/kamal-kumar.png";
import krzysztofZabłockiImageMobile from "@/assets/speakers/krzysztof-mobile.png";
import krzysztofZabłockiImage from "@/assets/speakers/krzysztof.png";
import paulHudsonImageMobile from "@/assets/speakers/paul-hudson-mobile.png";
import paulHudsonImage from "@/assets/speakers/paul-hudson.png";
// import placeholderImageMobile from "@/assets/speakers/placeholder-mobile.png";
// import placeholderImage from "@/assets/speakers/placeholder.png";
import rajaVijayaramanImageMobile from "@/assets/speakers/raja-vijayaraman-mobile.png";
import rajaVijayaramanImage from "@/assets/speakers/raja-vijayaraman.png";
import sandeepRanadeImageMobile from "@/assets/speakers/sandeep-ranade-mobile.png";
import sandeepRanadeImage from "@/assets/speakers/sandeep-ranade.png";
import speakersLeftLogo from "@/assets/svg/speakersLeft.svg";
import speakersRightLogo from "@/assets/svg/speakersRight.svg";
import peterSteinbergerImage from "@/assets/speakers/peter-steinberger.png";
import peterSteinbergerImageMobile from "@/assets/speakers/peter-steinberger-mobile.png";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";

const speakersOfEvents = [
  {
    id: 1,
    name: "Arima Jain",
    image: arimaJainImage,
    imageMobile: arimaJainImageMobile,
    role: "Founder and CEO of Lil Artist",
    socials: {
      twitter: "https://x.com/ArimaJain",
      linkedIn: "https://www.linkedin.com/in/arima-jain-562802240/",
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
      linkedIn: "https://www.linkedin.com/in/dvrzan/",
    },
  },
  {
    id: 3,
    name: "Paul Hudson",
    image: paulHudsonImage,
    imageMobile: paulHudsonImageMobile,
    role: "Founder of Hacking with Swift",
    socials: {
      twitter: "https://x.com/twostraws",
      linkedIn: "https://www.linkedin.com/in/twostraws/",
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
      linkedIn: "https://www.linkedin.com/in/merowing/",
    },
  },
  {
    id: 5,
    name: "Raja Vijayaraman",
    image: rajaVijayaramanImage,
    imageMobile: rajaVijayaramanImageMobile,
    role: "Apple Design Award Winner · Building Waple Stuff Studio ",
    socials: {
      twitter: "https://x.com/rajavijayaraman",
      linkedIn: "https://www.linkedin.com/in/rajavijayaraman/",
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
      linkedIn: "https://www.linkedin.com/in/sandeepranade/",
    },
  },
  {
    id: 7,
    name: "Charlie Chapman",
    image: charlieChapmanImage,
    imageMobile: charlieChapmanImageMobile,
    role: "Dev Advocate, RevenueCat · Creator of Dark Noise App",
    socials: {
      twitter: "https://x.com/_chuckyc",
      linkedIn: "https://www.linkedin.com/in/charliemchapman/",
    },
  },
  {
    id: 8,
    name: "Josh Holtz",
    image: joshHoltzImage,
    imageMobile: joshHoltzImageMobile,
    role: "Engineering Manager RevenueCat · Deep Dish Swift",
    socials: {
      twitter: "https://x.com/joshdholtz",
      linkedIn: "https://www.linkedin.com/in/josh-holtz-771b582a/",
    },
  },
  {
    id: 9,
    name: "Garima Bothra",
    image: garimaBothraImage,
    imageMobile: garimaBothraImageMobile,
    role: "SDE 2 Swiggy · SSC 21 Winner",
    socials: {
      twitter: "https://x.com/garimabothraa",
      linkedIn: "https://www.linkedin.com/in/garima-bothra/",
    },
  },
  {
    id: 10,
    name: "Hariom Palkar",
    image: hariomPalkarImage,
    imageMobile: hariomPalkarImageMobile,
    role: "Sr iOS Engineer and Product at Swiggy · Logitech Speaker",
    socials: {
      linkedIn: "https://www.linkedin.com/in/hariompalkar/",
    },
  },
  {
    id: 11,
    name: "Chiraayu K Pandya",
    image: chiraayuKPandyaImage,
    imageMobile: chiraayuKPandyaImageMobile,
    role: "Category Head India, Logitech",
    socials: {
      linkedIn: "https://www.linkedin.com/in/chiraayu-k-pandya-a5577577/",
    },
  },
  {
    id: 12,
    name: "Kamal Kumar",
    image: kamalKumarImage,
    imageMobile: kamalKumarImageMobile,
    role: "Co-Founder & Developer, Box Box Club",
    socials: {
      twitter: "https://x.com/kamal_k2",
      linkedIn: "https://www.linkedin.com/in/lkamalkumar/",
    },
  },
  {
    id: 13,
    name: "Curt Clifton",
    image: curtCliftonImage,
    imageMobile: curtCliftonImageMobile,
    role: "App Technologies Evangelist, Apple",
    socials: {
      twitter: "https://x.com/curtclifton",
      linkedIn: "https://www.linkedin.com/in/curtclifton/",
    },
  },
  {
    id: 14,
    name: "Harshil Shah",
    image: harshilShahImage,
    imageMobile: harshilShahImageMobile,
    role: "Indie iOS Developer · Creator of Peak",
    socials: {
      twitter: "https://x.com/Harshil",
      linkedIn: "https://www.linkedin.com/in/ThisIsHarshil/",
    },
  },
  {
    id: 15,
    name: "Peter Steinberger",
    image: peterSteinbergerImage,
    imageMobile: peterSteinbergerImageMobile,
    role: "Employs AI, Agent Whisperer · Full-Time Open-Sorcerer",
    socials: {
      twitter: "https://x.com/steipete",
      linkedIn: "https://www.linkedin.com/in/steipete/",
    },
  },
];

// Sort speakers alphabetically by name
const sortedSpeakers = [...speakersOfEvents].sort((a, b) =>
  a.name.localeCompare(b.name, "en", { sensitivity: "base" })
);

const SpeakerCard = ({
  speaker,
}: {
  speaker: (typeof speakersOfEvents)[0];
}) => (
  <div className="relative bg-[#FCE5AF] rounded-2xl flex flex-col shadow-md mt-8 w-full">
    <div className="flex items-end justify-between relative px-3">
      <picture>
        <source media="(max-width: 640px)" srcSet={speaker.imageMobile} />
        <source media="(min-width: 641px)" srcSet={speaker.image} />
        <img
          src={speaker.image}
          alt={speaker.name}
          loading="lazy"
          className="w-48 h-48 absolute -top-24 left-0 object-contain"
        />
      </picture>
      <div className="flex justify-center space-x-2 mt-4">
        {(!speaker.socials.twitter && !speaker.socials.linkedIn) ||
        (speaker.socials.twitter?.length === 0 &&
          speaker.socials.linkedIn?.length === 0) ? (
          <div className="w-5 h-12 p-3" />
        ) : (
          <>
            {speaker.socials.twitter && speaker.socials.twitter.length > 0 && (
              <a
                href={speaker.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F5DB9F] p-3 rounded-full hover:bg-[#F5DB9F]/80 transition-colors"
                aria-label={`Follow ${speaker.name} on Twitter`}
              >
                <FaXTwitter className="w-3 h-3 md:w-5 md:h-5 text-black" />
              </a>
            )}
            {speaker.socials.linkedIn &&
              speaker.socials.linkedIn.length > 0 && (
                <a
                  href={speaker.socials.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#F5DB9F] p-3 rounded-full hover:bg-[#F5DB9F]/80 transition-colors"
                  aria-label={`Follow ${speaker.name} on LinkedIn`}
                >
                  <FaLinkedin className="w-3 h-3 md:w-5 md:h-5 text-black" />
                </a>
              )}
          </>
        )}
      </div>
    </div>
    {/* Info below */}
    <div className="flex flex-col items-start px-6 py-6 mt-2">
      <h3 className="text-xl font-medium text-black">{speaker.name}</h3>
      <p className="text-[#CB6A31] text-sm font-medium mt-1">{speaker.role}</p>
    </div>
  </div>
);

const Speakers = () => {
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
        <img
          src={speakersLeftLogo}
          alt="left arrow"
          className="w-16 lg:w-20"
          loading="lazy"
        />
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
          loading="lazy"
        />
      </div>

      <div className="h-14" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-18 md:gap-y-22 gap-x-6 w-fit justify-items-center px-4 md:px-12">
        {sortedSpeakers.map((speaker) => (
          <SpeakerCard key={speaker.id} speaker={speaker} />
        ))}
      </div>
    </section>
  );
};

export default Speakers;
