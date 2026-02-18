"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  type KeyboardEvent,
} from "react";
import { useRouter } from "next/navigation";
import { FiSearch, FiX, FiArrowRight, FiLoader } from "react-icons/fi";
import { cn } from "@/utils/cn";
import { useDebounce, useSearchProducts } from "@/hooks";
import {
  ProductImage,
  RecommendedBadge,
  ScoreBadge,
  EmptyState,
  Bone,
  typography,
  transitions,
  radius,
  formatPrice,
} from "@/components/ui";
import type { ProductResponse } from "@/lib/api/product/types";

// Extend Window for optional gtag analytics
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/* ═══════════════════════════════════════════════
 *  Search Modal – Spotlight-style search overlay
 * ═══════════════════════════════════════════════ */

// ── Analytics helpers (optional — noop until wired) ──

function trackSearchOpen() {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "search_modal_open");
  }
}

function trackSearchQuery(query: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "search_query", { search_term: query });
  }
}

function trackSearchResultClick(productId: string, productName: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "search_result_click", {
      product_id: productId,
      product_name: productName,
    });
  }
}

// ── Types ──

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

// ── Constants ──

const MIN_SEARCH_LENGTH = 2;
const DEBOUNCE_MS = 400;

/* ─────────────────────────────────────────────
 *  SearchInput – auto-focused input bar
 * ───────────────────────────────────────────── */

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
  isLoading: boolean;
}

function SearchInput({
  value,
  onChange,
  onClear,
  onKeyDown,
  isLoading,
}: SearchInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Auto-focus on mount
    const timer = setTimeout(() => inputRef.current?.focus(), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex items-center border-b border-gray-200">
      <div className="pl-5 pr-3 text-gray-400">
        {isLoading ? (
          <FiLoader className="w-5 h-5 animate-spin" />
        ) : (
          <FiSearch className="w-5 h-5" />
        )}
      </div>

      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder="ค้นหาสินค้า…"
        className={cn(
          "flex-1 py-4 pr-4 bg-transparent outline-none",
          `${typography.size.lg} ${typography.weight.medium}`,
          "text-gray-900 placeholder:text-gray-400",
        )}
        autoComplete="off"
        spellCheck={false}
      />

      {value && (
        <button
          onClick={onClear}
          className={cn(
            "mr-3 p-1.5 text-gray-400 hover:text-gray-600",
            `${radius.full} hover:bg-gray-100 ${transitions.colorsNormal}`,
          )}
          aria-label="ล้างการค้นหา"
        >
          <FiX className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
 *  SearchResultItem – single product row
 * ───────────────────────────────────────────── */

interface SearchResultItemProps {
  product: ProductResponse;
  isActive: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
}

function SearchResultItem({
  product,
  isActive,
  onClick,
  onMouseEnter,
}: SearchResultItemProps) {
  return (
    <button
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      className={cn(
        "w-full flex items-center gap-3 px-4 py-3 text-left",
        `${radius.xl} ${transitions.colorsNormal}`,
        isActive ? "bg-brand/10" : "hover:bg-gray-50",
      )}
    >
      <ProductImage
        src={product.image}
        alt={product.name}
        sizeClass="w-12 h-12"
        radius="rounded-lg"
        bgClass="bg-gray-100"
      />

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5">
          <h4
            className={cn(
              `${typography.size.sm} ${typography.weight.semibold}`,
              "text-gray-900 truncate",
            )}
          >
            {product.name}
          </h4>
          {product.isRecommended && <RecommendedBadge />}
        </div>

        <div className="flex items-center gap-2 mt-0.5">
          {product.brand && (
            <span
              className={`${typography.size.xs} text-gray-400 truncate`}
            >
              {product.brand.name}
            </span>
          )}
          {product.category && (
            <span
              className={`${typography.size.xs} text-gray-400 truncate`}
            >
              {product.category.nameTh}
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <ScoreBadge score={product.overallScore} />
        {product.price > 0 && (
          <span
            className={`${typography.size.sm} ${typography.weight.semibold} text-gray-700`}
          >
            {formatPrice(product.price)}
          </span>
        )}
      </div>

      <FiArrowRight
        className={cn(
          "w-4 h-4 shrink-0",
          `${transitions.colorsNormal}`,
          isActive ? "text-brand" : "text-gray-300",
        )}
      />
    </button>
  );
}

/* ─────────────────────────────────────────────
 *  SearchResultsSkeleton – loading placeholder
 * ───────────────────────────────────────────── */

function SearchResultsSkeleton() {
  return (
    <div className="px-4 py-3 space-y-2">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex items-center gap-3 py-2">
          <Bone className="w-12 h-12 rounded-lg shrink-0" />
          <div className="flex-1 space-y-2">
            <Bone className="h-4 w-3/4 rounded-md" />
            <Bone className="h-3 w-1/2 rounded-md" />
          </div>
          <Bone className="w-10 h-6 rounded-full shrink-0" />
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
 *  SearchResults – list / states container
 * ───────────────────────────────────────────── */

interface SearchResultsProps {
  query: string;
  debouncedQuery: string;
  products: ProductResponse[] | undefined;
  isLoading: boolean;
  isError: boolean;
  activeIndex: number;
  onSelect: (product: ProductResponse) => void;
  onHover: (index: number) => void;
}

function SearchResults({
  query,
  debouncedQuery,
  products,
  isLoading,
  isError,
  activeIndex,
  onSelect,
  onHover,
}: SearchResultsProps) {
  const trimmed = query.trim();

  /* ---------- Initial state ---------- */
  if (!trimmed) {
    return (
      <div className="px-5 py-10 text-center">
        <FiSearch className="w-8 h-8 text-gray-300 mx-auto mb-3" />
        <p className={`${typography.size.sm} text-gray-400`}>
          พิมพ์ชื่อสินค้าเพื่อค้นหา
        </p>
        <p className={`${typography.size.xs} text-gray-300 mt-1`}>
          เช่น &quot;ครีมกันแดด&quot; หรือ &quot;เซรั่ม&quot;
        </p>
      </div>
    );
  }

  /* ---------- Too short ---------- */
  if (trimmed.length < MIN_SEARCH_LENGTH) {
    return (
      <div className="px-5 py-10 text-center">
        <p className={`${typography.size.sm} text-gray-400`}>
          พิมพ์อย่างน้อย {MIN_SEARCH_LENGTH} ตัวอักษร
        </p>
      </div>
    );
  }

  /* ---------- Loading ---------- */
  if (isLoading && !products) {
    return <SearchResultsSkeleton />;
  }

  /* ---------- Error ---------- */
  if (isError) {
    return (
      <div className="px-5 py-10 text-center">
        <p className={`${typography.size.sm} text-red-500`}>
          เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง
        </p>
      </div>
    );
  }

  /* ---------- Empty ---------- */
  if (products && products.length === 0) {
    return (
      <EmptyState
        icon={<FiSearch className="w-8 h-8 text-gray-300" />}
        message={`ไม่พบผลลัพธ์สำหรับ "${debouncedQuery}"`}
        className="py-10"
      >
        <p className={`${typography.size.xs} text-gray-400`}>
          ลองใช้คำค้นอื่น หรือลดจำนวนตัวอักษร
        </p>
      </EmptyState>
    );
  }

  /* ---------- Results ---------- */
  if (products && products.length > 0) {
    return (
      <div className="px-2 py-2">
        <p className={`${typography.size.xs} text-gray-400 px-3 pb-2`}>
          พบ {products.length} ผลลัพธ์
        </p>
        {products.map((product, index) => (
          <SearchResultItem
            key={product.id}
            product={product}
            isActive={index === activeIndex}
            onClick={() => onSelect(product)}
            onMouseEnter={() => onHover(index)}
          />
        ))}
      </div>
    );
  }

  return null;
}

/* ═══════════════════════════════════════════════
 *  SearchModal – main exported component
 * ═══════════════════════════════════════════════ */

export function SearchModal({ open, onClose }: SearchModalProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const debouncedQuery = useDebounce(query, DEBOUNCE_MS);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Wrap setQuery to also reset activeIndex
  const updateQuery = useCallback((value: string) => {
    setQuery(value);
    setActiveIndex(0);
  }, []);

  // Stable close handler — resets internal state
  const handleClose = useCallback(() => {
    setQuery("");
    setActiveIndex(0);
    onClose();
  }, [onClose]);

  const {
    data,
    isLoading,
    isFetching,
    isError,
  } = useSearchProducts(debouncedQuery);

  const products = data?.items;

  // Track analytics on open
  useEffect(() => {
    if (open) trackSearchOpen();
  }, [open]);

  // Track debounced query
  useEffect(() => {
    if (debouncedQuery.trim().length >= MIN_SEARCH_LENGTH) {
      trackSearchQuery(debouncedQuery);
    }
  }, [debouncedQuery]);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const handler = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, handleClose]);

  // Navigate to product
  const navigateTo = useCallback(
    (product: ProductResponse) => {
      trackSearchResultClick(product.id, product.name);
      handleClose();
      router.push(`/products/${product.slug ?? product.id}`);
    },
    [handleClose, router],
  );

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (!products?.length) return;

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setActiveIndex((prev) =>
            prev < products.length - 1 ? prev + 1 : 0,
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setActiveIndex((prev) =>
            prev > 0 ? prev - 1 : products.length - 1,
          );
          break;
        case "Enter":
          e.preventDefault();
          if (products[activeIndex]) {
            navigateTo(products[activeIndex]);
          }
          break;
      }
    },
    [products, activeIndex, navigateTo],
  );

  // Scroll active item into view
  useEffect(() => {
    if (!resultsRef.current) return;
    const active = resultsRef.current.querySelector("[data-active='true']");
    active?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-start justify-center pt-[15vh] px-4"
      role="dialog"
      aria-modal="true"
      aria-label="ค้นหาสินค้า"
    >
      {/* Backdrop */}
      <div
        className={cn(
          "absolute inset-0 bg-black/25 backdrop-blur-md",
          `${transitions.allNormal}`,
        )}
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal panel */}
      <div
        className={cn(
          "relative w-full max-w-2xl overflow-hidden",
          "bg-white/80 backdrop-blur-xl backdrop-saturate-150",
          "border border-white/60 shadow-2xl",
          `${radius["2xl"]}`,
          "animate-in fade-in slide-in-from-top-4 duration-200",
        )}
      >
        {/* Input */}
        <SearchInput
          value={query}
          onChange={updateQuery}
          onClear={() => updateQuery("")}
          onKeyDown={handleKeyDown}
          isLoading={isFetching}
        />

        {/* Results area */}
        <div
          ref={resultsRef}
          className="max-h-[50vh] overflow-y-auto overscroll-contain"
        >
          <SearchResults
            query={query}
            debouncedQuery={debouncedQuery}
            products={products}
            isLoading={isLoading}
            isError={isError}
            activeIndex={activeIndex}
            onSelect={navigateTo}
            onHover={setActiveIndex}
          />
        </div>

        {/* Footer hint */}
        <div className="border-t border-gray-100 px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <kbd className="inline-flex items-center px-2 py-0.5 bg-gray-100 text-gray-500 text-[11px] font-medium rounded-md border border-gray-200">
              ESC
            </kbd>
            <span className={`${typography.size["2xs"]} text-gray-400`}>
              ปิด
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchModal;
