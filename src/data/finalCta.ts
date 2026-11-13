import type { CtaLink, ImageAsset } from "@/types/content";

export type DecorShape =
  | { kind: "ring"; x: number; y: number; size: number }
  | { kind: "dot"; x: number; y: number; size: number }
  | { kind: "tile"; x: number; y: number; size: number; rotate: number }
  | { kind: "tile-outline"; x: number; y: number; size: number; rotate: number }
  | { kind: "icon"; x: number; y: number; size: number; src: string; rotate?: number };

export interface FinalCtaData {
  title: string;
  description: string;
  avatars: ImageAsset[];
  actions: CtaLink[];
  decor: DecorShape[];
}

export const finalCtaData: FinalCtaData = {
  title: "What will you learn next?",
  description: "Start with one course. Build from there.",
  avatars: [
    { src: "/images/hero/avatar-1.png", alt: "", width: 80, height: 80 },
    { src: "/images/hero/avatar-2.png", alt: "", width: 80, height: 80 },
    { src: "/images/hero/avatar-3.png", alt: "", width: 80, height: 80 },
    { src: "/images/cta/avatar-4.png", alt: "", width: 80, height: 80 },
  ],
  actions: [
    { label: "Explore all courses", href: "#courses", variant: "primary" },
    { label: "Join Luma", href: "#contact", variant: "secondary" },
  ],
  decor: [
    { kind: "ring", x: 22, y: 16, size: 108 },
    { kind: "dot", x: 56, y: 373, size: 120 },
    { kind: "dot", x: 1064, y: 468, size: 40 },
    { kind: "tile", x: 1155, y: -13, size: 115, rotate: 12 },
    { kind: "tile", x: -28, y: 235, size: 56, rotate: 12 },
    { kind: "ring", x: 1208, y: 429, size: 32 },
    { kind: "ring", x: 877, y: 43, size: 32 },
    { kind: "tile-outline", x: 322, y: 47, size: 56, rotate: 12 },
    { kind: "icon", x: 281, y: 369, size: 83, src: "/icons/decor/blob.svg", rotate: 15 },
    { kind: "icon", x: 1080, y: 180, size: 160, src: "/icons/decor/cube.svg" },
    { kind: "icon", x: 141, y: 214, size: 32, src: "/icons/decor/chat-bubble.svg" },
    { kind: "icon", x: 1016, y: 82, size: 61, src: "/icons/decor/drop.svg" },
    { kind: "icon", x: 963, y: 381, size: 48, src: "/icons/decor/book.svg" },
  ],
};
