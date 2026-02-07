"use client"
import Image from "next/image";
import SecurityContent from "./components/SecurityContent";
import { motion } from "framer-motion";

const SafetyAndSecurity = () => {
    return (
        <div className="py-16">
            <div className="max-w-4xl mx-auto text-center">
                {/* icon */}
                <div className="flex justify-center mb-12">
                    <motion.div initial={{ filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" }}
                    animate={{ filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" }}
                    whileHover={{ filter: "drop-shadow(0px 0px 20px rgba(111, 199, 161, 0.7))", }}
                    transition={{ duration: 0.25, ease: "easeOut" }}>
                        <Image 
                            src="/assets/shield.png" 
                            alt="End to End Encryption"
                            width={200}
                            height={200}
                            className="w-48 h-48"
                        />
                    </motion.div>
                </div>

                {/* content */}
                <div className="">
                    <SecurityContent />
                </div>
            </div>
        </div>
    );
};

export default SafetyAndSecurity;