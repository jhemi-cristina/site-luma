import { Container } from "@/components/ui";
import { StatList } from "./StatList";
import { TestimonialQuote } from "./TestimonialQuote";
import { useTestimonial } from "./useTestimonial";

export function Testimonial() {
  const { sectionLabel, quote, author, stats } = useTestimonial();

  return (
    <section aria-label={sectionLabel} className="bg-white py-15 lg:py-25">
      <Container className="flex flex-col gap-15 lg:flex-row lg:items-center lg:justify-between">
        <TestimonialQuote quote={quote} author={author} className="lg:flex-1" />
        <StatList stats={stats} className="lg:w-[401px] lg:shrink-0" />
      </Container>
    </section>
  );
}
