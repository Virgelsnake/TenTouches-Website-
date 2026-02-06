import { IPhoneMockup } from "@/components/iphone-mockup";
import { Reveal } from "@/components/reveal";
import { Eye, Gauge, Smartphone } from "lucide-react";

export function SolutionSection() {
  return (
    <section
      className="relative py-28 md:py-40 overflow-hidden"
      aria-label="Pipeline visibility"
    >
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Copy — left on desktop */}
          <div className="order-2 lg:order-1">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-widest text-tt-indigo mb-4">
                Pipeline You Can Feel
              </p>
            </Reveal>

            <Reveal delay={1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                See your deals the way they{" "}
                <span className="gradient-text">actually</span> stand.
              </h2>
            </Reveal>

            <Reveal delay={2}>
              <p className="text-lg text-white/55 leading-relaxed mb-10 max-w-lg">
                No spreadsheets. No fake probabilities. Card-based opportunities
                with honest confidence scores and real deal values — glanceable
                in under ten seconds, designed for life between meetings.
              </p>
            </Reveal>

            <Reveal delay={3}>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-tt-indigo/10 flex items-center justify-center">
                    <Eye size={18} className="text-tt-indigo" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-white mb-1">Instant pipeline awareness</p>
                    <p className="text-sm text-white/45">What&apos;s live, what&apos;s big, what&apos;s close, what&apos;s weak — no filtering required.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-tt-cyan/10 flex items-center justify-center">
                    <Gauge size={18} className="text-tt-cyan" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-white mb-1">Confidence, not false precision</p>
                    <p className="text-sm text-white/45">A human progress ring replaces meaningless percentages. That&apos;s how salespeople actually think.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-tt-success/10 flex items-center justify-center">
                    <Smartphone size={18} className="text-tt-success" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-white mb-1">Built for your pocket</p>
                    <p className="text-sm text-white/45">In a lift, before a call, at the end of the day. Traditional CRMs assume a desk — this assumes reality.</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Phone — right on desktop */}
          <Reveal className="order-1 lg:order-2">
            <div className="flex justify-center lg:justify-end">
              <div className="w-[260px] md:w-[300px] float-medium">
                <IPhoneMockup
                  src="/screenshots/opportunities.png"
                  alt="Ten Touches opportunities dashboard showing deal cards with confidence rings and values"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
