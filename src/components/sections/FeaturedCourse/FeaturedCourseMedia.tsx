import Image from "next/image";
import { cn } from "@/lib/cn";
import type { FeaturedCourseViewModel } from "./useFeaturedCourse";

type FeaturedCourseMediaProps = Pick<FeaturedCourseViewModel, "badge" | "image"> & {
  className?: string;
};

export function FeaturedCourseMedia({ badge, image, className }: FeaturedCourseMediaProps) {
  return (
    <div className={cn("relative", className)}>
      <div className="relative h-[280px] overflow-hidden rounded-2xl bg-primary-light md:h-[380px] lg:h-[408px]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1280px) 530px, (min-width: 1024px) 50vw, (min-width: 768px) calc(100vw - 80px), calc(100vw - 40px)"
          className="object-cover"
        />
      </div>
      <span className="absolute -top-3 -left-3 rounded-md bg-star px-3 py-1.5 text-overline font-semibold text-ink uppercase">
        {badge}
      </span>
    </div>
  );
}
