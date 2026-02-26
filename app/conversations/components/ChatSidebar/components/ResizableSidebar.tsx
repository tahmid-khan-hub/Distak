"use client";

import { useState, useRef, useEffect } from "react";

export default function ResizableSidebar({
  children,
}: {
  children: React.ReactNode;
}) {
  const [width, setWidth] = useState(300);
  const isResizing = useRef(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing.current) return;

      const newWidth = e.clientX;
      if (newWidth > 200 && newWidth < 600) {
        setWidth(newWidth);
      }
    };

    const handleMouseUp = () => {
      isResizing.current = false;
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
      style={{ width }}
      className="relative border-r bg-background"
    >
      {children}

      {/* Drag Handle */}
      <div
        onMouseDown={() => (isResizing.current = true)}
        className="absolute top-0 right-0 h-full w-1 cursor-col-resize bg-border hover:bg-primary transition"
      />
    </div>
  );
}