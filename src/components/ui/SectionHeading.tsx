import { cn } from "@/lib/cn";
import { Eyebrow } from "./Eyebrow";

interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({ id, eyebrow, title, description, align = "left", className }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col", align === "center" && "mx-auto items-center text-center", className)}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 id={id} className="mt-4 font-display text-h2-sm font-extrabold text-ink lg:text-h2">
        {title}
      </h2>
      {description && <p className="mt-4 text-subtitle-sm text-muted lg:text-subtitle">{description}</p>}
    </div>
  );
}
