"use client"
import { SidebarContent, SidebarHeader } from "@/components/ui/sidebar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Logo from "@/app/chat/components/logo/logo"

export default function ChatSidebarContent() {
  return (
    <>
      <div>
        {/* Logo */}
        <div className="pl-2"><Logo /></div>
        <SidebarHeader className="p-4 border-b space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xl text-gray-200 font-semibold">Messages</h2>
          <Button size="sm">New</Button>
        </div>

        <Input className="text-gray-200" placeholder="Search conversations..." />
      </SidebarHeader>

      <SidebarContent className="flex-1 overflow-y-auto p-1 space-y-1">
        {[1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 p-3 hover:bg-primary/20 cursor-pointer transition border-b border-b-gray-800"
          >
            

            <div className="flex-1 overflow-hidden">
              <p className="font-medium text-gray-200 truncate">User {item}</p>
              <p className="text-sm text-gray-400 truncate">
                Last message preview goes here...
              </p>
            </div>
          </div>
        ))}
      </SidebarContent></div>
    </>
  )
}