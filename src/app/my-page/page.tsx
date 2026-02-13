import { getCategories, getProducts } from "../service/public-api";

export default async function ProductsPage() {
  const { data } = await getProducts();
  const { data: categories } = await getCategories();

  return (
    <div style={{ padding: 24 }}>
      <h1>Products</h1>

      <ul>
        {data.items.map((p: any) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}
