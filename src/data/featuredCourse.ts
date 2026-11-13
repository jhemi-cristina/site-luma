import type { CtaLink, ImageAsset } from "@/types/content";

export interface FeaturedCourseData {
  badge: string;
  eyebrow: string;
  title: string;
  description: string;
  instructor: { name: string; role: string };
  lessons: number;
  durationInMinutes: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  image: ImageAsset;
  actions: CtaLink[];
}

export const featuredCourseData: FeaturedCourseData = {
  badge: "Featured course",
  eyebrow: "Most popular this month",
  title: "Designing products people understand.",
  description:
    "Learn how to turn complex workflows into simple, intentional product experiences through research, structure and thoughtful interaction design.",
  instructor: { name: "Maya Chen", role: "Senior Product Designer" },
  lessons: 8,
  durationInMinutes: 160,
  level: "Intermediate",
  image: {
    src: "/images/featured/product-design.png",
    alt: "Product design student sketching interface prototypes on a desk covered with material samples",
    width: 700,
    height: 500,
  },
  actions: [
    { label: "View course", href: "#featured-course", variant: "accent" },
    { label: "Browse all courses", href: "#courses", variant: "inverse-ghost" },
  ],
};
