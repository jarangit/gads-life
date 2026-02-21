import { ReviewRow, formatRelativeTime } from "@/components/ui";
import { LastReview } from "@/lib/api/home/type";

interface ReviewListItemProps {
  review: LastReview;
  radiusClass: string;
}

export function ReviewListItem({ review, radiusClass }: ReviewListItemProps) {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  const subtitle =
    (review as any).category?.nameTh || (review as any).brand?.name || "";

  return (
    <ReviewRow
      id={review.id}
      slug={review.slug}
      name={review.name}
      image={review.image}
      subtitle={subtitle}
      value={review.overallScore}
      valueLabel={formatRelativeTime(review.updatedAt)}
      radius={radiusClass}
    />
  );
}
