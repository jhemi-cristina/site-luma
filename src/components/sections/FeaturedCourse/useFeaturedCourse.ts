import { featuredCourseData } from "@/data/featuredCourse";
import { formatDuration, pluralize } from "@/lib/format";

export function useFeaturedCourse() {
  const { badge, eyebrow, title, description, instructor, lessons, durationInMinutes, level, image, actions } =
    featuredCourseData;

  return {
    sectionId: "featured-course",
    titleId: "featured-course-title",
    badge,
    image,
    content: {
      eyebrow,
      title,
      description,
      instructorLine: `with ${instructor.name} · ${instructor.role}`,
      tags: [pluralize(lessons, "lesson"), formatDuration(durationInMinutes), level],
      actions,
    },
  };
}

export type FeaturedCourseViewModel = ReturnType<typeof useFeaturedCourse>;
