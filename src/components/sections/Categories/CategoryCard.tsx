import Image from "next/image";
import Link from "next/link";
import type { CategoryCardViewModel } from "./useCategories";

type CategoryCardProps = Omit<CategoryCardViewModel, "slug">;

export function CategoryCard({ number, title, description, href, linkLabel, linkAriaLabel }: CategoryCardProps) {
  return (
    <article className="group relative flex min-h-[200px] w-full flex-col rounded-2xl border border-line bg-white p-6 transition-[border-color,box-shadow,translate] duration-200 hover:border-primary/40 hover:shadow-card focus-within:border-primary/40 focus-within:shadow-card motion-safe:hover:-translate-y-1 lg:min-h-[260px] lg:p-7">
      <span className="mt-0.5 self-start rounded-md bg-primary-light px-2 py-1 text-overline font-semibold text-primary">
        {number}
      </span>

      <h3 className="mt-5 font-display text-h5-sm font-bold text-ink lg:text-h5">{title}</h3>
      <p className="mt-3 text-body text-subtle">{description}</p>

      <Link
        href={href}
        aria-label={linkAriaLabel}
        className="mt-auto flex items-center gap-2 pt-6 text-body leading-5 font-bold text-ink after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-primary"
      >
        {linkLabel}
        <Image
          src="/icons/arrow-right.svg"
          alt=""
          width={20}
          height={20}
          className="transition-transform duration-200 motion-safe:group-hover:translate-x-1"
        />
      </Link>
    </article>
  );
}
