import { accentColors } from "@/components/ui";

type Tone = { bg: string; text: string; border: string };

const toneMap: Record<string, Tone> = {
  iPhone: { bg: accentColors.blue.bg, text: accentColors.blue.text, border: "border-blue-100" },
  Mac: { bg: "bg-gray-100", text: "text-gray-700", border: "border-gray-200" },
  iPad: { bg: accentColors.purple.bg, text: accentColors.purple.text, border: "border-purple-100" },
  AirPods: { bg: accentColors.emerald.bg, text: accentColors.emerald.text, border: "border-emerald-100" },
  "Apple Watch": { bg: accentColors.amber.bg, text: accentColors.amber.text, border: "border-amber-100" },
  iOS: { bg: accentColors.violet.bg, text: accentColors.violet.text, border: "border-violet-100" },
  Apple: { bg: "bg-gray-900", text: "text-white", border: "border-gray-900" },
};

const fallbackTone: Tone = {
  bg: "bg-brand/10",
  text: "text-brand-dark",
  border: "border-brand/20",
};

export function getCategoryTone(category: string): Tone {
  return toneMap[category] ?? fallbackTone;
}
