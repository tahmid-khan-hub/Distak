"use client";

const Banner = () => {
    return (
        <div className="py-16">
            {/* content */}
            <div>
                {/* title */}
                <h1 className="inter text-6xl font-bold text-white text-center"><span className="text-7xl text-green-300">D</span>istak</h1>
                {/* sub-title */}
                <h2 className="inter text-xl text-white text-center mt-7">Where conversations start with a token</h2>
                {/* description */}
                <p className="poppins text-sm text-gray-400 text-center mt-4 max-w-3xl mx-auto"> Distak lets you generate a unique token and start chatting instantly, no phone number, no identity, just simple and secure conversations. Share your token and connect privately, whenever you want.</p>
            </div>
        </div>
    );
};

export default Banner;