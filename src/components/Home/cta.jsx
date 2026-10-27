
import { ArrowUpRight, MessageCircle } from "lucide-react";

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="bg-white px-5 py-10 sm:px-8 lg:px-16 lg:py-14"
    >
      <div className="mx-auto max-w-7xl">
        <div className="group relative flex min-h-[300px] flex-col justify-center overflow-hidden bg-[#101010] px-6 py-10 text-white sm:px-10 lg:min-h-[360px] lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-14">

          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=85"
            alt="Creative team collaborating on a project"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Red Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F20D18]/95 via-[#F20D18]/85 to-[#101010]/75" />

          {/* Content */}
          <div className="relative z-10 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
              Let's Work Together
            </p>

            <h2 className="font-display text-3xl font-bold uppercase leading-tight sm:text-4xl lg:text-5xl">
              Ready to Grow
              <br className="hidden sm:block" /> Your Business?
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-6 text-white/85 sm:text-base">
              Let's turn your ideas into impactful digital experiences.
              Tell us about your next project.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="relative z-10 mt-8 flex shrink-0 flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-col">
            <a
              href="/contact"
              className="group/btn inline-flex min-h-12 items-center justify-center gap-3 bg-white px-6 py-3 text-sm font-bold text-[#F20D18] transition-colors hover:bg-[#101010] hover:text-white"
            >
              Start a Project
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
              />
            </a>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-3 border border-white/70 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
