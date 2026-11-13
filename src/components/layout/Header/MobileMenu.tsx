import Link from "next/link";
import { ButtonLink, Container } from "@/components/ui";
import type { CtaLink, NavLink } from "@/types/content";

interface MobileMenuProps {
  id: string;
  isOpen: boolean;
  links: NavLink[];
  actions: CtaLink[];
  onNavigate: () => void;
}

export function MobileMenu({ id, isOpen, links, actions, onNavigate }: MobileMenuProps) {
  return (
    <div
      id={id}
      hidden={!isOpen}
      className="fixed inset-x-0 top-[69px] bottom-0 overflow-y-auto bg-surface motion-safe:animate-fade-in lg:hidden"
    >
      <Container className="flex flex-col gap-8 py-6">
        <nav aria-label="Mobile">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.label} className="border-b border-line">
                <Link
                  href={link.href}
                  onClick={onNavigate}
                  className="block py-4 text-subtitle-sm font-semibold text-ink focus-visible:outline-2 focus-visible:outline-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-3">
          {actions.map((action) => (
            <ButtonLink
              key={action.label}
              href={action.href}
              onClick={onNavigate}
              variant={action.variant === "ghost" ? "secondary" : action.variant}
              size="lg"
              fullWidth
            >
              {action.label}
            </ButtonLink>
          ))}
        </div>
      </Container>
    </div>
  );
}
