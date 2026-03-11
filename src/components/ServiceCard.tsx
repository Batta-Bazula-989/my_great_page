import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="p-8 rounded-2xl bg-secondary border border-primary/20 relative overflow-hidden">
      {/* Subtle cyan glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl" />
      
      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Icon container */}
        <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 mx-auto">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        
        {/* Title */}
        <h3 className="text-2xl font-bold font-display mb-4 text-white">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-muted-foreground text-base leading-relaxed max-w-xl mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;