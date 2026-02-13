// app/products/page.tsx
import { Suspense } from "react";

async function getProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/public/products`, {
    // สำหรับ public content site
    next: { revalidate: 60 }, // cache 60 วินาที
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export default async function ProductsPage() {
  const data = await getProducts();

  return (
    <div style={{ padding: 24 }}>
      <h1>Products</h1>

      <ul>
        {data.items.map((p: any) => (
          <li key={p.id}>
            {p.name}
          </li>
        ))}
      </ul>
    </div>
  );
}