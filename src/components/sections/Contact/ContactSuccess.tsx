import type { Ref } from "react";
import { Button } from "@/components/ui";

interface ContactSuccessProps {
  title: string;
  description: string;
  resetLabel: string;
  headingRef: Ref<HTMLHeadingElement>;
  onReset: () => void;
}

export function ContactSuccess({ title, description, resetLabel, headingRef, onReset }: ContactSuccessProps) {
  return (
    <div className="flex flex-col items-start gap-6 motion-safe:animate-fade-in">
      <span aria-hidden className="flex size-12 items-center justify-center rounded-full bg-success-light">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 12.5L10 17.5L19 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-success"
          />
        </svg>
      </span>

      <div className="flex flex-col gap-2">
        <h3 ref={headingRef} tabIndex={-1} className="font-display text-h5 font-bold text-ink focus:outline-none">
          {title}
        </h3>
        <p className="text-body text-muted">{description}</p>
      </div>

      <Button variant="secondary" size="lg" onClick={onReset}>
        {resetLabel}
      </Button>
    </div>
  );
}
