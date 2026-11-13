import { heroData } from "@/data/hero";

export function useHero() {
  const { eyebrow, title, description, actions, trust, media } = heroData;

  return {
    titleId: "hero-title",
    eyebrow,
    title,
    description,
    actions,
    trust,
    media: {
      image: media.image,
      coursesBadge: media.coursesBadge,
      rating: media.ratingBadge.rating,
      ratingLabel: `${media.ratingBadge.rating} ${media.ratingBadge.label}`,
    },
  };
}

export type HeroViewModel = ReturnType<typeof useHero>;
