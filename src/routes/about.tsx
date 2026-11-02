import { createFileRoute, Link } from "@tanstack/react-router";
import authorPortraitAsset from "@/assets/janice-smith-portrait.jpg.asset.json";
import readingRoom from "@/assets/reading-room.jpg";
import heroStudy from "@/assets/hero-study.jpg";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageChrome, Counter } from "@/components/page-chrome";
import { ContactSection } from "@/components/contact-section";
import { awards, timeline } from "@/data/content";
import { useRevealOnScroll } from "@/hooks/use-reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Janice Smith — The Writing Life & Journey" },
      {
        name: "description",
        content:
          "The biography, writing journey, inspirations, philosophy and awards of author and playwright Janice Smith: Detroit roots, CASOE, Inc., and the stage work behind the writing.",
      },
      { property: "og:title", content: "About Janice Smith" },
      {
        property: "og:description",
        content:
          "From Detroit to the stage: the education, nonprofit work and plays behind Janice Smith's writing.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  useRevealOnScroll();

  return (
    <>
      <PageChrome />
      <SiteHeader transparentTop />

      <main>
        {/* Header banner */}
        <section className="relative flex min-h-[62vh] items-end overflow-hidden">
          <img
            src={heroStudy}
            alt="The author's study: mahogany desk, bookshelves and warm window light"
            width={1920}
            height={1088}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "var(--gradient-veil)" }} aria-hidden />
          <div className="relative mx-auto w-full max-w-7xl px-6 pb-16">
            <p className="animate-rise text-[0.7rem] uppercase tracking-[0.42em] text-parchment/80">
              About
            </p>
            <h1 className="animate-rise mt-4 max-w-2xl font-display text-5xl text-parchment md:text-6xl">
              A life measured in pages
            </h1>
          </div>
        </section>

        {/* Portrait + biography */}
        <section className="surface-warm py-24 md:py-32">
          <div className="mx-auto grid w-full max-w-7xl items-start gap-16 px-6 lg:grid-cols-[0.85fr_1fr]">
            <div data-reveal className="reveal-left zoom-frame rounded-2xl shadow-lift">
              <img
                src={authorPortraitAsset.url}
                alt="Portrait of author Janice Smith"
                loading="lazy"
                width={1024}
                height={1536}
                className="w-full rounded-2xl object-cover"
              />
            </div>
            <div data-reveal className="reveal-right">
              <p className="eyebrow">Biography</p>
              <h2 className="mt-4 font-display text-4xl">Janice Smith</h2>
              <div className="mt-6 space-y-5 leading-relaxed text-muted-foreground">
                <p>
                  Janice Smith was born in Detroit, Michigan and raised by a single
                  father — a childhood that nurtured independence and a storyteller's
                  curiosity.
                </p>
                <p>
                  She earned her undergraduate degree in Psychology from the University
                  of Michigan and a Master's degree in Management from the University of
                  Phoenix. In 2004 she founded CASOE, Inc. — Creative Arts Spirit of
                  Excellence — a 501(c)(3) nonprofit performing arts organization and
                  training center.
                </p>
                <p>
                  She has written several plays for live stage productions, including{" "}
                  <em>A Dream That Never Sleeps</em>, <em>Meeting Jesus at 3pm</em>, and{" "}
                  <em>Ain't Nobody Stoppin' This Train</em>. Away from the desk, she is
                  most often found decorating her home, inside a book, or engaged in
                  robust conversations about spirituality with her friends.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-6">
                <Counter to={3} label="Stage plays" />
                <Counter to={1} label="Published novel" />
                <Counter to={22} suffix="+" label="Years leading CASOE" />
              </div>
            </div>

          </div>
        </section>

        {/* Writing journey timeline */}
        <section className="py-24 md:py-32">
          <div className="mx-auto w-full max-w-4xl px-6">
            <div data-reveal className="reveal text-center">
              <p className="eyebrow">The writing journey</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl">From margins to shelves</h2>
              <div className="rule-ornament mx-auto mt-6 max-w-xs" aria-hidden />
            </div>

            <ol className="relative mt-16 border-l border-border pl-10">
              {timeline.map((t, i) => (
                <li
                  key={t.year}
                  data-reveal
                  className="reveal-right relative pb-12 last:pb-0"
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  <span
                    aria-hidden
                    className="absolute -left-[46px] top-1.5 flex h-3 w-3 items-center justify-center rounded-full bg-primary ring-4 ring-background"
                  />
                  <p className="font-display text-sm tracking-[0.2em] text-accent">{t.year}</p>
                  <h3 className="mt-2 font-display text-2xl">{t.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{t.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Inspirations — alternating layout */}
        <section className="bg-secondary py-24 md:py-32">
          <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
            <div data-reveal className="reveal-left zoom-frame rounded-2xl shadow-lift">
              <img
                src={readingRoom}
                alt="A reading nook lined with books, a leather armchair and a large fern"
                loading="lazy"
                width={1600}
                height={1000}
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
            <div data-reveal className="reveal-right">
              <p className="eyebrow">Off the page</p>
              <h2 className="mt-4 font-display text-4xl">What the work is made of</h2>
              <ul className="mt-8 space-y-5 text-muted-foreground">
                {[
                  "Decorating her home — creating warmth, texture, and a sense of place",
                  "Reading widely, and re-reading the books that hold up",
                  "Spirituality — the robust conversations that shape her view of grace",
                  "Detroit: the people, the church bells, the corner stores",
                ].map((item) => (

                  <li key={item} className="flex gap-4 leading-relaxed">
                    <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Philosophy + quote */}
        <section className="surface-mahogany py-24 md:py-32">
          <div className="mx-auto w-full max-w-4xl px-6 text-center">
            <p
              data-reveal
              className="reveal text-[0.7rem] uppercase tracking-[0.42em] text-primary-foreground/70"
            >
              Writing philosophy
            </p>
            <blockquote
              data-reveal
              className="reveal mt-8 font-display text-3xl leading-relaxed text-primary-foreground md:text-4xl"
            >
              “Write the sentence you can defend at four in the morning. Delete the two
              beside it that were only keeping it company.”
            </blockquote>
            <p data-reveal className="reveal mt-8 text-sm text-primary-foreground/70">
              — Janice Smith, on revision
            </p>
          </div>
        </section>

        {/* Awards */}
        <section className="py-24 md:py-32">
          <div className="mx-auto w-full max-w-5xl px-6">
            <div data-reveal className="reveal text-center">
              <p className="eyebrow">Recognition</p>
              <h2 className="mt-4 font-display text-4xl">Awards &amp; honours</h2>
            </div>
            <div className="mt-14 grid gap-6 sm:grid-cols-2">
              {awards.map((a, i) => (
                <div
                  key={a.name}
                  data-reveal
                  className="reveal card-lift flex items-baseline gap-5 rounded-2xl border border-border bg-card p-7 shadow-soft"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <span className="font-display text-2xl text-accent">{a.year}</span>
                  <span className="leading-relaxed">{a.name}</span>
                </div>
              ))}
            </div>
            <div data-reveal className="reveal mt-14 text-center">
              <Link to="/books" className="btn btn-primary">
                Explore the books
              </Link>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <SiteFooter />
    </>
  );
}
