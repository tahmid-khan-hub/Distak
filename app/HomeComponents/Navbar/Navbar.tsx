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
                    <Button className="">Conversations</Button>
                    </Link>
                </div>
            }
        </div>
    )
}