import Image from "next/image";
import type { FinalCtaViewModel } from "./useFinalCta";

const shapeClasses = {
  ring: "rounded-full border-2 border-accent-orange",
  dot: "rounded-full bg-accent-orange",
  tile: "rounded-lg bg-accent-orange",
  "tile-outline": "rounded-lg border border-accent-orange",
  icon: "",
} as const;

export function DecorLayer({ shapes }: { shapes: FinalCtaViewModel["decor"] }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[1280px] -translate-x-1/2 lg:block"
    >
      {shapes.map((shape) => (
        <div key={shape.key} style={shape.style} className={`absolute ${shapeClasses[shape.kind]}`}>
          {shape.src && <Image src={shape.src} alt="" width={shape.size} height={shape.size} className="size-full" />}
        </div>
      ))}
    </div>
  );
}
