/** Approximate reading time, including technical examples, at 200 words/minute. */
export function readingTime(markdown = ""): number {
  const text = markdown
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/<[^>]*>/g, " ");
  return Math.max(1, Math.ceil((text.match(/\S+/g)?.length || 0) / 200));
}
