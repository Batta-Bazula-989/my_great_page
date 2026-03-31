import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border max-w-xl mx-auto py-3">
      <div className="px-4">
        <div className="flex items-center justify-center gap-6">
          <Link
            to="/privacy"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Privacy Policy
          </Link>
          <span className="text-muted-foreground/40">·</span>
          <Link
            to="/terms"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
