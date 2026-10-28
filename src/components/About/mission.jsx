
import {
  Target,
  Eye,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const statements = [
  {
    number: "01",
    title: "Our Mission",
    subtitle: "Make Every Digital Move Matter",
    icon: Target,
    description:
      "To empower businesses with creative content, innovative technology, and result-oriented digital marketing that turns opportunities into measurable progress.",
    points: [
      "Create meaningful brand experiences",
      "Deliver practical digital solutions",
      "Build lasting client partnerships",
    ],
  },
  {
    number: "02",
    title: "Our Vision",
    subtitle: "Shape What's Next",
    icon: Eye,
    description:
      "To become a trusted creative and technology partner for ambitious brands, helping them adapt, innovate, and grow in an ever-evolving digital world.",
    points: [
      "Lead with creativity and innovation",
      "Embrace emerging technologies",
      "Help brands grow with confidence",
    ],
  },
];

export default function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-[#141414] py-20 text-white sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-[#F20D18]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16">
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#F20D18]" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">
              03 / Our Purpose
            </span>
            <span className="h-[2px] w-8 bg-[#F20D18]" />
          </div>

          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Driven By Purpose.
            <br />
            <span className="text-[#F20D18]">Built For The Future.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
            Our mission guides what we do today. Our vision shapes
            what we aspire to create tomorrow.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {statements.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group relative overflow-hidden border border-white/10 bg-[#101010] p-7 transition duration-500 hover:-translate-y-2 hover:border-[#F20D18]/60 sm:p-10 lg:p-12"
              >
                <div className="absolute right-0 top-0 h-32 w-32 bg-[#F20D18]/[0.04] transition duration-500 group-hover:bg-[#F20D18]/[0.10]" />

                <div className="relative flex items-start justify-between">
                  <div className="flex h-16 w-16 items-center justify-center bg-[#F20D18] text-white">
                    <Icon size={30} strokeWidth={1.6} />
                  </div>

                  <span className="font-display text-5xl font-bold text-white/[0.07]">
                    {item.number}
                  </span>
                </div>

                <p className="mt-9 text-xs font-semibold uppercase tracking-[0.2em] text-[#F20D18]">
                  {item.subtitle}
                </p>

                <h3 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
                  {item.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
                  {item.description}
                </p>

                <ul className="mt-7 space-y-3">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-3 text-sm text-white/70"
                    >
                      <Sparkles
                        size={15}
                        className="shrink-0 text-[#F20D18]"
                      />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-9 h-px w-full bg-white/10" />

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.15em] text-white/35">
                    RC Creation
                  </span>
                  <ArrowUpRight
                    size={20}
                    className="text-[#F20D18] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
