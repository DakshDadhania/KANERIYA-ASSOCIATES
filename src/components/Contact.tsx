import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";
import { contactInfo, images } from "@/data/site";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="section-divider mx-auto mb-6" />
          <h2 className="font-serif text-3xl font-bold text-navy-900 sm:text-4xl lg:text-5xl">
            Contact Us
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-800/70 sm:text-lg">
            Reach out to schedule a consultation or discuss your legal needs.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl lg:aspect-auto lg:min-h-[500px]">
            <Image
              src={images.office}
              alt="Modern professional office environment"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-navy-950/20" />
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy-900">
                <MapPin className="h-5 w-5 text-gold-400" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-navy-900">Office Address</h3>
                <address className="mt-2 not-italic text-sm leading-relaxed text-navy-800/70 sm:text-base">
                  {contactInfo.address.line1}
                  <br />
                  {contactInfo.address.line2}
                  <br />
                  {contactInfo.address.city}
                </address>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy-900">
                <Phone className="h-5 w-5 text-gold-400" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-navy-900">Phone</h3>
                <div className="mt-2 space-y-1">
                  {contactInfo.phones.map((phone) => (
                    <p key={phone.number} className="text-sm sm:text-base">
                      <a
                        href={phone.href}
                        className="text-navy-800/70 transition-colors hover:text-gold-600"
                      >
                        {phone.number}
                      </a>
                      <span className="ml-2 text-xs text-navy-800/50">
                        ({phone.label})
                      </span>
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy-900">
                <Mail className="h-5 w-5 text-gold-400" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-navy-900">Email</h3>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="mt-2 inline-block text-sm text-navy-800/70 transition-colors hover:text-gold-600 sm:text-base"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy-900">
                <Clock className="h-5 w-5 text-gold-400" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-navy-900">Office Hours</h3>
                <p className="mt-2 text-sm text-navy-800/70 sm:text-base">
                  {contactInfo.hours.weekdays}
                </p>
                <p className="mt-1 text-sm text-navy-800/50 sm:text-base">
                  {contactInfo.hours.closed}
                </p>
              </div>
            </div>

            <div>
              <h3 className="mb-4 font-semibold text-navy-900">Follow Us Online</h3>
              <div className="flex gap-3">
                <a
                  href={contactInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-900/20 text-navy-900 transition-all hover:border-gold-400 hover:bg-gold-400 hover:text-navy-950"
                  aria-label="Follow us on Instagram"
                  tabIndex={0}
                >
                  <Instagram className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href={contactInfo.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-900/20 text-navy-900 transition-all hover:border-gold-400 hover:bg-gold-400 hover:text-navy-950"
                  aria-label="Follow us on Facebook"
                  tabIndex={0}
                >
                  <Facebook className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href={contactInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-900/20 text-navy-900 transition-all hover:border-gold-400 hover:bg-gold-400 hover:text-navy-950"
                  aria-label="Connect on LinkedIn"
                  tabIndex={0}
                >
                  <Linkedin className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
