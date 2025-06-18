export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, "-") // replace spaces & non-word chars with hyphen
    .replace(/^-+|-+$/g, ""); // remove leading/trailing hyphens
}
