"use client";
import AnimateOnView from "../hooks/AnimateOnView";
import Logo from "../Logo/logo";
import TimeLimitSelector from "./components/TimeLimitSelector/TimeLimitSelector";

const ChatPage = () => {
  return (
    <div className="max-w-5xl mx-auto overflow-x-hidden">
      <Logo />

      {/* heading */}
      <div className="pt-24 px-4">
        {/* Title */}
        <AnimateOnView direction="up" delay={0.25} duration={0.6}>
          <h1 className="inter text-4xl md:text-5xl text-gray-200 text-center font-bold ">
            Choose chat duration
          </h1>
        </AnimateOnView>

        {/* description */}
        <AnimateOnView direction="up" delay={0.25} duration={0.8}>
          <p className="poppins text-center mt-5 text-gray-400">
            Your chat will automatically delete after the selected time. Once
            deleted, messages are permanently removed and cannot be recovered.
            Choose a duration that fits your conversation.
          </p>
        </AnimateOnView>
      </div>

      <TimeLimitSelector />
    </div>
  );
};

export default ChatPage;
