import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GuideBreadcrumb, GuideCta } from "@/components/GuideLayout";
import { caseStudies, workPath } from "@/content/work";
import { usePageMeta } from "@/hooks/use-page-meta";
import { useDict, useLocale } from "@/i18n";
import { localePath } from "@/i18n/config";

// /work: every case study, then the smaller builds.
const Work = () => {
  const locale = useLocale();
  const t = useDict();
  usePageMeta(t.work.metaTitle, t.work.metaDescription, workPath(locale));

  return (
    <>
      <Navbar />
      <main id="main" tabIndex={-1} className="outline-none pt-28 pb-16">
        <div className="container px-4">
          <GuideBreadcrumb items={[{ label: t.seo.home, to: localePath(locale) }, { label: t.work.label }]} />

          <div className="max-w-5xl mx-auto">
            <header className="glass-panel rounded-[32px] p-6 md:p-10 mb-12">
              <span className="section-eyebrow">{t.work.label}</span>
              <h1 className="text-3xl md:text-5xl font-bold font-display leading-tight tracking-tight">{t.work.title}</h1>
              <p className="mt-6 text-lg text-foreground/85 leading-relaxed">{t.work.intro}</p>
            </header>

            <div className="grid gap-4 md:grid-cols-2">
              {caseStudies.map((study) => (
                <Link
                  key={study.slug}
                  to={workPath(locale, study.slug)}
                  className="glass glass-hover rounded-2xl p-6 flex flex-col"
                >
                  <h2 className="font-display text-lg font-semibold">{study.h1}</h2>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{study.summary}</p>
                  <ul aria-label={t.work.tools} className="mt-4 flex flex-wrap gap-1.5 flex-1 content-start">
                    {study.tools.map((tool) => (
                      <li key={tool} className="glass-chip rounded-full px-2.5 py-0.5 text-xs text-foreground/80">
                        {tool}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    {t.work.readCase} <ArrowRight className="w-4 h-4" aria-hidden />
                  </span>
                </Link>
              ))}
            </div>

            <section aria-labelledby="smaller-builds" className="mt-14">
              <h2 id="smaller-builds" className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-5">
                {t.work.smallerTitle}
              </h2>
              <ul className="space-y-2 pl-5 list-disc text-foreground/80 leading-relaxed marker:text-primary">
                {t.work.smaller.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <div className="mt-14">
              <GuideCta />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Work;
