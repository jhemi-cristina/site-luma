import Image from "next/image";
import { ButtonLink, Eyebrow } from "@/components/ui";
import { cn } from "@/lib/cn";
import type { FeaturedCourseViewModel } from "./useFeaturedCourse";

type FeaturedCourseContentProps = FeaturedCourseViewModel["content"] & {
  titleId: string;
  className?: string;
};

export function FeaturedCourseContent({
  titleId,
  eyebrow,
  title,
  description,
  instructorLine,
  tags,
  actions,
  className,
}: FeaturedCourseContentProps) {
  return (
    <div className={cn("flex flex-col text-white", className)}>
      <Eyebrow tone="light">{eyebrow}</Eyebrow>

      <h2 id={titleId} className="mt-4 font-display text-h2-sm font-extrabold lg:text-h2">
        {title}
      </h2>

      <p className="mt-5 text-body lg:text-subtitle-sm lg:leading-7">{description}</p>
      <p className="mt-6 text-body lg:text-subtitle-sm lg:leading-7">{instructorLine}</p>

      <ul aria-label="Course details" className="mt-6 flex flex-wrap gap-3">
        {tags.map((tag) => (
          <li
            key={tag}
            className="rounded-lg border border-line px-3.5 py-1.5 text-body text-on-primary-muted lg:text-white"
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        {actions.map((action) => (
          <ButtonLink
            key={action.label}
            href={action.href}
            variant={action.variant}
            size={action.variant === "inverse-ghost" ? "lg-tight" : "lg"}
            className="group w-full sm:w-auto"
          >
            {action.label}
            {action.variant === "inverse-ghost" && (
              <Image
                src="/icons/arrow-right-light.svg"
                alt=""
                width={20}
                height={20}
                className="transition-transform duration-200 motion-safe:group-hover:translate-x-1"
              />
            )}
          </ButtonLink>
        ))}
      </div>
    </div>
  );
}
