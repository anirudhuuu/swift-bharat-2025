import SectionTitle from "@/2026/components/section-title";
import speaker1 from "@/assets/2026/speakers/speaker-1.webp";
import speaker1_2x from "@/assets/2026/speakers/speaker-1@2x.webp";
import speaker1_3x from "@/assets/2026/speakers/speaker-1@3x.webp";
import speaker2 from "@/assets/2026/speakers/speaker-2.webp";
import speaker2_2x from "@/assets/2026/speakers/speaker-2@2x.webp";
import speaker2_3x from "@/assets/2026/speakers/speaker-2@3x.webp";
import speaker3 from "@/assets/2026/speakers/speaker-3.webp";
import stamp from "@/assets/2026/svg/stamp.svg";

/** Shared card + stamp width (176px → 216px → 244px). */
const SPEAKER_CARD_CLASS = "w-full max-w-44 sm:max-w-54 md:max-w-61";

/** Display width of the photo frame (matches SPEAKER_CARD_CLASS). */
const SPEAKER_PHOTO_SIZES =
  "(max-width: 640px) 176px, (max-width: 768px) 216px, 244px";

/** Speakers 1–2: 196×254 @1x, 392×508 @2x, 588×762 @3x */
const SPEAKER_12_WIDTH = 196;
const SPEAKER_12_HEIGHT = 254;

/** Speaker 3: 277×264 (1x only) */
const SPEAKER_3_WIDTH = 277;
const SPEAKER_3_HEIGHT = 264;

type ResponsiveImage = {
  src: string;
  srcSet: string;
  sizes: string;
  width: number;
  height: number;
};

function responsiveSpeakerPhoto(
  x1: string,
  baseWidth: number,
  baseHeight: number,
  x2?: string,
  x3?: string,
): ResponsiveImage {
  const srcSet = [`${x1} ${baseWidth}w`];
  if (x2) srcSet.push(`${x2} ${baseWidth * 2}w`);
  if (x3) srcSet.push(`${x3} ${baseWidth * 3}w`);
  return {
    src: x1,
    srcSet: srcSet.join(", "),
    sizes: SPEAKER_PHOTO_SIZES,
    width: baseWidth,
    height: baseHeight,
  };
}

const speakers = [
  {
    firstName: "Donny",
    lastName: "Wals",
    role: "Indie app developer, consultant, and content creator",
    imagePosition: "object-[18%_center]",
    image: responsiveSpeakerPhoto(
      speaker1,
      SPEAKER_12_WIDTH,
      SPEAKER_12_HEIGHT,
      speaker1_2x,
      speaker1_3x,
    ),
  },
  {
    firstName: "Monika",
    lastName: "Mateska",
    role: "Software engineer, RevenueCat",
    imagePosition: "object-[48%_center]",
    image: responsiveSpeakerPhoto(
      speaker2,
      SPEAKER_12_WIDTH,
      SPEAKER_12_HEIGHT,
      speaker2_2x,
      speaker2_3x,
    ),
  },
  {
    firstName: "Marcin",
    lastName: "Krzyzanowski",
    role: "Founder of Hacking With Swift",
    imagePosition: "object-[78%_center]",
    image: responsiveSpeakerPhoto(
      speaker3,
      SPEAKER_3_WIDTH,
      SPEAKER_3_HEIGHT,
    ),
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

      <ul className="mt-6 grid grid-cols-1 justify-items-center gap-10 sm:mt-8 sm:grid-cols-2 sm:gap-8 md:mt-10 md:grid-cols-3 md:gap-10 lg:gap-8">
        {speakers.map((speaker) => (
          <li key={speaker.firstName} className={SPEAKER_CARD_CLASS}>
            <SpeakerCard speaker={speaker} />
          </li>
        ))}
      </ul>

      <div className="mt-12 w-full text-center">
        <span className="font-speaker-surname text-xl font-bold text-white sm:text-2xl md:text-3xl lg:text-4xl">
          Announcing more soon...
        </span>
      </div>
    </div>
  </section>
);

function SpeakerCard({
  speaker,
}: {
  speaker: (typeof speakers)[number];
}) {
  return (
    <article className="flex w-full flex-col">
      <div className="relative aspect-244/308 w-full">
        <img
          src={stamp}
          alt=""
          className="absolute inset-0 h-full w-full"
          aria-hidden
        />
        <div className="absolute inset-[10%] overflow-hidden rounded-[18px] sm:rounded-[22px] md:rounded-[26px]">
          <img
            src={speaker.image.src}
            srcSet={speaker.image.srcSet}
            sizes={speaker.image.sizes}
            width={speaker.image.width}
            height={speaker.image.height}
            alt={`${speaker.firstName} ${speaker.lastName}`}
            loading="lazy"
            decoding="async"
            className={`h-full w-full object-cover ${speaker.imagePosition}`}
          />
        </div>
      </div>
      <div className="mt-4 text-white sm:mt-5">
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
