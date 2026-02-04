import Banner from "./HomeComponents/Banner/Banner";
import FaQ from "./HomeComponents/FaQ/FaQ";
import GetStarted from "./HomeComponents/GetStarted/GetStarted";
import SafetyAndSecurity from "./HomeComponents/SafetyAndSecurity/SafetyAndSecurity";

export default function Home() {
  return (
    <div className="max-w-275 mx-auto px-4">
      <Banner />
      <GetStarted />
      <SafetyAndSecurity />
      <FaQ />
    </div>
  );
}
