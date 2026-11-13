import { categoriesData } from "@/data/categories";

export function useCategories() {
  const { eyebrow, title, description, linkLabel, items } = categoriesData;

  return {
    sectionId: "courses",
    titleId: "categories-title",
    heading: { eyebrow, title, description },
    cards: items.map((item, index) => ({
      ...item,
      number: String(index + 1).padStart(2, "0"),
      linkLabel,
      linkAriaLabel: `${linkLabel} ${item.title} courses`,
    })),
  };
}

export type CategoryCardViewModel = ReturnType<typeof useCategories>["cards"][number];
