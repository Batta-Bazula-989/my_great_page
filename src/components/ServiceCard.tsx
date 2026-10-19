import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="glass glass-hover h-full p-5 sm:p-6 rounded-[24px] flex items-start gap-4 sm:block">
      <div className="glass-chip w-11 h-11 rounded-xl flex items-center justify-center shrink-0 sm:mb-4">
        <Icon className="w-5 h-5 text-primary" aria-hidden />
      </div>
      <div>
        <h3 className="text-lg font-bold font-display mb-1 sm:mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
