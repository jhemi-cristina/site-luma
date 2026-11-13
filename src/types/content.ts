export type ButtonVariant = "primary" | "secondary" | "ghost" | "accent" | "inverse-ghost";

export interface NavLink {
  label: string;
  href: string;
}

export interface CtaLink extends NavLink {
  variant: ButtonVariant;
}

export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}
