import type { StepIconVariant } from "@/data/howItWorks";

export function StepIcon({ variant }: { variant: StepIconVariant }) {
  return (
    <div aria-hidden className="relative size-14 shrink-0">
      {variant === "focus" && (
        <>
          <span className="absolute inset-0 rounded-full bg-primary-light" />
          <span className="absolute top-2 left-2 size-6 rounded-md bg-primary" />
        </>
      )}

      {variant === "experience" && (
        <>
          <span className="absolute inset-0 rotate-12 rounded-lg bg-accent-coral/15 lg:bg-accent-orange" />
          <span className="absolute top-6 left-6 size-7 rounded-full bg-accent-coral" />
        </>
      )}

      {variant === "practice" && (
        <>
          <span className="absolute inset-0 rounded-xl bg-accent-yellow" />
          <span className="absolute top-7 left-2 size-5 rounded-full bg-accent-mustard" />
        </>
      )}
    </div>
  );
}
