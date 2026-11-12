// Text measure for running article text: 33em holds about 68–72 characters per full line in Outfit
// (measured on the English articles; its average glyph is far narrower than "0", so `ch` would overshoot).
// In em, so the larger intro text keeps the same line length. Tables, headings and panels run wider.
export const MEASURE = "max-w-[33em]";
