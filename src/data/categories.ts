export interface Category {
  slug: string;
  title: string;
  description: string;
  href: string;
}

export interface CategoriesData {
  eyebrow: string;
  title: string;
  description: string;
  linkLabel: string;
  items: Category[];
}

export const categoriesData: CategoriesData = {
  eyebrow: "Find your next skill",
  title: "Learn something worth knowing.",
  description: "Short, practical courses designed around skills you can put to work immediately.",
  linkLabel: "Explore",
  items: [
    {
      slug: "product-design",
      title: "Product Design",
      description: "Turn complex problems into clear, useful experiences.",
      href: "#featured-course",
    },
    {
      slug: "technology",
      title: "Technology",
      description: "Build a stronger understanding of the tools shaping digital products.",
      href: "#featured-course",
    },
    {
      slug: "business",
      title: "Business",
      description: "Develop practical skills for better decisions and stronger teams.",
      href: "#featured-course",
    },
    {
      slug: "creative",
      title: "Creative",
      description: "Explore new ways to communicate, create and tell stories.",
      href: "#featured-course",
    },
  ],
};
