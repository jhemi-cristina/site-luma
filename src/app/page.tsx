import { Header } from "@/components/layout/Header";
import { Categories } from "@/components/sections/Categories";
import { FeaturedCourse } from "@/components/sections/FeaturedCourse";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Categories />
        <FeaturedCourse />
        <HowItWorks />
      </main>
    </>
  );
}
