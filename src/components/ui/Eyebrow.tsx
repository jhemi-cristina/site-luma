import { cn } from "@/lib/cn";

interface EyebrowProps {
  children: string;
  tone?: "brand" | "light";
  className?: string;
}

export function Eyebrow({ children, tone = "brand", className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "text-overline font-semibold uppercase",
        tone === "brand" ? "text-primary" : "text-white",
        className,
      )}
    >
      {children}
    </p>
  );
}
