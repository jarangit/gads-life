"use client";

import { useState } from "react";
import { useHome } from "@/hooks/useHome";
import {
  HeroSection,
  TopPicksSection,
  ProblemsSection,
  CategoriesSection,
  LatestReviewsSection,
  QuickVerdictListSection,
  NewsSection,
  HomePageSkeleton,
} from "@/components/home";
import { SearchModal } from "@/components/search";
import { mockNews } from "@/data/news";

export default function Home() {
  const { data: homeData } = useHome();
  const [searchOpen, setSearchOpen] = useState(false);
  // test
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
          {homeData.sellProducts && (
            <TopPicksSection items={homeData.sellProducts} />
          )}
          <ProblemsSection />
        </div>

        {/* Categories */}
        {homeData.categories && (
          <CategoriesSection categories={homeData.categories} />
        )}

        {/* Latest Reviews + Quick Verdict */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {homeData.lastReview && (
            <LatestReviewsSection reviews={homeData.lastReview} />
          )}
          {homeData.quickVerdictProducts &&
            homeData.quickVerdictProducts.length > 0 && (
              <QuickVerdictListSection items={homeData.quickVerdictProducts} />
            )}
        </div>

        {/* News */}
        <NewsSection items={mockNews} />

        {/* Top Picks grid */}
        {/* {homeData.topPicks && homeData.topPicks.length > 0 && (
          <TopPicksGridSection items={homeData.topPicks} />
        )} */}
      </div>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
