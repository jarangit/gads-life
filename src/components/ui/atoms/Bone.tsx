import { cn } from "@/utils/cn";

/* ─────────────────────────────────────────────
 *  Bone – the building block for all skeletons
 * ───────────────────────────────────────────── */

export interface BoneProps {
  className?: string;
}

export function Bone({ className }: BoneProps) {
  return (
    <div
      className={cn("animate-pulse rounded-2xl bg-gray-200", className)}
      aria-hidden
    />
  );
}
