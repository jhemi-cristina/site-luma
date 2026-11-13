export type StepIconVariant = "focus" | "experience" | "practice";

export interface Step {
  icon: StepIconVariant;
  title: string;
  description: string;
}

export interface HowItWorksData {
  eyebrow: string;
  title: string;
  stepLabel: string;
  steps: Step[];
}

export const howItWorksData: HowItWorksData = {
  eyebrow: "How Luma works",
  title: "Less browsing. More learning.",
  stepLabel: "Step",
  steps: [
    {
      icon: "focus",
      title: "Choose your focus",
      description: "Find courses based on the skill you want to build, not endless content categories.",
    },
    {
      icon: "experience",
      title: "Learn from experience",
      description: "Follow concise lessons created by professionals who use these skills.",
    },
    {
      icon: "practice",
      title: "Put it into practice",
      description: "Every course includes practical exercises designed to turn knowledge into action.",
    },
  ],
};
