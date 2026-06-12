import Image from "next/image";
import { practices, featuredService } from "@/data/site";

export const Practices = () => {
  return (
    <section id="practices" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="section-divider mx-auto mb-6" />
          <h2 className="font-serif text-3xl font-bold text-navy-900 sm:text-4xl lg:text-5xl">
            Our Main Practices
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-800/70 sm:text-lg">
            Specialized legal expertise across key practice areas, delivered with
            precision and care.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {practices.map((practice) => (
            <article
              key={practice.title}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-2xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={practice.image}
                  alt={practice.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
                <h3 className="absolute bottom-4 left-6 font-serif text-2xl font-bold text-white">
                  {practice.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-sm leading-relaxed text-navy-800/70">
                  {practice.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <article className="mt-12 overflow-hidden rounded-2xl bg-navy-900 shadow-2xl lg:flex">
          <div className="relative aspect-[16/9] lg:aspect-auto lg:w-2/5">
            <Image
              src={featuredService.image}
              alt={featuredService.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          <div className="flex flex-col justify-center p-8 lg:w-3/5 lg:p-12">
            <span className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold-400">
              Featured Service
            </span>
            <h3 className="font-serif text-2xl font-bold text-white sm:text-3xl">
              {featuredService.title}
            </h3>
            <div className="section-divider mt-4 mb-6" />
            <p className="text-base leading-relaxed text-white/70">
              {featuredService.description}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};
