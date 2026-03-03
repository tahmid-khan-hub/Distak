"use client";
import Logo from "./components/logo/logo";
import TimeLimitSelector from "./components/TimeLimitSelector/TimeLimitSelector";

const ChatPage = () => {
    return (
        <div className="max-w-5xl mx-auto">
            <Logo />
            <TimeLimitSelector />
        </div>
    );
};

export default ChatPage;