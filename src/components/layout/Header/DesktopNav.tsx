import Link from "next/link";
import { cn } from "@/lib/cn";
import type { NavLink } from "@/types/content";

interface DesktopNavProps {
  links: NavLink[];
  className?: string;
}

export function DesktopNav({ links, className }: DesktopNavProps) {
  return (
    <nav aria-label="Main" className={className}>
      <ul className="flex items-center gap-8">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className={cn(
                "rounded-sm text-body text-muted transition-colors duration-200 hover:text-ink",
                "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary",
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
