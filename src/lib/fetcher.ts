// lib/fetcher.ts
export async function fetcher<T>(
  url: string,
  options?: RequestInit & { revalidate?: number }
): Promise<T> {
  const { revalidate, ...rest } = options || {};

  const response = await fetch(url, {
    ...rest,
    next: revalidate ? { revalidate } : undefined, // ISR caching
  });

  if (!response.ok) {
    throw new Error(`Fetch failed: ${response.status} ${response.statusText}`);
  }

  return response.json() as Promise<T>;
}
