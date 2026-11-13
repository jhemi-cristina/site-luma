import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useCategories } from "./Categories/useCategories";
import { useFeaturedCourse } from "./FeaturedCourse/useFeaturedCourse";
import { useHowItWorks } from "./HowItWorks/useHowItWorks";
import { usePeople } from "./People/usePeople";

describe("useCategories", () => {
  it("numbers the cards and builds descriptive link labels", () => {
    const { cards } = renderHook(() => useCategories()).result.current;

    expect(cards.map((card) => card.number)).toEqual(["01", "02", "03", "04"]);
    expect(cards[0].linkAriaLabel).toBe("Explore Product Design courses");
  });
});

describe("useHowItWorks", () => {
  it("labels the steps in order and marks only the last one", () => {
    const { steps } = renderHook(() => useHowItWorks()).result.current;

    expect(steps.map((step) => step.label)).toEqual(["Step 01", "Step 02", "Step 03"]);
    expect(steps.map((step) => step.isLast)).toEqual([false, false, true]);
  });
});

describe("useFeaturedCourse", () => {
  it("derives the course tags and instructor line from the course data", () => {
    const { content } = renderHook(() => useFeaturedCourse()).result.current;

    expect(content.tags).toEqual(["8 lessons", "2h 40min", "Intermediate"]);
    expect(content.instructorLine).toBe("with Maya Chen · Senior Product Designer");
  });
});

describe("usePeople", () => {
  function getPhotos() {
    return renderHook(() => usePeople()).result.current.columns.flatMap((column) => column.photos);
  }

  it("requests landscape photos wide enough to cover their portrait tiles", () => {
    const landscape = getPhotos().find((photo) => photo.src.endsWith("people-02.png"));
    expect(landscape?.sizes).toBe("(min-width: 768px) 311px, 194px");
  });

  it("requests portrait photos at their tile width", () => {
    const portrait = getPhotos().find((photo) => photo.src.endsWith("people-04.png"));
    expect(portrait?.sizes).toBe("(min-width: 768px) 116px, 73px");
  });

  it("exposes the tile sizes as CSS variables", () => {
    expect(getPhotos()[0].style).toMatchObject({ "--w": "72px", "--h": "96px", "--w-lg": "103px", "--h-lg": "154px" });
  });
});
