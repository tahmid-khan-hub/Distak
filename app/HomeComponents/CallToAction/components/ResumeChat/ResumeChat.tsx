"use client";
import AnimateOnView from "@/app/hooks/AnimateOnView";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ResumeChat() {
  return (
    <div className="py-24">
      <AnimateOnView direction="up" delay={0.25} duration={0.6}>
        <h2 className="inter text-4xl text-center font-bold  bg-linear-to-r from-primary to-primary/10 bg-clip-text text-transparent">
          Welcome Back
        </h2>
      </AnimateOnView>

      <AnimateOnView direction="up" delay={0.35} duration={0.8}>
        <p className="poppins mt-2.5 text-center text-gray-200 max-w-xl mx-auto">
          Your chat is ready. Continue where you left off.
        </p>
      </AnimateOnView>

      <AnimateOnView direction="up" delay={0.45} duration={1.0}>
        <div className="poppins mt-8 flex justify-center">
          <Link href="/conversations">
            <Button className="px-12 py-6.5 text-[18px] font-semibold ">
              Continue Chat
            </Button>
          </Link>
        </div>
      </AnimateOnView>
    </div>
  );
}
