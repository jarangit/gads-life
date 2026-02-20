/**
 * PriceHistoryCard - Price history chart with insights
 *
 * Shows monthly price trends to help users decide
 * the best time to purchase a product.
 *
 * @token radius: rounded-4xl
 * @token color: brand, gray, blue
 */

"use client";

import { cn } from "@/utils/cn";
import { typography, transitions } from "../tokens";
import { formatPrice } from "../utils";
import { FiTrendingDown, FiCalendar, FiAlertCircle, FiInfo } from "react-icons/fi";
import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  ComposedChart,
  ReferenceDot,
} from "recharts";

/* ─────────────────────────────────────────────
 *  Types
 * ───────────────────────────────────────────── */

export interface MonthlyPriceData {
  month: string; // "2025-03"
  minPrice: number | null;
  avgPrice: number | null;
  sampleCount: number;
}

export interface PriceInsight {
  cheapestMonth: string | null;
  cheapestPrice: number | null;
  currentPrice: number | null;
  diffFromCheapest: number | null;
}

export interface PriceHistoryData {
  productSlug: string;
  currency: string;
  source: string;
  range: {
    months: number;
    from: string;
    to: string;
  };
  monthly: MonthlyPriceData[];
  insight: PriceInsight;
}

export interface PriceHistoryCardProps {
  /** Price history data */
  data: PriceHistoryData;
  /** Container className */
  className?: string;
}

/* ─────────────────────────────────────────────
 *  Helper Functions
 * ───────────────────────────────────────────── */

function formatMonthLabel(monthStr: string): string {
  const date = new Date(monthStr + "-01");
  return date.toLocaleDateString("th-TH", { month: "short" });
}

function formatMonthLabelFull(monthStr: string): string {
  const date = new Date(monthStr + "-01");
  return date.toLocaleDateString("th-TH", { month: "long", year: "numeric" });
}

/* ─────────────────────────────────────────────
 *  Custom Tooltip Component
 * ───────────────────────────────────────────── */

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    payload: {
      month: string;
      avgPrice: number | null;
      minPrice: number | null;
      sampleCount: number;
    };
  }>;
  cheapestMonth: string | null;
}

function CustomTooltip({ active, payload, cheapestMonth }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const isCheapest = data.month === cheapestMonth;

    return (
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-3 min-w-40">
        <p className={cn(typography.size.sm, "font-semibold text-gray-900 mb-1")}>
          {formatMonthLabelFull(data.month)}
        </p>
        {data.avgPrice ? (
          <>
            <div className="flex justify-between items-center">
              <span className={cn(typography.size.xs, "text-gray-500")}>
                ราคาเฉลี่ย
              </span>
              <span
                className={cn(
                  typography.size.sm,
                  "font-semibold",
                  isCheapest ? "text-brand" : "text-gray-900"
                )}
              >
                ฿{formatPrice(data.avgPrice)}
              </span>
            </div>
            {data.minPrice && (
              <div className="flex justify-between items-center mt-1">
                <span className={cn(typography.size.xs, "text-gray-500")}>
                  ราคาต่ำสุด
                </span>
                <span className={cn(typography.size.sm, "text-gray-700")}>
                  ฿{formatPrice(data.minPrice)}
                </span>
              </div>
            )}
            <div className="flex justify-between items-center mt-1">
              <span className={cn(typography.size.xs, "text-gray-500")}>
                ตัวอย่าง
              </span>
              <span className={cn(typography.size.sm, "text-gray-700")}>
                {data.sampleCount} รายการ
              </span>
            </div>
            {isCheapest && (
              <div className="mt-2 pt-2 border-t border-gray-100">
                <span
                  className={cn(
                    typography.size.xs,
                    "text-brand font-semibold flex items-center gap-1"
                  )}
                >
                  ⭐ ราคาถูกที่สุด!
                </span>
              </div>
            )}
          </>
        ) : (
          <p className={cn(typography.size.xs, "text-gray-400")}>
            ไม่มีข้อมูล
          </p>
        )}
      </div>
    );
  }

  return null;
}

/* ─────────────────────────────────────────────
 *  Chart Component (Recharts)
 * ───────────────────────────────────────────── */

interface PriceLineChartProps {
  data: MonthlyPriceData[];
  cheapestMonth: string | null;
}

function PriceLineChart({ data, cheapestMonth }: PriceLineChartProps) {
  // Transform data for chart
  const chartData = data.map((d) => ({
    ...d,
    displayMonth: formatMonthLabel(d.month),
    avgPriceDisplay: d.avgPrice,
  }));

  const hasData = data.some((m) => m.avgPrice !== null && m.avgPrice > 0);

  // If no data, show empty state
  if (!hasData) {
    return (
      <div className="h-56 flex items-center justify-center bg-gray-50 rounded-2xl">
        <div className="text-center">
          <FiAlertCircle className="w-10 h-10 text-gray-300 mx-auto mb-3" />
          <p className={`${typography.size.base} text-gray-500 font-medium`}>
            ยังไม่มีข้อมูลราคา
          </p>
          <p className={`${typography.size.sm} text-gray-400 mt-1`}>
            ข้อมูลจะเริ่มแสดงเมื่อมีการบันทึกราคา
          </p>
        </div>
      </div>
    );
  }

  // Find cheapest point for reference dot
  const cheapestData = cheapestMonth
    ? chartData.find((d) => d.month === cheapestMonth)
    : null;

  // Calculate domain with padding
  const prices = data.filter((d) => d.avgPrice).map((d) => d.avgPrice!);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const padding = (maxPrice - minPrice) * 0.1 || 1000;

  return (
    <div className="h-56">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={chartData}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#05db04" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#05db04" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#e5e7eb"
            vertical={false}
          />
          <XAxis
            dataKey="displayMonth"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9ca3af", fontSize: 12 }}
            dy={10}
          />
          <YAxis
            domain={[minPrice - padding, maxPrice + padding]}
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9ca3af", fontSize: 11 }}
            tickFormatter={(value) => `฿${(value / 1000).toFixed(0)}k`}
            width={50}
          />
          <Tooltip
            content={<CustomTooltip cheapestMonth={cheapestMonth} />}
            cursor={{ stroke: "#d1d5db", strokeDasharray: "3 3" }}
          />
          <Area
            type="monotone"
            dataKey="avgPriceDisplay"
            stroke="none"
            fill="url(#priceGradient)"
            connectNulls
          />
          <Line
            type="monotone"
            dataKey="avgPriceDisplay"
            stroke="#05db04"
            strokeWidth={2.5}
            dot={{ fill: "#05db04", strokeWidth: 0, r: 4 }}
            activeDot={{
              fill: "#05db04",
              strokeWidth: 2,
              stroke: "#fff",
              r: 6,
            }}
            connectNulls
          />
          {/* Cheapest month highlight */}
          {cheapestData && cheapestData.avgPrice && (
            <ReferenceDot
              x={cheapestData.displayMonth}
              y={cheapestData.avgPrice}
              r={8}
              fill="#05db04"
              stroke="#fff"
              strokeWidth={3}
            />
          )}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

/* ─────────────────────────────────────────────
 *  Main Component
 * ───────────────────────────────────────────── */

export function PriceHistoryCard({ data, className }: PriceHistoryCardProps) {
  const { monthly, insight, source } = data;

  const hasData = monthly.some((m) => m.avgPrice !== null && m.avgPrice > 0);
  const hasCheapestMonth = insight.cheapestMonth && insight.cheapestPrice;

  return (
    <div
      className={cn(
        "bg-white rounded-4xl p-6 md:p-8 shadow-card relative overflow-hidden",
        transitions.allNormal,
        "hover:shadow-hover",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
              <FiTrendingDown className="w-4 h-4 text-blue-600" />
            </div>
            <span
              className={cn(
                typography.size.xs,
                "text-gray-400 font-semibold tracking-wider uppercase"
              )}
            >
              BEST TIME TO BUY
            </span>
          </div>
          <h3
            className={cn(
              typography.size["2xl"],
              typography.weight.bold,
              "text-gray-900 mt-2"
            )}
          >
            ช่วงเวลาที่ควรซื้อ
          </h3>
          <p className={cn(typography.size.sm, "text-gray-500 mt-1")}>
            เปรียบเทียบราคาย้อนหลัง {data.range.months} เดือน
          </p>
        </div>

        {/* Source badge */}
        <div
          className={cn(
            "px-3 py-1.5 rounded-full bg-gray-100",
            typography.size.xs,
            "text-gray-600 font-medium capitalize"
          )}
        >
          {source}
        </div>
      </div>

      {/* Chart */}
      <div className="mb-6">
        <PriceLineChart data={monthly} cheapestMonth={insight.cheapestMonth} />
      </div>

      {/* Insight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Cheapest Month Card */}
        <div className="bg-brand-light/50 rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <FiCalendar className="w-4 h-4 text-brand-dark" />
            <span
              className={cn(typography.size.sm, "text-brand-dark font-medium")}
            >
              เดือนที่ราคาถูกสุด
            </span>
          </div>
          {hasCheapestMonth ? (
            <>
              <p
                className={cn(
                  typography.size.xl,
                  typography.weight.bold,
                  "text-gray-900"
                )}
              >
                {formatMonthLabelFull(insight.cheapestMonth!)}
              </p>
              <p className={cn(typography.size.sm, "text-gray-600 mt-1")}>
                ราคาต่ำสุด{" "}
                <span className="text-brand font-semibold">
                  ฿{formatPrice(insight.cheapestPrice!)}
                </span>
              </p>
            </>
          ) : (
            <p className={cn(typography.size.sm, "text-gray-500")}>
              ยังไม่มีข้อมูลเพียงพอ
            </p>
          )}
        </div>

        {/* Current vs Cheapest */}
        <div className="bg-gray-50 rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <FiInfo className="w-4 h-4 text-gray-500" />
            <span
              className={cn(typography.size.sm, "text-gray-600 font-medium")}
            >
              เทียบกับราคาปัจจุบัน
            </span>
          </div>
          {insight.currentPrice && insight.diffFromCheapest !== null ? (
            <>
              <p
                className={cn(
                  typography.size.xl,
                  typography.weight.bold,
                  "text-gray-900"
                )}
              >
                ฿{formatPrice(insight.currentPrice)}
              </p>
              <p className={cn(typography.size.sm, "mt-1")}>
                {insight.diffFromCheapest > 0 ? (
                  <span className="text-red-500">
                    แพงกว่าช่วงถูกสุด ฿
                    {formatPrice(Math.abs(insight.diffFromCheapest))}
                  </span>
                ) : insight.diffFromCheapest < 0 ? (
                  <span className="text-brand">
                    ถูกกว่าช่วงถูกสุด ฿
                    {formatPrice(Math.abs(insight.diffFromCheapest))}
                  </span>
                ) : (
                  <span className="text-brand">ราคาถูกสุดแล้ว!</span>
                )}
              </p>
            </>
          ) : (
            <p className={cn(typography.size.sm, "text-gray-500")}>
              ยังไม่มีข้อมูลราคาปัจจุบัน
            </p>
          )}
        </div>
      </div>

      {/* Helpful tip */}
      {!hasData && (
        <div className="mt-4 p-4 bg-amber-50 rounded-xl border border-amber-100">
          <p className={cn(typography.size.sm, "text-amber-700")}>
            💡 <span className="font-medium">ข้อมูลกำลังรวบรวม:</span>{" "}
            ระบบจะเริ่มแสดงแนวโน้มราคาเมื่อมีข้อมูลเพียงพอจากการติดตาม
          </p>
        </div>
      )}

      {hasData && hasCheapestMonth && (
        <div className="mt-4 p-4 bg-brand-light/30 rounded-xl border border-brand/20">
          <p className={cn(typography.size.sm, "text-gray-700")}>
            💡 <span className="font-medium">คำแนะนำ:</span>{" "}
            จากข้อมูลย้อนหลัง ช่วงเดือน{" "}
            <span className="text-brand font-semibold">
              {formatMonthLabelFull(insight.cheapestMonth!)}
            </span>{" "}
            มักมีโปรโมชันราคาดี ลองจับตาดูในช่วงนี้!
          </p>
        </div>
      )}
    </div>
  );
}
