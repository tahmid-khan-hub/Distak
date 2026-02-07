import Banner from "./HomeComponents/Banner/Banner";
import CallToAction from "./HomeComponents/CallToAction/CallToAction";
import FaQ from "./HomeComponents/FaQ/FaQ";
import Footer from "./HomeComponents/Footer/Footer";
import GetStarted from "./HomeComponents/GetStarted/GetStarted";
import SafetyAndSecurity from "./HomeComponents/SafetyAndSecurity/SafetyAndSecurity";

export default function Home() {
  return (
    <div className="max-w-275 mx-auto px-4">
      <Banner />
      <GetStarted />
      <CallToAction />
      <SafetyAndSecurity />
      <FaQ />
      <Footer />
    </div>
  );
}
