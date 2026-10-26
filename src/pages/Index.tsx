import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SolutionSection from "@/components/SolutionSection";
import ProcessSection from "@/components/ProcessSection";
import WhoForSection from "@/components/WhoForSection";
import WhyMeSection from "@/components/WhyMeSection";
import RecentWorkSection from "@/components/RecentWorkSection";
import PricingSection from "@/components/PricingSection";
import DataSection from "@/components/DataSection";
import ReviewsSection from "@/components/ReviewsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import MobileBookingBar from "@/components/MobileBookingBar";
import Footer from "@/components/Footer";
import { usePageMeta } from "@/hooks/use-page-meta";
import { useDict, useLocale } from "@/i18n";
import { localePath } from "@/i18n/config";

const Index = () => {
  const t = useDict();
  usePageMeta(t.meta.homeTitle, t.meta.homeDescription, localePath(useLocale()));

  return (
    <>
      <Navbar />
      <main id="main" tabIndex={-1} className="outline-none">
        <HeroSection />
        <SolutionSection />
        <ProcessSection />
        <WhoForSection />
        <WhyMeSection />
        <RecentWorkSection />
        <PricingSection />
        <DataSection />
        <ReviewsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <MobileBookingBar />
    </>
  );
};

export default Index;
