import { ReviewRow, formatRelativeTime } from "@/components/ui";
import { LastReview } from "@/lib/api/home/type";

interface ReviewListItemProps {
  review: LastReview;
  radiusClass: string;
}

export function ReviewListItem({ review, radiusClass }: ReviewListItemProps) {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */


  return (
    <ReviewRow
      id={review.id}
      slug={review.slug}
      name={review.name}
      image={review.image}
      subtitle={review.subtitle}
      value={review.overallScore}
      valueLabel={formatRelativeTime(review.updatedAt)}
      radius={radiusClass}
    />
  );
}
