import { CheckCircle2 } from "lucide-react";
import { services } from "@/data/site";

export const Services = () => {
  return (
    <section id="services" className="bg-cream-100 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="section-divider mx-auto mb-6" />
          <h2 className="font-serif text-3xl font-bold text-navy-900 sm:text-4xl lg:text-5xl">
            Our Services
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-800/70 sm:text-lg">
            Comprehensive legal and documentation services tailored to your needs.
          </p>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {services.map((service) => (
            <li
              key={service}
              className="flex items-center gap-3 rounded-xl bg-white px-5 py-4 shadow-sm transition-all hover:shadow-md"
            >
              <CheckCircle2
                className="h-5 w-5 shrink-0 text-gold-500"
                aria-hidden="true"
              />
              <span className="text-sm font-medium text-navy-900 sm:text-base">
                {service}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
