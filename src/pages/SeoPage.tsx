import { Link, useParams } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NotFound from "@/pages/NotFound";
import ContentBlock from "@/components/seo/ContentBlock";
import HandoffPanel from "@/components/seo/HandoffPanel";
import ReadNext, { type ReadNextLink } from "@/components/seo/ReadNext";
import { TableOfContents, TableOfContentsDisclosure, type TocEntry } from "@/components/seo/TableOfContents";
import { splitHelpSection } from "@/components/seo/helpSection";
import { MEASURE } from "@/components/seo/measure";
import { useActiveSection } from "@/components/seo/useActiveSection";
import { getPageSummary, headingId, pageByKey } from "@/content";
import { useSeoPage } from "@/content/load";
import type { Locale } from "@/content/types";
import { usePageMeta } from "@/hooks/use-page-meta";
import { useDict, useLocale } from "@/i18n";
import { BLOG_PATH, localeInfo, localePath } from "@/i18n/config";
import { formatDate } from "@/lib/blog";
import { TOOL_IDS, toolPath, type ToolId } from "@/tools/registry";

// A recommended link: another article (by English slug) or a calculator ("tool:<id>").
const useResolveLink = (locale: Locale) => {
  const t = useDict();
  return (link: string): ReadNextLink | undefined => {
    if (link.startsWith("tool:")) {
      const id = link.slice(5) as ToolId;
      return TOOL_IDS.includes(id) ? { to: toolPath(locale, id), title: t.tools[id].h1, meta: t.tools.common.freeTool } : undefined;
    }
    const target = pageByKey(locale, link);
    return target ? { to: localePath(locale, target.slug), title: target.h1, meta: t.categories[target.category].label } : undefined;
  };
};

const SeoPage = () => {
  const { slug } = useParams();
  const locale = useLocale();
  const t = useDict();
  const summary = getPageSummary(locale, slug);
  const page = useSeoPage(locale, slug);
  const resolveLink = useResolveLink(locale);

  // Content sections, then the help section as the handoff panel, then the FAQ (see helpSection.ts).
  const { body, help } = splitHelpSection(page?.sections ?? []);
  const handoff = help ?? { blocks: [] };
  const handoffTitle = handoff.heading ?? t.seo.ctaTitle;
  const toc: TocEntry[] = [
    ...body.map((section) => ({ id: headingId(section.heading), label: section.heading })),
    { id: headingId(handoffTitle), label: handoffTitle },
    { id: "faq", label: t.seo.faqShort },
  ];
  const activeId = useActiveSection(page ? toc.map((entry) => entry.id) : []);

  usePageMeta(page?.title ?? "", page?.description ?? "", localePath(locale, page?.slug ?? ""));

  if (!page || !summary) return <NotFound />;

  const category = t.categories[page.category].label;

  // Related articles first, then the links each section used to carry, once each.
  const self = localePath(locale, page.slug);
  const readNext: ReadNextLink[] = [];
  for (const key of [...page.related, ...Object.values(summary.sectionLinks).flat()]) {
    const link = resolveLink(key);
    if (link && link.to !== self && !readNext.some((l) => l.to === link.to)) readNext.push(link);
  }

  return (
    <>
      <Navbar />
      <main id="main" tabIndex={-1} className="outline-none pt-28 pb-16">
        <div className="container px-4">
          <nav aria-label="Breadcrumb" className="max-w-[44rem] lg:max-w-5xl mx-auto mb-6 text-sm text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link to={localePath(locale)} className="hover:text-primary transition-colors">{t.seo.home}</Link>
              </li>
              <ChevronRight className="w-3.5 h-3.5" aria-hidden />
              <li>
                <Link to={`${localePath(locale, BLOG_PATH)}#${page.category}`} className="hover:text-primary transition-colors">{category}</Link>
              </li>
              <ChevronRight className="w-3.5 h-3.5" aria-hidden />
              <li aria-current="page" className="text-foreground/80">{page.navLabel}</li>
            </ol>
          </nav>

          {/* Below lg the article is one centred column sized to the text measure plus panel padding */}
          <div className="max-w-[44rem] lg:max-w-5xl mx-auto grid gap-10 lg:grid-cols-[minmax(0,1fr)_240px]">
            <div className="min-w-0">
              <article>
                <header className="glass-panel rounded-[32px] p-6 md:p-10 mb-6 lg:mb-10">
                  <span className="section-eyebrow">{category}</span>
                  <h1 className="text-3xl md:text-5xl font-bold font-display leading-tight tracking-tight">{page.h1}</h1>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {t.seo.byline} · {t.seo.factsChecked}{" "}
                    <time dateTime={page.updated}>{formatDate(page.updated, localeInfo(locale).dateLocale)}</time>
                    {" · "}
                    {t.blog.minRead.replace("{n}", String(summary.minutes))}
                  </p>
                  <p className={`${MEASURE} mt-6 text-lg text-foreground/85 leading-relaxed text-pretty`}>{page.intro}</p>
                </header>

                <div className="mb-10 lg:hidden">
                  <TableOfContentsDisclosure title={t.seo.onThisPage} entries={toc} activeId={activeId} />
                </div>

                <section aria-labelledby="at-a-glance" className="glass rounded-[28px] p-6 md:p-8 mb-12">
                  <h2 id="at-a-glance" className="font-display text-xl font-bold mb-4">{t.seo.atAGlance}</h2>
                  <ul className="space-y-3">
                    {page.keyFacts.map((fact) => (
                      <li key={fact} className="flex gap-3 text-foreground/85 leading-relaxed">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden />
                        <span className={MEASURE}>{fact}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <div className="space-y-12">
                  {body.map((section) => (
                    <section key={section.heading} aria-labelledby={headingId(section.heading)}>
                      <h2
                        id={headingId(section.heading)}
                        className="scroll-mt-6 font-display text-2xl md:text-3xl font-bold tracking-tight mb-5"
                      >
                        {section.heading}
                      </h2>
                      <div className="space-y-4">
                        {section.blocks.map((block, i) => (
                          <ContentBlock key={i} block={block} />
                        ))}
                      </div>
                    </section>
                  ))}

                  <HandoffPanel heading={handoff.heading} blocks={handoff.blocks} />

                  <section aria-labelledby="faq">
                    <h2 id="faq" className="scroll-mt-6 font-display text-2xl md:text-3xl font-bold tracking-tight mb-5">
                      {t.seo.faqTitle}
                    </h2>
                    <div className="space-y-3">
                      {page.faqs.map((faq) => (
                        <details key={faq.q} className="group glass glass-hover rounded-2xl px-6">
                          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-display font-medium [&::-webkit-details-marker]:hidden">
                            <h3 className="text-base">{faq.q}</h3>
                            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180" aria-hidden />
                          </summary>
                          <p className={`${MEASURE} pb-4 text-muted-foreground leading-relaxed text-pretty`}>{faq.a}</p>
                        </details>
                      ))}
                    </div>
                  </section>

                  <section aria-labelledby="sources">
                    <h2 id="sources" className="font-display text-xl font-bold mb-4">{t.seo.sources}</h2>
                    <ol className="list-decimal pl-5 space-y-2 text-sm text-muted-foreground marker:text-primary">
                      {page.sources.map((source) => (
                        <li key={source.url}>
                          <a href={source.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary underline-offset-4 hover:underline break-words">
                            {source.label}
                          </a>
                        </li>
                      ))}
                    </ol>
                  </section>
                </div>
              </article>

              {readNext.length > 0 && (
                <div className="mt-16">
                  <ReadNext title={t.seo.readNext} links={readNext} />
                </div>
              )}
            </div>

            <aside className="hidden lg:block">
              <TableOfContents title={t.seo.onThisPage} entries={toc} activeId={activeId} />
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SeoPage;
