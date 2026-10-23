// Cookie consent state shared by the cookie bar and anything that must stay out of its way.
export const CONSENT_STORAGE_KEY = "cookie_consent";
export const CONSENT_EVENT = "cookie-consent-change";

export const consentDecided = () => {
  try {
    return localStorage.getItem(CONSENT_STORAGE_KEY) !== null;
  } catch {
    return true; // storage blocked: the bar can't persist a choice either, so don't hold anything back for it
  }
};
