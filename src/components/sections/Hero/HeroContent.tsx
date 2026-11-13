import { AvatarStack, ButtonLink, Eyebrow } from "@/components/ui";
import { cn } from "@/lib/cn";
import type { HeroViewModel } from "./useHero";

type HeroContentProps = Pick<HeroViewModel, "titleId" | "eyebrow" | "title" | "description" | "actions" | "trust"> & {
  className?: string;
};

export function HeroContent({ titleId, eyebrow, title, description, actions, trust, className }: HeroContentProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <Eyebrow>{eyebrow}</Eyebrow>

      <h1 id={titleId} className="mt-4 font-display text-h1-sm font-extrabold text-ink md:text-h1-md xl:text-h1">
        {title}
      </h1>

      <p className="mt-6 max-w-[480px] text-subtitle-sm text-muted lg:text-subtitle">{description}</p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        {actions.map((action) => (
          <ButtonLink key={action.label} href={action.href} variant={action.variant} size="lg" className="w-full sm:w-auto">
            {action.label}
          </ButtonLink>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-3 sm:justify-start">
        <AvatarStack avatars={trust.avatars} />
        <p className="text-body text-muted">
          <strong className="font-bold text-ink">{trust.highlight}</strong> {trust.label}
        </p>
      </div>
    </div>
  );
}
