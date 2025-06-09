import Address from "@/components/address";
import Faqs from "@/components/faqs";
import Footer from "@/components/footer";
import Landing from "@/components/landing";
import Speakers from "@/components/speakers";
import Sponsors from "@/components/sponsors";
import Tickets from "@/components/tickets";

const App = () => {
  return (
    <>
      <Landing />
      <Address />
      {/* Schedule */}
      <Speakers />
      <Tickets />
      <Sponsors />
      <Faqs />
      <Footer />
    </>
  );
};

export default App;
