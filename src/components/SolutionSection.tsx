import { DatabaseZap, Inbox, MessageSquareReply, PhoneCall, UserSearch, Wrench } from "lucide-react";
import CardGridSection from "@/components/CardGridSection";
import type { CardLink } from "@/components/ServiceCard";
import { pageByKey } from "@/content";
import { WORK_LOCALES, workPath } from "@/content/work";
import { useDict, useLocale } from "@/i18n";
import { localePath } from "@/i18n/config";

const icons = [MessageSquareReply, PhoneCall, Inbox, UserSearch, DatabaseZap, Wrench];

// The landing pages each card links to, by English slug ("work" is /work). A link shows once its page exists
// in the visitor's language, and uses that page's menu label.
const cardLinks = [
  ["lemlist-to-crm"],
  ["aircall-crm-call-logging", "meeting-notes-to-crm"],
  ["gmail-to-crm", "linkedin-messages-to-crm"],
  ["website-visitors-to-hubspot"],
  ["crm-data-cleanup", "relay-app-to-n8n", "attio-to-hubspot-migration"],
  ["work"],
];

const SolutionSection = () => {
  const t = useDict();
  const locale = useLocale();

  const linksFor = (keys: string[]): CardLink[] =>
    keys.flatMap((key) => {
      if (key === "work")
        return WORK_LOCALES.includes(locale) ? [{ to: workPath(locale), label: t.recentWork.seeAll }] : [];
      const page = pageByKey(locale, key);
      return page ? [{ to: localePath(locale, page.slug), label: page.navLabel }] : [];
    });

  return (
    <CardGridSection
      id="services"
      eyebrow={t.services.eyebrow}
      title={t.services.title}
      items={t.services.items.map((item, i) => ({ ...item, icon: icons[i], links: linksFor(cardLinks[i]) }))}
    />
  );
};

export default SolutionSection;
