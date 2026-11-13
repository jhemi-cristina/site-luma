import { testimonialData } from "@/data/testimonial";

export function useTestimonial() {
  const { quote, author, stats } = testimonialData;

  return {
    sectionLabel: "What learners say",
    quote,
    author,
    stats,
  };
}

export type TestimonialViewModel = ReturnType<typeof useTestimonial>;
