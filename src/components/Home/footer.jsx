import {
    MapPin,
    Phone,
    Mail,
    ArrowUpRight,
} from "lucide-react";

import logo from "../../assets/logo/rc.png";
import logoWhite from "../../assets/logo/km.gif";

const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
];

const services = [
    "Website Development",
    "Software Development",
    "Digital Marketing",
    "Video Production",
    "SEO & Meta Ads",
    "LMS & CMS Solutions",
];

const socialLinks = [
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "Facebook", href: "https://www.facebook.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "YouTube", href: "https://www.youtube.com/" },
];

export default function Footer() {
    return (
        <footer
            className="relative overflow-hidden border-t border-white/10 bg-[#0A0A0B] text-white"
        >
            {/* Ambient background accents */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 -top-40 h-96 w-96 rounded-full bg-[#F20D18]/10 blur-[120px]"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-40 left-0 h-80 w-80 rounded-full bg-[#F20D18]/5 blur-[100px]"
            />

            <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14 xl:px-16">

                {/* Main footer columns */}
                <div className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_1fr_1.15fr] lg:gap-12 lg:py-20 xl:gap-16">

                    {/* Brand section */}
                    <div className="min-w-0">
                        {/* Both logos in one row */}
                        <div className="flex items-center gap-4 sm:gap-5">
                            <a
                                href="/"
                                aria-label="RC Creation home"
                                className="flex min-w-0 flex-1 items-center"
                            >
                                <img
                                    src={logo}
                                    alt="RC Creation"
                                    className="h-16 w-full object-contain object-left sm:h-20 lg:h-[88px]"
                                />
                            </a>

                            <span className="h-12 w-px shrink-0 bg-white/20 sm:h-16" />

                            <a
                                href="/"
                                aria-label="Second brand home"
                                className="flex min-w-0 flex-1 items-center"
                            >
                                <img
                                    src={logoWhite}
                                    alt="Second brand"
                                    className="h-20 w-full object-contain object-left sm:h-16 lg:h-[120px]"
                                />
                            </a>
                        </div>

                        <div className="my-6 h-px w-16 bg-[#F20D18]" />

                        <p className="max-w-sm text-base leading-8 text-white/65">
                            Creative thinking. Powerful technology. Meaningful digital
                            experiences that help your business grow.
                        </p>

                        {/* Social links */}
                        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-sm font-medium text-white/55 transition-colors duration-200 hover:text-[#F20D18]"
                                >
                                    {social.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h3 className="mb-7 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.16em] text-white sm:text-base">
                            Quick Links
                            <span className="h-2 w-2 shrink-0 bg-[#F20D18]" />
                        </h3>

                        <ul className="space-y-5">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="inline-block text-base text-white/60 transition-all duration-200 hover:translate-x-1 hover:text-white"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="mb-7 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.16em] text-white sm:text-base">
                            Our Services
                            <span className="h-2 w-2 shrink-0 bg-[#F20D18]" />
                        </h3>

                        <ul className="space-y-5">
                            {services.map((service) => (
                                <li key={service}>
                                    <a
                                        href="/services"
                                        className="inline-block text-base text-white/60 transition-all duration-200 hover:translate-x-1 hover:text-white"
                                    >
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-7 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.16em] text-white sm:text-base">
                            Contact Us
                            <span className="h-2 w-2 shrink-0 bg-[#F20D18]" />
                        </h3>

                        <p className="mb-7 text-base leading-7 text-white/55">
                            Have a project in mind? Let's discuss how we can help your
                            business move forward.
                        </p>

                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <MapPin
                                    size={21}
                                    strokeWidth={1.7}
                                    className="mt-1 shrink-0 text-[#F20D18]"
                                />
                                <span className="text-base leading-7 text-white/65">
                                    Your Office Address,
                                    <br />
                                    Your City, India
                                </span>
                            </li>

                            <li className="flex items-center gap-4">
                                <Phone
                                    size={21}
                                    strokeWidth={1.7}
                                    className="shrink-0 text-[#F20D18]"
                                />
                                <a
                                    href="tel:+910000000000"
                                    className="break-words text-base text-white/65 transition-colors hover:text-white"
                                >
                                    +91 00000 00000
                                </a>
                            </li>

                            <li className="flex items-start gap-4">
                                <Mail
                                    size={21}
                                    strokeWidth={1.7}
                                    className="mt-1 shrink-0 text-[#F20D18]"
                                />
                                <a
                                    href="mailto:hello@yourcompany.com"
                                    className="break-all text-base leading-7 text-white/65 transition-colors hover:text-white"
                                >
                                    hello@yourcompany.com
                                </a>
                            </li>
                        </ul>

                        <a
                            href="/contact"
                            className="mt-8 inline-flex items-center gap-3 border-b border-[#F20D18] pb-2 text-base font-semibold text-white transition-colors duration-200 hover:text-[#F20D18]"
                        >
                            Let's talk about your project
                            <ArrowUpRight size={20} />
                        </a>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col gap-5 border-t border-white/15 py-7 md:flex-row md:items-center md:justify-between">
                    <p className="text-sm leading-6 text-white/45">
                        © {new Date().getFullYear()} RC Creation. All rights reserved.
                    </p>

                    <div className="flex flex-wrap gap-x-7 gap-y-3">
                        <a
                            href="/privacy-policy"
                            className="text-sm text-white/45 transition-colors hover:text-white"
                        >
                            Privacy Policy
                        </a>

                        <a
                            href="/terms"
                            className="text-sm text-white/45 transition-colors hover:text-white"
                        >
                            Terms & Conditions
                        </a>
                    </div>


                </div>
            </div>
        </footer>
    );
}
