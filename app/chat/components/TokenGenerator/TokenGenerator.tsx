"use client";
import AnimateOnView from "@/app/hooks/AnimateOnView";

interface TokenGeneratorProps {
  token: string;
  loading: boolean;
  disabled?: boolean;
}

export default function TokenGenerator({ token, loading, disabled, }: TokenGeneratorProps) {
  return (
    <div className="pt-16">
      {/* input field */}
      <AnimateOnView direction="scale" delay={0.25} duration={0.6}>
        <div className="flex justify-center">
          <input
            type="text"
            value={token}
            readOnly
            placeholder="Your token will appear here"
            className="
            w-full max-w-md rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-left text-primary tracking-widest focus:outline-none
            "
          />
        </div>
      </AnimateOnView>

      {/* Button */}
      <AnimateOnView direction="up" delay={0.25} duration={0.6}>
        <div className="flex justify-center">
          <button
            disabled={disabled}
            className={`
                mt-6 px-8 py-3 rounded-xl font-semibold transition-all
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
