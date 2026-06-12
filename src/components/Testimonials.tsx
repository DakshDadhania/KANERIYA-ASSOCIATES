import { Quote } from "lucide-react";
import { testimonials } from "@/data/site";

export const Testimonials = () => {
  return (
    <section id="testimonials" className="navy-gradient py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="section-divider mx-auto mb-6" />
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Feedback from Clients
          </h2>
          <p className="mt-4 text-base text-white/60 sm:text-lg">
            Hear from those who have experienced our commitment firsthand.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.author}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-gold-400/30 hover:bg-white/10"
            >
              <Quote
                className="mb-4 h-8 w-8 text-gold-400/60"
                aria-hidden="true"
              />
              <blockquote className="text-base leading-relaxed text-white/85">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <footer className="mt-6 border-t border-white/10 pt-6">
                <cite className="not-italic">
                  <p className="font-semibold text-gold-400">{testimonial.author}</p>
                  <p className="mt-1 text-sm text-white/50">{testimonial.role}</p>
                </cite>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
