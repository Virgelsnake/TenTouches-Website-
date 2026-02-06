"use client";

import { IPhoneMockup } from "@/components/iphone-mockup";
import { Reveal } from "@/components/reveal";
import { BackgroundRing } from "@/components/background-ring";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { AppleIcon } from "@/components/apple-icon";
import {
  Phone,
  Mail,
  MessageSquare,
  Coffee,
  Calendar,
  Gift,
  Users,
  Handshake,
  Mic,
  Heart,
} from "lucide-react";

const TOUCH_TYPES = [
  { icon: Phone, label: "Call", color: "#34C759" },
  { icon: Mail, label: "Email", color: "#007AFF" },
  { icon: MessageSquare, label: "SMS", color: "#00D4FF" },
  { icon: Coffee, label: "Coffee", color: "#FF9500" },
  { icon: Calendar, label: "Meeting", color: "#5856D6" },
  { icon: Gift, label: "Gift", color: "#FF3B30" },
  { icon: Users, label: "Event", color: "#AF52DE" },
  { icon: Handshake, label: "Intro", color: "#34C759" },
  { icon: Mic, label: "Voice", color: "#00D4FF" },
  { icon: Heart, label: "Check-in", color: "#FF2D55" },
];

export function MethodologySection() {
  // Wider scroll range = slower fill (~75% slower than before)
  const { ref, progress } = useScrollProgress(0.95, -0.3);

  const touchCount = Math.round(progress * 10);

  return (
    <section
      ref={ref}
      className="relative z-20 py-28 md:py-40"
      aria-label="The Ten Touches methodology"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-tt-indigo/8 to-transparent" />

      {/* Large decorative background ring — 60% opacity, bleeding off left edge */}
      <BackgroundRing progress={progress} />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Phone screenshot + ring layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Touch register screenshot (primary) with smaller ring overlaid */}
          <Reveal>
            <div className="flex justify-center relative z-50">
              <div className="w-[260px] md:w-[300px] float-medium">
                <IPhoneMockup
                  src="/screenshots/touch-register-reminder.png"
                  alt="Ten Touches touch registration screen showing call logging, outcome rating, reminder scheduling, and action type selection"
                />
              </div>
            </div>
          </Reveal>

          {/* Section header + touch type grid */}
          <div className="text-center">
            {/* Section header — centred over the icons grid */}
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-widest text-tt-cyan mb-4">
                The Methodology
              </p>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Ten touches.{" "}
                <span className="gradient-text">One relationship.</span>
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="text-lg text-white/55 max-w-2xl mx-auto leading-relaxed mb-12">
                Research shows it takes an average of ten meaningful interactions to
                build real trust. Ten Touches tracks your progress so no relationship
                falls through the cracks.
              </p>
            </Reveal>

            <Reveal delay={1}>
              <p className="text-base font-semibold text-white mb-6">
                Every interaction counts
              </p>
              <p className="text-sm text-white/45 mb-8 max-w-md mx-auto">
                Calls, coffees, emails, events — each touch type builds momentum
                differently. Log each one, rate the outcome, and set the next
                reminder in seconds. The app tracks which ones work best for you.
              </p>
            </Reveal>

            <Reveal delay={2}>
              <div className="grid grid-cols-5 gap-4 md:gap-6 max-w-md mx-auto">
                {TOUCH_TYPES.map((touch, i) => (
                  <AppleIcon
                    key={touch.label}
                    icon={touch.icon}
                    label={touch.label}
                    color={touch.color}
                    active={i < touchCount}
                  />
                ))}
              </div>
            </Reveal>

            <Reveal delay={3}>
              <div className="mt-10 glass-card p-5 rounded-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-tt-cyan/10 flex items-center justify-center">
                    <Handshake size={16} className="text-tt-cyan" />
                  </div>
                  <span className="text-sm font-semibold text-white">Momentum builds trust</span>
                </div>
                <p className="text-sm text-white/45 leading-relaxed">
                  Each touch compounds. A call after a coffee after an email creates
                  a rhythm your clients feel. Ten Touches shows you the pattern —
                  and keeps you moving.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
