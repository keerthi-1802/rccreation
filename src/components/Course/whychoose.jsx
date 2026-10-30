
import {
  Lightbulb,
  Users,
  Laptop,
  BriefcaseBusiness,
  Target,
  Award,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const benefits = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Industry-Focused Learning",
    description:
      "Learn relevant skills and techniques based on current industry trends and professional requirements.",
  },
  {
    number: "02",
    icon: Users,
    title: "Expert Trainers",
    description:
      "Get guidance from experienced trainers who bring practical knowledge and industry insights.",
  },
  {
    number: "03",
    icon: Laptop,
    title: "Hands-On Training",
    description:
      "Go beyond theory with practical sessions, assignments, creative tasks, and real-world projects.",
  },
  {
    number: "04",
    icon: BriefcaseBusiness,
    title: "Real-World Projects",
    description:
      "Build your portfolio by working on projects that help you understand actual business requirements.",
  },
  {
    number: "05",
    icon: Target,
    title: "Flexible Learning",
    description:
      "Choose online or offline learning options that fit your schedule and learning preferences.",
  },
  {
    number: "06",
    icon: Award,
    title: "Career Development",
    description:
      "Develop confidence, strengthen your portfolio, and prepare yourself for new career opportunities.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#101010] py-20 sm:py-24 lg:py-28">

      {/* Background Effects */}
      <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-[#F20D18]/10 blur-[150px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-red-900/10 blur-[130px]" />

      {/* Grid Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="mb-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">

          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#F20D18]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F20D18]">
                The RC Advantage
              </span>
            </div>

            <h2 className="text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
              More Than
              <br />
              Just <span className="text-[#F20D18]">Training.</span>
              <br />
              A Better Future.
            </h2>
          </div>

          <div className="lg:max-w-xl lg:justify-self-end">
            <p className="text-base leading-8 text-white/60 sm:text-lg">
              We believe the best way to learn is by doing. Our training
              combines expert guidance, practical experience, and creative
              thinking to help you build skills that make a difference.
            </p>

            <div className="mt-7 flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-sm text-white/80">
                <CheckCircle2 size={17} className="text-[#F20D18]" />
                Practical Learning
              </div>
              <div className="flex items-center gap-2 text-sm text-white/80">
                <CheckCircle2 size={17} className="text-[#F20D18]" />
                Expert Guidance
              </div>
              <div className="flex items-center gap-2 text-sm text-white/80">
                <CheckCircle2 size={17} className="text-[#F20D18]" />
                Career Focused
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.number}
                className="group relative min-h-[265px] overflow-hidden bg-[#151515] p-7 transition-all duration-500 hover:bg-[#1c1c1c] sm:p-8"
              >
                {/* Hover Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#F20D18]/0 blur-3xl transition-all duration-500 group-hover:bg-[#F20D18]/15" />

                <div className="relative z-10 flex h-full flex-col">

                  {/* Number & Icon */}
                  <div className="mb-8 flex items-center justify-between">
                    <span className="text-sm font-bold tracking-[0.15em] text-white/25 transition-colors group-hover:text-[#F20D18]">
                      / {benefit.number}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-[#F20D18] transition-all duration-300 group-hover:border-[#F20D18] group-hover:bg-[#F20D18] group-hover:text-white">
                      <Icon size={22} strokeWidth={1.7} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-[#F20D18]">
                    {benefit.title}
                  </h3>

                  <p className="text-sm leading-7 text-white/50">
                    {benefit.description}
                  </p>

                  {/* Bottom Arrow */}
                  <div className="mt-auto flex justify-end pt-6">
                    <ArrowUpRight
                      size={19}
                      className="text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#F20D18]"
                    />
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#F20D18] transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col justify-between gap-6 border-t border-white/10 pt-9 sm:flex-row sm:items-center">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#F20D18]">
              Learn. Practice. Achieve.
            </p>
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Your growth starts with the right skills.
            </h3>
          </div>

          <a
            href="/contact"
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#F20D18] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-black"
          >
            Join Our Courses
            <ArrowUpRight
              size={19}
              className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </div>

      </div>
    </section>
  );
}
