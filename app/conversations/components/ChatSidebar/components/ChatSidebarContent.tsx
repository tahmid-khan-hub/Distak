"use client"
import { SidebarContent, SidebarHeader } from "@/components/ui/sidebar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Logo from "@/app/chat/components/logo/logo"
import Link from "next/link"
import { useState } from "react"
import NewConversationModal from "./NewConversationModal/NewConversationModal"
import { useQuery } from "@tanstack/react-query"
import UseAxiosSecure from "@/app/hooks/UseAxiosSecure"
import { Conversation } from "@/types/chat"

export default function ChatSidebarContent() {
  const [open, setOpen] = useState(false);
  const axiosSecure = UseAxiosSecure();

  const FindNewConversation = () => { setOpen(true); }

  const { data:conversations = [], isLoading } = useQuery<Conversation[]>({
    queryKey: ["conversations"],
    queryFn: async() => {
      const res = await axiosSecure.get("/api/chat")
      return res.data;
    }
  })

  return (
    <>
      {/* modal */}
      <NewConversationModal open={open} setOpen={setOpen} />
      <div className="h-full flex flex-col">
        {/* Logo */}
        <div className="pl-2"><Logo /></div>
        <SidebarHeader className="p-4 border-b border-b-gray-600 space-y-3 shrink-0">
          <div className="flex items-center justify-between">
            <h2 className="text-xl text-gray-200 font-semibold">Messages</h2>
            <Button onClick={FindNewConversation} size="sm">New</Button>
          </div>

          <Input className="text-gray-200" placeholder="Search conversations..." />
        </SidebarHeader>

        <SidebarContent className="flex-1 overflow-y-auto p-1 space-y-1">
          {isLoading && <p>loading...</p>}

          {!isLoading && conversations.length === 0 && (
            <p>no conversations yet.</p>
          )}

          {conversations.map((conv) => (
            <Link key={conv.id} href={`/conversations/${conv.id}`}>
              <div className="flex items-center gap-3 p-3 hover:bg-primary/20 cursor-pointer transition border-b border-b-gray-800">

                <div className="flex-1 overflow-hidden">
                  <p className="font-medium text-gray-200 truncate">
                    {conv.nickname || "Unknown User"}
                  </p>
                </div>

              </div>
            </Link>
          ))}
        </SidebarContent>
      </div>
    </>
  )
}