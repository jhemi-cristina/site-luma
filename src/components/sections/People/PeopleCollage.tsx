import Image from "next/image";
import { cn } from "@/lib/cn";
import type { PeopleViewModel } from "./usePeople";

interface PeopleCollageProps {
  columns: PeopleViewModel["columns"];
  className?: string;
}

export function PeopleCollage({ columns, className }: PeopleCollageProps) {
  return (
    <div className={cn("relative flex items-center justify-between md:justify-center md:gap-4", className)}>
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 size-[330px] -translate-1/2 rounded-full bg-primary-light md:size-[500px]"
      />

      {columns.map((column) => (
        <ul
          key={column.key}
          style={column.style}
          className={cn(
            "relative flex flex-col gap-2 pt-(--offset) md:gap-[13px] md:pt-(--offset-lg)",
            column.align === "end" ? "items-end" : "items-start",
          )}
        >
          {column.photos.map((photo) => (
            <li
              key={photo.src}
              style={photo.style}
              className="relative h-(--h) w-(--w) overflow-hidden rounded-[5px] shadow-photo md:h-(--h-lg) md:w-(--w-lg) md:rounded-sm"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={photo.sizes}
                className="object-cover"
              />
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
