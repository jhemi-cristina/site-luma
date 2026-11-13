import type { CtaLink, ImageAsset } from "@/types/content";

export interface HeroData {
  eyebrow: string;
  title: string;
  description: string;
  actions: CtaLink[];
  trust: {
    highlight: string;
    label: string;
    avatars: ImageAsset[];
  };
  media: {
    image: ImageAsset;
    coursesBadge: { value: string; label: string };
    ratingBadge: { rating: number; label: string };
  };
}

export const heroData: HeroData = {
  eyebrow: "Learn at your own pace",
  title: "Build skills that actually move you forward.",
  description:
    "Practical courses taught by people who do the work every day. Learn design, technology, business and more — one focused lesson at a time.",
  actions: [
    { label: "Explore courses", href: "#courses", variant: "primary" },
    { label: "See how it works", href: "#how-it-works", variant: "secondary" },
  ],
  trust: {
    highlight: "Trusted by 24,000+",
    label: "learners",
    avatars: [
      { src: "/images/hero/avatar-1.png", alt: "", width: 80, height: 80 },
      { src: "/images/hero/avatar-2.png", alt: "", width: 80, height: 80 },
      { src: "/images/hero/avatar-3.png", alt: "", width: 80, height: 80 },
    ],
  },
  media: {
    image: {
      src: "/images/hero/learner.png",
      alt: "Smiling woman with glasses studying at her laptop in a bright office",
      width: 900,
      height: 1100,
    },
    coursesBadge: { value: "120+", label: "expert-led courses" },
    ratingBadge: { rating: 4.9, label: "avg rating" },
  },
};
