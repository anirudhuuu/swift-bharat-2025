import speakersBackground from "@/assets/speakers-background.jpg";
import speakersLeftLogo from "@/assets/svg/speakersLeft.svg";
import speakersRightLogo from "@/assets/svg/speakersRight.svg";
import arimaJainImage from "@/assets/speakers/arima-jain.svg";
import danijelaVrzanImage from "@/assets/speakers/danijela-vrzan.svg";
import paulHudsonImage from "@/assets/speakers/paul-hudson.svg";
import peterFrieseImage from "@/assets/speakers/peter-friese.svg";
import rajaVijayaramanImage from "@/assets/speakers/raja-vijayaraman.svg";
import sandeepRanadeImage from "@/assets/speakers/sandeep-ranade.svg";

const Speakers = () => {
  const speakersOfEvents = [
    {
      id: 1,
      name: "Arima Jain",
      image: arimaJainImage,
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
      className="flex flex-col items-center justify-center w-[calc(100vw-80px)] mt-12 mx-auto px-4 py-12 rounded-3xl"
      aria-labelledby="speakers-heading"
      style={{
        backgroundImage: `url(${speakersBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-between max-w-fit gap-8 mb-8">
        <img src={speakersLeftLogo} alt="left arrow" />
        <h2
          id="speakers-heading"
          className="font-bold text-3xl sm:text-5xl text-center mb-4 text-[#F5DB9F]"
        >
          Speakers
        </h2>
        <img src={speakersRightLogo} alt="right arrow" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-items-center">
        {speakersOfEvents.map((speaker) => (
          <div
            key={speaker.id}
            className="flex flex-col items-center mb-8 max-w-md"
          >
            <img
              src={speaker.image}
              alt={speaker.name}
              className="w-32 h-32 rounded-full mb-4"
            />
            <div className="flex gap-4">
              {speaker.socials.twitter && (
                <a
                  href={speaker.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Twitter
                </a>
              )}
              {speaker.socials.linkedin && (
                <a
                  href={speaker.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  LinkedIn
                </a>
              )}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {speaker.name}
            </h3>
            <p className="text-gray-300 text-center mb-2">{speaker.role}</p>
            <p className="text-gray-400 text-center mb-4">
              {speaker.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Speakers;
