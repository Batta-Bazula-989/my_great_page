import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="flex items-center justify-center gap-6 py-1.5 pb-2">
        <Link
          to="/privacy"
          className="text-base font-medium text-foreground/90 hover:text-foreground transition-colors"
        >
          Privacy Policy
        </Link>
        <span className="text-foreground/35">·</span>
        <Link
          to="/terms"
          className="text-base font-medium text-foreground/90 hover:text-foreground transition-colors"
        >
          Terms of Service
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
