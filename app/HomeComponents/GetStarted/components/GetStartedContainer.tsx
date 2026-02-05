import { GetStartedItem } from "../GetStarted";
import { motion } from "framer-motion";

interface GetStartedContainerProps {
  items: GetStartedItem[];
}
const GetStartedContainer = ({ items }: GetStartedContainerProps) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {items.map((item) => (
                <motion.div key={item.id} 
                    whileHover={{ scale: 1.02, boxShadow: "0px 0px 20px rgba(111, 199, 161, 0.7)", }}
                    transition={{ duration: 0.2 }} 
                    className="poppins bg-gray-800 p-6 rounded-lg shadow-lg border-2 border-gray-700 hover:border-[#6FC7A1] transition-colors duration-300">
                    <div className="text-blue-400 mb-5">{item.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                </motion.div>
            ))}
        </div>
    );
};

export default GetStartedContainer;