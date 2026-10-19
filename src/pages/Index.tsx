import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SolutionSection from "@/components/SolutionSection";
import WhoForSection from "@/components/WhoForSection";
import WhyMeSection from "@/components/WhyMeSection";
import PricingSection from "@/components/PricingSection";
import ReviewsSection from "@/components/ReviewsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
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
      <main>
        <HeroSection />
        <SolutionSection />
        <WhoForSection />
        <WhyMeSection />
        <PricingSection />
        <ReviewsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
