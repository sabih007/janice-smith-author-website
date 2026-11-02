import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useScrollY } from "@/hooks/use-reveal";
import logo from "@/assets/janice-smith-logo.png";


const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/books", label: "Books" },
];

/** Sticky header: transparent over the hero, solid once scrolled. */
export function SiteHeader({ transparentTop = false }: { transparentTop?: boolean }) {
  const [scrolled, setScrolled] = useState(!transparentTop);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useScrollY((y) => setScrolled(!transparentTop || y > 60));

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/70 bg-background/92 py-3 shadow-soft backdrop-blur-md"
          : "py-6"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6">
        <Link
          to="/"
          className="flex items-center gap-3"
          aria-label="Janice Smith, home"
        >
          <img
            src={logo}
            alt="Janice Smith author logo"
            width={1024}
            height={640}
            className={`h-11 w-auto transition-all duration-500 md:h-12 ${
              scrolled ? "" : "brightness-0 invert"
            }`}
          />
        </Link>


        <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              data-active={pathname === l.to}
              className={`nav-link transition-colors ${
                scrolled ? "text-ink/80 hover:text-primary" : "text-parchment/90 hover:text-parchment"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="/#contact"
            className={`btn ${scrolled ? "btn-primary" : "btn-outline"} !px-6 !py-2.5 !text-[0.72rem]`}
          >
            Contact
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className={`flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border md:hidden ${
            scrolled ? "border-border text-ink" : "border-parchment/40 text-parchment"
          }`}
        >
          <span
            className={`h-px w-5 bg-current transition-transform duration-300 ${open ? "translate-y-[3px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-5 bg-current transition-transform duration-300 ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-[78%] max-w-xs surface-warm px-8 pt-28 shadow-lift transition-transform duration-500 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-7">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="font-display text-2xl text-ink">
              {l.label}
            </Link>
          ))}
          <a href="/#contact" className="btn btn-primary mt-4">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
