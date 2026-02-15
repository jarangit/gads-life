/**
 * Maps between backend API DTOs and frontend display types.
 *
 * This keeps component props stable even if the API shape changes,
 * and is the single place to adjust when the backend evolves.
 */

import type { CategoryDto, CategoryWithProductsDto, ProductItemDto } from "@/lib/api/types";
import type { Category, CategoryStatus } from "@/data/categories/categories-list";

/** Map a backend CategoryDto to the frontend Category shape used by components */
export function toCategoryDisplay(dto: CategoryDto): Category {
  return {
    id: dto.id,
    type: "category",
    title: dto.nameTh || dto.nameEn || dto.slug,
    slug: dto.slug,
    description: dto.description ?? "",
    order: dto.orderIndex,
    status: dto.isActive ? "active" : ("hidden" as CategoryStatus),
    icon: guessIcon(dto.slug),
  };
}

/** Map a full CategoryWithProductsDto → display-ready shape */
export function toCategoryWithProducts(dto: CategoryWithProductsDto) {
  return {
    category: toCategoryDisplay(dto.category),
    products: dto.items,
    pagination: dto.pagination,
  };
}

/** Map API product items to a simpler display shape */
export function toProductDisplay(item: ProductItemDto) {
  return {
    id: item.id,
    slug: item.slug,
    name: item.name,
    image: item.image,
    score: item.overallScore,
    isRecommended: item.isRecommended,
    price: item.price,
    currency: item.currency,
    priceLabel: item.priceLabel,
    brand: item.brand,
    lastUpdated: item.lastUpdated,
  };
}

/**
 * Best-effort icon guess from category slug.
 * Eventually the backend should provide an icon field;
 * until then this keeps the UI consistent.
 */
function guessIcon(slug: string): string {
  const map: Record<string, string> = {
    laptop: "laptop",
    smartphone: "smartphone",
    audio: "audio",
    wearable: "wearable",
    "home-gadgets": "home",
    "desk-work": "desk",
    "charging-power": "charging",
    "health-lifestyle": "health",
  };
  return map[slug] ?? "laptop";
}
