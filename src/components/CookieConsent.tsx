import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { dictionaries } from "@/i18n";
import { localeFromPath } from "@/i18n/config";
import { CONSENT_EVENT, CONSENT_STORAGE_KEY } from "@/lib/consent";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
  }
}

function updateConsent(granted: boolean) {
  const state = granted ? "granted" : "denied";
  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      analytics_storage: state,
      ad_storage: state,
      ad_user_data: state,
      ad_personalization: state,
    });
  }
}

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  // Rendered outside the per-language layout, so the language comes from the URL.
  const t = dictionaries[localeFromPath(useLocation().pathname)].cookie;

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!stored) {
      setVisible(true);
    } else if (stored === "granted") {
      updateConsent(true);
    }
  }, []);

  const decide = (granted: boolean) => {
    localStorage.setItem(CONSENT_STORAGE_KEY, granted ? "granted" : "denied");
    updateConsent(granted);
    setVisible(false);
    window.dispatchEvent(new Event(CONSENT_EVENT));
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label={t.privacy}
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-background/95 pb-[env(safe-area-inset-bottom)]"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-2.5 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-4">
        <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm sm:max-w-[75ch]">
          {t.text}{" "}
          <a
            href="/privacy"
            className="underline underline-offset-2 hover:text-foreground transition-colors"
          >
            {t.privacy}
          </a>
        </p>
        <div className="flex shrink-0 gap-2">
          <Button variant="outline" size="sm" className="h-10 flex-1 rounded-full px-5 sm:flex-none" onClick={() => decide(false)}>
            {t.decline}
          </Button>
          <Button
            variant="hero"
            size="sm"
            className="h-10 flex-1 rounded-full px-5 hover:scale-100 sm:flex-none"
            onClick={() => decide(true)}
          >
            {t.accept}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
