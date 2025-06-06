import Address from "@/components/address";
import Landing from "@/components/landing";
import Faqs from "./components/faqs";
import Footer from "./components/footer";
import Sponsors from "./components/sponsors";

const App = () => {
  return (
    <>
      <Landing />
      <Address />
      {/* Schedule */}
      {/* Speakers */}
      {/* Get Your Tickets */}
      <Sponsors />
      <Faqs />
      <Footer />
    </>
  );
};

export default App;
