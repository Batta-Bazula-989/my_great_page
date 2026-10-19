import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// React Router keeps the scroll position between routes, so reset it when the page changes.
// Same-page anchor links (#faq, table of contents) are left to the browser's own smooth scrolling.
// "instant" overrides the global scroll-behavior: smooth, which would otherwise animate through the old page.
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const { hash } = window.location;
    const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
    if (target) target.scrollIntoView({ behavior: "instant" });
    else window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
