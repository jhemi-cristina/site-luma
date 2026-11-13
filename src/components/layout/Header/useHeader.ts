"use client";

import { useCallback, useId, useRef } from "react";
import { useMenu } from "@/contexts/MenuContext";
import { headerActions, mainNavigation } from "@/data/navigation";
import { useEscapeKey } from "@/hooks/useEscapeKey";

export function useHeader() {
  const { isOpen, toggle, close } = useMenu();
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);

  const closeAndRestoreFocus = useCallback(() => {
    close();
    toggleRef.current?.focus();
  }, [close]);

  useEscapeKey(closeAndRestoreFocus, isOpen);

  return {
    links: mainNavigation,
    actions: headerActions,
    menuId,
    toggleRef,
    isMenuOpen: isOpen,
    toggleMenu: toggle,
    closeMenu: close,
  };
}
