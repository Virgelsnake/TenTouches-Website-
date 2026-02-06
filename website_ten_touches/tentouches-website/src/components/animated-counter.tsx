"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  /** Target value to count up to */
  target: number;
  /** Duration of the count animation in ms */
  duration?: number;
  /** Prefix string (e.g. "£") */
  prefix?: string;
  /** Suffix string (e.g. "%") */
  suffix?: string;
  /** Whether the counter should be running */
  isActive: boolean;
  /** Format with commas */
  formatNumber?: boolean;
  className?: string;
}

export function AnimatedCounter({
  target,
  duration = 2000,
  prefix = "",
  suffix = "",
  isActive,
  formatNumber = true,
  className = "",
}: AnimatedCounterProps) {
  const [value, setValue] = useState(0);
  const hasAnimated = useRef(false);
  const reducedMotion = useRef(false);

  // Check reduced motion preference once on mount
  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (!isActive || hasAnimated.current) return;
    hasAnimated.current = true;

    if (reducedMotion.current) {
      // Defer to next tick to avoid synchronous setState in effect
      const id = requestAnimationFrame(() => setValue(target));
      return () => cancelAnimationFrame(id);
    }

    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isActive, target, duration]);

  const formatted = formatNumber
    ? value.toLocaleString("en-GB")
    : value.toString();

  return (
    <span className={className}>
      {prefix}{formatted}{suffix}
    </span>
  );
}
