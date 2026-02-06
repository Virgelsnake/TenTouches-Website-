"use client";

import { ProgressRing } from "@/components/progress-ring";

interface BackgroundRingProps {
  /** 0–1 scroll progress driven by the parent section */
  progress: number;
}

/**
 * A large decorative progress ring positioned at the fold,
 * bleeding off the left edge of the screen.
 * 1344px diameter, 50% opacity, only ~80% visible, with white counter.
 */
export function BackgroundRing({ progress }: BackgroundRingProps) {
  const touchCount = Math.round(progress * 10);

  return (
    <div
      className="absolute left-0 top-1/2 -translate-x-[20%] -translate-y-1/2 pointer-events-none z-20 opacity-50"
      aria-hidden="true"
    >
      <ProgressRing
        progress={progress}
        size={1344}
        strokeWidth={80}
        colors={["#30CFFF", "#7B5EE0", "#B44AFF"]}
        trackOpacity={0.04}
      >
        <span className="text-[clamp(18rem,30vw,30rem)] font-bold tabular-nums text-white/30">
          {touchCount}
        </span>
      </ProgressRing>
    </div>
  );
}
