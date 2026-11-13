import Image from "next/image";
import type { Ref } from "react";
import { cn } from "@/lib/cn";

interface MenuToggleProps {
  isOpen: boolean;
  controlsId: string;
  onToggle: () => void;
  ref?: Ref<HTMLButtonElement>;
  className?: string;
}

export function MenuToggle({ isOpen, controlsId, onToggle, ref, className }: MenuToggleProps) {
  return (
    <button
      ref={ref}
      type="button"
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-controls={controlsId}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      className={cn(
        "inline-flex size-9 items-center justify-center rounded-lg transition-colors duration-200 hover:bg-line/50",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        className,
      )}
    >
      <Image src={isOpen ? "/icons/close.svg" : "/icons/menu.svg"} alt="" width={24} height={24} />
    </button>
  );
}
