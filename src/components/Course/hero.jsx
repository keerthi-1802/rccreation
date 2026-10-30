
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
    <section className="relative isolate overflow-hidden bg-[#101010] text-white">

      {/* Background Image */}
      <div
        className="absolute inset-0 -z-30 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=90')",
        }}
      />

      {/* Background Overlays */}
      <div className="absolute inset-0 -z-20 bg-black/65" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/80 to-black/55" />

      {/* Background Details */}
      <div className="pointer-events-none absolute inset-0 -z-10">

        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#F20D18]/15 blur-[130px]" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#F20D18]/15 blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />
      </div>

      {/* Main Hero */}
      <div className="mx-auto grid min-h-[75vh] w-full max-w-[1600px] grid-cols-1 items-center gap-10 px-5 py-12 sm:px-8 sm:py-14 lg:h-[75vh] lg:min-h-[620px] lg:grid-cols-[1fr_0.8fr] lg:gap-12 lg:overflow-visible lg:px-12 lg:py-8 xl:px-20">

        {/* LEFT: Content */}
        <div className="relative z-10 min-w-0">

          {/* Eyebrow */}
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[3px] w-10 bg-[#F20D18]" />

            <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-white/65 sm:text-xs">
              Let's Start Something Great
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-[clamp(2.8rem,5.1vw,5.3rem)] font-bold leading-[0.94] tracking-[-0.075em]">
            Let's Talk.
            <br />
            <span className="text-[#F20D18]">
              Let's Create.
            </span>
            <br />
            <span className="text-white/55">
              Let's Grow.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-xl font-sans text-sm leading-6 text-white/65 sm:text-base sm:leading-7">
            Have an idea, a project or a business challenge?
            We'd love to hear about it. Let's connect and explore
            how RC Creation can bring your vision to life.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-3">

            <a
              href="#contact-form"
              className="group inline-flex min-h-12 items-center gap-3 bg-[#F20D18] px-5 font-sans text-sm font-semibold text-white transition duration-300 hover:bg-white hover:text-[#101010]"
            >
              Start a Conversation

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

            <a
              href="mailto:hello@rccreation.in"
              className="group inline-flex min-h-12 items-center gap-3 border border-white/25 px-5 font-sans text-sm font-semibold text-white transition duration-300 hover:border-[#F20D18] hover:text-[#F20D18]"
            >
              Email Us

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

          </div>

          {/* Bottom Highlights */}
          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4 sm:gap-x-9">

            <div className="flex items-center gap-3">
              <MessageCircle
                size={25}
                className="text-[#F20D18]"
              />

              <span className="font-sans text-xs font-medium text-white/75 sm:text-sm">
                Discuss Your Ideas
              </span>
            </div>

            <div className="hidden h-9 w-px bg-white/25 sm:block" />

            <div className="flex items-center gap-3">
              <Clock
                size={25}
                className="text-[#F20D18]"
              />

              <span className="font-sans text-xs font-medium text-white/75 sm:text-sm">
                Ready to Connect
              </span>
            </div>

          </div>
        </div>

        {/* RIGHT: Contact Card */}
        <div className="relative mx-auto w-full max-w-[450px] min-w-0 lg:ml-auto">

          {/* Red Corner Frames */}
          <div className="absolute -right-2 -top-2 z-0 h-16 w-16 border-r-2 border-t-2 border-[#F20D18] sm:-right-3 sm:-top-3 sm:h-20 sm:w-20" />

          <div className="absolute -bottom-2 -left-2 z-0 h-16 w-16 border-b-2 border-l-2 border-[#F20D18] sm:-bottom-3 sm:-left-3 sm:h-20 sm:w-20" />

          {/* Card */}
          <div className="relative z-10 border border-white/20 bg-black/65 p-5 shadow-2xl backdrop-blur-xl sm:p-7">

            {/* Card Header */}
            <div className="mb-5">

              <div className="mb-5 flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-[#F20D18]" />

                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-white/65">
                  Get In Touch
                </span>
              </div>

              <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                We'd Love to Hear
                <br />
                From <span className="text-[#F20D18]">You.</span>
              </h2>

              <p className="mt-3 max-w-sm font-sans text-xs leading-6 text-white/55 sm:text-sm">
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
                      item.label === "VISIT US" ? "_blank" : undefined
                    }
                    rel={
                      item.label === "VISIT US" ? "noreferrer" : undefined
                    }
                    className={`group flex items-center justify-between gap-3 py-3 transition duration-300 ${
                      index !== contactDetails.length - 1
                        ? "border-b border-white/10"
                        : ""
                    }`}
                  >

                    <div className="flex min-w-0 items-center gap-3">

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/[0.08] transition duration-300 group-hover:bg-[#F20D18]">
                        <Icon
                          size={21}
                          className="text-[#F20D18] transition-colors group-hover:text-white"
                        />
                      </div>

                      <div className="min-w-0">
                        <p className="mb-1 font-sans text-[9px] font-semibold tracking-[0.2em] text-white/45">
                          {item.label}
                        </p>

                        <p className="break-words font-sans text-xs font-medium text-white sm:text-sm">
                          {item.value}
                        </p>
                      </div>

                    </div>

                    <ArrowUpRight
                      size={18}
                      className="shrink-0 text-white/50 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#F20D18]"
                    />

                  </a>
                );
              })}
            </div>

            {/* Card Footer */}
            <div className="mt-5 flex items-center justify-between border-t border-white/15 pt-5">

              <div>
                <h3 className="font-display text-sm font-semibold text-white">
                  RC Creation
                </h3>

                <p className="mt-1 font-sans text-[10px] text-white/45">
                  Creative Minds. Digital Impact.
                </p>
              </div>

              <a
                href="#contact-form"
                aria-label="Send us a message"
                className="flex h-11 w-11 items-center justify-center bg-[#F20D18] text-white transition duration-300 hover:rotate-[-10deg] hover:bg-white hover:text-black"
              >
                <Send size={19} />
              </a>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
