/**
 * Resolves a raw URL error param to a human-readable message.
 * Falls back to decoding the param itself (for raw API error strings).
 */
export function resolveError(
  code: string | undefined,
  map: Record<string, string>,
): string | null {
  if (!code) return null;
  return map[code] ?? decodeURIComponent(code);
}
