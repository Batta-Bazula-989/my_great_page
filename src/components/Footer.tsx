import { Link } from "react-router-dom";
import { UPWORK_PROFILE_URL } from "@/lib/links";

const Footer = () => (
  <footer className="w-full border-t border-white/10 py-5">
    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-foreground/50">
      <span>© {new Date().getFullYear()} TascaLab</span>
      <span aria-hidden>·</span>
      <a href={UPWORK_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Upwork Reviews</a>
      <span aria-hidden>·</span>
      <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
      <span aria-hidden>·</span>
      <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
    </div>
  </footer>
);

export default Footer;