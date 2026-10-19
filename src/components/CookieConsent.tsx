import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { dictionaries } from "@/i18n";
import { localeFromPath } from "@/i18n/config";

const STORAGE_KEY = "cookie_consent";

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
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setVisible(true);
    } else if (stored === "granted") {
      updateConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, "granted");
    updateConsent(true);
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(STORAGE_KEY, "denied");
    updateConsent(false);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <p className="text-sm text-muted-foreground">
          {t.text}{" "}
          <a
            href="/privacy"
            className="underline underline-offset-2 hover:text-foreground transition-colors"
          >
            {t.privacy}
          </a>
        </p>
        <div className="flex shrink-0 gap-2">
          <Button variant="outline" size="sm" onClick={handleDecline}>
            {t.decline}
          </Button>
          <Button variant="hero" size="sm" onClick={handleAccept}>
            {t.accept}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
