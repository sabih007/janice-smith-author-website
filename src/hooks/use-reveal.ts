import { useEffect } from "react";

/**
 * Adds `.is-visible` to every [data-reveal] element as it scrolls into view.
 * Runs once per route mount and re-observes when `deps` change.
 */
export function useRevealOnScroll(deps: unknown[] = []) {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (typeof IntersectionObserver === "undefined") {
      nodes.forEach((n) => n.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

/** Reads the window scroll position (throttled to animation frames). */
export function useScrollY(onScroll: (y: number) => void) {
  useEffect(() => {
    let frame = 0;
    const handle = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => onScroll(window.scrollY));
    };
    handle();
    window.addEventListener("scroll", handle, { passive: true });
    return () => {
      window.removeEventListener("scroll", handle);
      cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
