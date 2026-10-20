import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Calendar, ChevronDown, ChevronRight, Info } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { Button } from "@/components/ui/button";
import NotFound from "@/pages/NotFound";
import AiAgentCostCalculator from "@/components/tools/AiAgentCostCalculator";
import WhatsAppCostCalculator from "@/components/tools/WhatsAppCostCalculator";
import SlaCalculator from "@/components/tools/SlaCalculator";
import { usePageMeta } from "@/hooks/use-page-meta";
import { useDict, useLocale } from "@/i18n";
import { localePath } from "@/i18n/config";
import { TOOL_ICONS, TOOL_IDS, TOOL_SOURCES, toolBySlug, toolPath, toolsPath, type ToolId } from "@/tools/registry";

const CALCULATORS: Record<ToolId, () => JSX.Element> = {
  aiAgent: AiAgentCostCalculator,
  whatsapp: WhatsAppCostCalculator,
  sla: SlaCalculator,
};

const ToolPage = () => {
  const { toolSlug } = useParams();
  const locale = useLocale();
  const d = useDict();
  const id = toolBySlug(locale, toolSlug);
  const [bookingOpen, setBookingOpen] = useState(false);
  const tool = id ? d.tools[id] : undefined;

  usePageMeta(tool?.metaTitle ?? "", tool?.metaDescription ?? "", id ? toolPath(locale, id) : "");

  if (!id || !tool) return <NotFound />;

  const Calculator = CALCULATORS[id];
  const Icon = TOOL_ICONS[id];
  const others = TOOL_IDS.filter((other) => other !== id);

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-16">
        <div className="container px-4">
          <nav aria-label="Breadcrumb" className="max-w-6xl mx-auto mb-6 text-sm text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link to={localePath(locale)} className="hover:text-primary transition-colors">{d.seo.home}</Link>
              </li>
              <ChevronRight className="w-3.5 h-3.5" aria-hidden />
              <li>
                <Link to={toolsPath(locale)} className="hover:text-primary transition-colors">{d.tools.menu}</Link>
              </li>
              <ChevronRight className="w-3.5 h-3.5" aria-hidden />
              <li aria-current="page" className="text-foreground/80">{tool.navLabel}</li>
            </ol>
          </nav>

          <header className="max-w-6xl mx-auto mb-8 flex flex-col md:flex-row md:items-start gap-5">
            <div className="glass-chip w-14 h-14 rounded-2xl flex items-center justify-center shrink-0">
              <Icon className="w-7 h-7 text-primary" aria-hidden />
            </div>
            <div>
              <span className="section-eyebrow">{d.tools.common.freeTool}</span>
              <h1 className="text-3xl md:text-5xl font-bold font-display leading-tight tracking-tight">{tool.h1}</h1>
              <p className="mt-4 max-w-3xl text-lg text-foreground/80 leading-relaxed">{tool.intro}</p>
            </div>
          </header>

          <section aria-label={tool.h1} className="max-w-6xl mx-auto">
            <Calculator />
            <p className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
              <Info className="w-3.5 h-3.5 text-primary" aria-hidden />
              {d.tools.common.estimate}
            </p>
          </section>

          <div className="max-w-3xl mx-auto mt-16 space-y-12">
            <section aria-labelledby="how-it-works">
              <h2 id="how-it-works" className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-5">
                {d.tools.common.howItWorks}
              </h2>
              <div className="space-y-6">
                {tool.sections.map((section) => (
                  <div key={section.heading}>
                    <h3 className="font-display text-lg font-semibold mb-2">{section.heading}</h3>
                    <p className="text-foreground/80 leading-relaxed">{section.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section aria-labelledby="faq">
              <h2 id="faq" className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-5">{d.tools.common.faqTitle}</h2>
              <div className="space-y-3">
                {tool.faqs.map((faq) => (
                  <details key={faq.q} className="group glass glass-hover rounded-2xl px-6">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-display font-medium [&::-webkit-details-marker]:hidden">
                      <h3 className="text-base">{faq.q}</h3>
                      <ChevronDown className="w-5 h-5 shrink-0 text-primary transition-transform group-open:rotate-180" aria-hidden />
                    </summary>
                    <p className="pb-4 text-muted-foreground leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </section>

            <section aria-labelledby="tool-cta" className="glass-panel rounded-[32px] p-6 md:p-10 text-center">
              <h2 id="tool-cta" className="font-display text-2xl md:text-3xl font-bold tracking-tight">{d.tools.common.ctaTitle}</h2>
              <p className="text-muted-foreground mt-3 max-w-xl mx-auto">{d.tools.common.ctaText}</p>
              <Button variant="hero" size="lg" className="rounded-full mt-6" onClick={() => setBookingOpen(true)}>
                <Calendar className="w-5 h-5" />
                {d.tools.common.ctaBook}
              </Button>
            </section>

            {TOOL_SOURCES[id].length > 0 && (
              <section aria-labelledby="sources">
                <h2 id="sources" className="font-display text-xl font-bold mb-4">{d.tools.common.sources}</h2>
                <ol className="list-decimal pl-5 space-y-2 text-sm text-muted-foreground marker:text-primary">
                  {TOOL_SOURCES[id].map((source) => (
                    <li key={source.url}>
                      <a href={source.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary underline-offset-4 hover:underline break-words">
                        {source.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </section>
            )}
          </div>

          <section aria-labelledby="other-tools" className="max-w-6xl mx-auto mt-16">
            <h2 id="other-tools" className="font-display text-2xl font-bold mb-5">{d.tools.common.otherTools}</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {others.map((other) => {
                const OtherIcon = TOOL_ICONS[other];
                return (
                  <Link key={other} to={toolPath(locale, other)} className="glass glass-hover rounded-2xl p-5 flex gap-4 items-start">
                    <OtherIcon className="w-6 h-6 text-primary shrink-0 mt-0.5" aria-hidden />
                    <span>
                      <span className="block font-display font-semibold">{d.tools[other].h1}</span>
                      <span className="block text-sm text-muted-foreground mt-1">{d.tools[other].short}</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} selectedPlan={`Free tool: ${id}`} />
    </>
  );
};

export default ToolPage;
