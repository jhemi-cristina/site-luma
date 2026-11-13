import { describe, expect, it } from "vitest";
import { MAX_MESSAGE_LENGTH, validateContactField, validateContactForm } from "./validation";

describe("validateContactField", () => {
  it("requires a name with at least two characters", () => {
    expect(validateContactField("name", "")).toBe("Please enter your name.");
    expect(validateContactField("name", "   ")).toBe("Please enter your name.");
    expect(validateContactField("name", "A")).toMatch(/at least 2 characters/);
    expect(validateContactField("name", "Ana")).toBeUndefined();
  });

  it.each(["ana", "ana@", "ana@example", "ana example@mail.com", "@example.com"])(
    "rejects the invalid email %s",
    (email) => {
      expect(validateContactField("email", email)).toBe("Please enter a valid email, like name@example.com.");
    },
  );

  it("accepts a valid email, ignoring surrounding spaces", () => {
    expect(validateContactField("email", "  ana.souza@example.com ")).toBeUndefined();
  });

  it("requires an email", () => {
    expect(validateContactField("email", "")).toBe("Please enter your email.");
  });

  it("enforces the message length limits", () => {
    expect(validateContactField("message", "")).toBe("Please tell us how we can help.");
    expect(validateContactField("message", "Too short")).toMatch(/at least 10 characters/);
    expect(validateContactField("message", "Do you offer team plans?")).toBeUndefined();
    expect(validateContactField("message", "a".repeat(MAX_MESSAGE_LENGTH + 1))).toMatch(/at most/);
  });
});

describe("validateContactForm", () => {
  it("returns an error for every invalid field", () => {
    expect(validateContactForm({ name: "", email: "nope", message: "" })).toEqual({
      name: "Please enter your name.",
      email: "Please enter a valid email, like name@example.com.",
      message: "Please tell us how we can help.",
    });
  });

  it("returns no errors for a valid form", () => {
    expect(
      validateContactForm({ name: "Ana Souza", email: "ana@example.com", message: "Do you offer team plans?" }),
    ).toEqual({});
  });
});
