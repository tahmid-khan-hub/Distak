"use client";

import AnimateOnView from "@/app/hooks/AnimateOnView";

const Banner = () => {
    return (
        <div className="py-16">
            {/* content */}
            <div>
                {/* title */}
                <AnimateOnView direction="up" delay={0.25} duration={0.6}>
                    <h1 className="inter text-6xl font-bold text-white text-center"><span className="text-7xl text-primary transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-x-1">D</span>istak</h1>
                </AnimateOnView>
                {/* sub-title */}
                <AnimateOnView direction="up" delay={0.35} duration={0.8}><h2 className="inter text-xl text-white text-center mt-7">Where conversations start with a token</h2></AnimateOnView>
                {/* description */}
                <AnimateOnView direction="up" delay={0.35} duration={1.0}><p className="poppins text-sm text-gray-400 text-center mt-4 max-w-3xl mx-auto"> Distak lets you generate a unique token and start chatting instantly, no phone number, no identity, just simple and secure conversations. Share your token and connect privately, whenever you want.</p></AnimateOnView>
            </div>
        </div>
    );
};

export default Banner;