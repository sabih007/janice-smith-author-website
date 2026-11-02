import { useState } from "react";

type Errors = Partial<Record<"name" | "email" | "subject" | "message", string>>;

/** Elegant contact form with client-side validation and animated focus. */
export function ContactSection() {
  const [values, setValues] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const set = (key: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((err) => ({ ...err, [key]: undefined }));
    setSent(false);
  };

  const validate = () => {
    const next: Errors = {};
    if (values.name.trim().length < 2) next.name = "Please tell me your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
      next.email = "A valid email address, please.";
    if (values.subject.trim().length < 3) next.subject = "Add a short subject.";
    if (values.message.trim().length < 12) next.message = "A little more detail, please.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const field =
    "peer h-12 w-full rounded-lg border border-border bg-card px-4 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground/70 focus:border-accent focus:shadow-soft";

  return (
    <section id="contact" className="surface-warm relative py-24 md:py-32">
      <div className="mx-auto grid w-full max-w-7xl gap-16 px-6 lg:grid-cols-[1fr_1.15fr]">
        <div data-reveal className="reveal-left">
          <p className="eyebrow">Correspondence</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Write to the study</h2>
          <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
            For festival invitations, rights enquiries, book club visits, or simply to say
            which passage stayed with you. Letters are read every Friday afternoon.
          </p>

          <dl className="mt-10 space-y-6 text-sm">
            <div>
              <dt className="eyebrow">Email</dt>
              <dd className="mt-1 text-foreground">orders@thecasoegroup.org</dd>
            </div>
            <div>
              <dt className="eyebrow">Telephone</dt>
              <dd className="mt-1 text-foreground">+44 (0)20 7946 0812</dd>
            </div>
            <div>
              <dt className="eyebrow">Location</dt>
              <dd className="mt-1 text-foreground">
                CASOE, Inc. — Detroit, Michigan
              </dd>
            </div>
          </dl>

          <div className="mt-10 flex flex-wrap gap-3">
            {["Instagram", "Goodreads", "X", "Substack"].map((s) => (
              <a
                key={s}
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                aria-label={s}
                className="inline-flex h-10 items-center rounded-full border border-primary/25 px-4 text-[0.66rem] uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary/8"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        <form
          noValidate
          data-reveal
          className="reveal-right glass-panel rounded-2xl p-7 md:p-10"
          onSubmit={(e) => {
            e.preventDefault();
            if (validate()) {
              setSent(true);
              setValues({ name: "", email: "", subject: "", message: "" });
            }
          }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="c-name" className="eyebrow">
                Name
              </label>
              <input
                id="c-name"
                className={`${field} mt-2`}
                value={values.name}
                onChange={set("name")}
                placeholder="Your name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "e-name" : undefined}
              />
              <p id="e-name" className="mt-1 min-h-4 text-xs text-destructive">
                {errors.name}
              </p>
            </div>
            <div>
              <label htmlFor="c-email" className="eyebrow">
                Email
              </label>
              <input
                id="c-email"
                type="email"
                className={`${field} mt-2`}
                value={values.email}
                onChange={set("email")}
                placeholder="you@example.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "e-email" : undefined}
              />
              <p id="e-email" className="mt-1 min-h-4 text-xs text-destructive">
                {errors.email}
              </p>
            </div>
          </div>

          <div className="mt-2">
            <label htmlFor="c-subject" className="eyebrow">
              Subject
            </label>
            <input
              id="c-subject"
              className={`${field} mt-2`}
              value={values.subject}
              onChange={set("subject")}
              placeholder="What is this regarding?"
              aria-invalid={!!errors.subject}
              aria-describedby={errors.subject ? "e-subject" : undefined}
            />
            <p id="e-subject" className="mt-1 min-h-4 text-xs text-destructive">
              {errors.subject}
            </p>
          </div>

          <div className="mt-2">
            <label htmlFor="c-message" className="eyebrow">
              Message
            </label>
            <textarea
              id="c-message"
              rows={5}
              className={`${field} mt-2 h-auto py-3`}
              value={values.message}
              onChange={set("message")}
              placeholder="Write your letter…"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "e-message" : undefined}
            />
            <p id="e-message" className="mt-1 min-h-4 text-xs text-destructive">
              {errors.message}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-4">
            <button type="submit" className="btn btn-primary">
              Send letter
            </button>
            <p aria-live="polite" className="text-xs text-muted-foreground">
              {sent ? "Thank you — your letter is on the desk." : ""}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
