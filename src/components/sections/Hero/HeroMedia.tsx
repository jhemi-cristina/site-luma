import Image from "next/image";
import { FloatingCard, StarRating } from "@/components/ui";
import { cn } from "@/lib/cn";
import type { HeroViewModel } from "./useHero";

type HeroMediaProps = HeroViewModel["media"] & {
  className?: string;
};

export function HeroMedia({ image, coursesBadge, rating, ratingLabel, className }: HeroMediaProps) {
  return (
    <div
      className={cn(
        "relative mx-auto h-[380px] w-full max-w-[362px] shrink-0",
        "sm:h-[520px] sm:max-w-[500px] lg:mx-0 lg:h-[460px] lg:w-[420px] xl:h-[520px] xl:w-[500px]",
        className,
      )}
    >
      <div
        aria-hidden
        className="absolute top-6 right-[-10px] bottom-3.5 left-[28%] rounded-2xl bg-accent-orange sm:right-[-39px] sm:bottom-7 sm:left-auto sm:w-[89px]"
      />
      <div
        aria-hidden
        className="absolute bottom-3 left-[-10px] size-16 rounded-full bg-primary-light sm:left-[-45px] sm:size-[106px]"
      />

      <div className="absolute inset-y-0 inset-x-2 overflow-hidden rounded-2xl bg-primary-light sm:inset-x-0 sm:rounded-3xl">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          loading="eager"
          fetchPriority="high"
          sizes="(min-width: 1280px) 500px, (min-width: 1024px) 420px, (min-width: 640px) 500px, 346px"
          className="object-cover"
        />
      </div>

      <FloatingCard className="absolute top-1.5 left-0 gap-3 sm:top-4 sm:left-[-22px]">
        <span className="flex h-8 items-center rounded-lg bg-primary-light px-1 text-body font-bold text-primary">
          {coursesBadge.value}
        </span>
        <span className="text-body text-ink">{coursesBadge.label}</span>
      </FloatingCard>

      <FloatingCard className="absolute right-[-10px] bottom-9 gap-2 sm:right-[-56px]">
        <StarRating rating={rating} />
        <span className="text-body text-ink">{ratingLabel}</span>
      </FloatingCard>
    </div>
  );
}
