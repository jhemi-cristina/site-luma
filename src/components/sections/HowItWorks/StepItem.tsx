import { cn } from "@/lib/cn";
import { StepIcon } from "./StepIcon";
import type { StepViewModel } from "./useHowItWorks";

export function StepItem({ icon, label, title, description, isLast }: StepViewModel) {
  return (
    <li
      className={cn(
        "relative flex flex-col",
        !isLast && [
          "pb-[76px] md:pb-0",
          "after:absolute after:bottom-0 after:left-7 after:h-[50px] after:w-px after:bg-line",
          "md:after:top-7 md:after:bottom-auto md:after:left-14 md:after:-right-10 md:after:h-px md:after:w-auto lg:after:-right-20",
        ].join(" "),
      )}
    >
      <StepIcon variant={icon} />
      <p className="mt-6 text-overline font-semibold text-subtle uppercase">{label}</p>
      <h3 className="mt-2 font-display text-h5-sm font-bold text-ink lg:text-h5">{title}</h3>
      <p className="mt-3 text-body text-muted lg:text-subtitle-sm lg:leading-7">{description}</p>
    </li>
  );
}
