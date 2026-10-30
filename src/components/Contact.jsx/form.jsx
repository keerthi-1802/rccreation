
import { useState } from "react";
import {
  ArrowUpRight,
  User,
  Mail,
  Phone,
  MessageSquare,
  Send,
  CheckCircle2,
} from "lucide-react";

const services = [
  "Website Development",
  "Digital Marketing",
  "Video Production",
  "Graphic Designing",
  "SEO Services",
  "Meta & Google Ads",
  "Software Development",
  "LMS / CMS Development",
  "Other",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "919003680296";

    const whatsappMessage = `
Hello RC Creation!

I would like to enquire about your services.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}

Message:
${formData.message}

Looking forward to hearing from you.
    `;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact-form"
      className="relative overflow-hidden bg-white py-20 text-[#101010] sm:py-24 lg:py-28"
    >
      {/* Background Details */}
      <div className="pointer-events-none absolute inset-0">

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.4) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />

        {/* Red Ambient Lights */}
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#F20D18]/[0.06] blur-[130px]" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#F20D18]/[0.06] blur-[130px]" />

      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 xl:px-20">

        {/* Section Heading */}
        <div className="mb-12 max-w-2xl lg:mb-16">

          <div className="mb-5 flex items-center gap-3">
            <span className="h-[3px] w-10 bg-[#F20D18]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-black/50 sm:text-xs">
              Let's Work Together
            </span>
          </div>

          <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            Tell Us About
            <span className="block text-[#F20D18]">
              Your Project.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-black/55 sm:text-base">
            Have an idea in mind? Share your requirements with us.
            Our team will connect with you and help turn your vision
            into something extraordinary.
          </p>

        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">

          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-between">

            <div>

              <h3 className="font-display text-2xl font-semibold leading-snug sm:text-3xl">
                Let's create something
                <span className="text-[#F20D18]"> impactful.</span>
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-black/55">
                Whether you're looking to grow your brand, build a
                website, create engaging content or launch a digital
                campaign, we're ready to help.
              </p>

              {/* Benefits */}
              <div className="mt-9 space-y-5">

                {[
                  "Creative solutions for your business",
                  "Strategies focused on real results",
                  "Dedicated support from our team",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">

                    <CheckCircle2
                      size={19}
                      className="shrink-0 text-[#F20D18]"
                    />

                    <span className="text-sm font-medium text-black/70">
                      {item}
                    </span>

                  </div>
                ))}

              </div>
            </div>

            {/* WhatsApp Information */}
            <div className="mt-12 border-l-[3px] border-[#F20D18] bg-[#F7F7F7] p-5 sm:p-6">

              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40">
                Prefer WhatsApp?
              </p>

              <h4 className="mt-2 font-display text-xl font-semibold">
                Let's chat directly.
              </h4>

              <a
                href="https://wa.me/919003680296"
                target="_blank"
                rel="noreferrer"
                className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#F20D18] transition hover:text-black"
              >
                Chat with us

                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="relative">

            {/* Decorative Corners */}
            <div className="absolute -right-2 -top-2 h-16 w-16 border-r-2 border-t-2 border-[#F20D18]" />

            <div className="absolute -bottom-2 -left-2 h-16 w-16 border-b-2 border-l-2 border-[#F20D18]" />

            {/* Form Card */}
            <form
              onSubmit={handleSubmit}
              className="relative z-10 border border-black/[0.08] bg-white p-5 shadow-[0_15px_60px_rgba(0,0,0,0.06)] sm:p-8 lg:p-10"
            >

              {/* Form Header */}
              <div className="mb-8 flex items-center justify-between">

                <div>
                  <h3 className="font-display text-xl font-semibold sm:text-2xl">
                    Send an Enquiry
                  </h3>

                  <p className="mt-2 text-xs text-black/45">
                    Fill in the details below to get started.
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center bg-[#F20D18]/10">
                  <MessageSquare
                    size={21}
                    className="text-[#F20D18]"
                  />
                </div>

              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-xs font-semibold text-black/70">
                    Full Name *
                  </label>

                  <div className="relative">

                    <User
                      size={17}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-black/30"
                    />

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      autoComplete="name"
                      className="h-12 w-full border border-black/10 bg-[#F8F8F8] pl-11 pr-4 text-sm text-black outline-none transition placeholder:text-black/30 focus:border-[#F20D18] focus:bg-white"
                    />

                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold text-black/70">
                    Email Address *
                  </label>

                  <div className="relative">

                    <Mail
                      size={17}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-black/30"
                    />

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      required
                      autoComplete="email"
                      className="h-12 w-full border border-black/10 bg-[#F8F8F8] pl-11 pr-4 text-sm text-black outline-none transition placeholder:text-black/30 focus:border-[#F20D18] focus:bg-white"
                    />

                  </div>
                </div>

              </div>

              {/* Phone & Service */}
              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-xs font-semibold text-black/70">
                    Phone Number *
                  </label>

                  <div className="relative">

                    <Phone
                      size={17}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-black/30"
                    />

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      required
                      autoComplete="tel"
                      className="h-12 w-full border border-black/10 bg-[#F8F8F8] pl-11 pr-4 text-sm text-black outline-none transition placeholder:text-black/30 focus:border-[#F20D18] focus:bg-white"
                    />

                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold text-black/70">
                    Interested Service *
                  </label>

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="h-12 w-full appearance-none border border-black/10 bg-[#F8F8F8] px-4 text-sm text-black outline-none transition focus:border-[#F20D18] focus:bg-white"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}

                  </select>
                </div>

              </div>

              {/* Message */}
              <div className="mt-5">

                <label className="mb-2 block text-xs font-semibold text-black/70">
                  Tell Us About Your Project *
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Write a few details about your project or requirements..."
                  className="w-full resize-none border border-black/10 bg-[#F8F8F8] p-4 text-sm leading-6 text-black outline-none transition placeholder:text-black/30 focus:border-[#F20D18] focus:bg-white"
                />

              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group mt-6 flex min-h-14 w-full items-center justify-center gap-3 bg-[#F20D18] px-6 text-sm font-semibold text-white transition duration-300 hover:bg-[#101010]"
              >
                Send Message on WhatsApp

                <Send
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />

              </button>

              <p className="mt-4 text-center text-[10px] leading-5 text-black/40">
                Your details will be shared with RC Creation through WhatsApp.
              </p>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
