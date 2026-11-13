import { afterEach, describe, expect, it, vi } from "vitest";
import { getSiteUrl } from "./siteUrl";

describe("getSiteUrl", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("prefers an explicitly configured site URL", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "https://luma.example.com");
    vi.stubEnv("VERCEL_PROJECT_PRODUCTION_URL", "luma.vercel.app");

    expect(getSiteUrl().href).toBe("https://luma.example.com/");
  });

  it("falls back to the Vercel production domain", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "");
    vi.stubEnv("VERCEL_PROJECT_PRODUCTION_URL", "luma.vercel.app");

    expect(getSiteUrl().href).toBe("https://luma.vercel.app/");
  });

  it("uses localhost when no deployment URL is available", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "");
    vi.stubEnv("VERCEL_PROJECT_PRODUCTION_URL", "");
    vi.stubEnv("PORT", "4000");

    expect(getSiteUrl().href).toBe("http://localhost:4000/");
  });
});
