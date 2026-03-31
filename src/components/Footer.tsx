import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="w-full border-t border-border/30 bg-background py-3">
    <div className="flex items-center justify-center gap-6 text-sm text-foreground/50">
      <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
      <span aria-hidden>·</span>
      <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
    </div>
  </footer>
);

export default Footer;