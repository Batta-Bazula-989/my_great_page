import { Link, useParams } from "react-router-dom";
import { ChevronDown, Info } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GuideBreadcrumb, GuideCta, OnThisPage, RelatedCards } from "@/components/GuideLayout";
import { formatDate } from "@/lib/utils";
import NotFound from "@/pages/NotFound";
import { getSeoPage, headingId, pageByKey } from "@/content";
import type { Block } from "@/content/types";
import { usePageMeta } from "@/hooks/use-page-meta";
import { useDict, useLocale } from "@/i18n";
import { localeInfo, localePath } from "@/i18n/config";

const ContentBlock = ({ block }: { block: Block }) => {
  switch (block.type) {
    case "p":
      return <p className="text-foreground/80 leading-relaxed">{block.text}</p>;
    case "ul":
    case "ol": {
      const List = block.type;
      return (
        <List className={`space-y-2 pl-5 text-foreground/80 leading-relaxed ${block.type === "ul" ? "list-disc" : "list-decimal"} marker:text-primary`}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </List>
      );
    }
    case "table":
      return (
        <div className="glass rounded-2xl overflow-x-auto">
          <table className="w-full min-w-[520px] text-sm text-left">
            {block.caption && <caption className="px-4 pt-4 text-left text-muted-foreground">{block.caption}</caption>}
            <thead>
              <tr className="border-b border-white/10">
                {block.head.map((cell) => (
                  <th key={cell} scope="col" className="px-4 py-3 font-semibold text-foreground">
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className="border-b border-white/5 last:border-0 align-top">
                  {row.map((cell, j) => (
                    <td key={j} className={`px-4 py-3 ${j === 0 ? "font-medium text-foreground" : "text-foreground/75"}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "note":
      return (
        <div className="glass-chip rounded-2xl p-4 flex gap-3 text-foreground/85">
          <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden />
          <p className="leading-relaxed">{block.text}</p>
        </div>
      );
  }
};

const SeoPage = () => {
  const { slug } = useParams();
  const locale = useLocale();
  const t = useDict();
  const page = getSeoPage(locale, slug);

  usePageMeta(page?.title ?? "", page?.description ?? "", localePath(locale, page?.slug ?? ""));

  if (!page) return <NotFound />;

  const category = t.categories[page.category].label;
  const related = page.related.map((key) => pageByKey(locale, key)).filter((p) => p !== undefined);

  return (
    <>
      <Navbar />
      <main id="main" tabIndex={-1} className="outline-none pt-28 pb-16">
        <div className="container px-4">
          <GuideBreadcrumb
            items={[
              { label: t.seo.home, to: localePath(locale) },
              { label: category, to: `${localePath(locale, "resources")}#${page.category}` },
              { label: page.navLabel },
            ]}
          />

          <div className="max-w-5xl mx-auto grid gap-10 lg:grid-cols-[minmax(0,1fr)_240px]">
            <article className="min-w-0">
              <header className="glass-panel rounded-[32px] p-6 md:p-10 mb-10">
                <span className="section-eyebrow">{category}</span>
                <h1 className="text-3xl md:text-5xl font-bold font-display leading-tight tracking-tight">{page.h1}</h1>
                <p className="mt-3 text-sm text-muted-foreground">
                  {t.seo.byline} · {t.seo.factsChecked}{" "}
                  <time dateTime={page.updated}>{formatDate(page.updated, localeInfo(locale).dateLocale)}</time>
                </p>
                <p className="mt-6 text-lg text-foreground/85 leading-relaxed">{page.intro}</p>
              </header>

              <section aria-labelledby="at-a-glance" className="glass rounded-[28px] p-6 md:p-8 mb-12">
                <h2 id="at-a-glance" className="font-display text-xl font-bold mb-4">{t.seo.atAGlance}</h2>
                <ul className="space-y-3">
                  {page.keyFacts.map((fact) => (
                    <li key={fact} className="flex gap-3 text-foreground/85 leading-relaxed">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden />
                      {fact}
                    </li>
                  ))}
                </ul>
              </section>

              <div className="space-y-12">
                {page.sections.map((section) => (
                  <section key={section.heading} aria-labelledby={headingId(section.heading)} className="scroll-mt-28">
                    <h2 id={headingId(section.heading)} className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-5">
                      {section.heading}
                    </h2>
                    <div className="space-y-4">
                      {section.blocks.map((block, i) => (
                        <ContentBlock key={i} block={block} />
                      ))}
                    </div>
                  </section>
                ))}

                <section aria-labelledby="faq" className="scroll-mt-28">
                  <h2 id="faq" className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-5">
                    {t.seo.faqTitle}
                  </h2>
                  <div className="space-y-3">
                    {page.faqs.map((faq) => (
                      <details key={faq.q} className="group glass glass-hover rounded-2xl px-6">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-display font-medium [&::-webkit-details-marker]:hidden">
                          <h3 className="text-base">{faq.q}</h3>
                          <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180" aria-hidden />
                        </summary>
                        <p className="pb-4 text-muted-foreground leading-relaxed">{faq.a}</p>
                      </details>
                    ))}
                  </div>
                </section>

                <GuideCta />

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

            <OnThisPage
              links={[
                ...page.sections.map((section) => ({ id: headingId(section.heading), label: section.heading })),
                { id: "faq", label: t.seo.faqShort },
              ]}
            />
          </div>

          <RelatedCards
            items={related.map((r) => ({
              key: r.key,
              to: localePath(locale, r.slug),
              label: t.categories[r.category].label,
              title: r.h1,
            }))}
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SeoPage;
