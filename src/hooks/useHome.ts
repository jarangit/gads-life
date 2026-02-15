import { queryKeys } from "@/lib/api";
import { fetchHome } from "@/lib/api/home/api";
import { useQuery } from "@tanstack/react-query";

export function useHome() {
  return useQuery({
    queryKey: queryKeys.home.list(),
    queryFn: () => fetchHome(),
  });
}
