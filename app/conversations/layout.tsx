import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";
import ChatSidebar from "./components/ChatSidebar/ChatSidebar";

export default function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex-1 h-screen overflow-hidden">
        <Sidebar className="border-r">
          <ChatSidebar />
        </Sidebar>
        <main className="flex-1 bg-background h-screen">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
