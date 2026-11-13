import Image from "next/image";
import { cn } from "@/lib/cn";
import type { ImageAsset } from "@/types/content";

interface AvatarStackProps {
  avatars: ImageAsset[];
  className?: string;
}

export function AvatarStack({ avatars, className }: AvatarStackProps) {
  return (
    <div className={cn("flex -space-x-2", className)}>
      {avatars.map((avatar) => (
        <Image
          key={avatar.src}
          src={avatar.src}
          alt={avatar.alt}
          width={32}
          height={32}
          className="size-8 rounded-full border-2 border-surface bg-primary-light object-cover"
        />
      ))}
    </div>
  );
}
