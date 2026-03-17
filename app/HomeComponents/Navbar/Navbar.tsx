"use client"
import { useSession } from "@/app/hooks/useSession"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import NavbarSkeleton from "./NavbarSkeleton";

export default function Navbar() {
    const { data: session, isLoading } = useSession();
    
    return (
        <div className="flex justify-end py-3">
            {isLoading ? (
                <NavbarSkeleton />
            ) : session && (
                <Link href="/conversations">
                    <Button>Conversations</Button>
                </Link>
            )}
        </div>
    )
}