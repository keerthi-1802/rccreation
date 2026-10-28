
import {
  Code2,
  Camera,
  Megaphone,
  Search,
  Target,
  GraduationCap,
  Database,
  Clapperboard,
  ArrowUpRight,
} from "lucide-react";

const expertise = [
  {
    icon: Code2,
    title: "Website Development",
    description:
      "Responsive, high-performing websites built around your business goals.",
    category: "Development",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Integrated digital campaigns that connect your brand with the right audience.",
    category: "Marketing",
  },
  {
    icon: Camera,
    title: "Content Creation",
    description:
      "Engaging visual content designed for websites, social media, and digital campaigns.",
    category: "Creative",
  },
  {
    icon: Clapperboard,
    title: "Video Production",
    description:
      "Brand films, promotional videos, product shoots, and short-form video content.",
    category: "Production",
  },
  {
    icon: Search,
    title: "SEO & Organic Growth",
    description:
      "Search optimization and content strategies that improve discoverability.",
    category: "Growth",
  },
  {
    icon: Target,
    title: "Meta Ads & Paid Media",
    description:
      "Campaign planning, audience targeting, creative testing, and performance optimization.",
    category: "Advertising",
  },
  {
    icon: GraduationCap,
    title: "LMS Solutions",
    description:
      "Learning platforms for online courses, training, and educational experiences.",
    category: "Education",
  },
  {
    icon: Database,
    title: "CMS & Software",
    description:
      "Content management systems and custom software tailored to your workflows.",
    category: "Technology",
  },
];

export default function OurExpertise() {
  return (
    <section className="relative overflow-hidden bg-[#151515] py-20 text-white sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#F20D18]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16">
        {/* Heading */}
        <div className="mb-12 flex flex-col justify-between gap-6 lg:mb-16 lg:flex-row lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#F20D18]" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">
                05 / Our Expertise
              </span>
            </div>

            <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Everything Your Brand
              <br />
              <span className="text-[#F20D18]">Needs To Move Forward.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/55 sm:text-base">
            Creative, marketing, and technology services working
            together to support your next stage of growth.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group relative flex min-h-[270px] flex-col overflow-hidden border border-white/10 bg-[#101010] p-6 transition duration-500 hover:-translate-y-1 hover:border-[#F20D18]/60 sm:p-7"
              >
                <span className="absolute -right-3 -top-7 font-display text-8xl font-bold text-white/[0.025] transition group-hover:text-[#F20D18]/[0.08]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative flex h-12 w-12 items-center justify-center bg-[#F20D18]/10 text-[#F20D18] transition duration-300 group-hover:bg-[#F20D18] group-hover:text-white">
                  <Icon size={23} strokeWidth={1.7} />
                </div>

                <span className="mt-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#F20D18]">
                  {item.category}
                </span>

                <h3 className="mt-2 font-display text-xl font-bold leading-snug">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/50">
                  {item.description}
                </p>

                <div className="mt-auto flex justify-end pt-5">
                  <ArrowUpRight
                    size={19}
                    className="text-white/40 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#F20D18]"
                  />
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col items-start justify-between gap-5 border border-white/10 bg-white/[0.02] p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <h3 className="font-display text-2xl font-bold sm:text-3xl">
              Have a project in mind?
            </h3>
            <p className="mt-2 text-sm text-white/50">
              Let's find the right combination of creativity and technology.
            </p>
          </div>

          <a
            href="/contact"
            className="group inline-flex min-h-12 shrink-0 items-center gap-3 bg-[#F20D18] px-6 text-sm font-semibold transition hover:bg-white hover:text-[#101010]"
          >
            Discuss Your Project
            <ArrowUpRight
              size={18}
              className="transition group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
