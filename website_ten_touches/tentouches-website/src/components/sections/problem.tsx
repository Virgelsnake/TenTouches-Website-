"use client";

import { IPhoneMockup } from "@/components/iphone-mockup";
import { Reveal } from "@/components/reveal";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { Search, Heart, Star, Mic } from "lucide-react";

/* ── Yellow star SVG matching the app's gold star icons exactly ── */
function GoldStar({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="gold-star" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFD60A" />
          <stop offset="100%" stopColor="#FFB800" />
        </linearGradient>
      </defs>
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        fill="url(#gold-star)"
        stroke="#E6A800"
        strokeWidth="0.5"
      />
    </svg>
  );
}

const FOUR_STARS = [
  { label: "Testimonials", target: 12 },
  { label: "Referrals", target: 8 },
  { label: "Feedback", target: 15 },
  { label: "Repeat Business", target: 6 },
];

export function ProblemSection() {
  const { ref: starsRef, progress: starsProgress } = useScrollProgress(0.85, 0.15);

  return (
    <section
      id="features"
      className="relative z-0 py-28 md:py-40 overflow-hidden"
      aria-label="Client relationships"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-tt-slate/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Client detail phone */}
          <Reveal>
            <div className="flex justify-center lg:justify-start">
              <div className="w-[260px] md:w-[300px] float-medium">
                <IPhoneMockup
                  src="/screenshots/client-detail.png"
                  alt="Ten Touches client detail screen showing relationship data, business info, personal interests, and quality scores"
                />
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <div>
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-widest text-tt-cyan mb-4">
                Relationship Memory
              </p>
            </Reveal>

            <Reveal delay={1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Not contacts.{" "}
                <span className="gradient-text">Relationships.</span>
              </h2>
            </Reveal>

            <Reveal delay={2}>
              <p className="text-lg text-white/55 leading-relaxed mb-8 max-w-lg">
                Every client card captures what matters — their business, their
                interests, their dog&apos;s name. Tap to select sports, pets, and
                personal details, or speak naturally and let on-device AI do the rest.
              </p>
            </Reveal>

            {/* Voice & AI input callout */}
            <Reveal delay={2}>
              <div className="glass-card p-5 rounded-2xl mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-tt-cyan/12 flex items-center justify-center">
                    <Mic size={20} className="text-tt-cyan" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-white mb-1">
                      Voice-powered by Apple Intelligence™
                    </p>
                    <p className="text-sm text-white/50 leading-relaxed">
                      Speak naturally — &ldquo;Add Sarah, she&apos;s into rugby and has
                      two dogs&rdquo; — and on-device AI structures it instantly. Fast,
                      powerful, and completely private. Nothing leaves your iPhone.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Four Stars — scroll-driven counters (up on scroll down, back on scroll up) */}
            <Reveal delay={3}>
              <div ref={starsRef} className="grid grid-cols-4 gap-2 mb-10">
                {FOUR_STARS.map((star) => (
                  <div
                    key={star.label}
                    className="flex flex-col items-center"
                  >
                    <div className="relative flex items-center justify-center">
                      <GoldStar className="w-20 h-20 md:w-24 md:h-24 drop-shadow-[0_2px_8px_rgba(255,214,10,0.35)]" />
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xl md:text-2xl font-black tabular-nums text-tt-navy">
                          {Math.round(starsProgress * star.target)}
                        </span>
                      </span>
                    </div>
                    <p className="text-[10px] md:text-xs font-medium text-white/55 mt-1.5 leading-tight text-center">
                      {star.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={4}>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-tt-cyan/10 flex items-center justify-center">
                    <Search size={18} className="text-tt-cyan" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-white mb-1">Search by memory, not ID</p>
                    <p className="text-sm text-white/45">Find people by their team, their pet, their company — however your brain remembers them.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center">
                    <Heart size={18} className="text-pink-400" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-white mb-1">Personal, not corporate</p>
                    <p className="text-sm text-white/45">Sports, pets, interests — the details that turn a sales call into a real conversation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                    <Star size={18} className="text-amber-400" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-white mb-1">Quality scoring that guides</p>
                    <p className="text-sm text-white/45">Testimonials, referrals, feedback, repeat business — see where each relationship can grow.</p>
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
