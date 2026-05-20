export function AboutSection() {
  return (
    <section className="relative py-24 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900/50 px-4 py-1 text-sm text-neutral-400">
            About Digvian
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Building Digital Experiences That{" "}
            <span className="text-neutral-400">
              Drive Growth
            </span>
          </h2>

          <p className="mt-6 text-lg text-neutral-400 leading-relaxed">
            Digvian is an AI-powered web development and digital solutions
            company helping startups, businesses, creators, and brands
            establish, automate, and scale their digital presence through
            modern technology and strategic execution.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-neutral-800 bg-neutral-900/40 p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Who We Are
              </h3>

              <p className="text-neutral-400 leading-relaxed">
                At Digvian, we combine technology, AI, and digital growth
                strategies to help businesses transform ideas into scalable
                digital products. From modern websites and SaaS applications
                to AI automation and marketing systems, we deliver complete
                end-to-end digital solutions.
              </p>
            </div>

            <div className="rounded-3xl border border-neutral-800 bg-neutral-900/40 p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-white mb-4">
                What We Do
              </h3>

              <ul className="space-y-3 text-neutral-400">
                <li>• High-performance Website Development</li>
                <li>• SaaS Product Development</li>
                <li>• AI-Powered Business Solutions</li>
                <li>• Branding & UI/UX Design</li>
                <li>• SEO & Digital Marketing</li>
                <li>• Mobile App Development</li>
              </ul>
            </div>
          </div>

          {/* Right Side Stats / Highlights */}
          <div className="grid grid-cols-2 gap-5">
            {[
              {
                title: "AI-Powered",
                description: "Smart automation and modern AI integration",
              },
              {
                title: "Modern Stack",
                description: "Built with scalable and future-ready technologies",
              },
              {
                title: "Startup Focused",
                description: "Helping startups launch and grow faster",
              },
              {
                title: "End-to-End",
                description: "From idea to launch and beyond",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-neutral-800 bg-neutral-900/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-neutral-700 hover:scale-[1.02]"
              >
                <h4 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}