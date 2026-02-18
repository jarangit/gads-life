import { bentoRadius, cardHeights } from "@/components/ui";

export function HomePageSkeleton() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6 animate-pulse">
        <div className={`h-[420px] bg-gray-300 ${bentoRadius.hero}`} />
        <div className={`h-48 bg-gray-300 ${bentoRadius.sectionTL}`} />
        <div className={`h-48 bg-gray-300 ${bentoRadius.sectionTR}`} />
        <div className={`h-48 bg-gray-300 ${bentoRadius.sectionBL}`} />
      </div>
    </div>
  );
}
