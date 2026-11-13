import { howItWorksData } from "@/data/howItWorks";

export function useHowItWorks() {
  const { eyebrow, title, stepLabel, steps } = howItWorksData;

  return {
    sectionId: "how-it-works",
    titleId: "how-it-works-title",
    heading: { eyebrow, title },
    steps: steps.map((step, index) => ({
      ...step,
      label: `${stepLabel} ${String(index + 1).padStart(2, "0")}`,
      isLast: index === steps.length - 1,
    })),
  };
}

export type StepViewModel = ReturnType<typeof useHowItWorks>["steps"][number];
