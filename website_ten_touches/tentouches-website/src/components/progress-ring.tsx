"use client";

import { useId } from "react";

interface ProgressRingProps {
  /** 0–1 progress value */
  progress: number;
  /** Diameter in px */
  size?: number;
  /** Stroke width in px */
  strokeWidth?: number;
  /** Centre label (e.g. "7/10") */
  children?: React.ReactNode;
  /** Gradient colours [start, mid?, end] — matches logo: cyan → blue → purple */
  colors?: string[];
  /** Track ring opacity (0–1). Logo uses a visible dark track. */
  trackOpacity?: number;
  className?: string;
}

export function ProgressRing({
  progress,
  size = 200,
  strokeWidth = 10,
  children,
  colors = ["#30CFFF", "#7B5EE0", "#B44AFF"],
  trackOpacity = 0.1,
  className = "",
}: ProgressRingProps) {
  const uid = useId();
  const gradientId = `ring-grad-${uid}`;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - progress);

  // Build gradient stops evenly across the colour array
  const stops = colors.map((c, i) => ({
    offset: `${(i / (colors.length - 1)) * 100}%`,
    color: c,
  }));

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="transform -rotate-90"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gradientId} x1="100%" y1="0%" x2="0%" y2="100%">
            {stops.map((s) => (
              <stop key={s.offset} offset={s.offset} stopColor={s.color} />
            ))}
          </linearGradient>
        </defs>

        {/* Track — visible dark ring matching the logo */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={`rgba(255,255,255,${trackOpacity})`}
          strokeWidth={strokeWidth}
        />

        {/* Progress arc */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.15s ease-out" }}
        />
      </svg>

      {/* Centre content */}
      {children && (
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
}
