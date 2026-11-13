import { AvatarStack, ButtonLink, Container } from "@/components/ui";
import { DecorLayer } from "./DecorLayer";
import { useFinalCta } from "./useFinalCta";

export function FinalCta() {
  const { titleId, title, description, avatars, actions, decor } = useFinalCta();

  return (
    <section aria-labelledby={titleId} className="relative overflow-hidden bg-accent-yellow py-15 lg:py-25">
      <DecorLayer shapes={decor} />

      <Container className="relative flex flex-col items-center text-center">
        <AvatarStack avatars={avatars} size="md" ringTone="star" />

        <h2 id={titleId} className="mt-8 font-display text-display-sm font-extrabold text-ink lg:text-display">
          {title}
        </h2>
        <p className="mt-4 text-subtitle-sm text-muted lg:text-subtitle">{description}</p>

        <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          {actions.map((action) => (
            <ButtonLink key={action.label} href={action.href} variant={action.variant} size="lg" className="w-full sm:w-auto">
              {action.label}
            </ButtonLink>
          ))}
        </div>
      </Container>
    </section>
  );
}
