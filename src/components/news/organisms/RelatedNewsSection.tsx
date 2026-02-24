/* ──────── Related News Section Organism ──────── */

import { cn } from "@/utils/cn";
import { RelatedNewsCard } from "@/components/news/molecules";
import { NewsItem } from "@/data/news";

export interface RelatedNewsSectionProps {
  items: NewsItem[];
  className?: string;
}

export function RelatedNewsSection({
  items,
  className,
}: RelatedNewsSectionProps) {
  if (!items?.length) return null;

  return (
    <section className={className}>
      <h2 className="mb-4 text-base font-semibold text-foreground">ข่าวที่เกี่ยวข้อง</h2>
      <div className={cn("grid gap-3", items.length > 1 ? "sm:grid-cols-2" : "")}>
        {items.map((it) => (
          <RelatedNewsCard key={it.slug} item={it} />
        ))}
      </div>
    </section>
  );
}
