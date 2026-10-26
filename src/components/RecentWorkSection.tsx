import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, ListChecks, MessagesSquare } from "lucide-react";
import CardGridSection from "@/components/CardGridSection";
import { WORK_LOCALES, featuredCaseStudies, workPath } from "@/content/work";
import { useDict, useLocale } from "@/i18n";

const icons = [MessagesSquare, ListChecks, BarChart3];

// Three case studies between Why Me and Pricing. Only in languages that have the /work pages.
const RecentWorkSection = () => {
  const t = useDict().recentWork;
  const locale = useLocale();
  if (!WORK_LOCALES.includes(locale)) return null;

  return (
    <CardGridSection
      id="recent-work"
      eyebrow={t.eyebrow}
      title={t.title}
      items={featuredCaseStudies.map((study, i) => ({
        icon: icons[i],
        title: study.h1,
        description: study.summary,
        tags: study.tools,
        to: workPath(locale, study.slug),
      }))}
    >
      <p className="mt-8 text-center">
        <Link
          to={workPath(locale)}
          className="inline-flex min-h-11 items-center gap-2 font-semibold text-primary underline-offset-4 hover:underline"
        >
          {t.seeAll}
          <ArrowRight className="w-4 h-4" aria-hidden />
        </Link>
      </p>
    </CardGridSection>
  );
};

export default RecentWorkSection;
