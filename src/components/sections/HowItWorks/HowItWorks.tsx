import { Container, SectionHeading } from "@/components/ui";
import { StepItem } from "./StepItem";
import { useHowItWorks } from "./useHowItWorks";

export function HowItWorks() {
  const { sectionId, titleId, heading, steps } = useHowItWorks();

  return (
    <section id={sectionId} aria-labelledby={titleId} className="bg-surface py-15 lg:py-25">
      <Container>
        <SectionHeading id={titleId} {...heading} align="center" className="max-w-[362px] md:max-w-none" />

        <ol className="mt-10 grid md:grid-cols-3 md:gap-10 md:py-7 lg:mt-20 lg:gap-20">
          {steps.map((step) => (
            <StepItem key={step.title} {...step} />
          ))}
        </ol>
      </Container>
    </section>
  );
}
