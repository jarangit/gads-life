/* ─────────────────────────────────────────────
 *  DateBox – compact date display (day + month)
 * ───────────────────────────────────────────── */

export interface DateBoxProps {
  date: string;
  className?: string;
}

export function DateBox({ date, className }: DateBoxProps) {
  const d = new Date(date);

  return (
    <div
      className={`shrink-0 w-14 h-14 bg-gray-100 rounded-xl flex flex-col items-center justify-center text-center ${className ?? ""}`}
    >
      <span className="text-lg font-bold text-gray-900 leading-none">
        {d.getDate()}
      </span>
      <span className="text-[10px] text-gray-500 font-medium uppercase">
        {d.toLocaleDateString("th-TH", { month: "short" })}
      </span>
    </div>
  );
}
