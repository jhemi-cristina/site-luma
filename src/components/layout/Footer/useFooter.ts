import { footerData } from "@/data/footer";

export function useFooter() {
  const { tagline, columns, copyright } = footerData;

  return {
    tagline,
    columns: columns.map((column) => ({
      ...column,
      headingId: `footer-${column.title.toLowerCase()}`,
    })),
    copyrightText: `© ${copyright.year} ${copyright.owner}`,
  };
}

export type FooterColumnViewModel = ReturnType<typeof useFooter>["columns"][number];
