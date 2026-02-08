"use client";
import { useState } from "react";
import TimeLimitCard from "../TimeLimitCard/TimeLimitCard";

const timeOptions = [
  {
    label: "2 Hours",
    value: "2h",
    description: "All messages will be permanently deleted after 2 hours. This action cannot be undone.",
  },
  {
    label: "6 Hours",
    value: "6h",
    description: "Your chat history will be removed after 6 hours with no recovery option.",
  },
  {
    label: "24 Hours",
    value: "24h",
    description: "Messages will stay available for 24 hours and will be deleted automatically after.",
  },
  {
    label: "No Deletion",
    value: "keep",
    description: "Your messages will remain available unless you manually delete the chat.",
  },
];

export default function TimeLimitSelector() {
    const [selected, setSelected] = useState<string | null>(null);
    return (
        <div className="max-w-5xl mx-auto py-16 px-4">
            {/* Title */}
            <h1 className="inter text-4xl text-center font-bold text-white">
                Choose chat duration
            </h1>

            {/* description */}
            <p className="poppins text-center mt-3 text-gray-400">
               Your chat will automatically delete after the selected time. Once deleted, messages are permanently removed and cannot be recovered. Choose a duration that fits your conversation.
            </p>

            {/* options */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 items-stretch">
                {timeOptions.map((option, i) => (
                <TimeLimitCard
                    key={i}
                    label={option.label}
                    value={option.value}
                    description={option.description}
                    selected={selected === option.value}
                    onClick={() => setSelected(option.value)}
                />
                ))}
            </div>

            {/* Button */}
            <div className="flex justify-center"><button
                disabled={!selected}
                className={`
                mt-16 px-8 py-3 rounded-xl font-semibold transition-all
                ${
                    selected
                    ? "bg-primary text-black hover:scale-105 hover:shadow-[0_0_20px_rgba(111,199,161,0.7)]"
                    : "bg-white/10 text-white/40 cursor-not-allowed"
                }
                `}
            >
                Generate Token
            </button></div>
        </div>
    )
}