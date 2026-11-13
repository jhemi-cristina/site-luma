import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, beforeEach } from "vitest";
import { installMatchMediaMock, resetMatchMedia } from "@/test/matchMedia";

beforeEach(() => {
  installMatchMediaMock();
});

afterEach(() => {
  cleanup();
  resetMatchMedia();
  document.body.style.overflow = "";
});
