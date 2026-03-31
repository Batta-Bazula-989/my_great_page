import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="flex items-center justify-center gap-6 py-2">
        <Link
          to="/privacy"
          className="text-sm text-foreground/70 hover:text-foreground transition-colors"
        >
          Privacy Policy
        </Link>
        <span className="text-foreground/30">·</span>
        <Link
          to="/terms"
          className="text-sm text-foreground/70 hover:text-foreground transition-colors"
        >
          Terms of Service
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
