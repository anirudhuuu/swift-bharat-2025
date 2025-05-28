import { useEffect, useState } from "react";
import heroBackgroundMobile from "./assets/hero-background-mobile.png";
import heroBackground from "./assets/hero-background.png";
import Hero from "./components/hero";
import NavBar from "./components/nav-bar";

const App = () => {
  const [bgImage, setBgImage] = useState(
    window.innerWidth <= 768 ? heroBackgroundMobile : heroBackground
  );

  useEffect(() => {
    const handleResize = () => {
      setBgImage(
        window.innerWidth <= 768 ? heroBackgroundMobile : heroBackground
      );
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        className="flex flex-col justify-start items-center font-display h-[1280px] w-full"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "50% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <NavBar />
        <Hero />
      </div>

      {/* <div className="relative w-full">
        <div className="absolute left-0 top-0 h-full">
          <img
            src={schedulePillar}
            alt="Left Pillar"
            className="h-full object-cover translate-x-[-50%]"
          />
        </div>
        <div className="absolute right-0 top-0 h-full overflow-x-hidden">
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
                  className="font-light rounded-md text-[#053020]/60 data-[state=active]:bg-[#053020] data-[state=active]:text-[#FCE5AF] px-4 py-1 capitalize cursor-pointer"
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

          <div className="h-8"></div>

          <button className="hidden md:block bg-[#0D3A3F] text-[#EDEDEC] font-normal py-2 px-6 rounded-2xl text-base cursor-pointer">
            Download Schedule
          </button>

          <div className="h-8"></div>
        </div>
      </div> */}

      {/* <div
        className="p-12 m-8 flex flex-col items-center justify-center rounded-3xl"
        style={{
          backgroundImage: `url(${speakerBackground})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex my-10">
          <img src={speakerLeft} alt="left arrow" />
          <h2 className="font-display text-5xl font-bold text-[#F4DA9E] mx-6">
            Speakers
          </h2>
          <img src={speakerRight} alt="right arrow" />
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-sm"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="basis-full md:basis-1/2">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-3xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div> */}

      {/* <div
        className="p-12 m-8 flex flex-col items-center justify-center rounded-3xl"
        style={{
          backgroundImage: `url(${speakerBackground})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex items-center justify-center my-10">
          <img src={speakerLeft} alt="left arrow" className="w-6 h-6" />
          <h2 className="font-display text-5xl font-bold text-[#F4DA9E] mx-6 tracking-wider">
            Speakers
          </h2>
          <img src={speakerRight} alt="right arrow" className="w-6 h-6" />
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-5xl"
        >
          <CarouselContent>
            {speakers.map((speaker, index) => (
              <CarouselItem
                key={index}
                className="basis-full md:basis-1/2 flex justify-center"
              >
                <div className="bg-[#F4E6C2] rounded-2xl p-6 flex items-center max-w-xl shadow-md">
                  <div className="min-w-[120px] max-w-[140px]">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="rounded border-[6px] border-[#97784D] shadow-xl"
                    />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-[#133B2E]">
                      {speaker.name}
                    </h3>
                    <p className="text-sm text-[#B45C3D] mt-1 font-semibold">
                      {speaker.role}
                    </p>
                    <p className="text-sm text-[#4A4A4A] mt-2">{speaker.bio}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-center items-center gap-6 mt-6">
            <CarouselPrevious className="relative static" />
            <CarouselNext className="relative static" />
          </div>
        </Carousel>
      </div> */}

      {/* <h2 className="font-display text-6xl font-bold text-[#053020]">
        Get Your Tickets
      </h2> */}

      {/* <h2 className="font-display text-6xl font-bold text-[#053020]">FAQs</h2> */}
    </>
  );
};

export default App;
