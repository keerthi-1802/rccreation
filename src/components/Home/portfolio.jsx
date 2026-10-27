import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Play,
  Plus,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Visual Stories",
    category: "Video Production",
    type: "Video",
    number: "01",
    image:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1200&q=85",
    size: "large",
  },
  {
    id: 2,
    title: "Social in Motion",
    category: "Reels & Social Media",
    type: "Reels",
    number: "02",
    image:
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1000&q=85",
    size: "small",
  },
  {
    id: 3,
    title: "Brand Identity",
    category: "Branding & Campaigns",
    type: "Branding",
    number: "03",
    image:
      "https://images.unsplash.com/photo-1634942536790-2533c9a7aa8e?auto=format&fit=crop&w=1200&q=85",
    size: "small",
  },
  {
    id: 4,
    title: "Digital Experience",
    category: "Website Design",
    type: "Web",
    number: "04",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=85",
    size: "large",
  },
];

const filters = ["All Projects", "Video", "Reels", "Branding", "Web"];

export default function CreativeShowcase() {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filteredProjects =
    activeFilter === "All Projects"
      ? projects
      : projects.filter((project) => project.type === activeFilter);

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#101010] px-5 py-24 text-white sm:px-8 lg:px-16 lg:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-40 top-40 h-96 w-96 rounded-full bg-[#c7ff3d]/[0.06] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-12 flex flex-col justify-between gap-8 lg:mb-16 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#c7ff3d]" />
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c7ff3d]">
                Our Creative Universe
              </span>
            </div>

            <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Ideas into
              <br />
              <span className="text-[#c7ff3d]">Impact.</span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
              From cinematic visuals to digital experiences, we create
              work that captures attention, builds brands, and moves
              businesses forward.
            </p>
          </div>

          <a
            href="/portfolio"
            className="group inline-flex w-fit items-center gap-3 border-b border-white/20 pb-3 text-sm transition hover:border-[#c7ff3d]"
          >
            Explore All Projects
            <ArrowUpRight
              size={18}
              className="text-[#c7ff3d] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>

        {/* Filters */}
        <div className="mb-10 flex gap-2 overflow-x-auto pb-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`shrink-0 rounded-full border px-5 py-2.5 text-xs font-medium transition-all duration-300 sm:text-sm ${
                activeFilter === filter
                  ? "border-[#c7ff3d] bg-[#c7ff3d] text-black"
                  : "border-white/10 bg-white/[0.03] text-white/60 hover:border-white/30 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <a
              href={`/portfolio/${project.id}`}
              key={project.id}
              className={`group relative isolate block overflow-hidden rounded-2xl border border-white/[0.08] bg-[#1b1b1b] ${
                project.size === "large" ? "md:col-span-2" : ""
              }`}
            >
              <div
                className={`relative overflow-hidden ${
                  project.size === "large"
                    ? "h-[340px] sm:h-[440px] lg:h-[520px]"
                    : "h-[340px] sm:h-[400px]"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/5 transition duration-500 group-hover:from-black/90 group-hover:via-black/30" />

                {/* Top metadata */}
                <div className="absolute left-5 right-5 top-5 flex items-center justify-between sm:left-7 sm:right-7 sm:top-7">
                  <span className="rounded-full border border-white/20 bg-black/20 px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-white backdrop-blur-md sm:text-xs">
                    {project.category}
                  </span>

                  <span className="text-xs font-medium tracking-widest text-white/70">
                    / {project.number}
                  </span>
                </div>

                {/* Video play indicator */}
                {project.type === "Video" && (
                  <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-white/10 text-white backdrop-blur-md transition duration-300 group-hover:scale-110 group-hover:border-[#c7ff3d] group-hover:bg-[#c7ff3d] group-hover:text-black">
                    <Play size={22} fill="currentColor" />
                  </div>
                )}

                {/* Bottom content */}
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-7">
                  <div>
                    <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-[#c7ff3d] sm:text-xs">
                      RC Creation / Portfolio
                    </p>

                    <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-sm text-white/60">
                      {project.category}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#c7ff3d] text-black transition duration-300 group-hover:rotate-45 sm:h-14 sm:w-14">
                    <ArrowDownRight size={23} />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-7 sm:p-10 md:flex-row md:items-center lg:mt-20">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#c7ff3d]">
              Have a project in mind?
            </p>

            <h3 className="max-w-xl text-2xl font-medium leading-tight sm:text-3xl lg:text-4xl">
              Let&apos;s create something
              <span className="text-[#c7ff3d]"> unforgettable.</span>
            </h3>
          </div>

          <a
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-[#c7ff3d] px-6 py-4 text-sm font-semibold text-black transition hover:bg-white"
          >
            Start a Project
            <Plus
              size={19}
              className="transition-transform group-hover:rotate-90"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
