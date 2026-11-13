import { expect, test } from "@playwright/test";

const SECTION_HEADINGS = [
  "Build skills that actually move you forward.",
  "Learn something worth knowing.",
  "Designing products people understand.",
  "Less browsing. More learning.",
  "Meet international students & teachers",
  "Get in touch",
  "What will you learn next?",
];

test.describe("home page", () => {
  test("renders every section with correct metadata and no console errors", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    page.on("pageerror", (error) => errors.push(error.message));

    await page.goto("/");

    await expect(page).toHaveTitle("Luma — Practical courses that move you forward");
    await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /Practical courses/);
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);

    for (const heading of SECTION_HEADINGS) {
      await expect(page.getByRole("heading", { name: heading })).toBeAttached();
    }
    await expect(page.getByRole("region", { name: "What learners say" })).toBeAttached();
    await expect(page.getByRole("contentinfo")).toContainText("© 2026 Luma Learning");

    expect(errors).toEqual([]);
  });

  test("does not scroll horizontally", async ({ page }) => {
    await page.goto("/");
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow).toBe(0);
  });

  test("gives every image a text alternative", async ({ page }) => {
    await page.goto("/");
    const imagesWithoutAlt = await page.locator("img:not([alt])").count();
    expect(imagesWithoutAlt).toBe(0);
  });

  test("lets keyboard users skip straight to the main content", async ({ page }) => {
    await page.goto("/");

    await page.keyboard.press("Tab");
    const skipLink = page.getByRole("link", { name: "Skip to main content" });
    await expect(skipLink).toBeFocused();
    await expect(skipLink).toBeVisible();

    await page.keyboard.press("Enter");
    await expect(page).toHaveURL(/#main-content$/);
  });

  test("respects the reduced motion preference", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");

    const scrollBehavior = await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior);
    expect(scrollBehavior).toBe("auto");
  });
});
