import { Suspense, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { domAnimation, LazyMotion, MotionConfig } from "framer-motion";
import ScrollToTop from "@/components/ScrollToTop";
import CookieConsent from "@/components/CookieConsent";
import { AppRoutes } from "./routes";
import { captureUtms } from "@/utils/utm";

// Everything inside the router. The pre-renderer (entry-server.tsx) renders exactly this tree too, so the
// browser can take over the pre-rendered HTML as is: the trees must match, Suspense boundary included.
// Animations use framer-motion's small `m` components with only the features the site needs (fades and
// slides, no layout or drag animation). A plain `motion.*` component still works but brings back the full library.
export const AppContent = () => (
  <LazyMotion features={domAnimation}>
    {/* Visitors who ask for reduced motion get no movement, only fades */}
    <MotionConfig reducedMotion="user">
      <Suspense fallback={null}>
        <CookieConsent />
        <ScrollToTop />
        <AppRoutes />
      </Suspense>
    </MotionConfig>
  </LazyMotion>
);

const App = () => {
  useEffect(() => {
    captureUtms();
  }, []);

  return (
    // v7_startTransition: while the next page's files load, the current page stays on screen.
    <BrowserRouter future={{ v7_startTransition: true }}>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
