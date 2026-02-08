"use client";
import { useState } from "react";
import TimeLimitCard from "../TimeLimitCard/TimeLimitCard";

const timeOptions = [
  { label: "2 Hours", value: "2h" },
  { label: "6 Hours", value: "6h" },
  { label: "24 Hours", value: "24h" },
  { label: "No Deletion", value: "keep" },
];

export default function TimeLimitSelector() {
    const [selected, setSelected] = useState<string | null>(null);
    return (
        <div className="max-w-5xl mx-auto">
            {/* Title */}
            <h1 className="inter text-4xl text-center font-bold text-white">
                Choose chat duration
            </h1>

            {/* description */}
            <p className="poppins text-center mt-3 text-gray-400">
                Your chat will automatically delete after the selected time.
            </p>

            {/* options */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
                {timeOptions.map((option, i) => (
                <TimeLimitCard
                    key={i}
                    label={option.label}
                    value={option.value}
                    selected={selected === option.value}
                    onClick={() => setSelected(option.value)}
                />
                ))}
            </div>

            {/* Button */}
            <button
                disabled={!selected}
                className={`
                mt-10 px-8 py-3 rounded-xl font-semibold transition-all
                ${
                    selected
                    ? "bg-primary text-black hover:scale-105 hover:shadow-[0_0_20px_rgba(111,199,161,0.7)]"
                    : "bg-white/10 text-white/40 cursor-not-allowed"
                }
                `}
            >
                Generate Token
            </button>
        </div>
    )
}