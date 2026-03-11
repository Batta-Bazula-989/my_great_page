import ServicesCarousel from "@/components/ServicesCarousel";

const SolutionSection = () => {
  return (
    <section id="services" className="bg-gradient-hero relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-glow opacity-20 -translate-y-1/2" />

      <div className="relative z-10">
        <ServicesCarousel />
      </div>
    </section>
  );
};

export default SolutionSection;