import AnimateOnView from "@/app/hooks/AnimateOnView";

const SecurityContent = () => {
  return (
    <div className="space-y-5 text-white">
      <AnimateOnView direction="left" delay={0.25} duration={0.6}>
        <h2 className="inter text-4xl font-bold tracking-tight">
          End-To-End Encryption
        </h2>
      </AnimateOnView>
      
      <AnimateOnView direction="left" delay={0.35} duration={0.8}>
        <p className="poppins text-muted-foreground leading-relaxed">
          Your conversations are protected with true end-to-end encryption,
          meaning only you and the person you chat with can read the messages. Messages are never stored permanently on our servers and are automatically deleted based on the time plan you choose. No tracking, no data selling, and no access to your
          chats. Privacy isn’t a feature here, it’s the foundation.
        </p>
      </AnimateOnView>
      
    </div>
  );
};

export default SecurityContent;
