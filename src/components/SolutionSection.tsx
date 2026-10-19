import { BarChart3, Bot, GitBranch, Wrench } from "lucide-react";
import CardGridSection from "@/components/CardGridSection";
import { useDict } from "@/i18n";

const icons = [Bot, GitBranch, BarChart3, Wrench];

const SolutionSection = () => {
  const t = useDict().services;
  return (
    <CardGridSection
      id="services"
      eyebrow={t.eyebrow}
      title={t.title}
      items={t.items.map((item, i) => ({ ...item, icon: icons[i] }))}
    />
  );
};

export default SolutionSection;
