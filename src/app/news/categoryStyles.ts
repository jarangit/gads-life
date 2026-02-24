import { accentColors } from "@/components/ui";

type Tone = { bg: string; text: string; border: string };

const toneMap: Record<string, Tone> = {
  Apple: { bg: accentColors.blue.bg, text: accentColors.blue.text, border: "border-blue-100" },
  "Apple Glasses": { bg: accentColors.violet.bg, text: accentColors.violet.text, border: "border-violet-100" },
  AR: { bg: accentColors.purple.bg, text: accentColors.purple.text, border: "border-purple-100" },
  Wearable: { bg: accentColors.emerald.bg, text: accentColors.emerald.text, border: "border-emerald-100" },
  Rumor: { bg: accentColors.amber.bg, text: accentColors.amber.text, border: "border-amber-100" },
};

const fallbackTone: Tone = {
  bg: "bg-brand/10",
  text: "text-brand-dark",
  border: "border-brand/20",
};

export function getCategoryTone(label: string): Tone {
  return toneMap[label] ?? fallbackTone;
}
