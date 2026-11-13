import { ButtonLink } from "@/components/ui";
import { cn } from "@/lib/cn";
import type { CtaLink } from "@/types/content";

interface HeaderActionsProps {
  actions: CtaLink[];
  className?: string;
}

export function HeaderActions({ actions, className }: HeaderActionsProps) {
  return (
    <div className={cn("items-center gap-2", className)}>
      {actions.map((action) => (
        <ButtonLink
          key={action.label}
          href={action.href}
          variant={action.variant}
          size={action.variant === "ghost" ? "compact" : "md"}
        >
          {action.label}
        </ButtonLink>
      ))}
    </div>
  );
}
