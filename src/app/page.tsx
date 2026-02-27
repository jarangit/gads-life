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

export default function Home() {
  const { data: homeData } = useHome();
  const [searchOpen, setSearchOpen] = useState(false);

  if (!homeData) {
    return <HomePageSkeleton />;
  }

  return (
    <>
      <div className="container space-y-8 md:space-y-10">
        {/* Hero — dark card on gray bg */}
        <HeroSection
          onSearchClick={() => setSearchOpen(true)}
          categories={homeData.categories}
        />

        {/* Categories — white stripe */}
        {homeData.categories && (
          <div className="bg-white -mx-4 px-4 py-8 md:py-10">
            <CategoriesSection categories={homeData.categories} />
          </div>
        )}

        {/* Latest Reviews — gray bg, dark image card contrasts well */}
        {homeData.lastReview && (
          <LatestReviewsSection reviews={homeData.lastReview} />
        )}

        {/* Top Picks — white stripe */}
        {homeData.sellProducts && (
          <div className="bg-white -mx-4 px-4 py-8 md:py-10">
            <TopPicksSection items={homeData.sellProducts} />
          </div>
        )}

        {/* Problems — gray bg */}
        <ProblemsSection />

        {/* News — white stripe */}
        {homeData.featuredArticles && homeData.featuredArticles.length > 0 && (
          <div className="bg-white -mx-4 px-4 py-8 md:py-10">
            <NewsSection items={homeData.featuredArticles} />
          </div>
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
