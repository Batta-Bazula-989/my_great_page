import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import WhoForSection from "@/components/WhoForSection";
import WhyMeSection from "@/components/WhyMeSection";
import OutcomeSection from "@/components/OutcomeSection";
import FAQSection from "@/components/FAQSection";
import CalendlyBooking from "@/components/CalendlyBooking";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <WhoForSection />
      <WhyMeSection />
      <OutcomeSection />
      <FAQSection />
      <CalendlyBooking />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;

