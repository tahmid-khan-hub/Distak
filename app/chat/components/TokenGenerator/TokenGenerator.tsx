"use client";
import AnimateOnView from "@/app/hooks/AnimateOnView";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

interface TokenGeneratorProps {
  token: string;
  loading: boolean;
  disabled?: boolean;
  onGenerate: () => void;
}

export default function TokenGenerator({ token, loading, disabled, onGenerate }: TokenGeneratorProps) {
  const [showToken, setShowToken] = useState(false);
  return (
    <div className="pt-16">
      {/* input field */}
      <AnimateOnView direction="scale" delay={0.25} duration={0.6}>
        <div className="flex justify-center">
          <div className="relative w-full max-w-md">
            <input
              type={showToken ? "text" : "password"}
              value={loading ? "Generating token..." : token}
              readOnly
              placeholder="Your token will appear here"
              className="poppins w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-left text-primary tracking-widest focus:outline-none
              "
            />

            {/* eye toggle */}
            <button
              type="button"
              onClick={() => setShowToken(!showToken)}
              disabled={!token || loading}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition disabled:opacity-40 disabled:cursor-not-allowed
              "
            >
              {showToken ? <FiEye size={20} /> : <FiEyeOff size={20} />}
            </button>
          </div>
        </div>
      </AnimateOnView>

      {/* Button */}
      <AnimateOnView direction="up" delay={0.25} duration={0.6}>
        <div className="flex justify-center">
          <button
            onClick={onGenerate}
            disabled={disabled || loading}
            className={`
                poppins mt-6 px-8 py-3 rounded-xl font-semibold transition-all
                ${
                  !disabled
                    ? "bg-primary text-black hover:scale-105 hover:shadow-[0_0_20px_rgba(111,199,161,0.7)]"
                    : "bg-white/10 text-white/40 cursor-not-allowed"
                }
                `}
          >
            {loading ? "Generating Token..." : "Generate Token"}
          </button>
        </div>
      </AnimateOnView>
    </div>
  );
}
