import {
  Search,
  Target,
  Palette,
  Rocket,
  ArrowUpRight,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Discover",
    subtitle: "UNDERSTAND",
    description:
      "We understand your business, audience, goals, and challenges to uncover the right opportunities for your brand.",
    icon: Search,
  },
  {
    number: "02",
    title: "Strategize",
    subtitle: "PLAN",
    description:
      "We create a tailored roadmap combining creative direction, technology, and digital marketing strategies.",
    icon: Target,
  },
  {
    number: "03",
    title: "Create",
    subtitle: "EXECUTE",
    description:
      "We bring your vision to life through website development, software, video production, and engaging campaigns.",
    icon: Palette,
  },
  {
    number: "04",
    title: "Grow",
    subtitle: "OPTIMIZE",
    description:
      "We launch, measure, and optimize your digital presence to improve performance and drive sustainable growth.",
    icon: Rocket,
  },
];

export default function OurProcess() {
  return (
    <section
      id="process"
      className="bg-white px-5 py-20 text-[#171717] sm:px-8 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div>
            <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#F20D18]">
              <span className="h-[2px] w-8 bg-[#F20D18]" />
              Our Process
            </p>

            <h2 className="font-display text-4xl font-bold uppercase leading-[1.05] sm:text-5xl lg:text-7xl">
              Good Ideas.
              <br />
              <span className="text-[#F20D18]">Great Execution.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#666666] sm:text-base md:pb-2">
            From the first conversation to the final launch, we combine
            strategy, creativity, and technology to turn your vision
            into measurable results.
          </p>
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group relative flex min-h-[320px] flex-col overflow-hidden border border-[#EAEAEA] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#F20D18] hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] sm:p-7 lg:min-h-[350px]"
              >
                {/* Top Row */}
                <div className="flex items-start justify-between">
                  <span className="font-display text-5xl font-bold tracking-tight text-[#EEEEEE] transition-colors duration-300 group-hover:text-[#F20D18] sm:text-6xl">
                    {step.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center border border-[#EAEAEA] transition-all duration-300 group-hover:border-[#F20D18] group-hover:bg-[#F20D18]">
                    <Icon
                      size={21}
                      strokeWidth={1.5}
                      className="text-[#171717] transition-colors duration-300 group-hover:text-white"
                    />
                  </div>
                </div>

                {/* Accent Line */}
                <div className="mb-6 mt-7 h-[2px] w-10 bg-[#F20D18] transition-all duration-300 group-hover:w-16" />

                {/* Card Content */}
                <div className="mt-auto">
                  <p className="mb-3 text-[10px] font-bold tracking-[0.22em] text-[#888888]">
                    {step.subtitle}
                  </p>

                  <h3 className="mb-3 font-display text-2xl font-bold uppercase tracking-tight text-[#171717] transition-colors group-hover:text-[#F20D18]">
                    {step.title}
                  </h3>

                  <p className="text-sm leading-7 text-[#6B6B6B]">
                    {step.description}
                  </p>
                </div>

                {/* Step Indicator */}
                <div className="mt-7 flex items-center justify-between border-t border-[#EEEEEE] pt-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#999999]">
                    Step {index + 1} of 4
                  </span>

                  <ArrowUpRight
                    size={18}
                    className="text-[#BDBDBD] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#F20D18]"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col gap-5 border-t border-[#EAEAEA] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg text-sm leading-6 text-[#777777]">
            Every great result starts with the right first step.
          </p>

          <a
            href="/contact"
            className="inline-flex w-fit items-center gap-3 bg-[#F20D18] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#171717]"
          >
            Let's Work Together
            <ArrowUpRight size={17} />
          </a>
        </div>

      </div>
    </section>
  );
}
