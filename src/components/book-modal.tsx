import { useEffect, useState } from "react";
import type { Book } from "@/data/content";

type Step = "details" | "cart" | "checkout" | "done";

/**
 * Elegant book detail modal with a placeholder purchase flow
 * (details → cart → checkout → confirmation). No real payment
 * details are collected; the flow is structured so a processor
 * (Stripe, PayPal, Shopify) can be wired in later.
 */
export function BookModal({
  book,
  initialStep = "details",
  onClose,
}: {
  book: Book;
  initialStep?: Step;
  onClose: () => void;
}) {
  const [step, setStep] = useState<Step>(initialStep);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={book.title}
      className="fixed inset-0 z-[70] flex items-center justify-center px-4 py-10"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-ink/40 backdrop-blur-sm"
      />

      <div className="animate-rise relative z-10 max-h-full w-full max-w-4xl overflow-y-auto rounded-3xl bg-card shadow-lift">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close details"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-ink"
        >
          ×
        </button>

        <div className="grid gap-0 md:grid-cols-[0.8fr_1fr]">
          <div className="hidden bg-secondary p-8 md:block">
            <img
              src={book.cover}
              alt={`Cover of ${book.title}`}
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full rounded-2xl object-cover"
              style={{ boxShadow: "var(--shadow-book)" }}
            />
          </div>

          <div className="p-8 md:p-10">
            {step === "details" && (
              <>
                <p className="eyebrow">{book.genre}</p>
                <h2 className="mt-3 font-display text-3xl">{book.title}</h2>
                <p className="mt-2 text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
                  {book.released}
                </p>
                <p className="mt-6 leading-relaxed text-muted-foreground">{book.description}</p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <button type="button" className="btn btn-primary" onClick={() => setStep("cart")}>
                    Purchase
                  </button>
                  <button type="button" className="btn btn-ghost" onClick={onClose}>
                    Close
                  </button>
                </div>
              </>
            )}

            {step === "cart" && (
              <>
                <p className="eyebrow">Your cart</p>
                <h2 className="mt-3 font-display text-3xl">Review your order</h2>
                <div className="mt-8 flex items-start justify-between gap-6 rounded-2xl border border-border p-6">
                  <div>
                    <p className="font-display text-xl">{book.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{book.genre} · Qty 1</p>
                  </div>
                  <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                    Price TBC
                  </p>
                </div>
                <p className="mt-5 text-sm text-muted-foreground">
                  Checkout is a preview only — no payment or banking details are collected.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setStep("checkout")}
                  >
                    Continue to checkout
                  </button>
                  <button
                    type="button"
                    className="btn btn-ghost"
                    onClick={() => setStep("details")}
                  >
                    Back
                  </button>
                </div>
              </>
            )}

            {step === "checkout" && (
              <>
                <p className="eyebrow">Checkout</p>
                <h2 className="mt-3 font-display text-3xl">Where should it go?</h2>
                <form
                  className="mt-8 space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setStep("done");
                  }}
                >
                  <input
                    required
                    name="name"
                    aria-label="Full name"
                    placeholder="Full name"
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm"
                  />
                  <input
                    required
                    type="email"
                    name="email"
                    aria-label="Email address"
                    placeholder="Email address"
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm"
                  />
                  <input
                    required
                    name="address"
                    aria-label="Shipping address"
                    placeholder="Shipping address"
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm"
                  />
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    Payment will be handled by a secure processor once the store goes live.
                    No card or banking information is requested here.
                  </p>
                  <button type="submit" className="btn btn-primary mt-2">
                    Reserve my copy
                  </button>
                </form>
              </>
            )}

            {step === "done" && (
              <>
                <p className="eyebrow">Thank you</p>
                <h2 className="mt-3 font-display text-3xl">Your copy is reserved</h2>
                <p className="mt-6 leading-relaxed text-muted-foreground">
                  We&apos;ve noted your interest in <em>{book.title}</em>. You&apos;ll be emailed
                  the moment secure checkout opens.
                </p>
                <button type="button" className="btn btn-primary mt-8" onClick={onClose}>
                  Back to the collection
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
