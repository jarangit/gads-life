import { proxyToNest } from "@/app/service/bff-proxy";

export async function GET(req: Request) {
  // forward ไป Nest: GET /public/brands?search=&page=
  return proxyToNest({
    req,
    path: "/public/brands",
    method: "GET",
    cache: { revalidate: 60 }, // public list cache 60s (ปรับได้)
  });
}
