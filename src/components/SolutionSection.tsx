import ServicesCarousel from "@/components/ServicesCarousel";

const SolutionSection = () => {
  return (
    <section id="services" aria-labelledby="services-title" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="relative z-10">
        <ServicesCarousel />
      </div>
    </section>
  );
};

export default SolutionSection;