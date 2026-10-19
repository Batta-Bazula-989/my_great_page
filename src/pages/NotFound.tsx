import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { dictionaries } from "@/i18n";
import { localeFromPath, localePath } from "@/i18n/config";

const NotFound = () => {
  const location = useLocation();
  const locale = localeFromPath(location.pathname);
  const t = dictionaries[locale].notFound;

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-1 text-xl">{t.title}</p>
        <p className="mb-4 text-muted-foreground">{t.text}</p>
        <a href={localePath(locale)} className="text-primary underline hover:text-primary/90">
          {t.back}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
