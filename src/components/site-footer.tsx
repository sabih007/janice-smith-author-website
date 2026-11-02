import { Link } from "@tanstack/react-router";
import { NewsletterForm } from "./newsletter-form";
import logo from "@/assets/janice-smith-logo.png";


const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Goodreads", href: "https://goodreads.com" },
  { label: "X", href: "https://x.com" },
  { label: "Substack", href: "https://substack.com" },
];

export function SiteFooter() {
  return (
    <footer className="surface-mahogany relative overflow-hidden">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1.4fr_1fr_1.3fr]">
        <div>
          <img
            src={logo}
            alt="Janice Smith author logo"
            loading="lazy"
            width={1024}
            height={640}
            className="h-16 w-auto brightness-0 invert"
          />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/75">
            Author, playwright, and founder of CASOE, Inc. Writing from Detroit about
            faith, recovery, and the dreams that never sleep.
          </p>

          <ul className="mt-8 flex flex-wrap gap-4">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.label}
                  className="inline-flex h-10 items-center rounded-full border border-primary-foreground/30 px-4 text-[0.68rem] uppercase tracking-[0.2em] text-primary-foreground/80 transition-colors hover:border-primary-foreground hover:text-primary-foreground"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-[0.68rem] uppercase tracking-[0.32em] text-primary-foreground/60">
            Quick links
          </h2>
          <ul className="mt-6 space-y-3 text-sm text-primary-foreground/80">
            <li>
              <Link to="/" className="nav-link !normal-case !tracking-normal !text-sm">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link !normal-case !tracking-normal !text-sm">
                About the author
              </Link>
            </li>
            <li>
              <Link to="/books" className="nav-link !normal-case !tracking-normal !text-sm">
                The books
              </Link>
            </li>
            <li>
              <a href="/#contact" className="nav-link !normal-case !tracking-normal !text-sm">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="text-[0.68rem] uppercase tracking-[0.32em] text-primary-foreground/60">
            The monthly letter
          </h2>
          <p className="mt-4 text-sm text-primary-foreground/75">
            One quiet note a month: work in progress, reading notes, tour dates.
          </p>
          <NewsletterForm variant="dark" className="mt-6" />
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-6 py-6 text-[0.72rem] text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Janice Smith. All rights reserved.</p>
          <a href="/#contact" className="hover:text-primary-foreground">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
