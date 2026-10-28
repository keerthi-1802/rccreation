
import {
  Lightbulb,
  Cpu,
  ChartNoAxesCombined,
  Workflow,
  ArrowUpRight,
} from "lucide-react";

const differentiators = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Creative Strategy",
    description:
      "We start with ideas rooted in your brand, audience, and business goals—not creativity without direction.",
    tag: "Think Differently",
  },
  {
    number: "02",
    icon: Cpu,
    title: "Modern Technology",
    description:
      "We combine contemporary web development, software, and digital platforms to solve real business challenges.",
    tag: "Build Smarter",
  },
  {
    number: "03",
    icon: ChartNoAxesCombined,
    title: "Data-Driven Growth",
    description:
      "We use campaign insights, SEO data, and performance metrics to help refine your digital marketing decisions.",
    tag: "Measure Progress",
  },
  {
    number: "04",
    icon: Workflow,
    title: "End-to-End Execution",
    description:
      "From planning and production to development and promotion, we bring your digital work together in one place.",
    tag: "One Creative Partner",
  },
];

export default function WhatMakesUsDifferent() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-20 text-[#101010] sm:py-24 lg:py-28">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute -bottom-32 -left-20 -z-10 h-72 w-72 rounded-full border-[35px] border-[#F20D18]/[0.04]" />

      <div className="pointer-events-none absolute right-8 top-10 -z-10 grid grid-cols-5 gap-3 opacity-20">
        {Array.from({ length: 25 }).map((_, index) => (
          <span
            key={index}
            className="h-1 w-1 rounded-full bg-[#F20D18]"
          />
        ))}
      </div>

      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16">
        {/* Section heading */}
        <div className="mb-12 grid gap-7 lg:mb-16 lg:grid-cols-[1.35fr_0.65fr] lg:items-end lg:gap-12">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[3px] w-9 bg-[#F20D18]" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-black/60">
                04 / The RC Difference
              </span>
            </div>

            <h2 className="font-display text-[clamp(2.7rem,5.5vw,5.6rem)] font-bold leading-[0.98] tracking-[-0.065em]">
              Different Thinking.
              <br />
              <span className="text-[#F20D18]">
                Better Possibilities.
              </span>
            </h2>
          </div>

          <div className="max-w-md lg:justify-self-end lg:pb-2">
            <p className="text-base leading-8 text-[#343434] sm:text-lg">
              We bring the right people, ideas, tools, and strategy
              together to help your brand move forward.
            </p>

            <span className="mt-5 block h-[3px] w-16 bg-[#F20D18]" />
          </div>
        </div>

        {/* Differentiator cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="group relative flex min-h-[350px] flex-col overflow-hidden border border-[#101010]/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#F20D18]/40 hover:shadow-[0_16px_45px_rgba(0,0,0,0.06)] sm:p-7 lg:min-h-[370px] lg:p-8"
              >
              

                {/* Icon and number */}
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F20D18]/[0.08] text-[#F20D18] transition-colors duration-300 group-hover:bg-[#F20D18] group-hover:text-white">
                    <Icon size={25} strokeWidth={1.7} />
                  </div>

                  <span className="font-display text-4xl font-bold tracking-tight text-[#101010]/15 transition-colors duration-300 group-hover:text-[#F20D18]/40">
                    {item.number}
                  </span>
                </div>

                {/* Card content */}
                <h3 className="mt-8 font-display text-xl font-bold leading-snug sm:text-[22px]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#555555]">
                  {item.description}
                </p>

                {/* Bottom label */}
                <div className="mt-auto flex items-center justify-between gap-3 border-t border-black/10 pt-5 mt-7">
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#454545]">
                    {item.tag}
                  </span>

                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-[#F20D18] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>

                {/* Hover underline */}
                <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#F20D18] transition-all duration-500 group-hover:w-full" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
