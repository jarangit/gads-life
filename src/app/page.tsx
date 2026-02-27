"use client";

import { useState } from "react";
import { useHome } from "@/hooks/useHome";
import {
  HeroSection,
  TopPicksSection,
  CategoriesSection,
  LatestReviewsSection,
  QuickVerdictListSection,
  NewsSection,
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
      <div className="container space-y-12 md:space-y-16">
        {/* Hero — dark card on gray bg */}
        <HeroSection
          onSearchClick={() => setSearchOpen(true)}
          categories={homeData.categories}
        />

        {/* Categories — white stripe */}
        {homeData.categories && (
          <CategoriesSection categories={homeData.categories} />
        )}

        {/* Latest Reviews — gray bg, dark image card contrasts well */}
        {homeData.lastReview && (
          <LatestReviewsSection reviews={homeData.lastReview} />
        )}

        {/* Top Picks — white stripe */}
        {homeData.sellProducts && (
          <TopPicksSection items={homeData.sellProducts} />
        )}

        {/* Problems — gray bg */}
        {/* <ProblemsSection /> */}

        {/* News — white stripe */}
        {homeData.featuredArticles && homeData.featuredArticles.length > 0 && (
          <NewsSection items={homeData.featuredArticles} />
        )}

        {/* Quick Verdict — gray bg */}
        {homeData.quickVerdictProducts &&
          homeData.quickVerdictProducts.length > 0 && (
            <QuickVerdictListSection items={homeData.quickVerdictProducts} />
          )}
      </div>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
