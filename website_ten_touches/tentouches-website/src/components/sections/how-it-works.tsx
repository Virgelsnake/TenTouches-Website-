"use client";

import { IPhoneMockup } from "@/components/iphone-mockup";
import { Reveal } from "@/components/reveal";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { ShieldCheck, Mic, BarChart } from "lucide-react";

const STAGES = [
  { label: "Prospect", fraction: 0.25, color: "#FF3B30" },
  { label: "Proposal", fraction: 0.5, color: "#FF9500" },
  { label: "PO", fraction: 0.75, color: "#00D4FF" },
  { label: "Paid", fraction: 1, color: "#34C759" },
];

const REVENUE_STEPS = [4500, 9000, 13500, 18000];

/** Interpolate red → amber → green based on 0–1 progress */
function getBarColor(p: number) {
  if (p <= 0.5) {
    const t = p / 0.5;
    return `rgb(${255},${Math.round(59 + 90 * t)},${Math.round(48 - 48 * t)})`;
  }
  const t = (p - 0.5) / 0.5;
  return `rgb(${Math.round(255 - 203 * t)},${Math.round(149 + 50 * t)},${Math.round(89 * t)})`;
}

export function HowItWorksSection() {
  const { ref: sectionRef, progress } = useScrollProgress(0.85, 0.1);

  // Map scroll progress to revenue step
  const stepIndex = Math.min(
    REVENUE_STEPS.length - 1,
    Math.floor(progress * REVENUE_STEPS.length)
  );
  const sliderProgress = (stepIndex + 1) / REVENUE_STEPS.length;
  const value = REVENUE_STEPS[stepIndex];
  const barColor = getBarColor(sliderProgress);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative py-28 md:py-40 overflow-hidden"
      aria-label="Honest pipeline"
    >
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Copy — left */}
          <div className="order-2 lg:order-1">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-widest text-tt-warning mb-4">
                Honest Revenue
              </p>
            </Reveal>

            <Reveal delay={1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                The truth about every deal.{" "}
                <span className="gradient-text">Early enough to act.</span>
              </h2>
            </Reveal>

            <Reveal delay={2}>
              <p className="text-lg text-white/55 leading-relaxed mb-8 max-w-lg">
                Total value versus risked revenue, side by side. A four-stage
                model anyone can understand — Prospect, Proposal, PO, Paid — with
                voice capture right where you need it, the moment after a call.
              </p>
            </Reveal>

            {/* Scroll-driven revenue slider in glass card with legend at bottom */}
            <Reveal delay={2}>
              <div className="glass-card p-6 rounded-2xl mb-10">
                {/* Value display */}
                <div className="flex items-baseline justify-between mb-3">
                  <span
                    className="text-3xl md:text-4xl font-bold tabular-nums transition-colors duration-200"
                    style={{ color: barColor }}
                  >
                    £{value.toLocaleString("en-GB")}
                  </span>
                  <span className="text-sm text-white/40">risked revenue</span>
                </div>

                {/* Slider track */}
                <div className="relative h-3 rounded-full bg-white/8 overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 rounded-full transition-all duration-300 ease-out"
                    style={{
                      width: `${sliderProgress * 100}%`,
                      background: `linear-gradient(90deg, #FF3B30 0%, ${barColor} 100%)`,
                    }}
                  />
                  <div
                    className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-2 border-white shadow-lg transition-all duration-300 ease-out"
                    style={{
                      left: `calc(${sliderProgress * 100}% - 10px)`,
                      background: barColor,
                    }}
                  />
                </div>

                {/* Step markers + stage legend aligned in a single grid */}
                <div className="grid grid-cols-4 mt-2 mb-0">
                  {REVENUE_STEPS.map((step, i) => (
                    <span
                      key={step}
                      className={`text-xs tabular-nums text-center ${
                        i <= stepIndex ? "text-white/60" : "text-white/20"
                      }`}
                    >
                      £{(step / 1000).toFixed(1)}k
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-4 pt-3 mt-3 border-t border-white/6">
                  {STAGES.map((stage) => (
                    <span
                      key={stage.label}
                      className="text-xs font-medium text-white/50 text-center"
                    >
                      {stage.label}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={3}>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-tt-warning/10 flex items-center justify-center">
                    <ShieldCheck size={18} className="text-tt-warning" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-white mb-1">Revenue you can believe</p>
                    <p className="text-sm text-white/45">&pound;18k potential vs &pound;4.5k probable — you can&apos;t lie to yourself on this screen.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-tt-cyan/10 flex items-center justify-center">
                    <Mic size={18} className="text-tt-cyan" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-white mb-1">Voice notes at the point of truth</p>
                    <p className="text-sm text-white/45">Capture objections, hesitations, and next steps by speaking — no laptop, no lost nuance.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-tt-indigo/10 flex items-center justify-center">
                    <BarChart size={18} className="text-tt-indigo" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-white mb-1">Simple mental model</p>
                    <p className="text-sm text-white/45">&ldquo;We&apos;re at proposal, so it&apos;s worth half.&rdquo; No jargon, no probability theatre.</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Phone — right */}
          <Reveal className="order-1 lg:order-2">
            <div className="flex justify-center lg:justify-end">
              <div className="w-[260px] md:w-[300px] float-medium">
                <IPhoneMockup
                  src="/screenshots/opportunity-detail.png"
                  alt="Ten Touches opportunity detail showing risked revenue, confidence bar, four-stage progress, and voice input"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
