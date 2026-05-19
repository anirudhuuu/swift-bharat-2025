import speaker1 from "@/assets/2026/speakers/speaker-1.png";
import speaker2 from "@/assets/2026/speakers/speaker-2.png";
import speaker3 from "@/assets/2026/speakers/speaker-3.png";
import stamp from "@/assets/2026/svg/stamp.svg";
import SectionTitle from "@/2026/components/section-title";

const speakers = [
  {
    firstName: "Donny",
    lastName: "Wals",
    role: "Founder of Hacking With Swift",
    imagePosition: "object-[18%_center]",
    image: speaker1,
  },
  {
    firstName: "Monika",
    lastName: "Mateska",
    role: "Founder of Hacking With Swift",
    imagePosition: "object-[48%_center]",
    image: speaker2,
  },
  {
    firstName: "Marcin",
    lastName: "Krzyzanowski",
    role: "Founder of Hacking With Swift",
    imagePosition: "object-[78%_center]",
    image: speaker3,
  },
] as const;

const Speakers = () => (
  <section
    id="speakers"
    className="px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-10 lg:py-24"
  >
    <div className="mx-auto w-full max-w-[1222px] rounded-4xl bg-card-accent px-4 py-8 sm:rounded-[3rem] sm:px-6 sm:py-10 md:rounded-[4rem] md:px-10 md:py-14 lg:rounded-[5rem] lg:px-12 lg:py-16 xl:rounded-[6.375rem]">
      <SectionTitle className="mx-auto block w-fit text-center text-lime">
        speakers
      </SectionTitle>

      <ul className="mt-6 grid grid-cols-1 gap-10 sm:mt-8 sm:grid-cols-2 sm:gap-8 md:mt-10 md:gap-10 lg:grid-cols-3 lg:gap-8">
        {speakers.map((speaker) => (
          <li key={speaker.firstName} className="flex justify-center lg:justify-start">
            <SpeakerCard speaker={speaker} />
          </li>
        ))}
      </ul>
    </div>
  </section>
);

function SpeakerCard({
  speaker,
}: {
  speaker: (typeof speakers)[number];
}) {
  return (
    <article className="flex w-full max-w-[280px] flex-col sm:max-w-none">
      <div className="relative mx-auto aspect-244/308 w-full max-w-44 sm:max-w-54 md:max-w-61">
        <img
          src={stamp}
          alt=""
          className="absolute inset-0 h-full w-full"
          aria-hidden
        />
        <div className="absolute inset-[10%] overflow-hidden rounded-[18px] sm:rounded-[22px] md:rounded-[26px]">
          <img
            src={speaker.image}
            alt={`${speaker.firstName} ${speaker.lastName}`}
            className={`h-full w-full object-cover ${speaker.imagePosition}`}
          />
        </div>
      </div>
      <div className="mt-4 w-full text-white sm:mt-5">
        <p className="text-3xl font-semibold leading-none sm:text-4xl md:text-5xl lg:text-6xl">
          {speaker.firstName}
        </p>
        <p className="mt-1 font-speaker-surname text-xl font-normal leading-8 text-white sm:text-2xl sm:leading-10">
          {speaker.lastName}
        </p>
        <p className="mt-2 text-sm font-light text-lime sm:text-base md:text-lg">
          {speaker.role}
        </p>
      </div>
    </article>
  );
}

export default Speakers;
