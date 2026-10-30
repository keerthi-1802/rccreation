
import {
  ArrowUpRight,
  ArrowRight,
  Clock3,
  BookOpen,
  MonitorPlay,
  Palette,
  Megaphone,
} from "lucide-react";

const courses = [
  {
    number: "01",
    category: "Marketing",
    title: "Digital Marketing",
    description:
      "Master digital marketing strategies to grow brands, reach audiences, and generate leads through online platforms.",
    duration: "3 Months",
    mode: "Online / Offline",
    icon: Megaphone,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85",
    topics: ["SEO", "Social Media Marketing", "Google Ads", "Meta Ads"],
  },
  {
    number: "02",
    category: "Creative Production",
    title: "Video Editing",
    description:
      "Learn professional video editing techniques and create engaging videos for brands, social media, and businesses.",
    duration: "3 Months",
    mode: "Online / Offline",
    icon: MonitorPlay,
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=85",
    topics: ["Premiere Pro", "After Effects", "Reels Editing", "Color Grading"],
  },
  {
    number: "03",
    category: "Visual Design",
    title: "Graphic Designing",
    description:
      "Develop your creative skills and learn to design impactful visuals, brand identities, and digital content.",
    duration: "3 Months",
    mode: "Online / Offline",
    icon: Palette,
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1000&q=85",
    topics: ["Photoshop", "Illustrator", "Branding", "Social Media Design"],
  },
];

export default function AvailableCourses() {
  return (
    <section
      id="courses"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Background Decoration */}
      <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-red-50 blur-3xl" />
      <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-gray-100 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="mb-14 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#F20D18]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F20D18]">
                Explore Our Programs
              </span>
            </div>

            <h2 className="max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight text-[#111111] sm:text-5xl lg:text-6xl">
              Learn Skills.
              <br />
              <span className="text-[#F20D18]">Build Your Future.</span>
            </h2>
          </div>

          <div className="max-w-md lg:pb-2">
            <p className="text-base leading-8 text-gray-600">
              Explore industry-focused courses designed to help you develop
              practical skills, unlock your creativity, and prepare for
              exciting career opportunities.
            </p>
          </div>
        </div>

        {/* Course Cards */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => {
            const Icon = course.icon;

            return (
              <article
                key={course.number}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-red-200 hover:shadow-2xl hover:shadow-red-100/50"
              >
                {/* Image */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-black/30 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                    {course.category}
                  </span>

                  <span className="absolute bottom-5 right-5 text-5xl font-bold text-white/50">
                    {course.number}
                  </span>

                  <div className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F20D18] text-white shadow-lg">
                    <Icon size={23} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="mb-3 text-2xl font-bold text-[#111111] transition-colors group-hover:text-[#F20D18]">
                    {course.title}
                  </h3>

                  <p className="mb-6 text-sm leading-7 text-gray-500">
                    {course.description}
                  </p>

                  {/* Course Topics */}
                  <div className="mb-7">
                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
                      What You'll Learn
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {course.topics.map((topic) => (
                        <span
                          key={topic}
                          className="rounded-md bg-gray-100 px-3 py-2 text-xs font-medium text-gray-700 transition-colors group-hover:bg-red-50 group-hover:text-[#F20D18]"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Course Info */}
                  <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-gray-100 py-5">
                    <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
                      <Clock3 size={15} className="text-[#F20D18]" />
                      {course.duration}
                    </div>

                    <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
                      <BookOpen size={15} className="text-[#F20D18]" />
                      {course.mode}
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href="/contact"
                    className="flex items-center justify-between rounded-xl bg-[#111111] px-5 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#F20D18]"
                  >
                    Enquire Now
                    <ArrowUpRight
                      size={19}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-gray-200 pt-8 sm:flex-row">
          <p className="text-sm text-gray-500">
            Not sure which course is right for you?
            <span className="ml-1 font-semibold text-[#111111]">
              Let's help you choose.
            </span>
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#F20D18] transition-all hover:gap-4"
          >
            Talk to Our Team
            <ArrowRight size={17} />
          </a>
        </div>

      </div>
    </section>
  );
}
