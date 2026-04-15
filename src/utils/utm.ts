const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
] as const;

type UtmKey = (typeof UTM_KEYS)[number];
export type UtmParams = Partial<Record<UtmKey, string>>;

/** Call once on app mount to persist UTM params from the landing URL into sessionStorage. */
export function captureUtms(): void {
  const params = new URLSearchParams(window.location.search);
  UTM_KEYS.forEach((key) => {
    const value = params.get(key);
    if (value) sessionStorage.setItem(key, value);
  });
}

/** Returns any UTM params stored this session (survives React Router navigation). */
export function getStoredUtms(): UtmParams {
  const utms: UtmParams = {};
  UTM_KEYS.forEach((key) => {
    const value = sessionStorage.getItem(key);
    if (value) utms[key] = value;
  });
  return utms;
}
