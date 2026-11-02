import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import heroStudy from "@/assets/hero-study.jpg";
import authorPortrait from "@/assets/janice-smith-portrait.jpg";
import readingRoom from "@/assets/reading-room.jpg";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageChrome, Counter } from "@/components/page-chrome";
import { Testimonials } from "@/components/testimonials";
import { ContactSection } from "@/components/contact-section";
import { NewsletterForm } from "@/components/newsletter-form";
import { featuredBook, news } from "@/data/content";
import { useRevealOnScroll, useScrollY } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Janice Smith — Author & Playwright | Official Website" },
      {
        name: "description",
        content:
          "The official home of novelist Janice Smith: the novel Getting Sober on Sibley and Third, stage plays, and news from the desk.",
      },
      { property: "og:title", content: "Janice Smith — Author & Playwright | Official Website" },
      {
        property: "og:description",
        content:
          "The official home of novelist Janice Smith: the novel Getting Sober on Sibley and Third, stage plays, and news from the desk.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  useRevealOnScroll();
  const [offset, setOffset] = useState(0);
  useScrollY((y) => setOffset(y));

  return (
    <>
      <PageChrome />
      <SiteHeader transparentTop />

      <main>
        {/* ---------------- Hero ---------------- */}
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
          <img
            src={heroStudy}
            alt="A sunlit author's study with a mahogany writing desk, open journal, bookshelves and a large green plant"
            width={1920}
            height={1088}
            className="absolute inset-0 h-[118%] w-full object-cover"
            style={{ transform: `translate3d(0, ${offset * 0.28}px, 0) scale(1.04)` }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "var(--gradient-veil)" }}
            aria-hidden
          />

          <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
            <p
              className="animate-rise text-[0.7rem] uppercase tracking-[0.42em] text-parchment/80"
              style={{ animationDelay: "0.1s" }}
            >
              Author &amp; Playwright
            </p>
            <h1
              className="animate-rise mt-6 font-display text-5xl leading-[1.05] text-parchment md:text-7xl"
              style={{ animationDelay: "0.25s" }}
            >
              Welcome to My Literary World
            </h1>
            <p
              className="animate-rise mx-auto mt-6 max-w-xl text-lg italic text-parchment/85"
              style={{ animationDelay: "0.4s" }}
            >
              “Every story begins with a single page.”
            </p>
            <div
              className="animate-rise mt-10 flex flex-wrap justify-center gap-4"
              style={{ animationDelay: "0.55s" }}
            >
              <Link to="/books" className="btn btn-primary">
                Explore My Books
              </Link>
              <Link to="/about" className="btn btn-outline">
                Meet the Author
              </Link>
            </div>
          </div>

          <a
            href="#featured"
            aria-label="Scroll to featured book"
            className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-parchment/80"
          >
            <span className="flex h-11 w-7 items-start justify-center rounded-full border border-parchment/50 pt-2">
              <span className="scroll-dot block h-1.5 w-1.5 rounded-full bg-parchment" />
            </span>
          </a>
        </section>

        {/* ---------------- Featured book ---------------- */}
        <section id="featured" className="surface-warm py-24 md:py-32">
          <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-6 lg:grid-cols-[0.85fr_1fr]">
            <div data-reveal className="reveal-left zoom-frame animate-float rounded-2xl">
              <img
                src={featuredBook.cover}
                alt={`Cover of ${featuredBook.title}`}
                loading="lazy"
                width={1024}
                height={1280}
                className="w-full rounded-2xl object-cover"
                style={{ boxShadow: "var(--shadow-book)" }}
              />
            </div>

            <div data-reveal className="reveal-right">
              <p className="eyebrow">The new novel</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl">{featuredBook.title}</h2>
              <div className="mt-5 flex flex-wrap gap-3 text-[0.68rem] uppercase tracking-[0.2em]">
                <span className="rounded-full bg-sage/25 px-4 py-1.5 text-sage-foreground">
                  {featuredBook.genre}
                </span>
                <span className="rounded-full bg-accent/15 px-4 py-1.5 text-accent">
                  {featuredBook.released}
                </span>
              </div>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                {featuredBook.description}
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link to="/books" className="btn btn-ghost">
                  Read more
                </Link>
                <a href="#contact" className="btn btn-primary">
                  Purchase
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- About preview ---------------- */}
        <section className="py-24 md:py-32">
          <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
            <div data-reveal className="reveal-right order-2 lg:order-1">
              <p className="eyebrow">The author</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl">
                From Detroit, with honesty
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Born in Detroit and raised by a single father, Janice Smith writes about
                faith, recovery, and the dreams that refuse to sleep. She is the founder
                of CASOE, Inc., a nonprofit performing arts organization, and the author
                of three staged plays and the novel Getting Sober on Sibley and Third.
              </p>
              <div className="mt-10 grid grid-cols-3 gap-6">
                <Counter to={5} label="Stage plays" />
                <Counter to={1} label="Published novel" />
                <Counter to={22} suffix="+" label="Years leading CASOE" />
              </div>
              <Link to="/about" className="btn btn-ghost mt-10">
                Meet the author
              </Link>
            </div>

            <div data-reveal className="reveal-left zoom-frame order-1 rounded-2xl shadow-lift lg:order-2">
              <img
                src={authorPortrait}
                alt="Portrait of author Janice Smith"
                loading="lazy"
                width={1024}
                height={1536}
                className="h-full w-full rounded-2xl object-cover"
              />

            </div>
          </div>
        </section>

        <Testimonials />

        {/* ---------------- Latest news ---------------- */}
        <section className="py-24 md:py-32">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div data-reveal className="reveal max-w-xl">
              <p className="eyebrow">From the desk</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl">Latest news</h2>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {news.map((item, i) => (
                <article
                  key={item.title}
                  data-reveal
                  className="reveal card-lift group rounded-2xl border border-border bg-card p-7 shadow-soft"
                  style={{ transitionDelay: `${i * 110}ms` }}
                >
                  <span className="eyebrow">{item.tag}</span>
                  <h3 className="mt-4 font-display text-2xl leading-snug transition-colors group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {item.excerpt}
                  </p>
                  <p className="mt-6 text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
                    {item.date}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Newsletter ---------------- */}
        <section className="relative overflow-hidden py-24 md:py-32">
          <img
            src={readingRoom}
            alt="A cozy library reading nook with a leather armchair and sunbeams"
            loading="lazy"
            width={1600}
            height={1000}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "var(--gradient-veil)" }} aria-hidden />
          <div
            data-reveal
            className="reveal glass-panel relative mx-auto w-full max-w-3xl rounded-3xl px-8 py-14 text-center"
          >
            <p className="eyebrow">The monthly letter</p>
            <h2 className="mt-4 font-display text-4xl">Join the reading room</h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
              Notes on the work in progress, marginalia, and first news of signings —
              once a month, never more.
            </p>
            <div className="mx-auto mt-8 max-w-md">
              <NewsletterForm />
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <SiteFooter />
    </>
  );
}
