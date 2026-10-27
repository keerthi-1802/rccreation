
import {
  ArrowUpRight,
  Lightbulb,
  Settings2,
  ChartNoAxesCombined,
  Headset,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Creative Thinking",
    description:
      "Creative ideas backed by technical expertise to build meaningful digital experiences.",
  },
  {
    number: "02",
    icon: Settings2,
    title: "Customized Solutions",
    description:
      "Tailored websites, software, and digital solutions aligned with your business goals.",
  },
  {
    number: "03",
    icon: ChartNoAxesCombined,
    title: "Data-Driven Marketing",
    description:
      "Strategic campaigns guided by insights, analytics, and measurable performance.",
  },
  {
    number: "04",
    icon: Headset,
    title: "End-to-End Support",
    description:
      "From initial planning to launch and beyond, we're with you at every stage.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="bg-[#101010] px-6 py-20 text-white sm:px-10 sm:py-24 lg:px-16 lg:py-28 xl:px-24"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* Heading */}
        <div className="mb-12 max-w-3xl sm:mb-16">
          <div className="mb-6 flex items-center gap-3">
        
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
              Why Choose Us
            </span>
          </div>

          <h2 className="font-display text-4xl font-bold leading-tight tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            More Than A Service.
            <br />
            <span className="text-[#F20D18]">A Creative Partner.</span>
          </h2>

          <p className="mt-5 max-w-2xl font-sans text-sm leading-7 text-white/55 sm:text-base">
            We combine creativity, technology, and strategy to deliver
            digital solutions that help your business move forward.
          </p>
        </div>

        {/* Minimal features grid */}
        <div className="grid grid-cols-1 border-t border-white/15 sm:grid-cols-2">
          {reasons.map(({ number, icon: Icon, title, description }) => (
            <div
              key={number}
              className="group border-b border-white/15 py-7 transition-colors duration-300 hover:bg-white/[0.02] sm:px-6 sm:py-9 lg:px-8"
            >
              <div className="flex items-start gap-5">
                <span className="pt-1 font-sans text-xs tracking-widest text-[#F20D18]">
                  {number}
                </span>

                <div className="min-w-0 flex-1">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                      {title}
                    </h3>

                    <Icon
                      size={21}
                      strokeWidth={1.5}
                      className="shrink-0 text-white/40 transition-colors duration-300 group-hover:text-[#F20D18]"
                    />
                  </div>

                  <p className="max-w-md font-sans text-sm leading-7 text-white/50">
                    {description}
                  </p>
                </div>

                <ArrowUpRight
                  size={17}
                  className="mt-1 shrink-0 text-white/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#F20D18]"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-sm text-white/40">
            Creative minds. Digital impact.
          </p>

          <a
            href="/contact"
            className="inline-flex w-fit items-center gap-3 font-sans text-sm font-semibold transition-colors hover:text-[#F20D18]"
          >
            Let's work together
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
