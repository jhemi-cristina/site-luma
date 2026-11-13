import Image from "next/image";
import { cn } from "@/lib/cn";
import type { ImageAsset } from "@/types/content";

interface AvatarStackProps {
  avatars: ImageAsset[];
  size?: "sm" | "md";
  ringTone?: "surface" | "star";
  className?: string;
}

const sizeConfig = {
  sm: { pixels: 32, classes: "size-8" },
  md: { pixels: 40, classes: "size-10" },
};

const ringClasses = {
  surface: "border-surface",
  star: "border-star",
};

export function AvatarStack({ avatars, size = "sm", ringTone = "surface", className }: AvatarStackProps) {
  const { pixels, classes } = sizeConfig[size];

  return (
    <div className={cn("flex -space-x-2", className)}>
      {avatars.map((avatar) => (
        <Image
          key={avatar.src}
          src={avatar.src}
          alt={avatar.alt}
          width={pixels}
          height={pixels}
          className={cn("rounded-full border-2 bg-primary-light object-cover", classes, ringClasses[ringTone])}
        />
      ))}
    </div>
  );
}
