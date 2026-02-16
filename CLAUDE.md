# CLAUDE.md — Project Context for AI Assistants

> **gads✓life** — คัดสรรสินค้าจากการใช้งานจริง ไม่มีอันดับสปอนเซอร์

---

## Quick Reference

| Key | Value |
|-----|-------|
| **Framework** | Next.js 16.1.6 (App Router) |
| **React** | 19.2.3 |
| **Styling** | Tailwind CSS v4 (`@theme inline`) |
| **Data Fetching** | `@tanstack/react-query` v5 |
| **Icons** | `react-icons` — Outline style (`HiOutline*`, `Fi*`, `Bs*`) |
| **Font** | IBM Plex Sans Thai (400/500/600/700) + Geist Mono |
| **Language** | Thai (th) primary; code & comments in English |
| **Path Alias** | `@/*` → `./src/*` |

**Commands:**
```bash
npm run dev      # Start dev server (Turbopack)
npm run build    # Production build
npm run lint     # ESLint
```

---

## Design Tokens

Defined in `src/app/globals.css` and exposed via `@theme inline`. TypeScript constants available in `src/components/ui/tokens.ts`.

### Color Tokens

| Token | Value | Tailwind Class |
|-------|-------|----------------|
| `--background` | `#f0f0f0` | `bg-background` |
| `--foreground` | `#171717` | `text-foreground` |
| `--brand` | `#05db04` | `bg-brand`, `text-brand` |
| `--brand-dark` | `#04b803` | `bg-brand-dark` |
| `--brand-light` | `#e6ffe6` | `bg-brand-light` |
| `--brand-hover` | `#04c903` | `bg-brand-hover` |

### Spacing Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | `0.25rem` (4px) | `p-1`, `gap-1` |
| `--space-2` | `0.5rem` (8px) | `p-2`, `gap-2` |
| `--space-3` | `0.75rem` (12px) | `p-3`, `gap-3` |
| `--space-4` | `1rem` (16px) | `p-4`, `gap-4` |
| `--space-6` | `1.5rem` (24px) | `p-6`, `gap-6` |
| `--space-8` | `2rem` (32px) | `p-8`, `gap-8` |
| `--space-12` | `3rem` (48px) | `py-12` |

### Border Radius Tokens

| Token | Value | Tailwind Class |
|-------|-------|----------------|
| `--radius-sm` | `0.375rem` (6px) | `rounded-sm` |
| `--radius-md` | `0.5rem` (8px) | `rounded-md` |
| `--radius-lg` | `0.75rem` (12px) | `rounded-lg` |
| `--radius-xl` | `1rem` (16px) | `rounded-xl` |
| `--radius-2xl` | `1.25rem` (20px) | `rounded-2xl` |
| `--radius-full` | `9999px` | `rounded-full` |

### Shadow Tokens

| Token | Tailwind Class | Use Case |
|-------|----------------|----------|
| `--shadow-card` | `shadow-card` | Cards, panels |
| `--shadow-hover` | `shadow-hover` | Hover states |
| `--shadow-sm/md/lg` | `shadow-sm/md/lg` | General elevation |

### Transition Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--duration-fast` | `150ms` | `duration-150` |
| `--duration-normal` | `200ms` | `duration-200` |
| `--duration-slow` | `300ms` | `duration-300` |

**Container:** `max-width: 1200px`, `margin: 0 auto`, `padding: 0 1rem`.

---

## Project Structure

```
src/
├── app/                     # Next.js App Router pages
│   ├── layout.tsx           # Root layout (Nav + Footer + QueryProvider)
│   ├── page.tsx             # Home page ("use client", useHome hook)
│   ├── categories/          # All-categories page
│   ├── category/[slug]/     # Category detail with ISR
│   └── product/[slug]/      # Product page
├── components/
│   ├── ui/                  # 🎨 Design System (app-wide reusable)
│   │   ├── atoms/           # Badge, Button, Card, Bone, ProductImage,
│   │   │                    # EmptyState, SectionHeader, IconBox, FilterChip, SortSelect
│   │   ├── molecules/       # TrustCard, ErrorFallback, LinkCard,
│   │   │                    # ProductCardCompact, ReviewRow
│   │   ├── constants/       # categoryIcons (getCategoryIcon, categoryIconMap)
│   │   ├── tokens.ts        # 🎨 Design token TypeScript constants
│   │   ├── utils.ts         # formatRelativeTime, formatPrice
│   │   └── index.ts         # Barrel — import everything from "@/components/ui"
│   ├── home/                # Home page feature components
│   │   ├── atoms/           # QuickTag + re-exports from ui
│   │   ├── molecules/       # TopPickCard, ReviewListItem, CategoryIconCard, etc.
│   │   └── organisms/       # HeroSection, TopPicksSection, TrustSection, etc.
│   ├── layouts/             # Nav, Footer
│   └── *.tsx                # Legacy top-level (re-export from ui)
├── hooks/                   # React Query hooks (useHome, useCategories)
├── lib/api/                 # API layer (http client, query keys, mappers)
│   ├── http.ts              # Generic http<T>(path, options?) client
│   ├── query-keys.ts        # TkDodo-style query key factory
│   ├── mappers.ts           # DTO → display type mappers
│   ├── home/                # fetchHome(), IHomeResponse
│   └── category/            # fetchCategories(), fetchCategoryBySlug()
├── types/models/            # View model interfaces (I___Vm convention)
├── data/                    # Static/mock category & product data
├── providers/               # QueryProvider (staleTime: 60s, retry: 1)
└── utils/cn.ts              # cn() — clsx + tailwind-merge
```

---

## Design System Usage

**Single import** for all shared components and tokens:

```tsx
import {
  // Design Tokens
  spacing, radius, shadows, typography, colors, transitions,
  buttonSizes, badgeSizes, iconBoxSizes,
  
  // Atoms
  Badge, RecommendedBadge, ScoreBadge,
  Button, Card, Bone,
  ProductImage, EmptyState, SectionHeader, IconBox,
  FilterChip, SortSelect,
  
  // Molecules
  TrustCard, ErrorFallback, LinkCard, ProductCardCompact, ReviewRow,
  
  // Constants & Utils
  getCategoryIcon, categoryIconMap,
  formatRelativeTime, formatPrice,
} from "@/components/ui";
```

### Atoms

```tsx
// Badge variants: default | success | info | warning | recommended | score | status
// Badge sizes: xs | sm | md
<Badge variant="success" size="sm">ใช้ดี</Badge>
<RecommendedBadge />
<ScoreBadge score={8.5} max={10} />

// Button variants: primary | secondary | ghost | dark | outline
// Button sizes: xs | sm | md | lg    Radius: default | full | xl | 2xl
// Renders <Link> automatically when href is provided
<Button variant="primary" size="md" radius="2xl">กดเลย</Button>
<Button variant="ghost" href="/categories">ดูทั้งหมด →</Button>

// Card variants: default | highlight | muted | dark | glass | gradient
<Card variant="default" hoverable radius="rounded-2xl" padding="p-5">...</Card>

// ProductImage — Next/Image with FiPackage fallback
<ProductImage src={url} alt={name} sizeClass="w-20 h-20" radius="rounded-xl" hoverScale />

// Others
<Bone className="h-6 w-40" />
<EmptyState message="ไม่พบสินค้า" />
<SectionHeader icon={<FiStar />} title="แนะนำสำหรับคุณ" linkHref="/products" size="lg" />
<IconBox size="lg" bgClass="bg-gray-100">🔌</IconBox>
```

### Molecules

```tsx
<TrustCard icon={<FiShield />} title="โปร่งใส" description="ไม่มีสปอนเซอร์" iconStyle="box" />
<ErrorFallback message="เกิดข้อผิดพลาด" onRetry={() => refetch()} />
<LinkCard href="/category/laptop" icon={<HiOutlineDesktopComputer />} title="แล็ปท็อป" accentLine />
<ProductCardCompact id="abc" name="MacBook Air" overallScore={8.5} isRecommended />
<ReviewRow id="abc" name="Power Bank" subtitle="Anker" value="฿890" />
```

### Constants & Utils

```tsx
// Category icon — preferred factory function
const icon = getCategoryIcon("laptop", "text-3xl"); // returns <HiOutlineDesktopComputer />

// Price formatting
formatPrice(1290);           // "1,290"
formatRelativeTime(dateStr); // "วันนี้" | "เมื่อวาน" | "3 วันที่แล้ว" | "2 สัปดาห์ที่แล้ว"
```

---

## Coding Conventions

### Component Rules

1. **Named exports** for all components — `export function Badge(...)`.
   Default export only for Next.js pages (`export default function Page()`).
2. **Props interface** named `{Component}Props` — `BadgeProps`, `CardProps`.
3. **Variants/sizes defined as `const` objects** with `keyof typeof` for type safety.
4. **`cn()` for all class merging** — never manual string concatenation.
   ```tsx
   className={cn("bg-white p-5", isActive && "ring-2", className)}
   ```
5. **`"use client"` only where needed** — hooks, event handlers, ErrorFallback, pages using hooks.
6. **`radius` prop** on most components — enables organic/asymmetric rounded corners.
7. **`radiusClasses` arrays** in organisms give each card a unique border-radius:
   ```tsx
   const radiusClasses = ["rounded-2xl rounded-tl-3xl", "rounded-2xl", "rounded-2xl rounded-br-3xl"];
   ```
8. **ASCII box-art headers** for file documentation:
   ```tsx
   /* ──────── Component Name ──────── */
   ```

### Import Rules

- **`@/` alias** for all cross-folder imports.
- **Relative imports** only within the same feature folder (`./`, `../`).
- **Barrel exports** (`index.ts`) at every directory level.
- Feature components **re-export from `@/components/ui`** rather than duplicating.

### Icon Rules

- Use **outline-style** icons from `react-icons`: `HiOutline*`, `Fi*`, `Bs*`.
- Size with **Tailwind text classes**: `className="text-2xl"`, `className="text-xl"`.
- Category icons go through `getCategoryIcon()` — never import icon map directly.

### Naming Conventions

| Item | Convention | Example |
|------|-----------|---------|
| Component file | PascalCase | `ProductImage.tsx` |
| Hook file | camelCase with `use` prefix | `useCategories.ts` |
| Type/Interface | PascalCase, `I___Vm` for view models | `IProductItemVm` |
| API DTO | PascalCase + `Dto`/`Response` suffix | `CategoryItemResponse` |
| CSS variable | kebab-case | `--brand-dark` |
| Folder | kebab-case | `public-products/` |

### Thai Language Rules

- **All user-facing copy** is Thai: `"ยังไม่มีข้อมูล"`, `"แนะนำ"`, `"ดูทั้งหมด →"`.
- **Code, comments, variable names** are English.
- **Date/price formatting** uses Thai locale (`th-TH`).

---

## Data Fetching Pattern

```
Page ("use client") → useXxx() hook → fetchXxx() API fn → http<T>() → Backend
                         ↓
                    React Query cache
                         ↓
                    Organisms (data as props) → Molecules → Atoms
```

### API Client (`src/lib/api/http.ts`)

```tsx
// Base URL from env: NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:3001/api/v1"
const data = await http<IHomeResponse>("/public/home");
const data = await http<ICategoryListResponse>("/public/categories", { params: { page: 1, limit: 10 } });
```

### Query Keys (TkDodo pattern, `src/lib/api/query-keys.ts`)

```tsx
queryKeys.home.list()              // ["home", "list"]
queryKeys.categories.all           // ["categories"]
queryKeys.categories.list(params)  // ["categories", "list", params]
queryKeys.categories.detail(slug)  // ["categories", "detail", slug]
```

### Hooks (`src/hooks/`)

```tsx
const { data, isLoading, error } = useHome();
const { data, isLoading } = useCategories({ page: 1, limit: 10 });
const { data } = useCategoryBySlug("laptop"); // enabled: !!slug
```

### QueryProvider Config

```tsx
staleTime: 60_000    // 60 seconds
gcTime: 300_000      // 5 minutes
retry: 1
refetchOnWindowFocus: false
```

---

## Page Pattern

```tsx
"use client";

import { useHome } from "@/hooks";
import { HeroSection, TopPicksSection, HomePageSkeleton } from "@/components/home";

export default function Home() {
  const { data: homeData } = useHome();

  if (!homeData) return <HomePageSkeleton />;

  return (
    <>
      <HeroSection />
      <TopPicksSection items={homeData.topPicks} />
      {/* ... more organisms */}
    </>
  );
}
```

**Key points:**
- Pages are thin — just hook + skeleton + organisms.
- Organisms receive data as props, never call hooks themselves.
- Skeleton shown while data loads (`if (!data) return <Skeleton />`).

---

## Atomic Design Hierarchy

```
Atom        → Smallest unit (Badge, Button, Card, Bone, ProductImage, ...)
Molecule    → Composition of atoms (TrustCard, LinkCard, ProductCardCompact, ...)
Organism    → Full section (HeroSection, TopPicksSection, TrustSection, ...)
Page        → Wires up hooks → organisms; thin layer
```

**When creating new components:**

1. **Is it a basic element?** → `src/components/ui/atoms/`
2. **Does it compose atoms?** → `src/components/ui/molecules/`
3. **Is it a full page section?** → `src/components/home/organisms/` (or other feature folder)
4. **Is it feature-specific?** → `src/components/{feature}/` with re-exports from ui
5. **Always** add to the relevant `index.ts` barrel export.

---

## Do's & Don'ts

### ✅ Do

- Use `cn()` for all Tailwind class merging
- Import shared components from `@/components/ui`
- Pass `radius` as a Tailwind string for flexible rounded corners
- Add `"use client"` only when the component uses hooks/events
- Write TypeScript props interfaces for every component
- Use `getCategoryIcon()` for category icon lookups
- Use `formatPrice()` and `formatRelativeTime()` from ui utils
- Keep pages thin — hooks + skeleton + organisms only
- Use barrel exports at every folder level

### ❌ Don't

- Don't use CSS modules or styled-components — Tailwind only
- Don't duplicate icon maps — use `@/components/ui/constants`
- Don't call hooks inside organisms — pass data as props
- Don't use default exports (except Next.js pages and Nav)
- Don't use `lucide-react` — the project uses `react-icons`
- Don't hardcode colors — use design tokens (`bg-brand`, `text-brand-dark`)
- Don't skip the skeleton/loading state on pages
- Don't write Thai in variable names or comments — Thai is for UI copy only
