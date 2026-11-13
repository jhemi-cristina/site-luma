import Link from "next/link";
import { cn } from "@/lib/cn";
import type { FooterColumnViewModel } from "./useFooter";

type FooterColumnProps = FooterColumnViewModel & { className?: string };

export function FooterColumn({ title, headingId, links, className }: FooterColumnProps) {
  return (
    <nav aria-labelledby={headingId} className={className}>
      <h2 id={headingId} className="text-overline font-semibold text-white uppercase">
        {title}
      </h2>
      <ul className="mt-4 flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className={cn(
                "rounded-sm text-body text-white/70 transition-colors duration-200 hover:text-white",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
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
