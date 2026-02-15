import { ProductCardCompact } from "@/components/ui";
import { LastReview } from "@/lib/api/home/type";

interface TopPickCardProps {
  item: LastReview;
  radiusClass: string;
}

export function TopPickCard({ item, radiusClass }: TopPickCardProps) {
  return (
    <ProductCardCompact
      id={item.id}
      name={item.name}
      image={item.image}
      overallScore={item.overallScore}
      isRecommended={item.isRecommended}
      radius={radiusClass}
    />
  );
}
