import SectionTitle from "@/2026/components/section-title";
import { SECTION_PADDING, SECTION_SHELL } from "@/2026/constants/section-styles";
import { cn } from "@/lib/utils";
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
            className={SECTION_PADDING}
        >
            <div className={cn(SECTION_SHELL, "bg-lime")}>
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
                    <p className="font-gochi-hand text-[clamp(2.75rem,11vw,6rem)] leading-[0.9] text-ink">
                        Announcing
                        <br />
                        soon...
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Schedule;
