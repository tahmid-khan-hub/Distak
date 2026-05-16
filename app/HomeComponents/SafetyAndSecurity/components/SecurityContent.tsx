import AnimateOnView from "@/app/hooks/AnimateOnView";

const SecurityContent = () => {
  return (
    <div className="space-y-5 text-gray-200">
      <AnimateOnView direction="left" delay={0.25} duration={0.6}>
        <h2 className="inter text-4xl font-bold  bg-linear-to-r from-primary to-primary/10 bg-clip-text text-transparent">
          Fortified Architecture
        </h2>
      </AnimateOnView>
      
      <AnimateOnView direction="left" delay={0.35} duration={0.8}>
        <p className="poppins leading-relaxed">
          Every layer of Distak is built around one principle: your conversations belong to you alone. From token generation to message delivery, security is not an added layer, it is the entire architecture.
        </p>
      </AnimateOnView>
      
    </div>
  );
};

export default SecurityContent;
