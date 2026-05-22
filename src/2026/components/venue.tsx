import ticketSea from "@/assets/2026/hero/ticket-seat.webp";
import { cn } from "@/lib/utils";

const VENUE_MAP_EMBED_URL =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.1456878991007!2d72.8265239!3d18.924944500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1e9f504be77%3A0x730fa90710fff568!2sYashwantrao%20Chavan%20Centre!5e0!3m2!1sen!2sin!4v1779380228931!5m2!1sen!2sin";

function VenueMap({
    className,
    landscape = false,
}: {
    className?: string;
    landscape?: boolean;
}) {
    return (
        <div
            className={cn(
                "w-full overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-ink/10",
                landscape && "aspect-video",
                className,
            )}
        >
            <iframe
                src={VENUE_MAP_EMBED_URL}
                title="Yashwantrao Chavan Centre on Google Maps"
                className={cn(
                    "w-full border-0",
                    landscape ? "h-full" : "h-52 sm:h-56",
                )}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
            />
        </div>
    );
}

const Venue = () => {
    return (
        <section
            id="venue"
            className="relative overflow-x-hidden bg-background"
        >
            <div className="relative z-0 -mt-2 w-full pb-12 sm:-mt-5 min-[1440px]:pb-0">
                <img
                    alt="Sea of tickets"
                    src={ticketSea}
                    className="block h-auto w-full animate-venue-ticket-sea-slide"
                    width={1440}
                    height={1046}
                    aria-hidden
                />
                <div className="absolute inset-0 z-10 mx-auto grid max-w-[1440px] grid-cols-1 items-start px-6 pt-[28%] sm:items-center sm:pt-[30%] md:grid-cols-2 md:items-start md:px-16 md:pt-[30%] lg:px-24 lg:pt-[32%] xl:pt-[34%] 2xl:pt-[36%]">
                    <div className="w-fit max-w-[min(calc(100vw-3rem),20rem)] text-ink sm:min-w-48 sm:max-w-68 md:min-w-[16rem] md:max-w-xs lg:min-w-[18rem] lg:max-w-sm xl:max-w-md 2xl:max-w-lg">
                        <p className="text-[2.75rem] font-bold leading-[0.9] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                            19-20
                        </p>
                        <p className="mt-1 text-lg font-bold leading-tight sm:mt-2 sm:text-xl md:text-2xl lg:text-3xl">
                            November, 2026
                        </p>
                        <hr className="my-5 w-full max-w-full border-t border-ink sm:my-6 md:my-8" />
                        <p className="text-[0.6875rem] font-normal uppercase tracking-[0.2em] sm:text-xs">
                            Address
                        </p>
                        <p className="mt-2 text-base font-bold leading-snug sm:mt-3 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                            Yashwantrao Chavan
                        </p>
                        <p className="text-base font-bold leading-snug sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                            Center, Mumbai
                        </p>
                        <VenueMap
                            landscape
                            className="mt-6 hidden w-full min-[1440px]:mt-8 min-[1440px]:block"
                        />
                    </div>
                </div>
            </div>

            <div className="mx-auto w-full max-w-[1222px] px-4 pb-4 pt-2 sm:px-6 md:pb-5 md:pt-3 min-[1440px]:hidden lg:px-10">
                <VenueMap className="mx-auto max-w-[min(100%,clamp(18rem,92vw,56rem))]" />
            </div>
        </section>
    );
};

export default Venue;
