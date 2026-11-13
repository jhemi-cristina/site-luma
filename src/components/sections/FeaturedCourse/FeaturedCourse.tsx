import { Container } from "@/components/ui";
import { FeaturedCourseContent } from "./FeaturedCourseContent";
import { FeaturedCourseMedia } from "./FeaturedCourseMedia";
import { useFeaturedCourse } from "./useFeaturedCourse";

export function FeaturedCourse() {
  const { sectionId, titleId, badge, image, content } = useFeaturedCourse();

  return (
    <section id={sectionId} aria-labelledby={titleId} className="bg-primary py-15 lg:py-25">
      <Container className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-15">
        <FeaturedCourseMedia badge={badge} image={image} />
        <FeaturedCourseContent titleId={titleId} {...content} />
      </Container>
    </section>
  );
}
