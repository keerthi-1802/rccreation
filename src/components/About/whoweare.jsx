
import {
  ArrowUpRight,
  Code2,
  Clapperboard,
  TrendingUp,
} from "lucide-react";

const capabilities = [
  {
    number: "01",
    icon: Clapperboard,
    title: "Creative Thinking",
    text: "Ideas and visual stories that make brands memorable.",
  },
  {
    number: "02",
    icon: Code2,
    title: "Technical Expertise",
    text: "Modern websites, software, and digital experiences.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Measurable Growth",
    text: "Marketing strategies focused on meaningful results.",
  },
];

export default function WhoWeAre() {
  return (
    <section
      id="who-we-are"
      className="relative overflow-hidden bg-white py-20 text-[#101010] sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16">
        {/* Section heading */}
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#F20D18]" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-black/50">
                02 / Who We Are
              </span>
            </div>

            <h2 className="font-display text-[clamp(2.8rem,6vw,6rem)] font-bold leading-[0.95] tracking-[-0.07em]">
              More Than
              <br />
              An Agency.
              <br />
              <span className="text-[#F20D18]">
                Your Creative Partner.
              </span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <span className="mb-5 block h-1 w-16 bg-[#F20D18]" />

            <p className="text-base leading-8 text-black/70 sm:text-lg">
              RC Creation brings creativity, technology, and digital
              strategy together under one roof. We help businesses
              build a stronger digital presence through meaningful
              content, thoughtful design, and practical technology.
            </p>

            <p className="mt-4 text-sm leading-7 text-black/55 sm:text-base">
              From the first idea to the final launch, we focus on
              understanding your goals and creating solutions that
              connect with your audience and support your growth.
            </p>
          </div>
        </div>

        {/* Wide image banner */}
        <div className="group relative mt-14 overflow-hidden sm:mt-16 lg:mt-20">
          <div className="aspect-[16/8] max-h-[440px] min-h-[250px] bg-[#e8e8e8] sm:aspect-[16/6]">
            <img
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1800&q=85"
              alt="Creative team working together in a modern studio"
              loading="lazy"
              className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />

          <div className="absolute inset-0 flex flex-col items-start justify-end p-6 sm:p-10 lg:p-14">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#F20D18]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70 sm:text-xs">
                Our Approach
              </span>
            </div>

            <h3 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Think Beyond.
              <br />
              <span className="text-[#F20D18]">Create What Matters.</span>
            </h3>
          </div>

          {/* Image corner detail */}
          <div className="absolute right-0 top-0 h-16 w-16 border-r-2 border-t-2 border-[#F20D18] sm:h-24 sm:w-24" />
        </div>

        {/* Capabilities header */}
        <div className="mt-16 flex flex-col justify-between gap-4 sm:mt-20 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F20D18]">
              What Defines Us
            </p>
            <h3 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Ideas Backed By Expertise.
            </h3>
          </div>

          <a
            href="/services"
            className="group inline-flex w-fit items-center gap-2 border-b border-black/20 pb-2 text-sm font-semibold transition hover:border-[#F20D18] hover:text-[#F20D18]"
          >
            Explore Our Services
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* Three capability cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="group relative flex min-h-[240px] flex-col border border-black/10 bg-[#FAFAFA] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#F20D18]/50 hover:bg-white hover:shadow-xl hover:shadow-black/[0.04] sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center bg-[#101010] text-white transition-colors duration-300 group-hover:bg-[#F20D18]">
                    <Icon size={22} strokeWidth={1.7} />
                  </div>

                  <span className="font-display text-4xl font-bold text-black/10 transition-colors group-hover:text-[#F20D18]/40">
                    {item.number}
                  </span>
                </div>

                <h4 className="mt-8 font-display text-xl font-bold">
                  {item.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-black/55">
                  {item.text}
                </p>

                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#F20D18] transition-all duration-500 group-hover:w-full" />
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
