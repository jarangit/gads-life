export function HomePageSkeleton() {
  return (
    <div className="min-h-screen bg-[#f0f0f0] p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6 animate-pulse">
        <div className="h-[420px] bg-gray-300 rounded-[2.5rem] rounded-br-[3.5rem]" />
        <div className="h-48 bg-gray-300 rounded-[1.75rem] rounded-tl-[2.5rem]" />
        <div className="h-48 bg-gray-300 rounded-[1.75rem] rounded-tr-[2.5rem]" />
        <div className="h-48 bg-gray-300 rounded-[1.75rem] rounded-bl-[2.5rem]" />
      </div>
    </div>
  );
}
