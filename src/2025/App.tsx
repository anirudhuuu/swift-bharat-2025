import Address from "@/2025/components/address";
import Faqs from "@/2025/components/faqs";
import Footer from "@/2025/components/footer";
import Landing from "@/2025/components/landing";
import Schedule from "@/2025/components/schedule";
import Speakers from "@/2025/components/speakers";
import Sponsors from "@/2025/components/sponsors";
import Tickets from "@/2025/components/tickets";

const App = () => {
  return (
    <>
      <Landing />
      <Address />
      <Schedule />
      <Speakers />
      <Sponsors />
      <Tickets />
      <Faqs />
      <Footer />
    </>
  );
};

export default App;
