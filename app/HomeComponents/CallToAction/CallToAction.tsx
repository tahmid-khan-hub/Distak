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
                bg-[#6FC7A1] text-black font-semibold
                transition-all duration-300
                hover:scale-105
                hover:shadow-[0_0_20px_rgba(111,199,161,0.7)]
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
