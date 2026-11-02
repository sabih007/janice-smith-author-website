import { useEffect, useState } from "react";
import { testimonials } from "@/data/content";

/** Auto-advancing testimonial slider with manual controls. */
export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 7000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-secondary py-24 md:py-32">
      <div className="mx-auto w-full max-w-4xl px-6 text-center">
        <p className="eyebrow" data-reveal>
          Readers &amp; reviewers
        </p>
        <div className="rule-ornament mx-auto mt-6 max-w-xs" aria-hidden />

        <div className="relative mt-10 min-h-64">
          {testimonials.map((t, i) => (
            <blockquote
              key={t.name}
              aria-hidden={i !== index}
              className={`absolute inset-0 transition-all duration-700 ${
                i === index ? "opacity-100 blur-0" : "pointer-events-none opacity-0 blur-[2px]"
              }`}
            >
              <p className="font-display text-2xl leading-relaxed text-ink md:text-3xl">
                “{t.quote}”
              </p>
              <footer className="mt-7 text-sm text-muted-foreground">
                <span className="text-primary">{t.name}</span> · {t.role}
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-3">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              aria-label={`Show testimonial ${i + 1}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === index ? "w-8 bg-primary" : "w-2 bg-primary/30 hover:bg-primary/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
