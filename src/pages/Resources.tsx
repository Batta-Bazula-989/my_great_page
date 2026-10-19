import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { categories, pagesInCategory } from "@/content";
import { usePageMeta } from "@/hooks/use-page-meta";

export const RESOURCES_TITLE = "Customer Support Automation Resources | TascaLab";
export const RESOURCES_DESCRIPTION =
  "Guides to AI support chatbots, ticket routing, Zendesk, Freshdesk and Jira automation, WhatsApp and Telegram bots, support metrics, SLAs and EU rules.";

const Resources = () => {
  usePageMeta(RESOURCES_TITLE, RESOURCES_DESCRIPTION, "/resources");

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-16">
        <div className="container px-4 max-w-6xl">
          <header className="glass-panel rounded-[32px] p-6 md:p-10 mb-12 text-center">
            <span className="section-eyebrow">Resources</span>
            <h1 className="text-3xl md:text-5xl font-bold font-display leading-tight tracking-tight">
              Customer support automation resources
            </h1>
            <p className="mt-5 text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Fact-checked guides on support bots, ticket routing, helpdesk automation, support metrics and the EU rules
              that apply to them. Every page lists the official sources it is based on.
            </p>
          </header>

          <div className="space-y-14">
            {categories.map((category) => (
              <section key={category.id} id={category.id} aria-labelledby={`${category.id}-title`} className="scroll-mt-28">
                <h2 id={`${category.id}-title`} className="font-display text-2xl md:text-3xl font-bold tracking-tight">
                  {category.label}
                </h2>
                <p className="text-muted-foreground mt-2 mb-6">{category.blurb}</p>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {pagesInCategory(category.id).map((page) => (
                    <Link key={page.slug} to={`/${page.slug}`} className="glass glass-hover rounded-2xl p-6 flex flex-col">
                      <h3 className="font-display text-lg font-semibold">{page.h1}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{page.description}</p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                        Read guide <ArrowRight className="w-4 h-4" aria-hidden />
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
