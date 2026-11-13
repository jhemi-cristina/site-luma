"use client";

import { Container, Logo } from "@/components/ui";
import { DesktopNav } from "./DesktopNav";
import { HeaderActions } from "./HeaderActions";
import { MenuToggle } from "./MenuToggle";
import { MobileMenu } from "./MobileMenu";
import { useHeader } from "./useHeader";

export function Header() {
  const { links, actions, menuId, toggleRef, isMenuOpen, toggleMenu, closeMenu } = useHeader();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface">
      <Container className="flex h-[68px] items-center justify-between lg:grid lg:h-[69px] lg:grid-cols-[1fr_auto_1fr]">
        <Logo onClick={closeMenu} />

        <DesktopNav links={links} className="hidden lg:block" />
        <HeaderActions actions={actions} className="hidden justify-self-end lg:flex" />

        <MenuToggle
          ref={toggleRef}
          isOpen={isMenuOpen}
          controlsId={menuId}
          onToggle={toggleMenu}
          className="-mr-1.5 lg:hidden"
        />
      </Container>

      <MobileMenu id={menuId} isOpen={isMenuOpen} links={links} actions={actions} onNavigate={closeMenu} />
    </header>
  );
}
