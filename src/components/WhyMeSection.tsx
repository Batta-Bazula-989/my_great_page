import { Briefcase, Shield, BookOpen, MessageCircle } from "lucide-react";
import CardGridSection from "@/components/CardGridSection";
import { useDict } from "@/i18n";

const icons = [Briefcase, Shield, BookOpen, MessageCircle];

const WhyMeSection = () => {
  const t = useDict().whyMe;
  return (
    <CardGridSection
      id="why-me"
      eyebrow={t.eyebrow}
      title={t.title}
      items={t.items.map((item, i) => ({ ...item, icon: icons[i] }))}
    />
  );
};

export default WhyMeSection;
