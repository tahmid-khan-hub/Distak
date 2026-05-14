"use client";
import AnimateOnView from "@/app/hooks/AnimateOnView";

const Banner = () => {
    return (
        <div className="py-24 relative overflow-hidden">
            {/* Emerald Spotlight Background */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    background: `
                        radial-gradient(
                            circle at center,
                            rgba(34, 197, 94, 0.12) 0%,
                            rgba(34, 197, 94, 0.06) 20%,
                            rgba(0, 0, 0, 0.0) 60%
                        )
                    `,
                }}
            />
            {/* content */}
            <div className="relative z-10 max-w-275 mx-auto px-4">
                {/* title */}
                <AnimateOnView direction="up" delay={0.35} duration={0.8}>
                    <h2 className="inter text-gray-200 text-left font-bold mt-7 w-full lg:w-180 leading-none uppercase "
                    style={{ fontSize: "clamp(2.6rem, 8vw, 7rem)" }}>
                        Where <span className="text-primary">conversations</span> start with <br/> a token
                    </h2>
                </AnimateOnView>
                {/* description */}
                <AnimateOnView direction="up" delay={0.35} duration={1.0}>
                    <p className="poppins text-sm text-gray-300 text-left mt-10 w-full">
                        Distak lets you generate a unique token and start chatting instantly, no phone number, <br/> no identity, just simple and secure conversations. Share your token <br/> and connect privately, whenever you want.
                    </p>
                </AnimateOnView>
            </div>
        </div>
    );
};

export default Banner;