
import { Quote, Star, ArrowUpRight } from "lucide-react";

const testimonials = [
  {
    name: "Client Name",
    role: "Founder, Company Name",
    initials: "CN",
    service: "WEB DEVELOPMENT",
    rating: 5,
    review:
      "RC Creation understood our vision and transformed our ideas into a professional digital experience. The team was creative, responsive, and detail-oriented.",
  },
  {
    name: "Client Name",
    role: "Marketing Manager, Company Name",
    initials: "CN",
    service: "DIGITAL MARKETING",
    rating: 5,
    review:
      "From strategy to execution, the team made the entire process smooth. Their creative approach helped us present our brand more effectively.",
  },
  {
    name: "Client Name",
    role: "Business Owner, Company Name",
    initials: "CN",
    service: "CREATIVE PRODUCTION",
    rating: 5,
    review:
      "A collaborative team that listened to our requirements and delivered with care. We appreciated their communication and attention to detail.",
  },
];

const clientLogos = [
  "CLIENT ONE",
  "CLIENT TWO",
  "CLIENT THREE",
  "CLIENT FOUR",
  "CLIENT FIVE",
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="overflow-hidden bg-[#101010] px-5 py-20 text-white sm:px-8 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 flex flex-col justify-between gap-6 border-b border-white/15 pb-8 md:mb-16 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#F20D18]">
              Testimonials 
            </p>

            <h2 className="font-display text-4xl font-bold uppercase leading-[1.05] sm:text-5xl lg:text-7xl">
              Don't Take
              <br />
              <span className="text-[#F20D18]">Our Word.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-white/55 sm:text-base">
            The best measure of our work is the people we work with.
            Here's what our clients have to say.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <article
              key={`${item.name}-${index}`}
              className={`group flex flex-col border-b border-white/15 p-6 transition-colors duration-300 hover:bg-white/[0.03] sm:p-8 lg:border-b-0 ${
                index !== 0 ? "lg:border-l lg:border-white/15" : ""
              }`}
            >
              {/* Top row */}
              <div className="mb-8 flex items-center justify-between">
                <span className="text-xs font-medium tracking-[0.2em] text-white/35">
                  REVIEW / 0{index + 1}
                </span>

                <Quote
                  size={28}
                  strokeWidth={1.3}
                  className="text-[#F20D18] transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Rating */}
              <div
                className="mb-5 flex gap-1"
                aria-label={`${item.rating} out of 5 stars`}
              >
                {Array.from({ length: item.rating }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    size={14}
                    fill="#F20D18"
                    stroke="#F20D18"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="flex-1 text-base leading-8 text-white/75">
                “{item.review}”
              </p>

              {/* Service label */}
              <div className="mt-8 border-t border-white/10 pt-5">
                <span className="inline-block border border-white/15 px-3 py-1.5 text-[10px] font-semibold tracking-[0.16em] text-white/50">
                  {item.service}
                </span>
              </div>

              {/* Client info */}
              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#F20D18] font-display text-sm font-bold text-white">
                  {item.initials}
                </div>

                <div className="min-w-0">
                  <h3 className="truncate text-sm font-semibold text-white">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-white/40">
                    {item.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
