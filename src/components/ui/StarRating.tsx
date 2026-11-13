import Image from "next/image";
import { cn } from "@/lib/cn";

interface StarRatingProps {
  rating: number;
  max?: number;
  className?: string;
}

export function StarRating({ rating, max = 5, className }: StarRatingProps) {
  return (
    <span role="img" aria-label={`Rated ${rating} out of ${max}`} className={cn("flex gap-0.5", className)}>
      {Array.from({ length: max }, (_, index) => (
        <Image key={index} src="/icons/star.svg" alt="" width={14} height={14} />
      ))}
    </span>
  );
}
