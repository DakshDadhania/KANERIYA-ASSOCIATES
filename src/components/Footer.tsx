import { Scale } from "lucide-react";
import { siteConfig, contactInfo, navLinks } from "@/data/site";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="navy-gradient border-t border-white/10 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Scale className="h-8 w-8 text-gold-400" aria-hidden="true" />
              <div>
                <p className="font-serif text-lg font-semibold text-white">
                  K. A. KANERIYA
                </p>
                <p className="text-xs uppercase tracking-widest text-gold-400">
                  & Associates
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/50">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold-400">
              Quick Links
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-gold-400"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold-400">
              Get in Touch
            </h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>{contactInfo.address.city}</li>
              <li>
                <a
                  href={contactInfo.phones[0].href}
                  className="transition-colors hover:text-gold-400"
                >
                  {contactInfo.phones[0].number}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="transition-colors hover:text-gold-400"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8 text-center">
          <p className="text-xs text-white/40">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
