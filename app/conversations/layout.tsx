import { SidebarProvider } from "@/components/ui/sidebar";
import ChatSidebar from "./components/ChatSidebar/ChatSidebar";
import ResizableSidebar from "./components/ChatSidebar/components/ResizableSidebar";

export default function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden">
        <ResizableSidebar><ChatSidebar /></ResizableSidebar>
        <main className="flex-1 min-w-0 h-full overflow-auto">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
