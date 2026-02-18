import React from "react";
import { HiOutlineClock } from "react-icons/hi";
import { SectionHeader } from "../atoms";
import { ReviewListItem } from "../molecules";
import { LastReview } from "@/lib/api/home/type";
import { bentoRadius, sectionPanel, accentColors } from "@/components/ui";

interface LatestReviewsSectionProps {
  reviews: LastReview[];
}

export function LatestReviewsSection({ reviews }: LatestReviewsSectionProps) {
  return (
    <div className={`lg:col-span-2 bg-white ${bentoRadius.sectionTR} ${sectionPanel.padding}`}>
      <SectionHeader
        icon={<HiOutlineClock className={`text-xl ${accentColors.blue.text}`} />}
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
                ? bentoRadius.catTL
                : idx === reviews.length - 1
                ? bentoRadius.catBR
                : bentoRadius.catDefault
            }
          />
        ))}
      </div>
    </div>
  );
}
