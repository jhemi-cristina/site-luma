import { Container, Logo } from "@/components/ui";
import { FooterColumn } from "./FooterColumn";
import { useFooter } from "./useFooter";

export function Footer() {
  const { tagline, columns, copyrightText } = useFooter();

  return (
    <footer className="bg-ink pt-15 pb-5 lg:pt-20 lg:pb-10">
      <Container>
        <div className="grid grid-cols-2 gap-x-10 gap-y-10 md:grid-cols-3 lg:grid-cols-[1fr_repeat(3,208px)] lg:gap-x-8">
          <div className="col-span-2 flex flex-col gap-3 md:col-span-3 lg:col-span-1">
            <Logo tone="light" className="self-start" />
            <p className="max-w-[240px] text-body text-white/70 max-lg:max-w-none">{tagline}</p>
          </div>

          {columns.map((column, index) => (
            <FooterColumn
              key={column.title}
              {...column}
              className={index === columns.length - 1 ? "col-span-2 md:col-span-1" : undefined}
            />
          ))}
        </div>

        <div className="mt-12 border-t border-white/15 pt-6 lg:mt-16">
          <p className="text-center text-xs leading-5 text-white/80 lg:text-left">{copyrightText}</p>
        </div>
      </Container>
    </footer>
  );
}
