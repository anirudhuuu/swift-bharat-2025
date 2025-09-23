import schedulePillar from "@/assets/schedule-pillar.png";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type ScheduleItemType = {
  time: string;
  session: string;
  topic?: string;
  isCursive?: boolean;
};

export const Schedule = () => {
  // Function to get the default tab based on current IST time
  const getDefaultTab = () => {
    const now = new Date();

    // Convert to IST (UTC+5:30)
    const istTime = new Date(now.getTime() + 5.5 * 60 * 60 * 1000);

    // Check if it's after 6 PM IST on September 26th, 2025
    const september26_6pm = new Date("2025-09-26T18:00:00+05:30");

    // Debug logging (remove in production)
    console.log("Current IST time:", istTime.toISOString());
    console.log("Sep 26 6PM IST:", september26_6pm.toISOString());
    console.log("Is after 6PM Sep 26:", istTime >= september26_6pm);

    // If current IST time is after 6 PM on Sep 26, 2025, default to Sep 27
    if (istTime >= september26_6pm) {
      return "sep-27";
    }

    // Otherwise default to Sep 26
    return "sep-26";
  };

  const scheduleData1 = [
    { time: "8:45 am – 9:45 am", session: "Registration & Snacks" },
    { time: "9:45 am – 9:55 am", session: "Welcome Talk" },
    {
      time: "9:55 am – 10:35 am",
      session: "Paul Hudson",
      topic: "Opening keynote",
      isCursive: false,
    },
    {
      time: "10:35 am – 11:10 am",
      session: "Kamal Kumar Lakshmanan",
      topic: '"The 1px War"',
      isCursive: true,
    },
    { time: "11:10 am – 11:35 am", session: "Break" },
    {
      time: "11:35 am – 12:05 pm",
      session: "Arima Jain",
      topic: '"From doodles to developer"',
      isCursive: true,
    },
    {
      time: "12:05 pm – 12:40 pm",
      session: "Chiraayu K Pandya & Hariom Palkar",
      // topic: '"Title of speakers"',
      // isCursive: true,
    },
    { time: "12:40 pm – 12:50 pm", session: "Group Photo" },
    { time: "1:00 pm – 2:30 pm", session: "Lunch" },
    {
      time: "2:30 pm – 3:10 pm",
      session: "Danijela Vrzan",
      topic: '"10 Skills to Level Up Your Career"',
      isCursive: true,
    },
    {
      time: "3:10 pm – 3:50 pm",
      session: "Charlie Chapman",
    },
    { time: "3:50 pm – 4:05 pm", session: "Break" },
    { time: "4:05 pm – 4:20 pm", session: "Quiz" },
    { time: "4:20 pm – 5:30 pm", session: "Expert Panel" },
  ];

  const scheduleData2 = [
    { time: "9:00 am – 9:45 am", session: "Doors Open" },
    { time: "9:45 am – 10:30 am", session: "Curt Clifton" },
    { time: "10:30 am – 11:10 am", session: "Krzysztof Zabłocki" },
    { time: "11:15 am – 11:35 am", session: "Break" },
    { time: "12:35 am – 12:15 am", session: "Garima Bothra" },
    { time: "12:15 pm – 12:55 pm", session: "Josh Holtz" },
    { time: "1:00 pm – 2:30 pm", session: "Lunch" },
    { time: "2:30 pm – 3:10 pm", session: "Harshil Shah" },
    {
      time: "3:10 pm – 4:25 pm",
      session: "Launched Podcast with Raja V & Sandeep Ranade",
    },
    { time: "4:25 pm – 4:50 pm", session: "Break" },
    {
      time: "4:50 pm – 5:35 pm",
      session: "Closing keynote - Peter Steinberger",
    },
    { time: "5:35 pm – 5:50 pm", session: "Closing Remarks" },
  ];

  return (
    <div id="schedule" className="w-full">
      <div className="flex flex-col max-w-5xl mx-auto items-center">
        <div className="h-12"></div>
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#053020] mb-4">
          Schedule
        </h2>
      </div>
      <div className="relative w-full">
        <div className="hidden md:block absolute left-0 top-0 h-full">
          <img
            src={schedulePillar}
            alt="Left Pillar"
            className="h-full object-cover translate-x-[-50%]"
          />
        </div>
        <div className="hidden md:block absolute right-0 top-0 h-full overflow-x-hidden">
          <img
            src={schedulePillar}
            alt="Right Pillar"
            className="h-full object-cover translate-x-[50%]"
          />
        </div>
        <div className="flex flex-col max-w-5xl mx-auto items-center">
          <Tabs defaultValue={getDefaultTab()} className="items-center w-full">
            <TabsList className="bg-[#FCE5AF] p-1 mb-4 rounded-xl">
              <TabsTrigger
                key="sep-26"
                value="sep-26"
                className="font-light rounded-md text-[#053020]/60 data-[state=active]:bg-[#053020] data-[state=active]:text-[#FCE5AF] px-4 py-1 capitalize cursor-pointer"
              >
                Sep 26
              </TabsTrigger>
              <TabsTrigger
                key="sep-27"
                value="sep-27"
                className="font-light rounded-md text-[#053020]/60 data-[state=active]:bg-[#053020] data-[state=active]:text-[#FCE5AF] px-4 py-1 capitalize cursor-pointer"
              >
                Sep 27
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="sep-26"
              className="space-y-6 w-full sm:w-2xl md:w-3xl px-3"
            >
              <ScheduleItem scheduleData={scheduleData1} />
            </TabsContent>
            <TabsContent
              value="sep-27"
              className="space-y-6 w-full sm:w-2xl md:w-3xl px-3"
            >
              <ScheduleItem scheduleData={scheduleData2} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

const ScheduleItem = ({
  scheduleData,
}: {
  scheduleData: ScheduleItemType[];
}) => {
  return (
    <Card className="bg-[#FCE5AF] border-[#FCE5AF] shadow-md pt-1.5">
      <CardContent className="p-0">
        <div className="bg-[#FCE5AF] border-b-2 border-[#053020]/20">
          <div className="grid grid-cols-[1fr_2fr] px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
            <div className="font-bold text-[#053020] text-sm sm:text-base lg:text-lg">
              Time
            </div>
            <div className="font-bold text-[#053020] text-sm sm:text-base lg:text-lg border-l border-[#053020]/20 pl-4 sm:pl-6 lg:pl-8">
              Session
            </div>
          </div>
        </div>
        <div className="bg-[#FCE5AF]">
          {scheduleData.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-[1fr_2fr] px-4 sm:px-6 lg:px-8 py-3 sm:py-4 ${
                index !== scheduleData.length - 1
                  ? "border-b border-[#053020]/15"
                  : ""
              }`}
            >
              <div className="text-[#053020] text-xs sm:text-sm lg:text-base">
                {item.time}
              </div>
              <div className="flex flex-col border-l border-[#053020]/20 pl-4 sm:pl-6 lg:pl-8">
                <span className="text-[#053020] text-xs sm:text-sm lg:text-base">
                  {item.session}
                </span>
                {item.topic && (
                  <span
                    className={`text-[#053020] text-xs sm:text-sm lg:text-base mt-1 ${
                      item.isCursive ? "italic" : ""
                    }`}
                  >
                    {item.topic}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Schedule;
