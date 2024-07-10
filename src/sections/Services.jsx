import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";

const Services = () => {
  return (
    <section>
      <div className="mb-10">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Services</span>
        </h2>
      </div>
      <div className="max-container flex justify-center flex-wrap gap-9">
        {services.map((service) => (
          <ServiceCard key={service.label} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
