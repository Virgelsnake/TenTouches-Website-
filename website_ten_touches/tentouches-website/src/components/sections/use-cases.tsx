import { IPhoneMockup } from "@/components/iphone-mockup";
import { Reveal } from "@/components/reveal";
import { TrendingUp, Target, Lightbulb } from "lucide-react";

export function UseCasesSection() {
  return (
    <section
      id="use-cases"
      className="relative py-28 md:py-40 overflow-hidden"
      aria-label="Behavioural intelligence"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-tt-slate/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Phone — left */}
          <Reveal>
            <div className="flex justify-center lg:justify-start">
              <div className="w-[260px] md:w-[300px] float-medium">
                <IPhoneMockup
                  src="/screenshots/optimise-dashboard.png"
                  alt="Ten Touches Optimise dashboard showing activity targets, win rates by touch type, and adoption insights"
                />
              </div>
            </div>
          </Reveal>

          {/* Copy — right */}
          <div>
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-widest text-purple-400 mb-4">
                Sell Smarter
              </p>
            </Reveal>

            <Reveal delay={1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Learn what works.{" "}
                <span className="gradient-text">Get better.</span>
              </h2>
            </Reveal>

            <Reveal delay={2}>
              <p className="text-lg text-white/55 leading-relaxed mb-10 max-w-lg">
                The Optimise dashboard isn&apos;t analytics for your manager — it&apos;s
                behavioural intelligence for you. See which actions win deals,
                what works at each stage, and how to close faster with less
                effort. Self-coaching, not surveillance.
              </p>
            </Reveal>

            <Reveal delay={3}>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                    <TrendingUp size={18} className="text-purple-400" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-white mb-1">Pick your winners</p>
                    <p className="text-sm text-white/45">See which touch types perform best when you use them. &ldquo;When <em>you</em> do this, it works.&rdquo;</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-tt-cyan/10 flex items-center justify-center">
                    <Target size={18} className="text-tt-cyan" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-white mb-1">Match the moment</p>
                    <p className="text-sm text-white/45">The same action can succeed or fail depending on timing. See what opens deals and what closes them.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-tt-warning/10 flex items-center justify-center">
                    <Lightbulb size={18} className="text-tt-warning" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-white mb-1">Activity cadence, not quotas</p>
                    <p className="text-sm text-white/45">Set your own rhythm. Track consistency without pressure. Sales success is about cadence, not spikes.</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
