import { IPhoneMockup } from "@/components/iphone-mockup";
import { Reveal } from "@/components/reveal";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative z-0 min-h-screen flex items-center overflow-hidden pt-24 pb-16"
      aria-label="Introduction"
    >
      {/* Background orbs */}
      <div className="gradient-orb w-[600px] h-[600px] bg-tt-cyan/15 -top-48 left-1/2 -translate-x-1/2" />
      <div className="gradient-orb w-[500px] h-[500px] bg-tt-indigo/20 bottom-0 -right-40" />
      <div className="gradient-orb w-[400px] h-[400px] bg-tt-cyan/10 bottom-20 -left-40" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Copy */}
          <div className="text-center lg:text-left">
            <Reveal delay={1}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight mb-6">
                Relationships close deals.{" "}
                <br className="hidden sm:block" />
                <span className="gradient-text">Ten Touches</span>{" "}
                <br className="hidden sm:block" />
                remembers them all.
              </h1>
            </Reveal>

            <Reveal delay={2}>
              <p className="text-lg md:text-xl text-white/55 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                The mobile CRM for salespeople who sell through trust, not
                scripts. Capture contacts by voice, follow up with intent, and
                see which actions actually win deals.
              </p>
            </Reveal>

            <Reveal delay={3}>
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
                <a
                  href="/beta"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-tt-cyan to-tt-indigo px-8 py-4 text-base font-semibold text-white shadow-lg shadow-tt-cyan/25 transition-all hover:shadow-xl hover:shadow-tt-cyan/35 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Join Beta
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right: 3-phone hero composition */}
          <Reveal delay={2}>
            <div className="relative flex items-center justify-center lg:justify-end">
              {/* Back-left phone */}
              <div className="absolute -left-4 sm:left-4 lg:-left-8 top-8 w-[180px] sm:w-[200px] opacity-60 -rotate-6 float-slow hidden sm:block">
                <IPhoneMockup
                  src="/screenshots/reminders.png"
                  alt="Ten Touches reminders screen showing action-based follow-ups"
                />
              </div>

              {/* Centre phone (hero) */}
              <div className="relative z-10 w-[240px] sm:w-[260px] md:w-[280px] float-medium">
                <IPhoneMockup
                  src="/screenshots/opportunities.png"
                  alt="Ten Touches opportunities dashboard showing your live pipeline"
                  priority
                />
              </div>

              {/* Back-right phone */}
              <div className="absolute -right-20 sm:-right-12 lg:-right-28 top-8 w-[180px] sm:w-[200px] opacity-75 rotate-6 float-slow hidden sm:block">
                <IPhoneMockup
                  src="/screenshots/client-detail.png"
                  alt="Ten Touches client detail screen with relationship data"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
