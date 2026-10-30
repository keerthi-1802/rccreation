
import {
  Search,
  ClipboardCheck,
  BookOpen,
  Code2,
  Award,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Choose Your Course",
    description:
      "Explore our online and offline courses and choose the learning path that matches your interests and career goals.",
    tag: "Find Your Path",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Enroll & Get Started",
    description:
      "Complete your enrollment and get access to a structured learning plan designed around your schedule.",
    tag: "Take The First Step",
  },
  {
    number: "03",
    icon: BookOpen,
    title: "Learn From Experts",
    description:
      "Learn from experienced trainers through practical sessions, guided lessons, and real-world insights.",
    tag: "Learn With Experts",
  },
  {
    number: "04",
    icon: Code2,
    title: "Practice & Create",
    description:
      "Work on assignments, projects, and practical activities to turn your knowledge into valuable skills.",
    tag: "Build Real Skills",
  },
  {
    number: "05",
    icon: Award,
    title: "Grow With Confidence",
    description:
      "Build your portfolio, earn recognition, and take the next step toward your professional goals.",
    tag: "Move Forward",
  },
];

export default function LearningProcess() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">

      {/* Background decoration */}
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-red-50 blur-3xl opacity-70" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-gray-100 blur-3xl opacity-70" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section Header */}
        <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#F20D18]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F20D18]">
                How We Teach
              </span>
            </div>

            <h2 className="max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight text-[#111111] sm:text-5xl lg:text-6xl">
              A Smarter Way
              <br />
              <span className="text-[#F20D18]">To Learn & Grow.</span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-lg text-base leading-8 text-gray-600">
              From your first lesson to real-world projects, we make learning
              practical, engaging, and focused on building skills that matter.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <span className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-xs font-semibold text-gray-700">
                Online Learning
              </span>
              <span className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-xs font-semibold text-gray-700">
                Offline Training
              </span>
            </div>
          </div>
        </div>

        {/* Process Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group relative flex min-h-[310px] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#F20D18]/40 hover:shadow-xl hover:shadow-red-100/50"
              >
                {/* Number and Icon */}
                <div className="mb-9 flex items-start justify-between">
                  <span className="text-4xl font-bold tracking-tight text-gray-200 transition-colors duration-300 group-hover:text-[#F20D18]">
                    {step.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-800 transition-all duration-300 group-hover:bg-[#F20D18] group-hover:text-white">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="mb-3 text-xl font-bold leading-snug text-[#111111]">
                    {step.title}
                  </h3>

                  <p className="text-sm leading-7 text-gray-500">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Tag */}
                <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400">
                    {step.tag}
                  </span>

                  <ArrowUpRight
                    size={18}
                    className="text-gray-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#F20D18]"
                  />
                </div>

                {/* Hover Accent */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#F20D18] transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col justify-between gap-6 rounded-2xl bg-[#111111] p-7 sm:flex-row sm:items-center sm:p-9">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#F20D18]">
              Your Future Starts Here
            </p>
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Ready to start your learning journey?
            </h3>
          </div>

          <a
            href="#courses"
            className="inline-flex w-fit items-center gap-3 rounded-full bg-[#F20D18] px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-[#111111]"
          >
            Explore Courses
            <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}
