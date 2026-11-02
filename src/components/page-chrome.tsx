import { useEffect, useRef, useState } from "react";
import { useScrollY } from "@/hooks/use-reveal";

/** Page loading veil, back-to-top button, floating contact button. */
export function PageChrome() {
  const [showTop, setShowTop] = useState(false);
  useScrollY((y) => setShowTop(y > 620));

  return (
    <>
      <LoadingVeil />
      <div className="fixed bottom-6 left-6 z-40">
        <a href="#contact" className="btn btn-accent !px-5 !py-3 !text-[0.68rem] shadow-lift">
          Contact
        </a>
      </div>
      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-primary/25 bg-card text-primary shadow-lift transition-all duration-500 ${
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <span aria-hidden className="text-lg leading-none">
          ↑
        </span>
      </button>
    </>
  );
}

function LoadingVeil() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <div
      aria-hidden
      className="loader-veil pointer-events-none fixed inset-0 z-[60] flex items-center justify-center surface-warm"
    >
      <div className="flex flex-col items-center gap-4">
        <span className="quill-spin block h-8 w-8 rounded-full border border-primary/25 border-t-primary" />
        <span className="eyebrow">Opening the study</span>
      </div>
    </div>
  );
}

/** Number that counts up when it scrolls into view. */
export function Counter({
  to,
  suffix = "",
  label,
}: {
  to: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const duration = 1600;
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setValue(Math.round(to * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [to]);

  return (
    <div ref={ref} className="text-center sm:text-left">
      <p className="font-display text-4xl text-primary md:text-5xl">
        {value.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-2 text-[0.7rem] uppercase tracking-[0.24em] text-muted-foreground">
        {label}
      </p>
    </div>
  );
}
