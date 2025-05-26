import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import heroBackground from "./assets/hero-background.png";
import paulHudson from "./assets/paul hudson.png";
import schedulePillar from "./assets/pillar.png";
import speaker2 from "./assets/speaker 2.png";
import Hero from "./components/hero";
import NavBar from "./components/nav-bar";

const App = () => {
  return (
    <>
      <div
        className="flex flex-col justify-start items-center font-display h-[1200px] w-full"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "50% 80%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <NavBar />
        <Hero />
      </div>

      <div className="h-16"></div>

      <div className="relative w-full">
        <div className="absolute left-0 top-0 h-full">
          <img
            src={schedulePillar}
            alt="Left Pillar"
            className="h-full object-cover translate-x-[-50%]"
          />
        </div>
        <div className="absolute right-0 top-0 h-full">
          <img
            src={schedulePillar}
            alt="Right Pillar"
            className="h-full object-cover translate-x-[50%]"
          />
        </div>

        <div className="flex flex-col max-w-5xl mx-auto items-center">
          <h2 className="font-display text-6xl font-bold text-[#053020] mb-4">
            Schedule
          </h2>

          <Tabs defaultValue="sep-15" className="items-center">
            <TabsList className="bg-[#FCE5AF] p-1 mb-8 rounded-xl">
              {["sep-15", "sep-16", "sep-17"].map((val, i) => (
                <TabsTrigger
                  key={val}
                  value={val}
                  className="font-light rounded-md text-[#053020]/60 data-[state=active]:bg-[#053020] data-[state=active]:text-[#FCE5AF] px-4 py-1 capitalize"
                >
                  Sep {15 + i}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="sep-15" className="space-y-6">
              <div className="text-sm text-[#053020]/60 font-medium">
                9:00 AM
              </div>
              <div className="bg-[#FCE5AF] rounded-2xl px-6 pt-4 flex justify-between items-start gap-4">
                <div className="flex-1 mt-4 pr-6">
                  <div className="inline-block bg-[#F4DA9E] text-[#053020] text-xs font-medium px-2 py-1 rounded-full mb-2">
                    Main Stage
                  </div>
                  <h3 className="text-[#053020] text-lg font-semibold">
                    Opening Keynote: The Future of Swift
                  </h3>
                  <p className="text-sm text-[#053020]/70 mt-1 max-w-md">
                    An exciting look at the latest development in swift and
                    what's coming next for iOS developers.
                  </p>
                </div>
                <div className="relative w-32 h-40 overflow-hidden flex flex-col items-center justify-end">
                  <img
                    src={paulHudson}
                    alt="Paul Hudson"
                    className="absolute top-0 w-full object-contain"
                  />
                  <div className="w-full text-center bg-[#E9D6A9] py-2 mt-auto z-1 rounded-tl-2xl rounded-tr-2xl">
                    <span className="text-sm text-[#053020] font-medium">
                      Paul Hudson
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-sm text-[#053020]/60 font-medium">
                10:30 AM
              </div>
              <div className="bg-[#FCE5AF] rounded-2xl px-6 pt-4 flex justify-between items-start gap-4">
                <div className="flex-1 mt-4 pr-6">
                  <div className="inline-block bg-[#F4DA9E] text-[#053020] text-xs font-medium px-2 py-1 rounded-full mb-2">
                    Main Stage
                  </div>
                  <h3 className="text-[#053020] text-lg font-semibold">
                    Opening Keynote: The Future of Swift
                  </h3>
                  <p className="text-sm text-[#053020]/70 mt-1 max-w-md">
                    An exciting look at the latest development in swift and
                    what's coming next for iOS developers.
                  </p>
                </div>
                <div className="relative w-32 h-40 overflow-hidden flex flex-col items-center justify-end">
                  <img
                    src={speaker2}
                    alt="Paul Hudson"
                    className="absolute top-0 w-full object-contain"
                  />
                  <div className="w-full text-center bg-[#E9D6A9] py-2 mt-auto z-1 rounded-tl-2xl rounded-tr-2xl">
                    <span className="text-sm text-[#053020] font-medium">
                      Paul Hudson
                    </span>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="sep-16" className="space-y-6">
              <div className="text-sm text-[#053020]/60 font-medium">
                9:00 AM
              </div>
              <div className="bg-[#FCE5AF] rounded-2xl px-6 pt-4 flex justify-between items-start gap-4">
                <div className="flex-1 mt-4 pr-6">
                  <div className="inline-block bg-[#F4DA9E] text-[#053020] text-xs font-medium px-2 py-1 rounded-full mb-2">
                    Main Stage
                  </div>
                  <h3 className="text-[#053020] text-lg font-semibold">
                    Opening Keynote: The Future of Swift
                  </h3>
                  <p className="text-sm text-[#053020]/70 mt-1 max-w-md">
                    An exciting look at the latest development in swift and
                    what's coming next for iOS developers.
                  </p>
                </div>
                <div className="relative w-32 h-40 overflow-hidden flex flex-col items-center justify-end">
                  <img
                    src={paulHudson}
                    alt="Paul Hudson"
                    className="absolute top-0 w-full object-contain"
                  />
                  <div className="w-full text-center bg-[#E9D6A9] py-2 mt-auto z-1 rounded-tl-2xl rounded-tr-2xl">
                    <span className="text-sm text-[#053020] font-medium">
                      Paul Hudson
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-sm text-[#053020]/60 font-medium">
                10:30 AM
              </div>
              <div className="bg-[#FCE5AF] rounded-2xl px-6 pt-4 flex justify-between items-start gap-4">
                <div className="flex-1 mt-4 pr-6">
                  <div className="inline-block bg-[#F4DA9E] text-[#053020] text-xs font-medium px-2 py-1 rounded-full mb-2">
                    Main Stage
                  </div>
                  <h3 className="text-[#053020] text-lg font-semibold">
                    Opening Keynote: The Future of Swift
                  </h3>
                  <p className="text-sm text-[#053020]/70 mt-1 max-w-md">
                    An exciting look at the latest development in swift and
                    what's coming next for iOS developers.
                  </p>
                </div>
                <div className="relative w-32 h-40 overflow-hidden flex flex-col items-center justify-end">
                  <img
                    src={speaker2}
                    alt="Paul Hudson"
                    className="absolute top-0 w-full object-contain"
                  />
                  <div className="w-full text-center bg-[#E9D6A9] py-2 mt-auto z-1 rounded-tl-2xl rounded-tr-2xl">
                    <span className="text-sm text-[#053020] font-medium">
                      Paul Hudson
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-sm text-[#053020]/60 font-medium">
                10:30 AM
              </div>
              <div className="bg-[#FCE5AF] rounded-2xl px-6 pt-4 flex justify-between items-start gap-4">
                <div className="flex-1 mt-4 pr-6">
                  <div className="inline-block bg-[#F4DA9E] text-[#053020] text-xs font-medium px-2 py-1 rounded-full mb-2">
                    Main Stage
                  </div>
                  <h3 className="text-[#053020] text-lg font-semibold">
                    Opening Keynote: The Future of Swift
                  </h3>
                  <p className="text-sm text-[#053020]/70 mt-1 max-w-md">
                    An exciting look at the latest development in swift and
                    what's coming next for iOS developers.
                  </p>
                </div>
                <div className="relative w-32 h-40 overflow-hidden flex flex-col items-center justify-end">
                  <img
                    src={speaker2}
                    alt="Paul Hudson"
                    className="absolute top-0 w-full object-contain"
                  />
                  <div className="w-full text-center bg-[#E9D6A9] py-2 mt-auto z-1 rounded-tl-2xl rounded-tr-2xl">
                    <span className="text-sm text-[#053020] font-medium">
                      Paul Hudson
                    </span>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="sep-17" className="space-y-6">
              <div className="text-sm text-[#053020]/60 font-medium">
                9:00 AM
              </div>
              <div className="bg-[#FCE5AF] rounded-2xl px-6 pt-4 flex justify-between items-start gap-4">
                <div className="flex-1 mt-4 pr-6">
                  <div className="inline-block bg-[#F4DA9E] text-[#053020] text-xs font-medium px-2 py-1 rounded-full mb-2">
                    Main Stage
                  </div>
                  <h3 className="text-[#053020] text-lg font-semibold">
                    Opening Keynote: The Future of Swift
                  </h3>
                  <p className="text-sm text-[#053020]/70 mt-1 max-w-md">
                    An exciting look at the latest development in swift and
                    what's coming next for iOS developers.
                  </p>
                </div>
                <div className="relative w-32 h-40 overflow-hidden flex flex-col items-center justify-end">
                  <img
                    src={paulHudson}
                    alt="Paul Hudson"
                    className="absolute top-0 w-full object-contain"
                  />
                  <div className="w-full text-center bg-[#E9D6A9] py-2 mt-auto z-1 rounded-tl-2xl rounded-tr-2xl">
                    <span className="text-sm text-[#053020] font-medium">
                      Paul Hudson
                    </span>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="bg-red-900">
        <h2 className="font-display text-6xl font-bold text-[#F4DA9E]">
          Speakers
        </h2>
      </div>

      <h2 className="font-display text-6xl font-bold text-[#053020]">
        Get Your Tickets
      </h2>

      <h2 className="font-display text-6xl font-bold text-[#053020]">FAQs</h2>
    </>
  );
};

export default App;
