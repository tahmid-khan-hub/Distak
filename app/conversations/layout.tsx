import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";

export default function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <SidebarProvider>
        <Sidebar>{children}</Sidebar>
      </SidebarProvider>
    </div>
  );
}
