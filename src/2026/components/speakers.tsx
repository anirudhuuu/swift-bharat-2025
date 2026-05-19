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
  <section id="speakers" className="px-4 py-16 md:px-8 md:py-24">
    <div className="mx-auto max-w-[1222px] rounded-[64px] bg-card-accent px-6 py-12 md:rounded-[102px] md:px-12 md:py-16">
      <SectionTitle className="mx-auto block w-fit text-center text-lime">
        speakers
      </SectionTitle>

      <ul className="mt-10 grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {speakers.map((speaker) => (
          <li key={speaker.firstName}>
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
    <article>
      <div className="relative mx-auto aspect-244/308 w-full max-w-[244px]">
        <img
          src={stamp}
          alt=""
          className="absolute inset-0 h-full w-full"
          aria-hidden
        />
        <div className="absolute inset-[10%] overflow-hidden rounded-[26px]">
          <img
            src={speaker.image}
            alt={`${speaker.firstName} ${speaker.lastName}`}
            className={`h-full w-full object-cover ${speaker.imagePosition}`}
          />
        </div>
      </div>
      <div className="mt-5 text-white">
        <p className="text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-none">
          {speaker.firstName}
        </p>
        <p className="mt-1 font-speaker-surname text-2xl font-normal leading-10 text-white">
          {speaker.lastName}
        </p>
        <p className="mt-2 text-base font-light text-lime md:text-lg">
          {speaker.role}
        </p>
      </div>
    </article>
  );
}

export default Speakers;
