
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Camera,
  Megaphone,
  Monitor,
  Layers3,
} from "lucide-react";

export default function ServicesHero() {
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
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#F20D18]/10 blur-[140px]" />
      </div>

      {/* Main hero */}
      <div className="mx-auto grid min-h-[75vh] w-full max-w-[1600px] grid-cols-1 items-center gap-12 px-5 py-16 sm:px-8 lg:min-h-[620px] lg:grid-cols-[1fr_0.85fr] lg:gap-16 lg:px-12 lg:py-12 xl:px-20">

        {/* LEFT CONTENT */}
        <div className="relative z-10 min-w-0">

          {/* Eyebrow */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#F20D18]" />
            <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-white/60 sm:text-xs">
              Creative Solutions. Digital Excellence.
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-[clamp(2.8rem,5.3vw,5.5rem)] font-bold leading-[0.94] tracking-[-0.075em]">
            Ideas Into
            <br />
            <span className="text-[#F20D18]">Impact.</span>
            <br />
            <span className="text-white/55">Strategy Into</span>
            <br />
            Growth.
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl font-sans text-sm leading-7 text-white/60 sm:text-base">
            From powerful digital experiences to compelling creative
            content, RC Creation brings strategy, technology and
            creativity together to build brands, connect audiences
            and accelerate business growth.
          </p>

          {/* Service highlights */}
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">

            <div className="flex items-center gap-2 text-xs font-medium text-white/65 sm:text-sm">
              <Code2 size={17} className="text-[#F20D18]" />
              Web & Software
            </div>

            <div className="flex items-center gap-2 text-xs font-medium text-white/65 sm:text-sm">
              <Camera size={17} className="text-[#F20D18]" />
              Creative Production
            </div>

            <div className="flex items-center gap-2 text-xs font-medium text-white/65 sm:text-sm">
              <Megaphone size={17} className="text-[#F20D18]" />
              Digital Marketing
            </div>

          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">

            <a
              href="#services"
              className="group inline-flex min-h-12 items-center gap-3 bg-[#F20D18] px-6 font-sans text-sm font-semibold text-white transition duration-300 hover:bg-white hover:text-[#101010]"
            >
              Explore Services
              <ArrowDownRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </a>

            <a
              href="/contact"
              className="group inline-flex min-h-12 items-center gap-3 border border-white/20 px-6 font-sans text-sm font-semibold text-white transition duration-300 hover:border-[#F20D18] hover:text-[#F20D18]"
            >
              Let's Talk
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

          </div>
        </div>

        {/* RIGHT IMAGE COMPOSITION */}
        <div className="relative mx-auto w-full max-w-[500px] min-w-0 lg:ml-auto">

          {/* Red offset frame */}
          <div className="absolute -right-3 -top-3 z-0 h-24 w-24 border-r-2 border-t-2 border-[#F20D18]" />

          {/* Main image */}
          <div className="group relative z-10 aspect-[4/3.5] overflow-hidden bg-[#1a1a1a] sm:aspect-[5/4] lg:aspect-[4/4.2]">

            <img
              src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1400&q=90"
              alt="Creative digital marketing and visual production workspace"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Image overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/10" />
            <div className="absolute inset-0 bg-[#F20D18]/[0.06] mix-blend-screen" />

            {/* Top label */}
            <div className="absolute left-4 top-4 flex items-center gap-2 border border-white/20 bg-black/50 px-4 py-3 backdrop-blur-md sm:left-6 sm:top-6">

              <Layers3 size={17} className="text-[#F20D18]" />

              <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.15em] sm:text-[10px]">
                One Creative Partner
              </span>

            </div>

            {/* Image caption */}
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">

              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-[#F20D18]">
                Everything Your Brand Needs
              </p>

              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Think Bigger.
                <br />
                Create Better.
                <br />
                Grow Faster.
              </h2>

              <div className="mt-5 h-[2px] w-14 bg-[#F20D18] transition-all duration-500 group-hover:w-24" />

            </div>
          </div>

          {/* Floating service card */}
          <div className="absolute -bottom-5 -left-2 z-20 flex items-center gap-3 border border-white/10 bg-[#181818] p-3 sm:-left-6 sm:p-4">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#F20D18] text-white">
              <Monitor size={19} />
            </div>

            <div>
              <p className="font-sans text-xs font-semibold text-white">
                Complete Digital Solutions
              </p>

              <p className="mt-1 font-sans text-[10px] text-white/45">
                Strategy • Creativity • Technology
              </p>
            </div>

          </div>

          {/* Bottom right accent */}
          <div className="absolute -bottom-3 -right-3 z-0 h-14 w-14 border-b-2 border-r-2 border-[#F20D18]" />

        </div>
      </div>
    </section>
  );
}
