"use client";
import AnimateOnView from "@/app/hooks/AnimateOnView";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import TokenCard from "../TokenCard/TokenCard";

export default function GenerateToken() {
  return (
    <div className="py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-275 mx-auto px-4">
        {/* content */}
        <div className="flex flex-col justify-center">
          <AnimateOnView direction="left" delay={0.25} duration={0.6}>
            <h2 className="inter text-4xl md:text-5xl text-center md:text-left text-gray-200 font-bold">
              Start your first conversation
            </h2>
          </AnimateOnView>

          <AnimateOnView direction="left" delay={0.35} duration={0.8}>
            <p className="poppins mt-6 text-center md:text-left text-sm text-gray-400 max-w-xl">
              Every conversation on Distak begins with a token. Generate yours
              now and unlock a private, encrypted channel built entirely around
              your control, from how long messages last to who can ever reach
              you.
            </p>
          </AnimateOnView>

          <AnimateOnView direction="left" delay={0.45} duration={1.0}>
            <div className="poppins mt-12 flex justify-center md:justify-start">
              <Link href="/chat">
                <Button className="btn_primary px-12 py-6.5 text-[18px]">
                  Generate Token
                </Button>
              </Link>
            </div>
          </AnimateOnView>
        </div>

        {/* token card */}
        <AnimateOnView direction="right" delay={0.45} duration={1.0}>
          <TokenCard />
        </AnimateOnView>
      </div>
    </div>
  );
}
