import { describe, expect, it } from "vitest";
import { cn } from "./cn";
import { formatDuration, pluralize } from "./format";

describe("formatDuration", () => {
  it.each([
    [160, "2h 40min"],
    [120, "2h"],
    [45, "45min"],
    [61, "1h 1min"],
  ])("formats %i minutes as %s", (minutes, expected) => {
    expect(formatDuration(minutes)).toBe(expected);
  });
});

describe("pluralize", () => {
  it("uses the singular form for one item", () => {
    expect(pluralize(1, "lesson")).toBe("1 lesson");
  });

  it("uses the plural form for other counts", () => {
    expect(pluralize(8, "lesson")).toBe("8 lessons");
    expect(pluralize(0, "lesson")).toBe("0 lessons");
    expect(pluralize(2, "person", "people")).toBe("2 people");
  });
});

describe("cn", () => {
  it("joins truthy class names and skips falsy ones", () => {
    expect(cn("a", false, null, undefined, "b")).toBe("a b");
  });
});
