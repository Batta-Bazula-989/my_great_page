import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="h-fit w-full flex-none border-t-2 border-primary/50 bg-background">
      <nav
        className="flex h-fit items-center justify-center gap-6 px-4 py-2 leading-none"
        aria-label="Legal"
      >
        <Link
          to="/privacy"
          className="text-base font-semibold text-foreground hover:text-primary transition-colors sm:text-lg"
        >
          Privacy Policy
        </Link>
        <span className="text-foreground/40" aria-hidden>
          ·
        </span>
        <Link
          to="/terms"
          className="text-base font-semibold text-foreground hover:text-primary transition-colors sm:text-lg"
        >
          Terms of Service
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
