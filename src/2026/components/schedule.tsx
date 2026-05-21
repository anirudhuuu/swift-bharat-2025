import SectionTitle from "@/2026/components/section-title";
import { useState } from "react";

type ScheduleDay = "nov-19" | "nov-20";

const SCHEDULE_DAYS = [
    { id: "nov-19" as const, label: "Nov 19" },
    { id: "nov-20" as const, label: "Nov 20" },
] as const;

function getDefaultDay(): ScheduleDay {
    const now = new Date();
    const istTime = new Date(now.getTime() + 5.5 * 60 * 60 * 1000);
    const nov20Start = new Date("2026-11-20T00:00:00+05:30");

    if (istTime >= nov20Start) {
        return "nov-20";
    }

    return "nov-19";
}

const Schedule = () => {
    const [activeDay, setActiveDay] = useState<ScheduleDay>(getDefaultDay);

    return (
        <section
            id="schedule"
            className="px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-10 lg:py-24"
        >
            <div className="mx-auto w-full max-w-[1222px] rounded-4xl bg-lime px-4 py-8 sm:rounded-[3rem] sm:px-6 sm:py-10 md:rounded-[4rem] md:px-10 md:py-14 lg:rounded-[5rem] lg:px-12 lg:py-16 xl:rounded-[6.375rem]">
                <SectionTitle className="mx-auto block w-fit text-center text-foreground">
                    schedule
                </SectionTitle>

                <div
                    role="tablist"
                    aria-label="Conference days"
                    className="mx-auto mt-6 flex w-full min-w-48 max-w-xs rounded-3xl border border-ink p-1 sm:mt-8"
                >
                    {SCHEDULE_DAYS.map((day) => {
                        const isActive = activeDay === day.id;
                        return (
                            <button
                                key={day.id}
                                id={`schedule-tab-${day.id}`}
                                type="button"
                                role="tab"
                                aria-selected={isActive}
                                aria-controls={`schedule-panel-${day.id}`}
                                onClick={() => setActiveDay(day.id)}
                                className={`min-w-0 flex-1 cursor-pointer rounded-2xl px-5 py-4 text-center text-xl font-medium leading-none transition-colors sm:px-6 sm:py-5 sm:text-2xl ${isActive
                                    ? "bg-card-accent text-white"
                                    : "bg-transparent text-ink"
                                    }`}
                            >
                                {day.label}
                            </button>
                        );
                    })}
                </div>

                <div
                    id={`schedule-panel-${activeDay}`}
                    role="tabpanel"
                    aria-labelledby={`schedule-tab-${activeDay}`}
                    className="mt-32 w-full text-center"
                >
                    <span className="font-speaker-surname text-[clamp(2.25rem,10vw,5rem)] font-bold leading-tight text-ink">
                        Announcing soon...
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Schedule;
