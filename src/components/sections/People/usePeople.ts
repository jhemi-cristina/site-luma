import type { CSSProperties } from "react";
import { peopleData, type CollageColumn, type CollagePhoto } from "@/data/people";

type SizeVariables = CSSProperties & Record<`--${string}`, string>;

function toPhotoStyle({ mobile, desktop }: CollagePhoto): SizeVariables {
  return {
    "--w": `${mobile.width}px`,
    "--h": `${mobile.height}px`,
    "--w-lg": `${desktop.width}px`,
    "--h-lg": `${desktop.height}px`,
  };
}

function toColumnStyle({ offset }: CollageColumn): SizeVariables {
  return {
    "--offset": `${offset.mobile}px`,
    "--offset-lg": `${offset.desktop}px`,
  };
}

export function usePeople() {
  const { eyebrow, title, description, action, columns } = peopleData;

  return {
    sectionId: "community",
    titleId: "people-title",
    content: { eyebrow, title, description, action },
    columns: columns.map((column, columnIndex) => ({
      key: `column-${columnIndex}`,
      align: column.align,
      style: toColumnStyle(column),
      photos: column.photos.map((photo) => ({
        src: photo.src,
        alt: photo.alt,
        width: photo.desktop.width,
        height: photo.desktop.height,
        style: toPhotoStyle(photo),
      })),
    })),
  };
}

export type PeopleViewModel = ReturnType<typeof usePeople>;
