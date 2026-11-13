"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const DESKTOP_QUERY = "(min-width: 48rem)";

interface MenuContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

const MenuContext = createContext<MenuContextValue | null>(null);

export function MenuProvider({ children }: { children: ReactNode }) {
  const [isRequestedOpen, setIsRequestedOpen] = useState(false);
  const isDesktop = useMediaQuery(DESKTOP_QUERY);

  const isOpen = isRequestedOpen && !isDesktop;

  useLockBodyScroll(isOpen);

  const open = useCallback(() => setIsRequestedOpen(true), []);
  const close = useCallback(() => setIsRequestedOpen(false), []);
  const toggle = useCallback(() => setIsRequestedOpen((current) => !current), []);

  const value = useMemo(() => ({ isOpen, open, close, toggle }), [isOpen, open, close, toggle]);

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}

export function useMenu(): MenuContextValue {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used inside <MenuProvider>.");
  }
  return context;
}
