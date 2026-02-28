"use client"
import { useSession } from "@/app/hooks/useSession"
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
    const { data: session, isLoading } = useSession();
    if(isLoading) { return <div>Loading...</div> }
    
    return (
        <div>
            {session ? 
                <div>
                    <Link href={"/conversations"}><Button className=" bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_15px_rgba(120,120,120,0.3)]">Resume Chat</Button></Link>
                </div> : 
                <div>
                    <Link href={"/conversations"}><Button className=" bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_15px_rgba(120,120,120,0.3)]">Generate Token</Button></Link>
                </div>
            }
        </div>
    )
}