import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GuideBreadcrumb, GuideCta, OnThisPage, RelatedCards } from "@/components/GuideLayout";
import { formatDate } from "@/lib/utils";
import NotFound from "@/pages/NotFound";
import { caseStudies, getCaseStudy, workPath } from "@/content/work";
import { usePageMeta } from "@/hooks/use-page-meta";
import { useDict, useLocale } from "@/i18n";
import { localeInfo, localePath } from "@/i18n/config";

const sectionHeading = "font-display text-2xl md:text-3xl font-bold tracking-tight mb-5";

// /work/<slug>: one case study in the guide page layout.
const CaseStudy = () => {
  const { caseSlug } = useParams();
  const locale = useLocale();
  const t = useDict();
  const study = getCaseStudy(caseSlug);

  usePageMeta(study?.title ?? "", study?.description ?? "", workPath(locale, study?.slug));

  if (!study) return <NotFound />;

  const sections = [
    ...(study.needed ? [{ id: "needed", label: t.work.needed }] : []),
    { id: "built", label: t.work.built },
    ...(study.fromBuilds ? [{ id: "from-my-builds", label: t.work.fromBuilds }] : []),
  ];

  return (
    <>
      <Navbar />
      <main id="main" tabIndex={-1} className="outline-none pt-28 pb-16">
        <div className="container px-4">
          <GuideBreadcrumb
            items={[
              { label: t.seo.home, to: localePath(locale) },
              { label: t.work.label, to: workPath(locale) },
              { label: study.h1 },
            ]}
          />

          <div className="max-w-5xl mx-auto grid gap-10 lg:grid-cols-[minmax(0,1fr)_240px]">
            <article className="min-w-0">
              <header className="glass-panel rounded-[32px] p-6 md:p-10 mb-10">
                <span className="section-eyebrow">{t.work.label}</span>
                <h1 className="text-3xl md:text-5xl font-bold font-display leading-tight tracking-tight">{study.h1}</h1>
                <p className="mt-3 text-sm text-muted-foreground">
                  {t.seo.byline} · {t.seo.factsChecked}{" "}
                  <time dateTime={study.updated}>{formatDate(study.updated, localeInfo(locale).dateLocale)}</time>
                </p>
                <p className="mt-6 text-lg text-foreground/85 leading-relaxed">{study.summary}</p>
              </header>

              <section aria-labelledby="at-a-glance" className="glass rounded-[28px] p-6 md:p-8 mb-12">
                <h2 id="at-a-glance" className="font-display text-xl font-bold mb-4">{t.seo.atAGlance}</h2>
                <dl className="grid gap-4 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-x-6">
                  <dt className="font-semibold text-foreground">{t.work.client}</dt>
                  <dd className="-mt-3 sm:mt-0 text-foreground/85 leading-relaxed">{study.client}</dd>
                  <dt className="font-semibold text-foreground">{t.work.status}</dt>
                  <dd className="-mt-3 sm:mt-0 text-foreground/85 leading-relaxed">{study.status}</dd>
                  <dt className="font-semibold text-foreground">{t.work.tools}</dt>
                  <dd className="-mt-3 sm:mt-0">
                    <ul className="flex flex-wrap gap-1.5">
                      {study.tools.map((tool) => (
                        <li key={tool} className="glass-chip rounded-full px-2.5 py-0.5 text-sm text-foreground/85">
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </dl>
              </section>

              <div className="space-y-12">
                {study.needed && (
                  <section aria-labelledby="needed" className="scroll-mt-28">
                    <h2 id="needed" className={sectionHeading}>{t.work.needed}</h2>
                    <p className="text-foreground/80 leading-relaxed">{study.needed}</p>
                  </section>
                )}

                <section aria-labelledby="built" className="scroll-mt-28">
                  <h2 id="built" className={sectionHeading}>{t.work.built}</h2>
                  <ul className="space-y-4 pl-5 list-disc text-foreground/80 leading-relaxed marker:text-primary">
                    {study.built.map((item) => (
                      <li key={item.title ?? item.text}>
                        {item.title && <strong className="font-semibold text-foreground">{item.title}</strong>}
                        {item.title && item.text && " "}
                        {item.text}
                        {item.items && (
                          <ul className="mt-2 space-y-2 pl-5 list-[circle] marker:text-primary/70">
                            {item.items.map((sub) => (
                              <li key={sub}>{sub}</li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </section>

                {study.fromBuilds && (
                  <section aria-labelledby="from-my-builds" className="scroll-mt-28">
                    <h2 id="from-my-builds" className={sectionHeading}>{t.work.fromBuilds}</h2>
                    <p className="text-foreground/80 leading-relaxed mb-4">{t.work.fromBuildsIntro}</p>
                    <ul className="space-y-2 pl-5 list-disc text-foreground/80 leading-relaxed marker:text-primary">
                      {study.fromBuilds.map((finding) => (
                        <li key={finding}>{finding}</li>
                      ))}
                    </ul>
                  </section>
                )}

                <GuideCta />
              </div>
            </article>

            <OnThisPage links={sections} />
          </div>

          <RelatedCards
            items={caseStudies
              .filter((c) => c.slug !== study.slug)
              .map((c) => ({ key: c.slug, to: workPath(locale, c.slug), label: t.work.label, title: c.h1 }))}
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CaseStudy;
