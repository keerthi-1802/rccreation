
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Clock,
  Send,
} from "lucide-react";

const contactDetails = [
  {
    icon: Phone,
    label: "CALL US",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: Mail,
    label: "EMAIL US",
    value: "hello@rccreation.in",
    href: "mailto:hello@rccreation.in",
  },
  {
    icon: MapPin,
    label: "VISIT US",
    value: "Coimbatore, Tamil Nadu, India",
    href: "https://maps.google.com/?q=Coimbatore",
  },
];

export default function ContactHero() {
  return (
    <section className="relative isolate min-h-[75vh] overflow-hidden bg-[#101010] text-white">

      {/* Unsplash Background Image */}
      <div
        className="absolute inset-0 -z-30 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=90')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-20 bg-black/65" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/80 to-black/55" />

      {/* Red Ambient Lighting */}
      <div className="absolute -left-40 top-10 -z-10 h-96 w-96 rounded-full bg-red-600/20 blur-[140px]" />
      <div className="absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-red-600/20 blur-[140px]" />

      {/* Grid Texture */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      {/* Main Content */}
      <div className="mx-auto grid min-h-[75vh] w-full max-w-[1600px] grid-cols-1 items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:min-h-[620px] lg:grid-cols-[1fr_0.8fr] lg:gap-16 lg:px-12 lg:py-8 xl:px-20">

        {/* Left Content */}
        <div className="max-w-2xl">

          <div className="mb-7 flex items-center gap-4">
            <span className="h-[3px] w-12 bg-[#F20D18]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-gray-300 sm:text-xs">
              Let's Start Something Great
            </span>
          </div>

          <h1 className="text-5xl font-bold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-[88px]">
            Let's Talk.
            <span className="block text-[#F20D18]">
              Let's Create.
            </span>
            <span className="block text-gray-300">
              Let's Grow.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-sm leading-7 text-gray-300 sm:text-base">
            Have an idea, a project or a business challenge?
            We'd love to hear about it. Let's connect and explore
            how RC Creation can bring your vision to life.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="#contact-form"
              className="group inline-flex items-center gap-5 bg-[#F20D18] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              Start a Conversation
              <ArrowUpRight
                size={19}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="mailto:hello@rccreation.in"
              className="group inline-flex items-center gap-5 border border-[#F20D18] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#F20D18]"
            >
              Email Us
              <ArrowUpRight
                size={19}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

          </div>

          {/* Bottom Highlights */}
          <div className="mt-12 flex flex-wrap items-center gap-7 sm:gap-10">

            <div className="flex items-center gap-3">
              <MessageCircle
                size={30}
                className="text-[#F20D18]"
              />
              <span className="text-sm font-medium text-gray-200">
                Discuss Your Ideas
              </span>
            </div>

            <div className="hidden h-10 w-px bg-white/30 sm:block" />

            <div className="flex items-center gap-3">
              <Clock
                size={30}
                className="text-[#F20D18]"
              />
              <span className="text-sm font-medium text-gray-200">
                Ready to Connect
              </span>
            </div>

          </div>
        </div>

        {/* Right Contact Card */}
        <div className="relative mx-auto w-full max-w-[460px]">

          {/* Corner Accents */}
          <div className="absolute -right-1 -top-1 h-16 w-16 border-r-4 border-t-4 border-[#F20D18]" />
          <div className="absolute -bottom-1 -left-1 h-16 w-16 border-b-4 border-l-4 border-[#F20D18]" />

          <div className="border border-white/20 bg-black/65 p-5 shadow-2xl backdrop-blur-xl sm:p-7">

            {/* Card Header */}
            <div className="mb-7">

              <div className="mb-6 flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-[#F20D18]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gray-300">
                  Get In Touch
                </span>
              </div>

              <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                We'd Love to Hear
                <br />
                From <span className="text-[#F20D18]">You.</span>
              </h2>

              <p className="mt-4 text-sm leading-6 text-gray-400">
                Reach out to us through any of the following
                channels. Our team will be happy to help.
              </p>

            </div>

            {/* Contact Details */}
            <div>
              {contactDetails.map((item, index) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={
                      item.label === "VISIT US"
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      item.label === "VISIT US"
                        ? "noreferrer"
                        : undefined
                    }
                    className={`group flex items-center justify-between gap-4 py-4 transition-all duration-300 ${
                      index !== contactDetails.length - 1
                        ? "border-b border-white/10"
                        : ""
                    }`}
                  >
                    <div className="flex min-w-0 items-center gap-4">

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/[0.08] transition-colors duration-300 group-hover:bg-[#F20D18]">
                        <Icon
                          size={24}
                          className="text-[#F20D18] transition-colors group-hover:text-white"
                        />
                      </div>

                      <div className="min-w-0">
                        <p className="mb-1 text-[10px] font-semibold tracking-[0.2em] text-gray-400">
                          {item.label}
                        </p>

                        <p className="break-words text-sm font-medium text-white sm:text-base">
                          {item.value}
                        </p>
                      </div>

                    </div>

                    <ArrowUpRight
                      size={20}
                      className="shrink-0 text-gray-400 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#F20D18]"
                    />
                  </a>
                );
              })}
            </div>

            {/* Card Footer */}
            <div className="mt-6 flex items-center justify-between border-t border-white/15 pt-6">

              <div>
                <h3 className="text-base font-semibold">
                  RC Creation
                </h3>
                <p className="mt-1 text-xs text-gray-400">
                  Creative Minds. Digital Impact.
                </p>
              </div>

              <a
                href="#contact-form"
                aria-label="Send us a message"
                className="flex h-12 w-12 items-center justify-center bg-[#F20D18] text-white transition-all duration-300 hover:rotate-[-10deg] hover:bg-white hover:text-black"
              >
                <Send size={21} />
              </a>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
