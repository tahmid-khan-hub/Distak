"use client"
import { JSX } from "react";
import { FiClock, FiKey, FiMessageSquare, FiSearch } from "react-icons/fi";
import GetStartedContainer from "./components/GetStartedContainer";
import AnimateOnView from "@/app/hooks/AnimateOnView";

export interface GetStartedItem {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

const getStartedData: GetStartedItem[] = [
  {
    id: 1,
    title: "Generate Token",
    description:
      "Create a unique token to start a secure and temporary conversation.",
    icon: <FiKey className="text-[#6FC7A1]" size={28} />,
  },
  {
    id: 2,
    title: "Choose a Plan",
    description:
      "Select a duration (2h, 6h, 24h). After this time, all chats are automatically deleted.",
    icon: <FiClock className="text-[#6FC7A1]" size={28} />,
  },
  {
    id: 3,
    title: "Enter Token",
    description:
      "Paste the token of the person you want to chat with in the search bar.",
    icon: <FiSearch className="text-[#6FC7A1]" size={28} />,
  },
  {
    id: 4,
    title: "Start Chatting",
    description:
      "Begin your conversation instantly with end-to-end privacy.",
    icon: <FiMessageSquare className="text-[#6FC7A1]" size={28} />,
  },
];

const GetStarted = () => {
    return (
        <div className="py-16">
            <AnimateOnView direction="up" delay={0.25} duration={0.6}>
              <h2 className="inter text-4xl text-white text-center font-bold mb-7">Getting Started</h2>
            </AnimateOnView>
            <div><GetStartedContainer items={getStartedData} /></div>
        </div>
    );
};

export default GetStarted;