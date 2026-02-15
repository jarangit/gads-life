"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // Data is fresh for 60 s → avoids re-fetching on fast navigations
        staleTime: 60 * 1000,
        // Keep unused cache for 5 min before GC
        gcTime: 5 * 60 * 1000,
        // Only retry once on failure
        retry: 1,
        // Avoid background refetch noise for content sites
        refetchOnWindowFocus: false,
      },
    },
  });
}

// Singleton on the client (avoids re-creating on re-renders)
let browserQueryClient: QueryClient | undefined;

function getQueryClient() {
  if (typeof window === "undefined") {
    // Server: always create a new client (no shared state across requests)
    return makeQueryClient();
  }
  if (!browserQueryClient) {
    browserQueryClient = makeQueryClient();
  }
  return browserQueryClient;
}

export function QueryProvider({ children }: { children: React.ReactNode }) {
  // useState ensures the client is created once per component lifecycle
  const [queryClient] = useState(getQueryClient);

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
