import type { CSSProperties } from "react";
import { finalCtaData, type DecorShape } from "@/data/finalCta";

function toShapeStyle(shape: DecorShape): CSSProperties {
  return {
    left: shape.x,
    top: shape.y,
    width: shape.size,
    height: shape.size,
    rotate: "rotate" in shape && shape.rotate ? `${shape.rotate}deg` : undefined,
  };
}

export function useFinalCta() {
  const { title, description, avatars, actions, decor } = finalCtaData;

  return {
    titleId: "final-cta-title",
    title,
    description,
    avatars,
    actions,
    decor: decor.map((shape, index) => ({
      key: `${shape.kind}-${index}`,
      kind: shape.kind,
      src: shape.kind === "icon" ? shape.src : undefined,
      size: shape.size,
      style: toShapeStyle(shape),
    })),
  };
}

export type FinalCtaViewModel = ReturnType<typeof useFinalCta>;
