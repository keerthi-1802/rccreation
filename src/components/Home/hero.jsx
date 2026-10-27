
    import {
        ArrowDownRight,
        ArrowRight,
        Code2,
        Camera,
        Megaphone,
        TrendingUp,
        GraduationCap,
    } from "lucide-react";

    const services = [
        { icon: Code2, title: "Web & Software", subtitle: "Development" },
        { icon: Camera, title: "Creative Production", subtitle: "& Content" },
        { icon: Megaphone, title: "Digital Marketing", subtitle: "& Advertising" },
        { icon: TrendingUp, title: "SEO & Growth", subtitle: "Organic growth" },
        { icon: GraduationCap, title: "LMS & CMS", subtitle: "Digital solutions" },
    ];

    export default function Hero() {
        return (
            <section
                id="home"
                className="relative isolate min-h-[calc(100svh-80px)] overflow-hidden bg-[#101010] text-white"
            >
                {/* Background image */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-[center_45%]"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=2400&q=85')",
                    }}
                    role="img"
                    aria-label="Cinematic film production environment"
                />

                {/* Cinematic overlays */}
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#080808] via-[#080808]/85 to-[#080808]/35" />
                <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-black/20" />

                {/* Ambient red lighting */}
                <div className="pointer-events-none absolute right-[20%] top-[15%] z-0 h-72 w-72 rounded-full bg-[#F20D18]/10 blur-[120px]" />

                {/* Content */}
                <div className="relative z-10 mx-auto grid min-h-[calc(100svh-80px)] w-full max-w-[1600px] grid-cols-1 items-center gap-14 px-6 py-20 sm:px-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16 lg:px-16 xl:px-24">
                    {/* Hero copy */}
                    <div className="max-w-4xl">
                        {/* Eyebrow */}
                        <div className="mb-8 flex items-center gap-3">
                        
                            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-white/75 sm:text-xs">
                                Creative minds. Digital impact.
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="font-display text-[clamp(3.4rem,7.5vw,7.25rem)] font-bold leading-[0.98] tracking-[-0.075em]">
                            We Create.
                            <br />
                            <span className="text-[#F20D18]">We Market.</span>
                            <br />
                            <span className="text-white">We Build.</span>
                        </h1>

                        {/* Description */}
                        <p className="mt-8 max-w-[540px] font-sans text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                            We combine creative storytelling, powerful technology, and
                            performance-driven marketing to help ambitious brands move forward.
                        </p>

                        {/* Actions */}
                        <div className="mt-9 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:items-center">
                            <a
                                href="/contact"
                                className="group inline-flex min-h-[54px] items-center justify-center gap-3 bg-[#F20D18] px-7 font-sans text-sm font-semibold text-white transition duration-300 hover:bg-white hover:text-[#101010] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#101010]"
                            >
                                Start Your Project
                                <ArrowRight
                                    size={18}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </a>

                            <a
                                href="/portfolio"
                                className="group inline-flex min-h-[54px] items-center justify-center gap-3 border border-white/30 px-7 font-sans text-sm font-semibold text-white transition duration-300 hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                            >
                                Explore Our Work
                                <ArrowDownRight
                                    size={18}
                                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                                />
                            </a>
                        </div>


                    </div>


                    {/* Services panel: desktop */}
                    <aside className="hidden lg:block lg:w-full lg:max-w-[340px] lg:justify-self-end">
                        {/* Header */}
                        <div className="mb-5">
                            <div className="mb-3 flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-[#F20D18]" />
                                <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                                    Our services
                                </p>
                            </div>

                            <h2 className="font-display text-2xl font-semibold tracking-tight text-white">
                                Everything your brand needs<span className="text-[#F20D18]">.</span>
                            </h2>
                        </div>

                        {/* Service list */}
                        <div className="border-t border-white/20">
                            {services.map(({ icon: Icon, title, subtitle }, index) => (
                                <a
                                    key={title}
                                    href="/services"
                                    className="group flex items-center gap-4 border-b border-white/15 py-4 transition-colors duration-300 hover:bg-white/[0.04]"
                                >
                                    <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-white/[0.07] text-[#F20D18] transition-colors duration-300 group-hover:bg-[#F20D18] group-hover:text-white">
                                        <Icon size={20} strokeWidth={1.7} />
                                    </span>

                                    <span className="min-w-0 flex-1">
                                        <span className="block font-sans text-sm font-semibold leading-5 text-white">
                                            {title}
                                        </span>
                                        <span className="mt-1 block font-sans text-xs leading-4 text-white/55">
                                            {subtitle}
                                        </span>
                                    </span>

                                    <span className="font-sans text-xs text-white/30 transition-colors group-hover:text-[#F20D18]">
                                        0{index + 1}
                                    </span>
                                </a>
                            ))}
                        </div>

                        {/* Footer */}
                        <a
                            href="/services"
                            className="mt-5 flex min-h-12 items-center justify-between bg-[#F20D18] px-5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#101010]"
                        >
                            Discover all services
                            <ArrowRight size={18} />
                        </a>
                    </aside>


                </div>


            </section>
        );
    }
