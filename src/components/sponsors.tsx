import sponsorsBackground from "@/assets/green-lush-background.png";

const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="flex flex-col items-center px-4 py-12 min-h-[2650px]"
      style={{
        backgroundImage: `url(${sponsorsBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
        minHeight: "800px",
        maxHeight: "2200px",
      }}
    >
      <h2 className="font-bold text-5xl text-center mb-16">Sponsors</h2>
    </section>
  );
};

export default Sponsors;
