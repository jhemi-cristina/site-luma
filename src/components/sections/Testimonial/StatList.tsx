import { cn } from "@/lib/cn";
import type { Stat } from "@/data/testimonial";

interface StatListProps {
  stats: Stat[];
  className?: string;
}

export function StatList({ stats, className }: StatListProps) {
  return (
    <dl className={cn("grid grid-cols-3 gap-x-4 lg:grid-cols-1 lg:gap-5 lg:border-l lg:border-line lg:pl-12", className)}>
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col">
          <dt className="order-2 mt-1 text-body text-subtle">{stat.label}</dt>
          <dd className="order-1 font-display text-h1-sm font-extrabold text-primary lg:text-h1">{stat.value}</dd>
        </div>
      ))}
    </dl>
  );
}
