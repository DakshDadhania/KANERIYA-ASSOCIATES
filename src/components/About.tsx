import Image from "next/image";
import { aboutSections } from "@/data/site";

export const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="section-divider mx-auto mb-6" />
          <h2 className="font-serif text-3xl font-bold text-navy-900 sm:text-4xl lg:text-5xl">
            Why You Should Hire Our Firm
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-800/70 sm:text-lg">
            Decades of experience, unwavering dedication, and a client-first approach
            that sets us apart in Rajkot&apos;s legal landscape.
          </p>
        </div>

        <div className="flex flex-col gap-20 lg:gap-28">
          {aboutSections.map((section, index) => (
            <div
              key={section.id}
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                section.reverse ? "lg:[direction:rtl]" : ""
              }`}
            >
              <div className={`relative ${section.reverse ? "lg:[direction:ltr]" : ""}`}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src={section.image}
                    alt={section.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div
                  className={`absolute -bottom-4 h-full w-full rounded-2xl border-2 border-gold-400/30 ${
                    section.reverse ? "-left-4" : "-right-4"
                  } -z-10`}
                  aria-hidden="true"
                />
                <div className="absolute -top-3 -left-3 flex h-12 w-12 items-center justify-center rounded-full bg-gold-400 font-serif text-lg font-bold text-navy-950 shadow-lg">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              <div className={section.reverse ? "lg:[direction:ltr]" : ""}>
                <h3 className="font-serif text-2xl font-bold text-navy-900 sm:text-3xl lg:text-4xl">
                  {section.title}
                </h3>
                <div className="section-divider mt-4 mb-6" />
                <p className="text-base leading-relaxed text-navy-800/70 sm:text-lg">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
