import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTAButton = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Button variant="hero" size="xl" onClick={scrollToContact}>
      Get a Free Workflow Audit
      <ArrowRight className="w-5 h-5" />
    </Button>
  );
};

export default CTAButton;
