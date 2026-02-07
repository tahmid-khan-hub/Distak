"use client"
import Image from "next/image";
import SecurityContent from "./components/SecurityContent";

const SafetyAndSecurity = () => {
    return (
        <div className="py-16">
            <div className="max-w-4xl mx-auto text-center">
                {/* icon */}
                <div className="flex justify-center mb-12">
                    <Image 
                        src="/assets/shield.png" 
                        alt="End to End Encryption"
                        width={200}
                        height={200}
                        className="w-48 h-48"
                    />
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