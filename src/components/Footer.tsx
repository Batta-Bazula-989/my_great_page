import { Link } from "react-router-dom";

/** Tight legal strip — uses div + inline layout to avoid any flex/UA stretching issues */
const Footer = () => {
  return (
    <div
      role="contentinfo"
      className="relative z-10 w-full border-t-2 border-primary/50 bg-background"
      style={{
        margin: 0,
        paddingTop: 10,
        paddingBottom: 10,
        boxSizing: "border-box",
        height: "fit-content",
        minHeight: 0,
        maxHeight: "none",
      }}
    >
      <div
        className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 px-4"
        style={{ margin: 0, padding: 0, lineHeight: 1.25 }}
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
      </div>
    </div>
  );
};

export default Footer;
