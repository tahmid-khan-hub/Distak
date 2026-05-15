import AnimateOnView from "@/app/hooks/AnimateOnView";
import { GetStartedItem } from "../GetStarted";
import { motion } from "framer-motion";
 
interface GetStartedContainerProps {
  items: GetStartedItem[];
}
const GetStartedContainer = ({ items }: GetStartedContainerProps) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {items.map((item, i) => (
                <AnimateOnView key={item.id} direction="up" delay={i * 0.08}>
                    <motion.div key={item.id} 
                        whileHover={{ scale: 1.02, boxShadow: "0px 0px 30px rgba(74, 222, 128, 0.6)", }}
                        transition={{ duration: 0.2 }} 
                        className="poppins p-6 border-l border-l-primary rounded-xl bg-black h-full pb-8">
                        <div className="mb-5">{item.icon}</div>
                        <p className="text-primary text-sm">Step 0{item.id}</p>
                        <h3 className="text-xl font-bold text-gray-200 mt-1">{item.title}</h3>
                        <p className="text-gray-300 mt-5">{item.description}</p>
                    </motion.div>
                </AnimateOnView>
            ))}
        </div>
    );
};

export default GetStartedContainer;