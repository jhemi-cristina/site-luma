import type { NavLink } from "@/types/content";

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export interface FooterData {
  tagline: string;
  columns: FooterColumn[];
  copyright: { year: number; owner: string };
}

export const footerData: FooterData = {
  tagline: "Practical learning for curious people.",
  columns: [
    {
      title: "Explore",
      links: [
        { label: "Courses", href: "#courses" },
        { label: "Categories", href: "#courses" },
        { label: "Instructors", href: "#community" },
        { label: "For Teams", href: "#featured-course" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#how-it-works" },
        { label: "Careers", href: "#contact" },
        { label: "Journal", href: "#community" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "#contact" },
        { label: "Contact", href: "#contact" },
        { label: "Terms", href: "#" },
        { label: "Privacy", href: "#" },
      ],
    },
  ],
  copyright: { year: 2026, owner: "Luma Learning" },
};
