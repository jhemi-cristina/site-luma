import Image from "next/image";
import { cn } from "@/lib/cn";
import type { TestimonialViewModel } from "./useTestimonial";

type TestimonialQuoteProps = Pick<TestimonialViewModel, "quote" | "author"> & {
  className?: string;
};

export function TestimonialQuote({ quote, author, className }: TestimonialQuoteProps) {
  return (
    <figure className={cn("flex max-w-[600px] flex-col", className)}>
      <Image src="/icons/quote.svg" alt="" width={24} height={22} />

      <blockquote className="mt-4 font-display text-quote-sm font-semibold text-ink lg:text-quote">
        <p>{quote}</p>
      </blockquote>

      <figcaption className="mt-8 flex items-center gap-4">
        <Image
          src={author.avatar.src}
          alt={author.avatar.alt}
          width={48}
          height={48}
          className="size-12 rounded-full bg-primary-light object-cover"
        />
        <span className="flex flex-col">
          <span className="text-subtitle-sm font-bold text-ink lg:leading-7">{author.name}</span>
          <span className="text-body text-muted">{author.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}
