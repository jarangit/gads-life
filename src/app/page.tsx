"use client";

import { useState } from "react";
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
import { SearchModal } from "@/components/search";

export default function Home() {
  const { data: homeData } = useHome();
  const [searchOpen, setSearchOpen] = useState(false);

  if (!homeData) {
    return <HomePageSkeleton />;
  }

  return (
    <>
      <div className="space-y-6">
        {/* Hero + Top Picks + Problems */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <HeroSection
            onSearchClick={() => setSearchOpen(true)}
            categories={homeData.categories}
          />
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

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
