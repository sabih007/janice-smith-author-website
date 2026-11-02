import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageChrome } from "@/components/page-chrome";
import { ContactSection } from "@/components/contact-section";
import { BookModal } from "@/components/book-modal";
import { books, featuredBook, type Book } from "@/data/content";
import { useRevealOnScroll } from "@/hooks/use-reveal";
import studioLounge from "@/assets/studio-lounge.jpg";

export const Route = createFileRoute("/books")({
  head: () => ({
    meta: [
      { title: "Books & Stage Plays by Janice Smith — Getting Sober on Sibley and Third" },
      {
        name: "description",
        content:
          "The complete works of Janice Smith: the novel Getting Sober on Sibley and Third plus her stage plays A Dream That Never Sleeps, Meeting Jesus at 3pm and Ain't Nobody Stoppin' This Train.",
      },
      { property: "og:title", content: "The Books & Stage Plays of Janice Smith" },
      {
        property: "og:description",
        content:
          "Stories written for the page and the stage — including the novel Getting Sober on Sibley and Third.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Books,
});

function Books() {
  useRevealOnScroll();
  const [active, setActive] = useState<{ book: Book; step: "details" | "cart" } | null>(null);

  return (
    <>
      <PageChrome />
      <SiteHeader transparentTop />

      <main>
        {/* Hero */}
        <section className="relative flex min-h-[86vh] items-center overflow-hidden">
          <img
            src={studioLounge}
            alt="A bright contemporary writing studio with a long light-oak table, manuscript pages and city views"
            width={1920}
            height={1008}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "var(--gradient-veil)" }} aria-hidden />

          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-6 pt-28 md:grid-cols-[0.55fr_1fr]">
            <img
              src={featuredBook.cover}
              alt={`Cover of ${featuredBook.title}`}
              width={1024}
              height={1280}
              className="animate-rise animate-float w-full max-w-xs rounded-2xl object-cover"
              style={{ boxShadow: "var(--shadow-book)" }}
            />
            <div className="animate-rise" style={{ animationDelay: "0.2s" }}>
              <p className="text-[0.7rem] uppercase tracking-[0.42em] text-parchment/85">
                Books &amp; stage plays
              </p>
              <h1 className="mt-4 font-display text-5xl leading-[1.05] text-parchment md:text-6xl">
                {featuredBook.title}
              </h1>
              <p className="mt-4 text-sm uppercase tracking-[0.24em] text-parchment/80">
                {featuredBook.genre} · {featuredBook.released}
              </p>
              <p className="mt-6 max-w-xl leading-relaxed text-parchment/90">
                {featuredBook.description}
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setActive({ book: featuredBook, step: "details" })}
                >
                  Read more
                </button>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => setActive({ book: featuredBook, step: "cart" })}
                >
                  Purchase
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Collection grid */}
        <section id="collection" className="surface-warm py-24 md:py-32">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div data-reveal className="reveal max-w-2xl">
              <p className="eyebrow">The collection</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl">
                Stories written for the page and the stage
              </h2>
            </div>

            <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {books.map((book, i) => (
                <article
                  key={book.id}
                  data-reveal
                  className="reveal card-lift group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft"
                  style={{ transitionDelay: `${i * 110}ms` }}
                >
                  <div className="zoom-frame aspect-[4/5]">
                    <img
                      src={book.cover}
                      alt={`Cover of ${book.title}`}
                      loading="lazy"
                      width={1024}
                      height={1280}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <span className="eyebrow">{book.genre}</span>
                    <h3 className="mt-3 font-display text-2xl leading-snug transition-colors group-hover:text-primary">
                      {book.title}
                    </h3>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {book.description}
                    </p>
                    <p className="mt-5 text-[0.66rem] uppercase tracking-[0.2em] text-muted-foreground">
                      {book.released}
                    </p>
                    <div className="mt-7 flex flex-wrap gap-3">
                      <button
                        type="button"
                        className="btn btn-ghost !px-5 !py-2.5 !text-[0.68rem]"
                        onClick={() => setActive({ book, step: "details" })}
                      >
                        Read more
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary !px-5 !py-2.5 !text-[0.68rem] opacity-90 transition-opacity group-hover:opacity-100"
                        onClick={() => setActive({ book, step: "cart" })}
                      >
                        Purchase
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      {active && (
        <BookModal
          book={active.book}
          initialStep={active.step}
          onClose={() => setActive(null)}
        />
      )}

      <SiteFooter />
    </>
  );
}
