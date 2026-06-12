import Image from "next/image";
import { ArrowDown, Scale } from "lucide-react";
import { siteConfig, contactInfo, images } from "@/data/site";

export const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Image
        src={images.hero}
        alt="Scales of justice representing fair legal representation"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-navy-950/75" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-32 pb-20 text-center lg:px-8">
        <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-white/5 px-4 py-2 backdrop-blur-sm">
          <Scale className="h-4 w-4 text-gold-400" aria-hidden="true" />
          <span className="text-xs font-medium uppercase tracking-widest text-gold-400">
            Trusted since {siteConfig.founded}
          </span>
        </div>

        <h1 className="animate-fade-up-delay font-serif text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {siteConfig.name}
        </h1>

        <p className="animate-fade-up-delay mt-4 font-serif text-2xl font-medium text-gold-400 sm:text-3xl">
          {siteConfig.tagline}
        </p>

        <p className="animate-fade-up-delay-2 mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
          {siteConfig.description}
        </p>

        <div className="animate-fade-up-delay-2 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="w-full rounded-full bg-gold-400 px-8 py-4 text-sm font-semibold text-navy-950 transition-all hover:bg-gold-500 hover:shadow-lg hover:shadow-gold-400/20 sm:w-auto"
          >
            Schedule a Consultation
          </a>
          <a
            href={contactInfo.phones[0].href}
            className="w-full rounded-full border border-white/30 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-gold-400 hover:text-gold-400 sm:w-auto"
          >
            {contactInfo.phones[0].number}
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white/60 transition-colors hover:text-gold-400"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-6 w-6" aria-hidden="true" />
      </a>
    </section>
  );
};
