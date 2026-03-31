import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="shrink-0 border-t-2 border-primary/50 bg-background">
      <nav
        className="flex items-center justify-center gap-6 px-4 py-2.5"
        aria-label="Legal"
      >
        <Link
          to="/privacy"
          className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
        >
          Privacy Policy
        </Link>
        <span className="text-foreground/40" aria-hidden>
          ·
        </span>
        <Link
          to="/terms"
          className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
        >
          Terms of Service
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
