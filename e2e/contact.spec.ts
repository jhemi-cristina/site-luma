import { expect, test, type Page } from "@playwright/test";

async function fillForm(page: Page, email: string) {
  await page.getByLabel("Full name").fill("Ana Souza");
  await page.getByLabel("Email").fill(email);
  await page.getByLabel("Your question").fill("Do you offer team plans for 10 people?");
}

test.describe("contact form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/#contact");
  });

  test("shows validation errors and focuses the first invalid field", async ({ page }) => {
    await page.getByRole("button", { name: "Send message" }).click();

    await expect(page.getByLabel("Full name")).toBeFocused();
    await expect(page.getByText("Please enter your name.")).toBeVisible();
    await expect(page.getByText("Please enter your email.")).toBeVisible();
    await expect(page.getByText("Please tell us how we can help.")).toBeVisible();
  });

  test("sends a valid message without shifting the layout", async ({ page }) => {
    const section = page.locator("#contact");
    const heightBefore = (await section.boundingBox())?.height;

    await fillForm(page, "ana@example.com");
    await page.getByRole("button", { name: "Send message" }).click();

    await expect(page.getByRole("button", { name: /Sending/ })).toBeDisabled();
    await expect(page.getByRole("heading", { name: "Message sent!" })).toBeFocused();
    expect((await section.boundingBox())?.height).toBe(heightBefore);

    await page.getByRole("button", { name: "Send another message" }).click();
    await expect(page.getByLabel("Full name")).toHaveValue("");
    await expect(page.getByLabel("Full name")).toBeFocused();
  });

  test("shows an error and keeps the values when sending fails", async ({ page }) => {
    await fillForm(page, "ana@fail.test");
    await page.getByRole("button", { name: "Send message" }).click();

    await expect(page.locator("#contact").getByRole("alert")).toContainText("Something went wrong");
    await expect(page.getByLabel("Email")).toHaveValue("ana@fail.test");
  });
});
