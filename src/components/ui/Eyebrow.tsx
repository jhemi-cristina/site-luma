import { cn } from "@/lib/cn";

interface EyebrowProps {
  children: string;
  className?: string;
}

export function Eyebrow({ children, className }: EyebrowProps) {
  return <p className={cn("text-overline font-semibold text-primary uppercase", className)}>{children}</p>;
}
