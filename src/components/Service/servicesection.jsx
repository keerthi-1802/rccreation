
import {
  ArrowUpRight,
  Code2,
  Camera,
  Megaphone,
  TrendingUp,
  GraduationCap,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Code2,
    title: "Web & Software",
    subtitle: "Development",
    description:
      "Build powerful digital experiences with modern websites and custom software solutions designed around your business goals.",
    features: [
      "Website Design & Development",
      "Custom Software Development",
      "E-commerce Development",
      "Web Applications",
      "UI/UX Design",
    ],
    tags: ["Websites", "Software", "Applications"],
  },
  {
    number: "02",
    icon: Camera,
    title: "Creative Production",
    subtitle: "& Content",
    description:
      "Bring your brand to life through compelling visuals, professional video production and creative storytelling.",
    features: [
      "Professional Video Shoots",
      "Corporate & Promotional Videos",
      "Reels & Short-form Videos",
      "Product Photography",
      "Video Editing & Post Production",
    ],
    tags: ["Video", "Photography", "Content"],
  },
  {
    number: "03",
    icon: Megaphone,
    title: "Digital Marketing",
    subtitle: "& Advertising",
    description:
      "Reach the right audience, build brand awareness and generate quality leads through result-driven digital campaigns.",
    features: [
      "Social Media Marketing",
      "Meta Ads & Google Ads",
      "Social Media Management",
      "Campaign Strategy",
      "Lead Generation",
    ],
    tags: ["Meta Ads", "Google Ads", "Social Media"],
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "SEO & Growth",
    subtitle: "Marketing Solutions",
    description:
      "Improve your online visibility and attract organic traffic with strategic search engine optimization and growth marketing.",
    features: [
      "Search Engine Optimization",
      "Local SEO",
      "Keyword Research",
      "Content Optimization",
      "Analytics & Performance Tracking",
    ],
    tags: ["SEO", "Analytics", "Growth"],
  },
  {
    number: "05",
    icon: GraduationCap,
    title: "LMS & CMS",
    subtitle: "Digital Solutions",
    description:
      "Simplify learning and content management with scalable digital platforms built to manage your business efficiently.",
    features: [
      "Learning Management Systems",
      "Course & Student Management",
      "Content Management Systems",
      "Custom Admin Dashboards",
      "Platform Integration",
    ],
    tags: ["LMS", "CMS", "Automation"],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative isolate overflow-hidden bg-[#101010] py-20 text-white sm:py-24 lg:py-32"
    >
      {/* Background details */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#F20D18]/10 blur-[130px]" />
        <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#F20D18]/[0.06] blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-16 xl:px-24">

        {/* Section Heading */}
        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end">

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#F20D18]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50">
                What We Do
              </span>
            </div>

            <h2 className="font-display text-[clamp(2.8rem,5.5vw,5rem)] font-bold leading-[0.98] tracking-[-0.07em]">
              Creative Solutions.
              <br />
              <span className="text-[#F20D18]">Powerful Results.</span>
            </h2>
          </div>

          <div className="lg:ml-auto lg:max-w-lg">
            <p className="text-sm leading-7 text-white/55 sm:text-base">
              From building your digital presence to creating powerful
              brand experiences, we deliver everything your business
              needs to stand out, connect and grow.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#F20D18]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-white/45">
                One Partner. Endless Possibilities.
              </span>
            </div>
          </div>
        </div>

        {/* Horizontal Services */}
        <div className="border-t border-white/15">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="group relative border-b border-white/15 py-9 transition-all duration-500 hover:bg-white/[0.025] sm:py-12 lg:py-14"
              >
                {/* Red hover line */}
                <div className="absolute left-0 top-0 h-[2px] w-0 bg-[#F20D18] transition-all duration-500 group-hover:w-full" />

                <div className="grid grid-cols-1 items-start gap-7 px-2 sm:px-5 lg:grid-cols-[0.12fr_0.9fr_1.35fr_0.2fr] lg:items-center lg:gap-10">

                  {/* Number and Icon */}
                  <div className="flex items-center justify-between lg:flex-col lg:items-start lg:gap-7">

                    <span className="font-display text-sm font-semibold tracking-widest text-white/30">
                      / {service.number}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center border border-white/10 bg-white/[0.05] text-[#F20D18] transition-all duration-300 group-hover:border-[#F20D18] group-hover:bg-[#F20D18] group-hover:text-white sm:h-14 sm:w-14">
                      <Icon size={23} strokeWidth={1.6} />
                    </div>
                  </div>

                  {/* Service Title */}
                  <div>
                    <h3 className="font-display text-2xl font-bold leading-tight tracking-tight sm:text-3xl xl:text-4xl">
                      {service.title}
                      <span className="block text-[#F20D18]">
                        {service.subtitle}
                      </span>
                    </h3>
                  </div>

                  {/* Description and Features */}
                  <div>
                    <p className="max-w-xl text-sm leading-7 text-white/50 transition-colors duration-300 group-hover:text-white/70">
                      {service.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="flex items-center gap-2 text-xs text-white/65"
                        >
                          <span className="h-1.5 w-1.5 shrink-0 bg-[#F20D18]" />
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-white/10 px-3 py-1.5 text-[10px] font-medium text-white/45 transition-colors group-hover:border-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Enquire Button */}
                  <div className="flex justify-start lg:justify-end">
                    <a
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      aria-label={`Enquire about ${service.title}`}
                      className="flex h-12 w-12 items-center justify-center border border-white/20 text-white/70 transition-all duration-300 group-hover:border-[#F20D18] group-hover:bg-[#F20D18] group-hover:text-white"
                    >
                      <ArrowUpRight
                        size={21}
                        className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </a>
                  </div>

                </div>
              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}
