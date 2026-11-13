import Image from "next/image";
import type { ContactChannel } from "@/data/contact";

export function ContactChannelCard({ icon, title, value, href }: ContactChannel) {
  return (
    <li className="flex items-center gap-4 rounded-xl bg-surface p-4 lg:p-5">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary-light">
        <Image src={icon.src} alt="" width={icon.width} height={icon.height} />
      </span>
      <span className="flex flex-col gap-0.5 text-body lg:gap-1">
        <span className="text-ink">{title}</span>
        {href ? (
          <a
            href={href}
            className="rounded-sm text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {value}
          </a>
        ) : (
          <span className="text-subtle">{value}</span>
        )}
      </span>
    </li>
  );
}
