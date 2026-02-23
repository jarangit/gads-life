/* ──────── TopPicksGridSection ──────── */
import Link from "next/link";
import { HiOutlineStar } from "react-icons/hi";
import { FiArrowRight } from "react-icons/fi";
import { cn } from "@/utils/cn";
import { ProductImage, Badge } from "@/components/ui/atoms";
import { transitions, typography } from "@/components/ui/tokens";
import { SectionHeader } from "../atoms";
import { LastReview } from "@/lib/api/home/type";

/* ─── Item card ─── */
interface TopPickHorizontalCardProps {
  item: LastReview;
}

function TopPickHorizontalCard({ item }: TopPickHorizontalCardProps) {
  const href = `/products/${item.slug}`;
  const score = parseFloat(item.overallScore as unknown as string);

  return (
    <Link
      href={href}
      className={cn(
        "group flex items-start gap-4 bg-gray-50/80 hover:bg-gray-100/70 rounded-2xl p-4",
        transitions.allFast,
      )}
    >
      {/* Left — product image */}
      <ProductImage
        src={item.image}
        alt={item.name}
        sizeClass="w-20 h-20 shrink-0"
        radius="rounded-xl"
        bgClass="bg-white"
        imagePadding="p-1.5"
        fallbackIconClass="text-2xl text-gray-300"
      />

      {/* Right — content */}
      <div className="flex-1 min-w-0">
        {/* Score + recommended row */}
        <div className="flex items-center gap-2 mb-1.5">
          <div className="flex items-baseline gap-0.5 bg-black text-white px-2.5 py-0.5 rounded-lg">
            <span className="text-sm font-bold text-brand leading-none">
              {isNaN(score) ? item.overallScore : score.toFixed(1)}
            </span>
            <span className="text-xs text-gray-400">/5</span>
          </div>
          {item.isRecommended && (
            <Badge variant="success" size="xs">แนะนำ</Badge>
          )}
        </div>

        {/* Product name */}
        <h3
          className={cn(
            typography.weight.semibold,
            typography.size.sm,
            "text-gray-900 line-clamp-1 leading-snug",
            `group-hover:text-brand ${transitions.colorsNormal}`,
          )}
        >
          {item.name}
        </h3>

        {/* Subtitle / description */}
        {item.subtitle && (
          <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
            {item.subtitle}
          </p>
        )}

        {/* Read review CTA */}
        <div
          className={cn(
            "mt-2 flex items-center gap-1 text-xs text-gray-400",
            `group-hover:text-brand ${transitions.colorsNormal}`,
          )}
        >
          อ่านรีวิว <FiArrowRight className="text-xs" />
        </div>
      </div>
    </Link>
  );
}

/* ─── Section ─── */
interface TopPicksGridSectionProps {
  items: LastReview[];
}

export function TopPicksGridSection({ items }: TopPicksGridSectionProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className="bg-white rounded-3xl p-6">
      <SectionHeader
        icon={<HiOutlineStar className="text-xl text-amber-400" />}
        title="Top Picks"
        linkHref="/products"
        linkText="ดูทั้งหมด"
      />

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((item) => (
          <TopPickHorizontalCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
