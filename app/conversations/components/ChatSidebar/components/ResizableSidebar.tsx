"use client";

import { useState, useRef, useEffect } from "react";

export default function ResizableSidebar({
  children,
}: {
  children: React.ReactNode;
}) {
  const [width, setWidth] = useState(300);
  const isResizing = useRef(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing.current || !sidebarRef.current) return;

      const rect = sidebarRef.current.getBoundingClientRect();
      const newWidth = e.clientX - rect.left;
      if (newWidth > 300 && newWidth < 800) {
        setWidth(newWidth);
      }
    };

    const handleMouseUp = () => {
        isResizing.current = false;
        document.body.style.userSelect = ""; // restore selection
        document.body.style.cursor = ""; // restore cursor
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      ref={sidebarRef}
      style={{ width }}
      className="relative h-full shrink-0 border-r"
    >
      {children}

      {/* Drag Handle */}
      <div
        onMouseDown={() => {
          isResizing.current = true;

          // Prevent text selection while resizing
          document.body.style.userSelect = "none";
          document.body.style.cursor = "col-resize";
        }}
        className="absolute top-0 right-0 h-full w-1 cursor-col-resize bg-border hover:bg-primary transition active:bg-primary"
      />
    </div>
  );
}