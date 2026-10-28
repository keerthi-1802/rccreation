import {
  ArrowDownRight,
  ArrowUpRight,
  Clapperboard,
  Play,
} from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#101010] text-white">
      {/* Background details */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />

        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#F20D18]/10 blur-[130px]" />
      </div>

      {/* Main hero: 75% viewport height on desktop */}
      <div className="mx-auto grid min-h-[75vh] w-full max-w-[1600px] grid-cols-1 items-center gap-12 px-5 py-16 sm:px-8 lg:h-[75vh] lg:min-h-[620px] lg:grid-cols-[1fr_0.85fr] lg:gap-12 lg:overflow-visible lg:px-12 lg:py-8 xl:px-20">
        {/* LEFT: Content */}
        <div className="relative z-10 min-w-0">
       

          {/* Eyebrow */}
          <div className="mb-4 flex items-center gap-3">
           
            <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white/65 sm:text-xs">
              The People Behind The Ideas
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-[clamp(2.8rem,5.1vw,5.3rem)] font-bold leading-[0.94] tracking-[-0.075em]">
            Ideas Into
            <br />
            <span className="text-[#F20D18]">Impact.</span>
            <br />
            <span className="text-white/55">That's Our</span>
            <br />
            <span>Creation.</span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-xl font-sans text-sm leading-6 text-white/65 sm:text-base sm:leading-7">
            We bring creativity, technology, and digital strategy
            together to help brands stand out. From compelling
            visual storytelling to powerful digital solutions,
            we turn ambitious ideas into reality.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#who-we-are"
              className="group inline-flex min-h-12 items-center gap-3 bg-[#F20D18] px-5 font-sans text-sm font-semibold text-white transition duration-300 hover:bg-white hover:text-[#101010]"
            >
              Discover Our Story
              <ArrowDownRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </a>

            <a
              href="/contact"
              className="group inline-flex min-h-12 items-center gap-3 border border-white/20 px-5 font-sans text-sm font-semibold text-white transition duration-300 hover:border-[#F20D18] hover:text-[#F20D18]"
            >
              Let's Talk
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>

      
        </div>

        {/* RIGHT: Image composition */}
        <div className="relative mx-auto w-full max-w-[480px] min-w-0 lg:ml-auto lg:mt-0">
          {/* Red offset frame */}
          <div className="absolute -right-2 -top-2 z-0 h-20 w-20 border-r-2 border-t-2 border-[#F20D18] sm:-right-3 sm:-top-3 sm:h-24 sm:w-24" />

          {/* Main image */}
          <div className="group relative z-10 aspect-[4/3.5] overflow-hidden bg-[#1a1a1a] sm:aspect-[5/4] lg:aspect-[4/4.3]">
            <img
              src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1400&q=90"
              alt="Camera equipment for cinematic creative production"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Image treatment */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/10" />
            <div className="absolute inset-0 bg-[#F20D18]/[0.06] mix-blend-screen" />

            {/* Top label */}
            <div className="absolute left-4 top-4 flex items-center gap-2 border border-white/20 bg-black/50 px-3 py-2.5 backdrop-blur-md sm:left-6 sm:top-6 sm:px-4 sm:py-3">
              <Clapperboard size={16} className="shrink-0 text-[#F20D18]" />
              <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.15em] sm:text-[10px]">
                Creativity In Motion
              </span>
            </div>

            {/* Image caption */}
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-[#F20D18]">
                Our Philosophy
              </p>

              <h2 className="mt-2 font-display text-2xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Make Every Idea
                <br />
                Count.
              </h2>

              <div className="mt-4 h-[2px] w-14 bg-[#F20D18] transition-all duration-500 group-hover:w-24" />
            </div>
          </div>

          {/* Floating corner detail */}
          <div className="absolute -bottom-4 -left-2 z-20 flex items-center gap-3 border border-white/10 bg-[#181818] p-3 sm:-left-5 sm:p-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#F20D18] text-white">
              <Play size={15} fill="currentColor" />
            </div>

            <div>
              <p className="font-sans text-xs font-semibold text-white">
                Creative by nature.
              </p>
              <p className="mt-1 font-sans text-[10px] text-white/45">
                Strategic by design.
              </p>
            </div>
          </div>

          {/* Bottom-right accent */}
          <div className="absolute -bottom-3 -right-3 z-0 h-14 w-14 border-b-2 border-r-2 border-[#F20D18]" />
        </div>
      </div>
    </section>
  );
}
