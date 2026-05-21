import Faqs from "@/2026/components/faqs";
import Footer from "@/2026/components/footer";
import Hero from "@/2026/components/hero";
import NavBar from "@/2026/components/nav-bar";
import Schedule from "@/2026/components/schedule";
import Speakers from "@/2026/components/speakers";
import Sponsors from "@/2026/components/sponsors";
import Tickets from "@/2026/components/tickets";
import Venue from "@/2026/components/venue";

const App = () => (
  <div className="flex min-h-screen flex-col bg-background text-foreground">
    <NavBar />
    <main>
      <Hero />
      <Venue />
      <Tickets />
      <Speakers />
      <Sponsors />
      <Schedule />
      <Faqs />
    </main>
    <Footer />
  </div>
);

export default App;
