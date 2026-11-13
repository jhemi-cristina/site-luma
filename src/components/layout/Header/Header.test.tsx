import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { MenuProvider } from "@/contexts/MenuContext";
import { Header } from "./Header";

function renderHeader() {
  return render(
    <MenuProvider>
      <Header />
    </MenuProvider>,
  );
}

function getMobileMenu() {
  const toggle = screen.getByRole("button", { name: /menu/i });
  return document.getElementById(toggle.getAttribute("aria-controls") ?? "") as HTMLElement;
}

describe("Header", () => {
  it("renders the main navigation links", () => {
    renderHeader();
    const nav = screen.getByRole("navigation", { name: "Main" });

    expect(within(nav).getAllByRole("link").map((link) => link.textContent)).toEqual([
      "Courses",
      "For Teams",
      "Community",
      "About",
    ]);
  });

  it("opens and closes the mobile menu with the toggle button", async () => {
    const user = userEvent.setup();
    renderHeader();

    const toggle = screen.getByRole("button", { name: "Open menu" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(getMobileMenu()).not.toBeVisible();

    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(toggle).toHaveAccessibleName("Close menu");
    expect(getMobileMenu()).toBeVisible();

    await user.click(toggle);
    expect(getMobileMenu()).not.toBeVisible();
  });

  it("closes on Escape and returns focus to the toggle", async () => {
    const user = userEvent.setup();
    renderHeader();

    await user.click(screen.getByRole("button", { name: "Open menu" }));
    await user.keyboard("{Escape}");

    const toggle = screen.getByRole("button", { name: "Open menu" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(toggle).toHaveFocus();
  });

  it("closes after choosing a link", async () => {
    const user = userEvent.setup();
    renderHeader();

    await user.click(screen.getByRole("button", { name: "Open menu" }));
    await user.click(within(getMobileMenu()).getByRole("link", { name: "Community" }));

    expect(screen.getByRole("button", { name: "Open menu" })).toHaveAttribute("aria-expanded", "false");
  });

  it("keeps keyboard focus inside the open menu", async () => {
    const user = userEvent.setup();
    renderHeader();

    await user.click(screen.getByRole("button", { name: "Open menu" }));
    const lastAction = within(getMobileMenu()).getByRole("link", { name: "Start learning" });
    lastAction.focus();

    await user.tab();
    expect(screen.getByRole("link", { name: "Luma home" })).toHaveFocus();

    await user.tab({ shift: true });
    expect(lastAction).toHaveFocus();
  });
});
