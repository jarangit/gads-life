/* ──────── Related News Section Organism ──────── */

import { cn } from "@/utils/cn";
import { RelatedNewsCard } from "@/components/news/molecules";

export interface RelatedNewsSectionProps {
  relatedSlugs: string[];
  className?: string;
}

export function RelatedNewsSection({
  relatedSlugs,
  className,
}: RelatedNewsSectionProps) {
  if (!relatedSlugs?.length) return null;

  return (
    <section className={className}>
      <h2 className="mb-4 text-base font-semibold text-foreground">ข่าวที่เกี่ยวข้อง</h2>
      <div className={cn("grid gap-3", relatedSlugs.length > 1 ? "sm:grid-cols-2" : "")}>
        {relatedSlugs.map((slug) => (
          <RelatedNewsCard key={slug} slug={slug} />
        ))}
      </div>
    </section>
  );
}
