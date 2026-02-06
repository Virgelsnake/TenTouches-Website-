"use client";

import { IPhoneMockup } from "@/components/iphone-mockup";
import { Reveal } from "@/components/reveal";
import { Search, Brain, Dog, Dribbble, Heart } from "lucide-react";

const MEMORY_EXAMPLES = [
  { icon: Dribbble, label: "Football fan", color: "#34C759" },
  { icon: Dog, label: "Has a dog", color: "#FF9500" },
  { icon: Heart, label: "Loves F1", color: "#FF2D55" },
];

export function SearchByMemorySection() {
  return (
    <section
      className="relative py-28 md:py-40 overflow-hidden"
      aria-label="Search by memory"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-tt-slate/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Copy — left */}
          <div className="order-2 lg:order-1">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-widest text-tt-success mb-4">
                How Your Mind Works
              </p>
            </Reveal>

            <Reveal delay={1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Search by{" "}
                <span className="gradient-text">memory,</span> not by name.
              </h2>
            </Reveal>

            <Reveal delay={2}>
              <p className="text-lg text-white/55 leading-relaxed mb-8 max-w-lg">
                You don&apos;t think in alphabetical order. You remember that someone
                supports Manchester United, rides a motorbike, or has a cat called
                Whiskers. Ten Touches lets you find anyone the way your brain
                actually works — by the personal details that stick.
              </p>
            </Reveal>

            <Reveal delay={2}>
              <div className="flex flex-wrap gap-3 mb-10">
                {MEMORY_EXAMPLES.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-white/[0.03]"
                    >
                      <Icon size={16} style={{ color: item.color }} />
                      <span className="text-sm font-medium text-white/70">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={3}>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-tt-success/10 flex items-center justify-center">
                    <Search size={18} className="text-tt-success" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-white mb-1">Tap to select, instant to find</p>
                    <p className="text-sm text-white/45">Sports, pets, hobbies, family — tap the icons that matter and find anyone in seconds.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-tt-cyan/10 flex items-center justify-center">
                    <Brain size={18} className="text-tt-cyan" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-white mb-1">Not a phone book — a relationship map</p>
                    <p className="text-sm text-white/45">Forget scrolling through surnames. Search &ldquo;dog&rdquo; and find every client who has one. Search &ldquo;F1&rdquo; and start a conversation that matters.</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Sports/pets screenshot — right, prominent */}
          <Reveal className="order-1 lg:order-2">
            <div className="flex justify-center">
              <div className="w-[280px] md:w-[340px] float-medium">
                <IPhoneMockup
                  src="/screenshots/sports-pets-family.png"
                  alt="Ten Touches new client screen showing sports, pets, and personal interest selection — Football, F1, Motorbike, Dog, and Cat selected"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
