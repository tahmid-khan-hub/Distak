"use client";
import AnimateOnView from "@/app/hooks/AnimateOnView";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function GenerateToken() {
  return (
    <section className="relative py-24 px-6 flex items-center justify-center overflow-hidden">

      {/* Card */}
      <div className="">

        {/* Icon */}
        <AnimateOnView direction="up" delay={0.25} duration={0.6}>
          <div className="flex justify-center mb-12">
            <motion.div
              initial={{ filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" }}
              animate={{ filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" }}
              whileHover={{
                filter: "drop-shadow(0px 0px 20px rgba(111, 199, 161, 0.7))",
              }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <Image
                src="/assets/smart-key.png"
                alt="End to End Encryption"
                width={200}
                height={200}
                className="w-48 h-48"
              />
            </motion.div>
          </div>
        </AnimateOnView>

        {/* Heading */}
        <AnimateOnView direction="up" delay={0.3} duration={0.7}>
          <h2 className="inter text-center text-4xl font-bold 
            bg-linear-to-r from-primary to-primary/10 
            bg-clip-text text-transparent">
            Start your first chat
          </h2>
        </AnimateOnView>

        {/* Description */}
        <AnimateOnView direction="up" delay={0.4} duration={0.8}>
          <p className="poppins text-center text-gray-200 max-w-lg mx-auto mt-3 text-lg leading-relaxed">
            Generate a unique token and start chatting instantly.
          </p>
        </AnimateOnView>

        {/* Button */}
        <AnimateOnView direction="up" delay={0.45} duration={1.0}>
          <div className="poppins mt-8 flex justify-center">
            <Link href="/chat">
              <button className=" px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_15px_rgba(120,120,120,0.3)] ">
                Generate a Token
              </button>
            </Link>
          </div>
        </AnimateOnView>
      </div>
    </section>
  );
}
