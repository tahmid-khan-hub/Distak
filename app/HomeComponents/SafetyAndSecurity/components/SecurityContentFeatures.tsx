import AnimateOnView from "@/app/hooks/AnimateOnView";
import { ReactNode } from "react";

interface SecurityContentFeaturesProps {
  features: {
    icon: ReactNode;
    title: string;
    description: string;
  }[];
}

const SecurityContentFeatures = ({ features }: SecurityContentFeaturesProps) => {
  return (
    <div className="space-y-6">
      {features.map((feature, index) => (
        <AnimateOnView
          key={feature.title}
          direction="right"
          delay={0.2 + index * 0.15}
          duration={0.6}
        >
          <div className="flex items-start gap-4">
            {/* Icon box */}
            <div className="mt-0.5 w-9 h-9 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 hover:bg-primary/5">
              {feature.icon}
            </div>

            {/* Text */}
            <div className="space-y-1 text-left">
              <h3 className="inter font-semibold text-gray-100">
                {feature.title}
              </h3>
              <p className="poppins text-sm text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        </AnimateOnView>
      ))}
    </div>
  );
};

export default SecurityContentFeatures;
