export type SeoEntityType = "product" | "review";

export interface SeoEntityInput {
  name?: string | null;
  title?: string | null;
  slug: string;
  excerpt?: string | null;
  subtitle?: string | null;
  summary?: string | null;
  description?: string | null;
  image?: string | null;
  ogImage?: string | null;
  heroImage?: string | null;
}

export interface DynamicSeoMeta {
  title: string;
  description: string;
  canonical: string;
  ogType: "article";
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
  ogImage: string;
  ogImageWidth: string;
  ogImageHeight: string;
  twitterCard: "summary_large_image";
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
}

const FALLBACK_SITE_URL = "https://gads.life";
const FALLBACK_OG_IMAGE = `${FALLBACK_SITE_URL}/og/default.png`;

function ensureLeadingSlash(pathname: string): string {
  if (!pathname) return "/";
  return pathname.startsWith("/") ? pathname : `/${pathname}`;
}

function normalizeSiteUrl(siteUrl: string): string {
  const trimmed = siteUrl.trim();
  if (!trimmed) return FALLBACK_SITE_URL;
  return trimmed.replace(/\/+$/, "");
}

function sanitizeText(value: string | null | undefined): string {
  return value?.trim() ?? "";
}

function toHttpsUrl(url: string | null | undefined): string | null {
  const input = sanitizeText(url);
  if (!input) return null;

  try {
    const parsed = new URL(input);
    return parsed.protocol === "https:" ? parsed.toString() : null;
  } catch {
    return null;
  }
}

export function buildCanonicalUrl(pathname: string, siteUrl?: string): string {
  const base = normalizeSiteUrl(siteUrl || process.env.NEXT_PUBLIC_SITE_URL || FALLBACK_SITE_URL);
  return `${base}${ensureLeadingSlash(pathname)}`;
}

function resolveEntityName(entity: SeoEntityInput): string {
  return sanitizeText(entity.name) || sanitizeText(entity.title) || "สินค้า";
}

function resolveDescription(entity: SeoEntityInput, entityName: string): string {
  return (
    sanitizeText(entity.excerpt) ||
    sanitizeText(entity.summary) ||
    sanitizeText(entity.subtitle) ||
    sanitizeText(entity.description) ||
    `รีวิว ${entityName}`
  );
}

function resolveImage(entity: SeoEntityInput): string {
  return (
    toHttpsUrl(entity.ogImage) ||
    toHttpsUrl(entity.heroImage) ||
    toHttpsUrl(entity.image) ||
    FALLBACK_OG_IMAGE
  );
}

export function buildSeoMeta(
  entity: SeoEntityInput,
  options: {
    type: SeoEntityType;
    siteUrl?: string;
    imageWidth?: number;
    imageHeight?: number;
  },
): DynamicSeoMeta {
  const entityName = resolveEntityName(entity);
  const description = resolveDescription(entity, entityName);

  const routePrefix = options.type === "product" ? "/p/" : "/review/";
  const canonical = buildCanonicalUrl(`${routePrefix}${entity.slug}`, options.siteUrl);
  const title = `${entityName} รีวิว | Gads Life`;
  const image = resolveImage(entity);

  return {
    title,
    description,
    canonical,
    ogType: "article",
    ogTitle: title,
    ogDescription: description,
    ogUrl: canonical,
    ogImage: image,
    ogImageWidth: String(options.imageWidth ?? 1200),
    ogImageHeight: String(options.imageHeight ?? 630),
    twitterCard: "summary_large_image",
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: image,
  };
}
