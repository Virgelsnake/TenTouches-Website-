"use client";

import { IPhoneMockup } from "@/components/iphone-mockup";
import { Reveal } from "@/components/reveal";
import { AppleIcon } from "@/components/apple-icon";
import {
  Zap,
  Filter,
  BellRing,
  Phone,
  Mail,
  MessageSquare,
  Coffee,
  Calendar,
  Linkedin,
  Twitter,
  Presentation,
} from "lucide-react";

const ACTION_FILTERS = [
  { icon: Phone, label: "Call", color: "#34C759", active: false },
  { icon: Mail, label: "Email", color: "#007AFF", active: false },
  { icon: MessageSquare, label: "SMS", color: "#00D4FF", active: true },
  { icon: Coffee, label: "Coffee", color: "#FF9500", active: false },
  { icon: Calendar, label: "Meeting", color: "#5856D6", active: false },
  { icon: Linkedin, label: "LinkedIn", color: "#0A66C2", active: false },
  { icon: Twitter, label: "X", color: "#FFFFFF", active: false },
  { icon: Presentation, label: "Presentation", color: "#AF52DE", active: false },
];

export function FeaturesSection() {
  return (
    <section
      className="relative py-28 md:py-40 overflow-hidden"
      aria-label="Smart follow-up"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-tt-slate/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Phone — left */}
          <Reveal>
            <div className="flex justify-center lg:justify-start">
              <div className="w-[260px] md:w-[300px] float-medium">
                <IPhoneMockup
                  src="/screenshots/reminders.png"
                  alt="Ten Touches reminders screen showing action-type filters and contextual follow-up cards"
                />
              </div>
            </div>
          </Reveal>

          {/* Copy — right */}
          <div>
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-widest text-tt-success mb-4">
                Intelligent Follow-Up
              </p>
            </Reveal>

            <Reveal delay={1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Do what you&apos;re{" "}
                <span className="gradient-text">ready</span> to do.
              </h2>
            </Reveal>

            <Reveal delay={2}>
              <p className="text-lg text-white/55 leading-relaxed mb-8 max-w-lg">
                Not a task list — a context-aware execution engine. Filter by
                action type, match your energy, and knock out follow-ups without
                decision fatigue. Every reminder already tells you who, why,
                what, and when.
              </p>
            </Reveal>

            {/* Action filter icons — including LinkedIn, X, Presentation */}
            <Reveal delay={2}>
              <div className="flex flex-wrap gap-4 mb-10">
                {ACTION_FILTERS.map((f) => (
                  <AppleIcon
                    key={f.label}
                    icon={f.icon}
                    label={f.label}
                    color={f.color}
                    active={f.active}
                  />
                ))}
              </div>
            </Reveal>

            <Reveal delay={3}>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-tt-success/10 flex items-center justify-center">
                    <Filter size={18} className="text-tt-success" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-white mb-1">Filter by context, not priority</p>
                    <p className="text-sm text-white/45">Got 10 minutes? Tap SMS. In the car? Tap Phone Call. At your desk? Tap Email.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-tt-cyan/10 flex items-center justify-center">
                    <Zap size={18} className="text-tt-cyan" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-white mb-1">Zero context switching</p>
                    <p className="text-sm text-white/45">Each card contains the client, the opportunity, the intent, and the deadline. No digging required.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-tt-indigo/10 flex items-center justify-center">
                    <BellRing size={18} className="text-tt-indigo" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-white mb-1">Relationship momentum</p>
                    <p className="text-sm text-white/45">Casual check-ins, coffees, and events sit alongside sales actions — because relationships aren&apos;t just deals.</p>
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
