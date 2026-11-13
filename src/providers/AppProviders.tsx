"use client";

import type { ReactNode } from "react";
import { MenuProvider } from "@/contexts/MenuContext";

export function AppProviders({ children }: { children: ReactNode }) {
  return <MenuProvider>{children}</MenuProvider>;
}
