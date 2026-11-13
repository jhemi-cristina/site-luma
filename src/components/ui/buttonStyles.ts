import { cn } from "@/lib/cn";
import type { ButtonVariant } from "@/types/content";

export type ButtonSize = "compact" | "md" | "lg" | "lg-tight";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white hover:bg-primary-hover focus-visible:outline-primary",
  secondary: "border border-line bg-white text-ink hover:border-ink/30 hover:bg-surface focus-visible:outline-primary",
  ghost: "font-normal text-muted hover:text-ink focus-visible:outline-primary",
  accent: "bg-star text-ink hover:bg-star-hover focus-visible:outline-white",
  "inverse-ghost": "gap-2 text-on-primary-muted hover:text-white focus-visible:outline-white",
};

const sizeClasses: Record<ButtonSize, string> = {
  compact: "px-4 py-2.5",
  md: "px-5 py-2.5",
  lg: "px-7 py-3.5",
  "lg-tight": "px-4 py-3.5",
};

export interface ButtonStyleOptions {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
}

export function buttonStyles({ variant = "primary", size = "md", fullWidth = false, className }: ButtonStyleOptions) {
  return cn(
    "inline-flex items-center justify-center rounded-lg text-body font-bold whitespace-nowrap",
    "transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-70",
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && "w-full",
    className,
  );
}
