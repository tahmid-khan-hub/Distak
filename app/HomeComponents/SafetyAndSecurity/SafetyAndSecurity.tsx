"use client"
import Image from "next/image";
import SecurityContent from "./components/SecurityContent";

const SafetyAndSecurity = () => {
    return (
        <div className="py-16">
            <div className="flex flex-col items-center px-4 md:flex-row">
                {/* image */}
                <div className="w-full md:w-1/2">
                    <Image 
                        src="/assets/Safety_and_security.png" 
                        alt="End to End Encryption"
                        width={400}
                        height={400}
                        className="w-full "
                    />
                </div>

                {/* content */}
                <div className="w-full md:w-1/2 p-4 md:p-8">
                    <SecurityContent />
                </div>
            </div>
        </div>
    );
};

export default SafetyAndSecurity;