import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="glass-solid p-8 rounded-[28px] relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Icon container */}
        <div className="glass-chip w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
          <Icon className="w-8 h-8 text-primary" aria-hidden />
        </div>
        
        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold font-display mb-4 text-white">
          {title}
        </h3>
        
        <p className="text-foreground/70 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;