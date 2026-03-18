import Logo from "@/app/chat/components/logo/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarContent, SidebarHeader } from "@/components/ui/sidebar";

export default function SidebarContentSkeletion() {
  return (
    <>
      <div className="h-full flex flex-col">
        {/* Logo */}
        <div className="pl-2">
          <Logo />
        </div>
        <SidebarHeader className="p-4 border-b border-b-gray-200 space-y-3 shrink-0">
          <div className="flex items-center justify-between">
            <h2 className="text-xl text-gray-200 font-semibold">Messages</h2>
            <Button size="sm">New</Button>
          </div>

          <Input
            className="text-gray-200"
            placeholder="Search conversations..."
          />
        </SidebarHeader>
        <SidebarContent className="flex-1 overflow-y-auto p-1 ">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((conv, i) => (
            <div key={i} className="flex items-center gap-1 p-2 rounded-md">
              <div className="flex-1 overflow-hidden bg-primary/5 h-13">
              </div>
            </div>
          ))}
        </SidebarContent>
      </div>
    </>
  );
}
