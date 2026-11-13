import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

interface LogoProps {
  tone?: "dark" | "light";
  className?: string;
  onClick?: () => void;
}

const logoSources = {
  dark: "/icons/logo.svg",
  light: "/icons/logo-light.svg",
};

export function Logo({ tone = "dark", className, onClick }: LogoProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="Luma home"
      className={cn(
        "inline-flex rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4",
        tone === "dark" ? "focus-visible:outline-primary" : "focus-visible:outline-white",
        className,
      )}
    >
      <Image src={logoSources[tone]} alt="" width={54} height={17} />
    </Link>
  );
}
