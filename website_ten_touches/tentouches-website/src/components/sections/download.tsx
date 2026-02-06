import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { IPhoneMockup } from "@/components/iphone-mockup";

export function DownloadSection() {
  return (
    <section
      id="download"
      className="relative py-28 md:py-40 overflow-hidden"
      aria-label="Download"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-tt-indigo/10 to-tt-cyan/5" />
      <div className="gradient-orb w-[500px] h-[500px] bg-tt-cyan/15 -bottom-32 left-1/3" />
      <div className="gradient-orb w-[400px] h-[400px] bg-tt-indigo/15 -top-32 right-1/4" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <Reveal>
              <div className="relative inline-block mb-8">
                <div className="absolute -inset-3 bg-gradient-to-r from-tt-cyan/20 to-tt-indigo/20 rounded-[22px] blur-lg" />
                <Image
                  src="/app-icon.png"
                  alt="Ten Touches app icon"
                  width={80}
                  height={80}
                  className="relative rounded-[18px] shadow-xl"
                />
              </div>
            </Reveal>

            <Reveal delay={1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Start remembering{" "}
                <span className="gradient-text">everyone</span>.
              </h2>
            </Reveal>

            <Reveal delay={2}>
              <p className="text-lg text-white/50 max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed">
                Ten Touches is coming to iOS. Be among the first to build stronger
                relationships, follow up with confidence, and sell smarter.
              </p>
            </Reveal>

            <Reveal delay={3}>
              <Link
                href="/beta"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-tt-cyan to-tt-indigo px-10 py-4 text-lg font-semibold text-white shadow-lg shadow-tt-cyan/25 transition-all hover:shadow-xl hover:shadow-tt-cyan/35 hover:scale-[1.02] active:scale-[0.98]"
                aria-label="Join the Ten Touches beta test"
              >
                Join the Beta Test Today
              </Link>
            </Reveal>

            <Reveal delay={4}>
              <p className="text-xs text-white/25 mt-6">
                Requires iOS 17.0 or later. iPhone only.
              </p>
            </Reveal>
          </div>

          {/* Phone cluster */}
          <Reveal delay={2}>
            <div className="hidden lg:flex justify-center relative">
              <div className="absolute -left-6 top-12 w-[200px] opacity-50 -rotate-6 float-slow">
                <IPhoneMockup
                  src="/screenshots/client-detail.png"
                  alt="Ten Touches client detail"
                />
              </div>
              <div className="relative z-10 w-[240px] float-medium">
                <IPhoneMockup
                  src="/screenshots/reminders.png"
                  alt="Ten Touches reminders"
                />
              </div>
              <div className="absolute -right-6 top-12 w-[200px] opacity-50 rotate-6 float-slow">
                <IPhoneMockup
                  src="/screenshots/optimise-dashboard.png"
                  alt="Ten Touches Optimise dashboard"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
