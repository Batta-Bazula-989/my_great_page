import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePageMeta } from "@/hooks/use-page-meta";
import { useDict, useLocale } from "@/i18n";
import { TOOL_ICONS, TOOL_IDS, toolPath, toolsPath } from "@/tools/registry";

const ToolsHub = () => {
  const locale = useLocale();
  const t = useDict().tools;
  usePageMeta(t.hub.metaTitle, t.hub.metaDescription, toolsPath(locale));

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-16">
        <div className="container px-4">
          <header className="max-w-3xl mx-auto text-center mb-12">
            <span className="section-eyebrow">{t.hub.eyebrow}</span>
            <h1 className="section-title">{t.hub.title}</h1>
            <p className="text-muted-foreground text-lg mt-4">{t.hub.intro}</p>
          </header>

          <div className="grid gap-5 md:grid-cols-3 max-w-6xl mx-auto">
            {TOOL_IDS.map((id) => {
              const Icon = TOOL_ICONS[id];
              return (
                <Link key={id} to={toolPath(locale, id)} className="glass glass-hover rounded-[24px] p-6 flex flex-col group">
                  <span className="glass-chip w-12 h-12 rounded-xl flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-primary" aria-hidden />
                  </span>
                  <h2 className="font-display text-xl font-bold">{t[id].h1}</h2>
                  <p className="mt-2 text-muted-foreground leading-relaxed flex-1">{t[id].short}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 font-semibold text-primary">
                    {t.hub.open}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ToolsHub;
