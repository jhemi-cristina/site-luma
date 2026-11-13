import type { CtaLink } from "@/types/content";

export interface TileSize {
  width: number;
  height: number;
}

export interface CollagePhoto {
  src: string;
  alt: string;
  source: TileSize;
  mobile: TileSize;
  desktop: TileSize;
}

export interface CollageColumn {
  offset: { mobile: number; desktop: number };
  align: "start" | "end";
  photos: CollagePhoto[];
}

export interface PeopleData {
  eyebrow: string;
  title: string;
  description: string;
  action: CtaLink;
  columns: CollageColumn[];
}

export const peopleData: PeopleData = {
  eyebrow: "The people",
  title: "Meet international students & teachers",
  description:
    "Learn alongside a global community of curious students and working professionals. Our teachers come from product, engineering and creative teams in more than 40 countries, and every course is shaped by feedback from the people taking it.",
  action: { label: "Explore teachers and students", href: "#contact", variant: "secondary" },
  columns: [
    {
      offset: { mobile: 48, desktop: 64 },
      align: "end",
      photos: [
        {
          src: "/images/people/people-01.png",
          alt: "Smiling girl waving at her computer during an online class",
          source: { width: 1880, height: 1255 },
          mobile: { width: 72, height: 96 },
          desktop: { width: 103, height: 154 },
        },
        {
          src: "/images/people/people-02.png",
          alt: "Teacher and students laughing together around a laptop",
          source: { width: 1880, height: 1253 },
          mobile: { width: 94, height: 129 },
          desktop: { width: 138, height: 207 },
        },
      ],
    },
    {
      offset: { mobile: 0, desktop: 26 },
      align: "start",
      photos: [
        {
          src: "/images/people/people-03.png",
          alt: "Student in a blue hoodie reading a book in a library",
          source: { width: 1880, height: 1253 },
          mobile: { width: 72, height: 106 },
          desktop: { width: 103, height: 170 },
        },
        {
          src: "/images/people/people-04.png",
          alt: "Two students practicing music beside a bright window",
          source: { width: 868, height: 1300 },
          mobile: { width: 72, height: 108 },
          desktop: { width: 103, height: 173 },
        },
        {
          src: "/images/people/people-05.png",
          alt: "Student taking notes from a book next to a tablet",
          source: { width: 975, height: 1300 },
          mobile: { width: 72, height: 80 },
          desktop: { width: 103, height: 128 },
        },
      ],
    },
    {
      offset: { mobile: 0, desktop: 0 },
      align: "start",
      photos: [
        {
          src: "/images/people/people-06.png",
          alt: "Graduate in cap and gown holding a diploma",
          source: { width: 859, height: 1300 },
          mobile: { width: 72, height: 86 },
          desktop: { width: 103, height: 137 },
        },
        {
          src: "/images/people/people-07.png",
          alt: "Young woman studying at a desk in a minimalist room",
          source: { width: 1880, height: 1253 },
          mobile: { width: 72, height: 86 },
          desktop: { width: 103, height: 138 },
        },
        {
          src: "/images/people/people-08.png",
          alt: "Student watching a teacher on a video call",
          source: { width: 1880, height: 1255 },
          mobile: { width: 72, height: 96 },
          desktop: { width: 103, height: 154 },
        },
      ],
    },
    {
      offset: { mobile: 0, desktop: 0 },
      align: "start",
      photos: [
        {
          src: "/images/people/people-09.png",
          alt: "Smiling student in a yellow shirt holding a red folder outdoors",
          source: { width: 1880, height: 1253 },
          mobile: { width: 88, height: 128 },
          desktop: { width: 128, height: 205 },
        },
        {
          src: "/images/people/people-10.png",
          alt: "Student in a hijab holding a coffee and notebooks on campus",
          source: { width: 1043, height: 1300 },
          mobile: { width: 72, height: 83 },
          desktop: { width: 103, height: 132 },
        },
      ],
    },
  ],
};
