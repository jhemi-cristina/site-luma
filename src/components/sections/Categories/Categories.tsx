import { Container, SectionHeading } from "@/components/ui";
import { CategoryCard } from "./CategoryCard";
import { useCategories } from "./useCategories";

export function Categories() {
  const { sectionId, titleId, heading, cards } = useCategories();

  return (
    <section id={sectionId} aria-labelledby={titleId} className="bg-white py-15 lg:py-25">
      <Container>
        <SectionHeading id={titleId} {...heading} />

        <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:mt-10 lg:gap-5 xl:grid-cols-4">
          {cards.map(({ slug, ...card }) => (
            <li key={slug} className="flex">
              <CategoryCard {...card} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
