/* ──────── HomePageSkeleton – matches editorial layout ──────── */
export function HomePageSkeleton() {
  return (
    <div className="container min-h-screen bg-background animate-pulse space-y-10 md:space-y-12">
      {/* Hero */}
      <div className="h-[300px] md:h-[340px] bg-gray-800 rounded-3xl" />

      {/* Categories pills */}
      <div className="flex gap-2.5 overflow-hidden">
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={i} className="flex-none h-10 w-24 bg-gray-200 rounded-full" />
        ))}
      </div>

      {/* Latest Reviews: big card + 3 small */}
      <div>
        <div className="h-8 w-40 bg-gray-200 rounded-lg mb-5" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 h-[320px] bg-gray-200 rounded-2xl" />
          <div className="flex flex-col gap-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-24 bg-gray-200 rounded-xl" />
            ))}
          </div>
        </div>
      </div>

      {/* Top Picks 3-col grid */}
      <div>
        <div className="h-8 w-48 bg-gray-200 rounded-lg mb-5" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-48 bg-gray-200 rounded-2xl" />
          ))}
        </div>
      </div>

      {/* Problems 4-col chips */}
      <div>
        <div className="h-8 w-44 bg-gray-200 rounded-lg mb-5" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-28 bg-gray-200 rounded-2xl" />
          ))}
        </div>
      </div>
    </div>
  );
}

