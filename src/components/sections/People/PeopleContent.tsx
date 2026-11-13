import { ButtonLink, Eyebrow } from "@/components/ui";
import { cn } from "@/lib/cn";
import type { PeopleViewModel } from "./usePeople";

type PeopleContentProps = PeopleViewModel["content"] & {
  titleId: string;
  className?: string;
};

export function PeopleContent({ titleId, eyebrow, title, description, action, className }: PeopleContentProps) {
  return (
    <div className={cn("flex flex-col items-start gap-6 lg:gap-8", className)}>
      <div className="flex flex-col gap-2">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 id={titleId} className="font-display text-h2-sm font-extrabold text-ink lg:text-h2">
          {title}
        </h2>
      </div>

      <p className="text-subtitle-sm text-ink lg:text-subtitle lg:text-muted">{description}</p>

      <ButtonLink href={action.href} variant={action.variant} size="lg">
        {action.label}
      </ButtonLink>
    </div>
  );
}
