"use client";
import Link from "next/link";

const CallToAction = () => {
  return (
    <div className="py-16 ">
      <div>
        {/* Heading */}
        <h2 className="inter text-4xl text-center font-bold text-white">
          Start your first chat
        </h2>

        {/* Description */}
        <p className="poppins mt-2.5 text-center text-gray-400 max-w-xl mx-auto">
          Generate a unique token and start chatting instantly.
        </p>

        {/* Button */}
        <div className="poppins mt-8 flex justify-center">
          <Link href="/chat">
            <button
              className="
                px-8 py-3 rounded-xl
                bg-primary text-primary-foreground font-semibold
                transition-all duration-300
                hover:scale-105
                hover:shadow-[0_4px_15px_rgba(120,120,120,0.3)]
              "
            >
              Generate a Token
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
