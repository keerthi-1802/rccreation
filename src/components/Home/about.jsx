import {
  ArrowDownRight,
  ArrowRight,
  Clapperboard,
  Code2,
  Megaphone,
  Target,
} from "lucide-react";

const capabilities = [
  {
    icon: Code2,
    number: "01",
    title: "Technology",
    description:
      "Websites, software, and digital platforms built around your business.",
  },
  {
    icon: Clapperboard,
    number: "02",
    title: "Creative Production",
    description:
      "Visual storytelling, video production, and content that captures attention.",
  },
  {
    icon: Megaphone,
    number: "03",
    title: "Digital Marketing",
    description:
      "Strategic campaigns, SEO, and paid advertising designed to reach the right audience.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-white px-6 py-20 text-[#171717] sm:px-10 sm:py-24 lg:px-16 lg:py-32 xl:px-24"
    >
      {/* Subtle red ambient lighting */}
      <div className="pointer-events-none absolute -right-32 top-20 -z-10 h-96 w-96 rounded-full bg-[#F20D18]/[0.05] blur-[140px]" />

      <div className="mx-auto max-w-[1600px]">
        {/* Section heading */}
        <div className="mb-14 grid gap-8 lg:mb-20 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div>
            <div className="mb-7 flex items-center gap-3">
          
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-[#666666]">
                About RC Creation
              </span>
            </div>

            <h2 className="font-display text-[clamp(2.8rem,5.5vw,5.5rem)] font-bold leading-[0.98] tracking-[-0.065em] text-[#171717]">
              More Than
              <br />
              <span className="text-[#F20D18]">Creative.</span>
              <br />
              Built For Impact.
            </h2>
          </div>

          <div className="max-w-xl lg:justify-self-end">
            <p className="font-sans text-base leading-8 text-[#404040] sm:text-lg">
              We are RC Creation — a creative and digital solutions partner
              helping brands turn ambitious ideas into meaningful digital
              experiences.
            </p>

            <p className="mt-5 font-sans text-sm leading-7 text-[#737373] sm:text-base">
              From powerful websites and cinematic content to performance
              marketing and smart software, we bring creativity, strategy,
              and technology together to move your business forward.
            </p>

            <a
              href="/about"
              className="group mt-8 inline-flex min-h-[50px] items-center gap-3 border-b border-[#D4D4D4] font-sans text-sm font-semibold text-[#171717] transition-colors hover:border-[#F20D18] hover:text-[#F20D18]"
            >
              Discover Our Story
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        {/* Visual and company message */}
        <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Cinematic image */}
          <div className="group relative min-h-[340px] overflow-hidden border border-[#E5E5E5] sm:min-h-[470px] lg:min-h-[540px]">
            <img
              src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1600&q=85"
              alt="Cinematic filmmaking and creative production"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

            {/* Image label */}
            <div className="absolute left-6 top-6 flex items-center gap-3 sm:left-9 sm:top-9">
              <span className="h-2 w-2 animate-pulse bg-[#F20D18]" />
              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-white/90 sm:text-xs">
                Ideas into experiences
              </span>
            </div>

            {/* Image caption */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
              <p className="mb-3 font-sans text-xs uppercase tracking-[0.2em] text-[#FF303A]">
                Our philosophy
              </p>

              <h3 className="max-w-lg font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
                Think Different.
                <br />
                Create Fearlessly.
                <br />
                <span className="text-white/65">Deliver Impact.</span>
              </h3>
            </div>

            {/* Decorative corner */}
            <div className="absolute right-0 top-0 h-16 w-16 border-b border-l border-[#F20D18]/80" />
          </div>

          {/* Capabilities */}
          <div className="flex flex-col border border-[#E5E5E5] border-t-0 lg:border-l-0 lg:border-t">
            <div className="border-b border-[#E5E5E5] p-6 sm:p-9">
              <div className="mb-4 flex items-center gap-3">
                <Target size={18} className="text-[#F20D18]" />
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[#737373]">
                  What drives us
                </span>
              </div>

              <h3 className="font-display text-2xl font-semibold tracking-tight text-[#171717] sm:text-3xl">
                One partner.
                <br />
                <span className="text-[#737373]">
                  Every digital possibility.
                </span>
              </h3>
            </div>

            {capabilities.map(
              ({ icon: Icon, number, title, description }) => (
                <div
                  key={number}
                  className="group flex flex-1 gap-4 border-b border-[#E5E5E5] p-6 transition-colors duration-300 hover:bg-[#F20D18]/[0.035] sm:gap-5 sm:p-8 last:border-b-0"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#E5E5E5] text-[#F20D18] transition-colors duration-300 group-hover:border-[#F20D18] group-hover:bg-[#F20D18] group-hover:text-white">
                    <Icon size={20} strokeWidth={1.6} />
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <h4 className="font-sans text-base font-semibold text-[#171717] sm:text-lg">
                        {title}
                      </h4>
                      <span className="font-sans text-xs text-[#A3A3A3]">
                        {number}
                      </span>
                    </div>

                    <p className="max-w-sm font-sans text-sm leading-6 text-[#737373]">
                      {description}
                    </p>
                  </div>
                </div>
              )
            )}

            <a
              href="/services"
              className="group flex min-h-[58px] items-center justify-between gap-4 bg-[#F20D18] px-6 font-sans text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#171717] sm:px-9"
            >
              Explore What We Do
              <ArrowDownRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
