import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SolutionSection from "@/components/SolutionSection";
import WhoForSection from "@/components/WhoForSection";
import WhyMeSection from "@/components/WhyMeSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SolutionSection />
      <WhoForSection />
      <WhyMeSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;

