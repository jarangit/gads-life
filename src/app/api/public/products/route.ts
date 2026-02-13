import { NextResponse } from "next/server";
const BASE = process.env.NEST_API_BASE_URL!;

export async function GET(req: Request) {
  const url = new URL(req.url);
  const search = url.searchParams;
  const upstream = await fetch(`${BASE}/products?${search.toString()}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!upstream.ok) {
    const text = await upstream.text().catch(() => "Unknown error");
    return NextResponse.json({ error: text }, { status: upstream.status });
  }
  const data = await upstream.json();
  return NextResponse.json(data);
}
