import React from "react";
import { HiOutlineClock } from "react-icons/hi";
import { SectionHeader } from "../atoms";
import { ReviewListItem } from "../molecules";
import { LastReview } from "@/lib/api/home/type";

interface LatestReviewsSectionProps {
  reviews: LastReview[];
}

export function LatestReviewsSection({ reviews }: LatestReviewsSectionProps) {
  return (
    <div className="lg:col-span-2 bg-white rounded-[1.75rem] rounded-tr-[2.5rem] p-6 md:p-7">
      <SectionHeader
        icon={<HiOutlineClock className="text-xl text-blue-500" />}
        title="เพิ่งรีวิวไป"
        linkHref="/reviews"
        linkText="ดูเพิ่ม"
      />

      <div className="space-y-2">
        {reviews.map((review, idx) => (
          <ReviewListItem
            key={review.id}
            review={review}
            radiusClass={
              idx === 0
                ? "rounded-xl rounded-tl-2xl"
                : idx === reviews.length - 1
                ? "rounded-xl rounded-br-2xl"
                : "rounded-xl"
            }
          />
        ))}
      </div>
    </div>
  );
}
