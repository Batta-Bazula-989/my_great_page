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

const Index = () => {
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
