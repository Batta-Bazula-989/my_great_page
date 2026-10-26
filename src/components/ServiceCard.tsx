import { ArrowRight, type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

export interface CardLink {
  to: string;
  label: string;
}

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  tags?: string[];
  // Links under the text, or `to` to make the whole card one link.
  links?: CardLink[];
  to?: string;
}

const ServiceCard = ({ icon: Icon, title, description, tags, links, to }: ServiceCardProps) => {
  const className = "glass glass-hover h-full p-5 sm:p-6 rounded-[24px] flex items-start gap-4 sm:block";
  const content = (
    <>
      <div className="glass-chip w-11 h-11 rounded-xl flex items-center justify-center shrink-0 sm:mb-4">
        <Icon className="w-5 h-5 text-primary" aria-hidden />
      </div>
      <div className="min-w-0">
        <h3 className="text-lg font-bold font-display mb-1 sm:mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
        {tags && tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <li key={tag} className="glass-chip rounded-full px-2.5 py-0.5 text-xs text-foreground/80">
                {tag}
              </li>
            ))}
          </ul>
        )}
        {links && links.length > 0 && (
          <ul className="mt-3 space-y-1">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline"
                >
                  {link.label}
                  <ArrowRight className="w-4 h-4 shrink-0" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );

  return to ? (
    <Link to={to} className={className}>
      {content}
    </Link>
  ) : (
    <div className={className}>{content}</div>
  );
};

export default ServiceCard;
