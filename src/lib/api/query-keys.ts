/**
 * Centralised query-key factory.
 *
 * Every key is a tuple so React Query can do hierarchical invalidation.
 * e.g. queryClient.invalidateQueries({ queryKey: queryKeys.categories.all })
 *      will invalidate the list AND every single detail query.
 *
 * Pattern follows the "query key factory" recommended by TkDodo:
 * https://tkdodo.eu/blog/effective-react-query-keys
 */

export const queryKeys = {
  categories: {
    /** Root key – invalidating this wipes every category query */
    all: ["categories"] as const,

    /** List with optional filters */
    list: (params?: Record<string, string | number | boolean>) =>
      [...queryKeys.categories.all, "list", params ?? {}] as const,

    /** Single category detail by slug */
    detail: (slug: string) =>
      [...queryKeys.categories.all, "detail", slug] as const,
  },
  home: {
    all: ["home"] as const,
    list: () => [...queryKeys.home.all, "list"] as const,
  },

  // ── 🔮 Future modules (add here when needed) ──
  // products: { ... },
  // brands:   { ... },
  // collections: { ... },
} as const;
