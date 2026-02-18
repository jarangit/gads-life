/**
 * ContentPoint - A bullet point with icon and text content
 *
 * @token spacing: gap-3, gap-4
 */

import { cn } from "@/utils/cn";
import { FiCircle } from "react-icons/fi";
import { accentColors, typography } from "../tokens";
import type { ReactNode } from "react";

export interface ContentPointProps {
  /** Content text */
  content: string;
  /** Icon or bullet element */
  icon?: ReactNode;
  /** Container className */
  className?: string;
  /** Content text className */
  textClass?: string;
}

export function ContentPoint({
  content,
  icon = <FiCircle className={`${accentColors.purple.text} mt-1.5 ${typography.size.xs}`} />,
  className,
  textClass = "text-gray-700",
}: ContentPointProps) {
  return (
    <div className={cn("flex items-start gap-3", className)}>
      {icon}
      <p className={textClass}>{content}</p>
    </div>
  );
}
