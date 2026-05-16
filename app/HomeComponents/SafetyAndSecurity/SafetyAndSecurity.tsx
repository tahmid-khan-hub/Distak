"use client";
import Image from "next/image";
import SecurityContent from "./components/SecurityContent";
import { motion } from "framer-motion";
import AnimateOnView from "@/app/hooks/AnimateOnView";
import { MdVisibilityOff } from "react-icons/md";
import { BsFingerprint, BsHourglassSplit } from "react-icons/bs";

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
      <div className="max-w-4xl mx-auto text-center">
        {/* content */}
        {/* heading part  */}
        <div>
          <SecurityContent />
        </div>

        {/* features */}

      </div>
    </div>
  );
};

export default SafetyAndSecurity;
