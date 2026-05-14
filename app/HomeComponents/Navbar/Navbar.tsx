"use client"
import { useSession } from "@/app/hooks/useSession"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import NavbarSkeleton from "./NavbarSkeleton";
import Logo from "@/app/Logo/logo";

export default function Navbar() {
    const { data: session, isLoading } = useSession();
    
    return (
        <div className="sticky top-0 z-50 border-b border-b-primary/20 bg-black">
            <div className="flex justify-between w-full max-w-275 mx-auto">
                {/* logo */}
                <div><Logo/></div>

                <div className="p-3">
                    {isLoading ? (
                        <NavbarSkeleton />
                    ) : session && (
                        <Link href="/conversations">
                            <Button className="btn_primary">Conversations</Button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}