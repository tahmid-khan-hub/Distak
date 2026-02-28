"use client";
import { useSession } from "@/app/hooks/useSession";
import ResumeChat from "./components/ResumeChat/ResumeChat";
import GenerateToken from "./components/GenerateToken/GenerateToken";

const CallToAction = () => {
  const { data: session, isLoading } = useSession();
  if(isLoading) { return <div>Loading...</div> }
  
  return ( session ? <ResumeChat /> : <GenerateToken />);
};

export default CallToAction;
