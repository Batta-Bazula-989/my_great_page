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
    <main className="flex min-h-dvh flex-col bg-background">
      <div className="flex min-h-0 flex-1 flex-col">
        <Navbar />
        <HeroSection />
        <SolutionSection />
        <WhoForSection />
        <WhyMeSection />
        <FAQSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
};

export default Index;

