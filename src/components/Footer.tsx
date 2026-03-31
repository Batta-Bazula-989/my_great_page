import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-2 border-t border-border">
      <div className="container px-4">
        <div className="flex flex-col items-center gap-0.5">
          <div className="flex items-center gap-4">
            <Link
              to="/privacy"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded-md hover:bg-muted"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded-md hover:bg-muted"
            >
              Terms of Service
            </Link>
          </div>

          <p className="text-muted-foreground/60 text-[10px]">
            © {new Date().getFullYear()} Roman Zakharenko
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
