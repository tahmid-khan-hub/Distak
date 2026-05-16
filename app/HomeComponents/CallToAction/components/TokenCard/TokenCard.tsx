"use client";
import { BsStars } from "react-icons/bs";

const TokenCard = () => {
  return (
    <div className="">
      <div className="max-w-70 mx-auto border border-primary/20 mt-6">
        <div className="flex items-center justify-center p-9 bg-[#0a0a0a] ">
          <div className="relative w-55 h-55 flex items-center justify-center">
            {/* Single dashed border */}
            <div className="absolute inset-0 border border-dashed border-green-400/25 rounded-sm" />

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-green-400/70" />
            <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-green-400/70" />
            <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-green-400/70" />
            <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-green-400/70" />

            {/* Floating info box */}
            <div className="absolute -top-4 -right-12 bg-[#111] border border-green-400/20 px-2 py-1 rounded-sm">
              <p className="text-green-400/70 text-[10px] font-mono uppercase">Permissioned by you <br/> Enforced by us.</p>
            </div>

            {/* Green token box */}
            <div
              className="relative w-37.5 h-37.5 bg-primary rounded-sm flex items-center justify-center
              shadow-[0_0_60px_rgba(74,222,128,0.5),0_0_120px_rgba(74,222,128,0.2)]
              animate-pulse"
            >
              {/* T - Token */}
              <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center z-10">
                <span className="font-mono text-2xl font-bold text-white">T</span>
              </div>

              <span className="absolute top-10 right-8.75 text-2xl font-bold text-[#0a0a0a]">
                <BsStars />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenCard;