"use client"
import { motion } from "framer-motion";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

export default function ConversationsPage() {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <motion.div
        initial={{ filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" }}
        animate={{ filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" }}
        whileHover={{ filter: "drop-shadow(0px 0px 20px rgba(111, 199, 161, 0.7))", }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <IoChatbubbleEllipsesOutline className="h-37 w-37 text-gray-300 hover:text-primary transition-transform duration-200 hover:scale-105" />
      </motion.div>
      <h1 className="poppins text-xl text-gray-200 mt-6">Select a conversation to start chatting</h1>
    </div>
  );
}
