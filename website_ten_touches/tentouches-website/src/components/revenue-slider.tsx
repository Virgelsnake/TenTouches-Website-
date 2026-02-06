"use client";

import { useEffect, useRef, useState } from "react";

const REVENUE_STEPS = [4500, 9000, 13500, 18000];
const STEP_DURATION = 1200; // ms per step

interface RevenueSliderProps {
  isActive: boolean;
  className?: string;
}

export function RevenueSlider({ isActive, className = "" }: RevenueSliderProps) {
  const [stepIndex, setStepIndex] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isActive || hasAnimated.current) return;
    hasAnimated.current = true;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setStepIndex(REVENUE_STEPS.length - 1);
      return;
    }

    let current = 0;
    const interval = setInterval(() => {
      current++;
      if (current >= REVENUE_STEPS.length - 1) {
        setStepIndex(REVENUE_STEPS.length - 1);
        clearInterval(interval);
      } else {
        setStepIndex(current);
      }
    }, STEP_DURATION);

    return () => clearInterval(interval);
  }, [isActive]);

  const progress = (stepIndex + 1) / REVENUE_STEPS.length;
  const value = REVENUE_STEPS[stepIndex];

  // Interpolate from red (#FF3B30) through amber (#FF9500) to green (#34C759)
  const getColor = (p: number) => {
    if (p <= 0.5) {
      // Red to amber
      const t = p / 0.5;
      const r = Math.round(255);
      const g = Math.round(59 + (149 - 59) * t);
      const b = Math.round(48 + (0 - 48) * t);
      return `rgb(${r},${g},${b})`;
    }
    // Amber to green
    const t = (p - 0.5) / 0.5;
    const r = Math.round(255 + (52 - 255) * t);
    const g = Math.round(149 + (199 - 149) * t);
    const b = Math.round(0 + (89 - 0) * t);
    return `rgb(${r},${g},${b})`;
  };

  const barColor = getColor(progress);

  return (
    <div className={`w-full ${className}`}>
      {/* Value display */}
      <div className="flex items-baseline justify-between mb-3">
        <span
          className="text-3xl md:text-4xl font-bold tabular-nums transition-colors duration-500"
          style={{ color: barColor }}
        >
          £{value.toLocaleString("en-GB")}
        </span>
        <span className="text-sm text-white/40">risked revenue</span>
      </div>

      {/* Slider track */}
      <div className="relative h-3 rounded-full bg-white/8 overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 rounded-full transition-all duration-700 ease-out"
          style={{
            width: `${progress * 100}%`,
            background: `linear-gradient(90deg, #FF3B30 0%, ${barColor} 100%)`,
          }}
        />
        {/* Thumb */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-2 border-white shadow-lg transition-all duration-700 ease-out"
          style={{
            left: `calc(${progress * 100}% - 10px)`,
            background: barColor,
            boxShadow: `0 0 12px ${barColor}80`,
          }}
        />
      </div>

      {/* Step markers */}
      <div className="flex justify-between mt-2">
        {REVENUE_STEPS.map((step, i) => (
          <span
            key={step}
            className={`text-xs tabular-nums transition-all duration-300 ${
              i <= stepIndex ? "text-white/60" : "text-white/20"
            }`}
          >
            £{(step / 1000).toFixed(1)}k
          </span>
        ))}
      </div>
    </div>
  );
}
