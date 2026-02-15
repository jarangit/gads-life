import { proxyToNest } from "@/app/service/bff-proxy";

export async function GET(req: Request) {
  // forward ไป Nest: GET /public/products?search=&page=
  return proxyToNest({
    req,
    path: "/public/products",
    method: "GET",
    cache: { revalidate: 60 }, // public list cache 60s (ปรับได้)
  });
}
