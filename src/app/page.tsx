"use client";

import { useHome } from "@/hooks/useHome";
import {
  HeroSection,
  TopPicksSection,
  ProblemsSection,
  CategoriesSection,
  LatestReviewsSection,
  TrustSection,
  HomePageSkeleton,
} from "@/components/home";

export default function Home() {
  const { data: homeData } = useHome();

  if (!homeData) {
    return <HomePageSkeleton />;
  }

  return (
    <div className="space-y-6">
      {/* Hero + Top Picks + Problems */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <HeroSection />
        {homeData.sellProducts && <TopPicksSection items={homeData.sellProducts} />}
        <ProblemsSection />
      </div>

      {/* Categories */}
      {homeData.categories && (
        <CategoriesSection categories={homeData.categories} />
      )}

      {/* Latest Reviews + Trust */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {homeData.lastReview && (
          <LatestReviewsSection reviews={homeData.lastReview} />
        )}
        <TrustSection />
      </div>
    </div>
  );
}
