import { ProductCardCompact } from "@/components/ui";
import { LastReview } from "@/lib/api/home/type";
import { IProductItemVm } from "@/types/models/product";

interface TopPickCardProps {
  item: IProductItemVm;
  radiusClass: string;
}

export function TopPickCard({ item, radiusClass }: TopPickCardProps) {
  console.log("🚀 ~ TopPickCard ~ item:", item);
  return (
    <ProductCardCompact
      id={item.id}
      name={item.name}
      image={item.image}
      overallScore={item.overallScore}
      isRecommended={item.isRecommended}
      radius={radiusClass}
      price={item.price}
      currency={item.currency}
      sellPrice={item.sellPrice}
    />
  );
}
