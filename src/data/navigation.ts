import type { CtaLink, NavLink } from "@/types/content";

export const mainNavigation: NavLink[] = [
  { label: "Courses", href: "#courses" },
  { label: "For Teams", href: "#featured-course" },
  { label: "Community", href: "#community" },
  { label: "About", href: "#how-it-works" },
];

export const headerActions: CtaLink[] = [
  { label: "Log in", href: "#", variant: "ghost" },
  { label: "Start learning", href: "#courses", variant: "primary" },
];
