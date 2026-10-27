
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Clapperboard,
  Megaphone,
  Search,
  GraduationCap,
  Palette,
  MonitorPlay,
  BarChart3,
  Camera,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Web & Software",
    subtitle: "Development",
    description:
      "Modern websites, custom software, and scalable digital products built around your business goals.",
    icon: Code2,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "02",
    title: "Creative Production",
    subtitle: "& Video Shoots",
    description:
      "Cinematic videos, product shoots, and visual storytelling that make your brand stand out.",
    icon: Clapperboard,
    image:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "03",
    title: "Digital Marketing",
    subtitle: "& Meta Ads",
    description:
      "Strategic advertising campaigns that increase brand awareness, generate leads, and drive conversions.",
    icon: Megaphone,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85",
  },

  {
    number: "04",
    title: "LMS & CMS",
    subtitle: "Solutions",
    description:
      "Manage online learning, courses, and website content with efficient digital platforms.",
    icon: GraduationCap,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "05",
    title: "Branding & Content",
    subtitle: "Creation",
    description:
      "Distinctive brand identities, engaging creatives, and content built for digital platforms.",
    icon: Palette,
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "06",
    title: "Social Media",
    subtitle: "Management",
    description:
      "Build an active online community with consistent content, creative campaigns, and social strategy.",
    icon: MonitorPlay,
    image:
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=900&q=85",
  },
 
];

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <a
      href="/services"
      className="group relative isolate flex min-h-[390px] flex-col justify-between overflow-hidden border border-white/10 bg-[#151515] p-6 transition-colors duration-500 hover:border-[#F20D18]/70 sm:min-h-[410px] sm:p-7"
    >
      {/* Background image */}
      <img
        src={service.image}
        alt=""
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-45 transition-all duration-700 group-hover:scale-105 group-hover:opacity-60"
      />

      {/* Cinematic overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#080808] via-[#080808]/65 to-[#080808]/25" />

      <div className="absolute inset-0 -z-10 bg-[#F20D18]/0 transition-colors duration-500 group-hover:bg-[#F20D18]/[0.06]" />

      {/* Top row */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center border border-white/20 bg-black/30 text-[#F20D18] backdrop-blur-sm transition-all duration-300 group-hover:border-[#F20D18] group-hover:bg-[#F20D18] group-hover:text-white">
          <Icon size={23} strokeWidth={1.6} />
        </div>

        <span className="font-sans text-xs font-semibold tracking-[0.2em] text-white/60">
          {service.number}
        </span>
      </div>

      {/* Card content */}
      <div className="relative mt-12">
        <div className="mb-4 h-[2px] w-9 bg-[#F20D18] transition-all duration-300 group-hover:w-16" />

        <h3 className="font-display text-2xl font-bold leading-tight tracking-tight sm:text-[27px]">
          {service.title}
          <br />
          <span className="text-white/60">{service.subtitle}</span>
        </h3>

        <p className="mt-4 font-sans text-sm leading-6 text-white/60">
          {service.description}
        </p>

        <div className="mt-6 flex items-center justify-between border-t border-white/20 pt-4">
          <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-white/75 sm:text-xs">
            Explore Service
          </span>

          <span className="flex h-9 w-9 items-center justify-center border border-white/20 text-white transition-all duration-300 group-hover:border-[#F20D18] group-hover:bg-[#F20D18]">
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:rotate-45"
            />
          </span>
        </div>
      </div>

      {/* Decorative corner */}
      <div className="absolute right-0 top-0 h-10 w-10 border-b border-l border-[#F20D18]/0 transition-colors duration-300 group-hover:border-[#F20D18]/80" />
    </a>
  );
}

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative isolate overflow-hidden bg-[#101010] px-6 py-20 text-white sm:px-10 sm:py-24 lg:px-16 lg:py-32 xl:px-24"
    >
      {/* Ambient red lighting */}
      <div className="pointer-events-none absolute -left-40 top-1/3 -z-10 h-96 w-96 rounded-full bg-[#F20D18]/[0.07] blur-[140px]" />

      <div className="mx-auto max-w-[1600px]">
        {/* Section heading */}
        <div className="mb-12 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-7 flex items-center gap-3">
          

              <span className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                What We Do
              </span>
            </div>

            <h2 className="font-display text-[clamp(2.8rem,6vw,5.5rem)] font-bold leading-[0.98] tracking-[-0.065em]">
              Everything Your <span className="text-[#F20D18]">Brand</span> 
              <br />
              <span>
                Needs To Stand Out.
              </span>
            </h2>
          </div>

          <div className="max-w-md lg:pb-2">
            <p className="font-sans text-sm leading-7 text-white/55 sm:text-base">
              From the first idea to the final result, we combine creativity,
              technology, and marketing to build digital experiences that
              move your business forward.
            </p>

            <a
              href="/services"
              className="group mt-6 inline-flex items-center gap-3 border-b border-white/25 pb-2 font-sans text-sm font-semibold transition-colors hover:border-[#F20D18] hover:text-[#F20D18]"
            >
              View All Services
              <ArrowDownRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </a>
          </div>
        </div>

        {/* 3 x 3 Services Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {services.map((service) => (
            <ServiceCard key={service.number} service={service} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col gap-6 border-t border-white/15 pt-8 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Have a project in mind?
            </p>

            <p className="mt-2 font-sans text-sm leading-6 text-white/50">
              Let&apos;s turn your next big idea into something extraordinary.
            </p>
          </div>

          <a
            href="/contact"
            className="group inline-flex min-h-[54px] items-center justify-center gap-4 bg-[#F20D18] px-7 font-sans text-sm font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-[#101010]"
          >
            Let&apos;s Talk
            <ArrowRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
