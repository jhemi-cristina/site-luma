import { Container } from "@/components/ui";
import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";
import { useContact } from "./useContact";

export function Contact() {
  const { sectionId, titleId, info } = useContact();

  return (
    <section id={sectionId} aria-labelledby={titleId} className="bg-white py-15 lg:py-25">
      <Container className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <ContactInfo titleId={titleId} {...info} className="lg:max-w-[480px] lg:flex-1" />
        <ContactForm className="lg:w-[460px] lg:shrink-0 xl:w-[540px]" />
      </Container>
    </section>
  );
}
