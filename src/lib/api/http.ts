/**
 * Lightweight HTTP client for calling the backend API directly.
 * Works in both server (RSC) and client components.
 */

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:3001/api/v1";

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface HttpOptions {
  method?: HttpMethod;
  body?: unknown;
  params?: Record<string, string | number | boolean | undefined>;
  /** Extra headers merged on top of defaults */
  headers?: HeadersInit;
  /** Pass-through to fetch (e.g. next revalidate) */
  next?: NextFetchRequestConfig;
  signal?: AbortSignal;
}

export class ApiError extends Error {
  constructor(
    public status: number,
    public statusText: string,
    public body: string,
  ) {
    super(`HTTP ${status}: ${body || statusText}`);
    this.name = "ApiError";
  }
}

export async function http<T>(path: string, options?: HttpOptions): Promise<T> {
  const url = new URL(`${API_BASE}${path}`);

  if (options?.params) {
    Object.entries(options.params).forEach(([key, value]) => {
      if (value !== undefined) url.searchParams.set(key, String(value));
    });
  }

  const res = await fetch(url.toString(), {
    method: options?.method ?? "GET",
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers as Record<string, string>),
    },
    body: options?.body ? JSON.stringify(options.body) : undefined,
    signal: options?.signal,
    next: options?.next,
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new ApiError(res.status, res.statusText, text);
  }

  return res.json() as Promise<T>;
}
