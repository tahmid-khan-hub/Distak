"use client"
import { useSession } from "@/app/hooks/useSession"
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
    const { data: session, isLoading } = useSession();
    if(isLoading) { return <div>Loading...</div> }
    
    return (
        <div className="flex justify-end py-3">
            {session && 
                <div>
                    <Link href={"/conversations"}>
                    <Button className="bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:shadow-[0_4px_15px_rgba(120,120,120,0.3)]">Conversations</Button>
                    </Link>
                </div>
            }
        </div>
    )
}