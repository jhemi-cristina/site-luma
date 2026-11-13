import { contactData } from "@/data/contact";

export function useContact() {
  const { eyebrow, title, description, channels } = contactData;

  return {
    sectionId: "contact",
    titleId: "contact-title",
    info: { eyebrow, title, description, channels },
  };
}

export type ContactViewModel = ReturnType<typeof useContact>;
