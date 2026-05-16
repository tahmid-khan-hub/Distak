"use client";
import SecurityContent from "./components/SecurityContent";
import { MdVisibilityOff } from "react-icons/md";
import { BsFingerprint, BsHourglassSplit } from "react-icons/bs";
import SecurityContentFeatures from "./components/SecurityContentFeatures";

const features = [
  {
    icon: <MdVisibilityOff className="text-primary text-xl" />,
    title: "Zero-Knowledge Chat",
    description:
      "We never hold your keys. We never see your messages. Absolute privacy by design.",
  },
  {
    icon: <BsFingerprint className="text-primary text-xl" />,
    title: "Token-Bound Identity",
    description:
      "Every session is cryptographically tied to your token. No token, no access, no exceptions.",
  },
  {
    icon: <BsHourglassSplit className="text-primary text-xl" />,
    title: "Controlled Expiry",
    description:
      "Set your own deletion window. When time runs out, messages are permanently removed with no recovery possible.",
  },
];

const SafetyAndSecurity = () => {
  return (
    <div className="py-24">
      <div className="max-w-275 mx-auto text-center px-4">
        {/* content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* heading part  */}
          <div>
            <SecurityContent />
          </div>

          {/* features */}
          <div>
            <SecurityContentFeatures features={features} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyAndSecurity;
