import { Header } from "@/components/layout/Header";
import { Categories } from "@/components/sections/Categories";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Categories />
      </main>
    </>
  );
}
