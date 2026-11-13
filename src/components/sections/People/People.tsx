import { Container } from "@/components/ui";
import { PeopleCollage } from "./PeopleCollage";
import { PeopleContent } from "./PeopleContent";
import { usePeople } from "./usePeople";

export function People() {
  const { sectionId, titleId, content, columns } = usePeople();

  return (
    <section id={sectionId} aria-labelledby={titleId} className="overflow-x-clip bg-surface py-15 lg:py-25">
      <Container className="flex flex-col gap-8 xl:flex-row xl:items-center xl:gap-15">
        <PeopleContent titleId={titleId} {...content} className="md:max-w-[560px] xl:flex-1" />
        <PeopleCollage columns={columns} className="xl:flex-1" />
      </Container>
    </section>
  );
}
