"use client";
import { useState } from "react";
import TimeLimitCard from "../TimeLimitCard/TimeLimitCard";
import AnimateOnView from "@/app/hooks/AnimateOnView";
import { motion } from "framer-motion";
import TokenGenerator from "../TokenGenerator/TokenGenerator";
import { timeOptions } from "./components/TimeOptions";

export default function TimeLimitSelector() {
    const [selected, setSelected] = useState<string | null>(null);
    const [token, setToken] = useState("");
    const [loading, setLoading] = useState(false);
    return (
        <div className="max-w-5xl mx-auto py-16 px-4">
            {/* Title */}
            <AnimateOnView direction="up" delay={0.25} duration={0.6}><h1 className="inter text-4xl text-center font-bold text-white">
                Choose chat duration
            </h1></AnimateOnView>

            {/* description */}
            <AnimateOnView direction="up" delay={0.25} duration={0.8}><p className="poppins text-center mt-3 text-gray-400">
               Your chat will automatically delete after the selected time. Once deleted, messages are permanently removed and cannot be recovered. Choose a duration that fits your conversation.
            </p></AnimateOnView>

            {/* options */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 items-stretch">
                {timeOptions.map((option, i) => (
                <AnimateOnView key={i} direction="scale" delay={i * 0.08}>
                    <motion.div className="h-full rounded-2xl"
                    whileHover={{ scale: 1.02, boxShadow: "0px 0px 20px rgba(111, 199, 161, 0.7)", }}
                        transition={{ duration: 0.2 }} >
                        <TimeLimitCard
                        key={i}
                        label={option.label}
                        value={option.value}
                        description={option.description}
                        selected={selected === option.value}
                        onClick={() => setSelected(option.value)}
                    /></motion.div>
                </AnimateOnView>
                ))}
            </div>

            {/* generates token */}
            <TokenGenerator token={token} loading={loading} disabled={!selected} />
        </div>
    )
}