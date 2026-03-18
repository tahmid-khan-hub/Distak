import { MdOutlineInbox } from "react-icons/md";
import { motion } from "framer-motion";

export default function NoConversation() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-10 px-4 text-center text-gray-300 poppins">
      <motion.div
        initial={{ filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" }}
        animate={{ filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" }}
        whileHover={{ filter: "drop-shadow(0px 0px 20px rgba(111, 199, 161, 0.7))", }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <MdOutlineInbox className="h-12 w-12 text-gray-300 hover:text-primary transition-transform duration-200 hover:scale-105" />
      </motion.div>
      <p className="mt-5">
        No conversations yet
      </p>
      <p className="text-xs">
        Click <span className="font-semibold text-primary">New</span> or search by token to start
      </p>
    </div>
  );
}
