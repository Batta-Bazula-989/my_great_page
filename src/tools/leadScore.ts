// Lead scoring calculator: a fit score and an engagement score built from the visitor's own criteria,
// following the rules HubSpot documents for its lead scoring tool (checked 13 November 2026):
// points can be positive or negative, a score stops at its limit, thresholds turn the value into
// High / Medium / Low, and a combined label pairs the fit band (A–C) with the engagement band (1–3).
// The only vendor defaults are HubSpot's score-limit options and its example thresholds.

export type ScoreId = "fit" | "engagement";
export type Band = "high" | "medium" | "low";

// HubSpot's score limit options: -100 to 100 … -10,000 to 10,000 (default 100).
export const SCORE_LIMITS = [100, 200, 300, 400, 500, 1000, 10000];
export const DEFAULT_LIMIT = 100;
// HubSpot's own example: 70–100 High, 40–69 Medium, below that Low.
export const DEFAULT_THRESHOLDS = { high: 70, medium: 40 };
export const MAX_CRITERIA = 12;

export interface Criterion {
  id: number;
  label: string;
  score: ScoreId;
  points: number;
  applies: boolean; // whether it applies to the test lead
}

export interface ScoreSettings {
  limit: number;
  high: number;
  medium: number;
}

const clamp = (n: number, limit: number) => Math.max(-limit, Math.min(limit, n));

export const scoreValue = (criteria: Criterion[], score: ScoreId, limit: number) =>
  clamp(
    criteria.filter((c) => c.score === score && c.applies).reduce((sum, c) => sum + (Number.isFinite(c.points) ? c.points : 0), 0),
    limit,
  );

// The highest and lowest values any lead can reach with these criteria.
export const scoreRange = (criteria: Criterion[], score: ScoreId, limit: number) => {
  const pts = criteria.filter((c) => c.score === score).map((c) => (Number.isFinite(c.points) ? c.points : 0));
  return {
    max: clamp(pts.filter((p) => p > 0).reduce((a, b) => a + b, 0), limit),
    min: clamp(pts.filter((p) => p < 0).reduce((a, b) => a + b, 0), limit),
    positiveTotal: pts.filter((p) => p > 0).reduce((a, b) => a + b, 0),
  };
};

export const band = (value: number, s: ScoreSettings): Band => (value >= s.high ? "high" : value >= s.medium ? "medium" : "low");

// HubSpot's combined labels: A = high fit … C = low fit; 1 = high engagement … 3 = low engagement.
export const combinedLabel = (fit: Band, engagement: Band) =>
  `${{ high: "A", medium: "B", low: "C" }[fit]}${{ high: 1, medium: 2, low: 3 }[engagement]}`;

export type Check =
  | { kind: "noCriteria"; score: ScoreId }
  | { kind: "order"; score: ScoreId }
  | { kind: "unreachable"; score: ScoreId; max: number }
  | { kind: "capped"; score: ScoreId; total: number; limit: number };

// Problems worth fixing before the model goes into a CRM.
export const checks = (criteria: Criterion[], settings: Record<ScoreId, ScoreSettings>): Check[] => {
  const out: Check[] = [];
  for (const score of ["fit", "engagement"] as ScoreId[]) {
    const s = settings[score];
    if (!criteria.some((c) => c.score === score)) {
      out.push({ kind: "noCriteria", score });
      continue;
    }
    if (s.medium >= s.high) out.push({ kind: "order", score });
    const r = scoreRange(criteria, score, s.limit);
    if (r.max < s.high) out.push({ kind: "unreachable", score, max: r.max });
    if (r.positiveTotal > s.limit) out.push({ kind: "capped", score, total: r.positiveTotal, limit: s.limit });
  }
  return out;
};

// Tab-separated model, ready to paste into a spreadsheet or keep next to the CRM build steps.
export const modelTsv = (
  criteria: Criterion[],
  settings: Record<ScoreId, ScoreSettings>,
  labels: { score: string; criterion: string; points: string; limit: string; high: string; medium: string; names: Record<ScoreId, string> },
) => {
  const rows = [[labels.score, labels.criterion, labels.points].join("\t")];
  for (const c of criteria) rows.push([labels.names[c.score], c.label.replace(/\s+/g, " ").trim(), String(c.points)].join("\t"));
  rows.push("");
  for (const score of ["fit", "engagement"] as ScoreId[]) {
    const s = settings[score];
    rows.push([labels.names[score], `${labels.limit}: ±${s.limit}`, `${labels.high}: ≥ ${s.high}`, `${labels.medium}: ≥ ${s.medium}`].join("\t"));
  }
  return rows.join("\n");
};
