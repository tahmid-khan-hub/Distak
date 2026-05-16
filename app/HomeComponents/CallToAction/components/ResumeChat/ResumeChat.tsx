"use client";
import AnimateOnView from "@/app/hooks/AnimateOnView";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import TokenCard from "../TokenCard/TokenCard";

export default function ResumeChat() {
  return (
    <div className="py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-275 mx-auto px-4">
        <div>
          <AnimateOnView direction="left" delay={0.25} duration={0.6}>
            <h2 className="inter text-4xl md:text-5xl text-center md:text-left text-gray-200 font-bold ">
              Your conversation is waiting
            </h2>
          </AnimateOnView>

          <AnimateOnView direction="left" delay={0.35} duration={0.8}>
            <p className="poppins mt-6 text-center md:text-left text-sm text-gray-400 max-w-xl mx-auto">
              Your token is still active and your private channel is exactly as you left it. Every message, every thread is preserved and ready to continue. Step back in whenever you are ready, your session has been holding your place.
            </p>
          </AnimateOnView>

          <AnimateOnView direction="left" delay={0.45} duration={1.0}>
            <div className="poppins mt-12 flex justify-center md:justify-start">
              <Link href="/conversations">
                <Button className="btn_primary px-12 py-6.5 text-[18px]">
                  Continue Chat
                </Button>
              </Link>
            </div>
          </AnimateOnView>
        </div>
        
        <AnimateOnView direction="right" delay={0.45} duration={1.0}>
          <TokenCard />
        </AnimateOnView>
      </div>
    </div>
  );
}
