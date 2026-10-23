import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CATEGORY_IDS, pagesInCategory } from "@/content";
import { usePageMeta } from "@/hooks/use-page-meta";
import { useDict, useLocale } from "@/i18n";
import { localePath } from "@/i18n/config";

const Resources = () => {
  const locale = useLocale();
  const t = useDict();
  usePageMeta(t.resources.metaTitle, t.resources.metaDescription, localePath(locale, "resources"));

  return (
    <>
      <Navbar />
      <main id="main" tabIndex={-1} className="outline-none pt-28 pb-16">
        <div className="container px-4 max-w-6xl">
          <header className="glass-panel rounded-[32px] p-6 md:p-10 mb-12 text-center">
            <span className="section-eyebrow">{t.resources.eyebrow}</span>
            <h1 className="text-3xl md:text-5xl font-bold font-display leading-tight tracking-tight">
              {t.resources.title}
            </h1>
            <p className="mt-5 text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">{t.resources.intro}</p>
          </header>

          <div className="space-y-14">
            {CATEGORY_IDS.map((id) => (
              <section key={id} id={id} aria-labelledby={`${id}-title`} className="scroll-mt-28">
                <h2 id={`${id}-title`} className="font-display text-2xl md:text-3xl font-bold tracking-tight">
                  {t.categories[id].label}
                </h2>
                <p className="text-muted-foreground mt-2 mb-6">{t.categories[id].blurb}</p>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {pagesInCategory(locale, id).map((page) => (
                    <Link key={page.key} to={localePath(locale, page.slug)} className="glass glass-hover rounded-2xl p-6 flex flex-col">
                      <h3 className="font-display text-lg font-semibold">{page.h1}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{page.description}</p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                        {t.resources.readGuide} <ArrowRight className="w-4 h-4" aria-hidden />
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Resources;
