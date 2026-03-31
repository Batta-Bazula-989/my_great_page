import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-2 rounded-md hover:bg-muted"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-2 rounded-md hover:bg-muted"
            >
              Terms of Service
            </Link>
          </div>

          <p className="text-muted-foreground/60 text-xs">
            © {new Date().getFullYear()} Roman Zakharenko
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
