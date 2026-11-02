import { useState } from "react";

/** Newsletter signup with inline validation + success state. */
export function NewsletterForm({
  variant = "light",
  className = "",
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "done">("idle");

  const dark = variant === "dark";

  return (
    <form
      noValidate
      className={`${className}`}
      onSubmit={(e) => {
        e.preventDefault();
        const valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
        setStatus(valid ? "done" : "error");
      }}
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="sr-only" htmlFor={`nl-${variant}`}>
          Email address
        </label>
        <input
          id={`nl-${variant}`}
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setStatus("idle");
          }}
          placeholder="you@example.com"
          aria-invalid={status === "error"}
          className={`h-12 flex-1 rounded-full px-5 text-sm outline-none transition-all duration-300 ${
            dark
              ? "border border-primary-foreground/25 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/45 focus:border-primary-foreground/70"
              : "border border-border bg-card text-foreground placeholder:text-muted-foreground focus:border-accent focus:shadow-soft"
          }`}
        />
        <button
          type="submit"
          className={`btn ${dark ? "btn-outline" : "btn-primary"} !py-3`}
        >
          Subscribe
        </button>
      </div>
      <p
        aria-live="polite"
        className={`mt-3 min-h-5 text-xs ${
          status === "error"
            ? "text-destructive"
            : dark
              ? "text-primary-foreground/70"
              : "text-muted-foreground"
        }`}
      >
        {status === "error"
          ? "Please enter a valid email address."
          : status === "done"
            ? "Thank you — your first letter arrives at the start of next month."
            : ""}
      </p>
    </form>
  );
}
