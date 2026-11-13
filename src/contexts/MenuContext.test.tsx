import { act, renderHook } from "@testing-library/react";
import type { ReactNode } from "react";
import { describe, expect, it } from "vitest";
import { setMediaMatches } from "@/test/matchMedia";
import { MenuProvider, useMenu } from "./MenuContext";

const wrapper = ({ children }: { children: ReactNode }) => <MenuProvider>{children}</MenuProvider>;

describe("MenuContext", () => {
  it("starts closed and toggles open and closed", () => {
    const { result } = renderHook(() => useMenu(), { wrapper });

    expect(result.current.isOpen).toBe(false);
    act(() => result.current.toggle());
    expect(result.current.isOpen).toBe(true);
    act(() => result.current.close());
    expect(result.current.isOpen).toBe(false);
  });

  it("locks page scrolling while the menu is open", () => {
    const { result } = renderHook(() => useMenu(), { wrapper });

    act(() => result.current.open());
    expect(document.body.style.overflow).toBe("hidden");
    act(() => result.current.close());
    expect(document.body.style.overflow).toBe("");
  });

  it("is never open on desktop viewports", () => {
    const { result } = renderHook(() => useMenu(), { wrapper });

    act(() => result.current.open());
    expect(result.current.isOpen).toBe(true);

    act(() => setMediaMatches(true));
    expect(result.current.isOpen).toBe(false);
    expect(document.body.style.overflow).toBe("");
  });

  it("throws a helpful error when used outside the provider", () => {
    expect(() => renderHook(() => useMenu())).toThrow("useMenu must be used inside <MenuProvider>.");
  });
});
