import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface FloatingCardProps {
  children: ReactNode;
  className?: string;
}

export function FloatingCard({ children, className }: FloatingCardProps) {
  return (
    <div className={cn("flex items-center rounded-xl bg-white px-4 py-3 shadow-card", className)}>{children}</div>
  );
}
