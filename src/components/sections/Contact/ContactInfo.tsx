import { Eyebrow } from "@/components/ui";
import { cn } from "@/lib/cn";
import { ContactChannelCard } from "./ContactChannelCard";
import type { ContactViewModel } from "./useContact";

type ContactInfoProps = ContactViewModel["info"] & {
  titleId: string;
  className?: string;
};

export function ContactInfo({ titleId, eyebrow, title, description, channels, className }: ContactInfoProps) {
  return (
    <div className={cn("flex flex-col gap-8 lg:gap-10", className)}>
      <div className="flex flex-col gap-4">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 id={titleId} className="font-display text-h2-sm font-extrabold text-ink lg:text-h2">
          {title}
        </h2>
        <p className="text-body text-muted lg:text-subtitle">{description}</p>
      </div>

      <ul className="flex flex-col gap-4">
        {channels.map((channel) => (
          <ContactChannelCard key={channel.title} {...channel} />
        ))}
      </ul>
    </div>
  );
}
