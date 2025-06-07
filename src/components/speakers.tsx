import speakersBackground from "@/assets/speakers-background.jpg";
import speakersLeftLogo from "@/assets/svg/speakersLeft.svg";
import speakersRightLogo from "@/assets/svg/speakersRight.svg";

const Speakers = () => {
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
    </section>
  );
};

export default Speakers;
