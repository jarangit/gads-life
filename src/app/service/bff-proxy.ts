import { NextResponse } from "next/server";

const BASE = process.env.NEST_API_BASE_URL!;
if (!BASE) throw new Error("Missing NEST_API_BASE_URL");

type ProxyOptions = {
  req: Request;
  path: string; // path ฝั่ง Nest เช่น "/public/products"
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  cache?: { revalidate?: number }; // ใช้กับ public caching
};

export async function proxyToNest<T>({
  req,
  path,
  method = "GET",
  cache,
}: ProxyOptions) {
  const url = new URL(req.url);
  const upstreamUrl = `${BASE}${path}${url.search}`;

  const upstream = await fetch(upstreamUrl, {
    method,
    headers: { "Content-Type": "application/json" },
    // Public GET สามารถใส่ revalidate ได้ (เฉพาะ Next server runtime)
    ...(cache?.revalidate !== undefined
      ? { next: { revalidate: cache.revalidate } as any }
      : {}),
  });

  if (!upstream.ok) {
    const text = await upstream.text().catch(() => "");
    return NextResponse.json(
      { message: "Upstream error", detail: text || upstream.statusText },
      { status: upstream.status },
    );
  }

  if (upstream.status === 204) return NextResponse.json(null, { status: 204 });

  const data = (await upstream.json()) as T;
  return NextResponse.json(data, { status: upstream.status });
}
