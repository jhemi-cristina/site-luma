import { expect, test } from "@playwright/test";

const DESKTOP_MIN_WIDTH = 1024;

test.describe("header navigation", () => {
  test("shows the desktop navigation on large screens", async ({ page, viewport }) => {
    test.skip((viewport?.width ?? 0) < DESKTOP_MIN_WIDTH, "Desktop navigation only");
    await page.goto("/");

    await expect(page.getByRole("navigation", { name: "Main" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Open menu" })).toBeHidden();
  });

  test("opens the mobile menu, navigates and closes it", async ({ page, viewport }) => {
    test.skip((viewport?.width ?? 0) >= DESKTOP_MIN_WIDTH, "Mobile menu only");
    await page.goto("/");

    const toggle = page.getByRole("button", { name: "Open menu" });
    await toggle.click();

    const menu = page.getByRole("navigation", { name: "Mobile" });
    await expect(menu).toBeVisible();
    await expect(page.getByRole("button", { name: "Close menu" })).toHaveAttribute("aria-expanded", "true");
    expect(await page.evaluate(() => document.body.style.overflow)).toBe("hidden");

    await menu.getByRole("link", { name: "Community" }).click();

    await expect(menu).toBeHidden();
    await expect(page).toHaveURL(/#community$/);
    await expect(page.getByRole("heading", { name: "Meet international students & teachers" })).toBeInViewport();
  });

  test("closes the mobile menu with Escape and restores focus", async ({ page, viewport }) => {
    test.skip((viewport?.width ?? 0) >= DESKTOP_MIN_WIDTH, "Mobile menu only");
    await page.goto("/");

    await page.getByRole("button", { name: "Open menu" }).click();
    await page.keyboard.press("Escape");

    await expect(page.getByRole("navigation", { name: "Mobile" })).toBeHidden();
    await expect(page.getByRole("button", { name: "Open menu" })).toBeFocused();
  });

  test("keeps keyboard focus inside the open mobile menu", async ({ page, viewport }) => {
    test.skip((viewport?.width ?? 0) >= DESKTOP_MIN_WIDTH, "Mobile menu only");
    await page.goto("/");

    await page.getByRole("button", { name: "Open menu" }).click();
    const lastAction = page.getByRole("link", { name: "Start learning" }).locator("visible=true");
    await lastAction.focus();
    await page.keyboard.press("Tab");

    await expect(page.getByRole("link", { name: "Luma home" }).first()).toBeFocused();
  });
});
