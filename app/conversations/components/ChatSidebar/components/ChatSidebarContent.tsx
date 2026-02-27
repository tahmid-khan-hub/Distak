"use client"
import { SidebarContent, SidebarHeader } from "@/components/ui/sidebar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function ChatSidebarContent() {
  return (
    <>
      <div><SidebarHeader className="p-4 border-b space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Messages</h2>
          <Button size="sm">New</Button>
        </div>

        <Input placeholder="Search conversations..." />
      </SidebarHeader>

      <SidebarContent className="flex-1 overflow-y-auto p-2 space-y-1">
        {[1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted cursor-pointer transition"
          >
            

            <div className="flex-1 overflow-hidden">
              <p className="font-medium truncate">User {item}</p>
              <p className="text-sm text-muted-foreground truncate">
                Last message preview goes here...
              </p>
            </div>
          </div>
        ))}
      </SidebarContent></div>
    </>
  )
}