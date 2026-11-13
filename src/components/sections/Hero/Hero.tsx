import { Container } from "@/components/ui";
import { HeroContent } from "./HeroContent";
import { HeroMedia } from "./HeroMedia";
import { useHero } from "./useHero";

export function Hero() {
  const { media, ...content } = useHero();

  return (
    <section aria-labelledby={content.titleId} className="overflow-x-clip bg-surface py-15 lg:py-25">
      <Container className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-15">
        <HeroContent {...content} className="lg:flex-1" />
        <HeroMedia {...media} className="order-first lg:order-none" />
      </Container>
    </section>
  );
}
